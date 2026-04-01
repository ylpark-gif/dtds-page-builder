import React from 'react'
import { useSelectionStore } from '@/store/selection-store'
import { useDocumentStore } from '@/store/document-store'
import { registry } from '@/registry/registry'
import type { PropDefinition } from '@/registry/types'
import { SelectControl } from './controls/SelectControl'
import { TextControl } from './controls/TextControl'
import { BooleanControl } from './controls/BooleanControl'
import { NumberControl } from './controls/NumberControl'

function shouldShowProp(prop: PropDefinition, currentProps: Record<string, unknown>): boolean {
  if (!prop.condition) return true
  const { prop: depProp, eq, neq, truthy } = prop.condition
  const value = currentProps[depProp]
  if (eq !== undefined) return value === eq
  if (neq !== undefined) return value !== neq
  if (truthy !== undefined) return truthy ? !!value : !value
  return !!value
}

function PropControl({
  prop,
  value,
  onChange,
}: {
  prop: PropDefinition
  value: unknown
  onChange: (value: unknown) => void
}) {
  switch (prop.type.kind) {
    case 'select':
      return (
        <SelectControl
          label={prop.label}
          value={(value as string) ?? prop.type.default ?? prop.type.options[0]}
          options={prop.type.options}
          onChange={onChange}
          description={prop.description}
        />
      )
    case 'text':
      return (
        <TextControl
          label={prop.label}
          value={(value as string) ?? prop.type.default ?? ''}
          onChange={onChange}
          placeholder={prop.type.placeholder}
          description={prop.description}
        />
      )
    case 'boolean':
      return (
        <BooleanControl
          label={prop.label}
          value={(value as boolean) ?? prop.type.default ?? false}
          onChange={onChange}
          description={prop.description}
        />
      )
    case 'number':
      return (
        <NumberControl
          label={prop.label}
          value={(value as number) ?? prop.type.default ?? 0}
          onChange={onChange}
          min={prop.type.min}
          max={prop.type.max}
          step={prop.type.step}
          description={prop.description}
        />
      )
    default:
      return null
  }
}

export function PropertyEditor() {
  const selectedNodeId = useSelectionStore((s) => s.selectedNodeId)
  const page = useDocumentStore((s) => s.getActivePage())
  const updateNodeProps = useDocumentStore((s) => s.updateNodeProps)
  const updateTextContent = useDocumentStore((s) => s.updateTextContent)
  const removeNode = useDocumentStore((s) => s.removeNode)
  const duplicateNode = useDocumentStore((s) => s.duplicateNode)
  const selectNode = useSelectionStore((s) => s.selectNode)

  if (!selectedNodeId) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center px-6">
        <span className="material-symbols-rounded text-[32px] text-muted-foreground/30 mb-2">
          touch_app
        </span>
        <p className="text-sm text-muted-foreground/50 font-medium">
          컴포넌트를 선택하세요
        </p>
        <p className="text-xs text-muted-foreground/40 mt-1">
          캔버스에서 컴포넌트를 클릭하면 속성을 편집할 수 있습니다
        </p>
      </div>
    )
  }

  // Find node in tree
  function findNode(root: typeof page.root, id: string): typeof page.root | null {
    if (root.id === id) return root
    for (const child of root.children) {
      const found = findNode(child, id)
      if (found) return found
    }
    return null
  }

  const node = findNode(page.root, selectedNodeId)
  if (!node) return null

  const def = registry.get(node.type)
  if (!def) return null

  const componentProps = def.props.filter((p) => p.category === 'Component')
  const compositionProps = def.props.filter((p) => p.category === 'Composition')

  return (
    <div className="h-full overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-background z-10 border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="material-symbols-rounded text-[20px] text-primary">
            {def.icon}
          </span>
          <span className="text-sm font-semibold">{def.displayName}</span>
        </div>
        <p className="text-[11px] text-muted-foreground mt-1">{def.description}</p>
      </div>

      <div className="p-4 space-y-5">
        {/* Text content */}
        {node.textContent !== undefined && (
          <TextControl
            label="텍스트"
            value={node.textContent}
            onChange={(val) => updateTextContent(node.id, val)}
            placeholder="텍스트 입력"
          />
        )}

        {/* Component props */}
        {componentProps.length > 0 && (
          <div className="space-y-3">
            <div className="text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-wider">
              Component
            </div>
            {componentProps
              .filter((p) => shouldShowProp(p, node.props))
              .map((prop) => (
                <PropControl
                  key={prop.name}
                  prop={prop}
                  value={node.props[prop.name]}
                  onChange={(value) => updateNodeProps(node.id, { [prop.name]: value })}
                />
              ))}
          </div>
        )}

        {/* Composition props */}
        {compositionProps.length > 0 && (
          <div className="space-y-3">
            <div className="text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-wider">
              Composition
            </div>
            {compositionProps
              .filter((p) => shouldShowProp(p, node.props))
              .map((prop) => (
                <PropControl
                  key={prop.name}
                  prop={prop}
                  value={node.props[prop.name]}
                  onChange={(value) => updateNodeProps(node.id, { [prop.name]: value })}
                />
              ))}
          </div>
        )}

        {/* Actions */}
        <div className="pt-3 border-t border-border space-y-2">
          <button
            onClick={() => duplicateNode(node.id)}
            className="w-full h-8 text-sm rounded-lg border border-input bg-white text-muted-foreground hover:bg-accent hover:text-foreground transition-colors flex items-center justify-center gap-1.5"
          >
            <span className="material-symbols-rounded text-[16px]">content_copy</span>
            복제
          </button>
          <button
            onClick={() => {
              removeNode(node.id)
              selectNode(null)
            }}
            className="w-full h-8 text-sm rounded-lg border border-destructive/30 bg-white text-destructive hover:bg-destructive/5 transition-colors flex items-center justify-center gap-1.5"
          >
            <span className="material-symbols-rounded text-[16px]">delete</span>
            삭제
          </button>
        </div>
      </div>
    </div>
  )
}
