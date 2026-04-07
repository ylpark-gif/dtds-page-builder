import React from 'react'
import { useSelectionStore } from '@/store/selection-store'
import { useDocumentStore } from '@/store/document-store'
import { useUIStore } from '@/store/ui-store'
import { registry } from '@/registry/registry'
import type { PropDefinition } from '@/registry/types'
import { SelectControl } from './controls/SelectControl'
import { TextControl } from './controls/TextControl'
import { BooleanControl } from './controls/BooleanControl'
import { NumberControl } from './controls/NumberControl'
import { sendToIframe } from '@/lib/iframe-bridge'
import { matchTypo, TYPO_MIXINS } from '@/lib/typography-mixins'
import { matchColorToken, COLOR_TOKENS, COLOR_TOKEN_GROUPS } from '@/lib/color-tokens'
import type { ColorToken } from '@/lib/color-tokens'
import { DOCTALK_COMPONENTS, DOCTALK_COMPONENT_CATEGORIES, findComponentByName } from '@/lib/doctalk-components'

/** Find tokens matching a color value — handles both rgb(...) and var(--...) expressions */
function resolveColorTokens(value: string): ColorToken[] {
  if (!value) return []
  // Already a var() expression — match by varExpr
  if (value.startsWith('var(')) {
    return COLOR_TOKENS.filter((t) => t.varExpr === value)
  }
  return matchColorToken(value)
}

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

// ─── Component swap dropdown ─────────────────────────────────────────────────
function ComponentSwapDropdown({ currentName }: { currentName: string }) {
  const [swappedTo, setSwappedTo] = React.useState<string | null>(null)

  React.useEffect(() => {
    const handler = (ev: MessageEvent) => {
      if (ev.data?.type === 'BUILDER_SWAP_DONE') setSwappedTo(ev.data.componentName)
      if (ev.data?.type === 'BUILDER_SWAP_ERROR') console.warn('[swap]', ev.data.message)
      if (ev.data?.type === 'BUILDER_SWAP_RESTORE') setSwappedTo(null)
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [])

  // Reset when current component changes (new element selected)
  React.useEffect(() => { setSwappedTo(null) }, [currentName])

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <div className="text-[10px] text-muted-foreground/50 uppercase tracking-wider">컴포넌트 교체</div>
        {swappedTo && (
          <button
            type="button"
            onClick={() => sendToIframe({ type: 'BUILDER_SWAP_RESTORE' })}
            className="text-[9px] text-orange-500 hover:text-orange-600 underline"
          >
            원복
          </button>
        )}
      </div>
      {swappedTo && (
        <div className="text-[10px] bg-amber-50 text-amber-700 px-2 py-1 rounded border border-amber-100 font-mono">
          → {swappedTo}
        </div>
      )}
      <select
        className="w-full h-7 text-[11px] px-2 rounded border border-input bg-background font-mono cursor-pointer"
        defaultValue=""
        onChange={(e) => {
          if (!e.target.value) return
          sendToIframe({ type: 'BUILDER_SWAP_COMPONENT', componentName: e.target.value })
          e.target.value = ''
        }}
      >
        <option value="" disabled>교체할 컴포넌트 선택...</option>
        {DOCTALK_COMPONENT_CATEGORIES.map((cat) => {
          const items = DOCTALK_COMPONENTS.filter((c) => c.category === cat.key && c.name !== currentName)
          if (items.length === 0) return null
          return (
            <optgroup key={cat.key} label={cat.label}>
              {items.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.label}{c.description ? ` — ${c.description}` : ''}
                </option>
              ))}
            </optgroup>
          )
        })}
      </select>
    </div>
  )
}

// ─── Editable style fields for iframe elements ───────────────────────────────
const STYLE_FIELDS: { key: string; label: string; type: 'color' | 'text' }[] = [
  { key: 'color', label: '글자색', type: 'color' },
  { key: 'backgroundColor', label: '배경색', type: 'color' },
  { key: 'fontSize', label: '글자 크기', type: 'text' },
  { key: 'fontWeight', label: '굵기', type: 'text' },
  { key: 'borderRadius', label: 'Border Radius', type: 'text' },
  { key: 'paddingTop', label: 'Padding Top', type: 'text' },
  { key: 'paddingRight', label: 'Padding Right', type: 'text' },
  { key: 'paddingBottom', label: 'Padding Bottom', type: 'text' },
  { key: 'paddingLeft', label: 'Padding Left', type: 'text' },
  { key: 'gap', label: 'Gap', type: 'text' },
  { key: 'border', label: 'Border', type: 'text' },
]

function IframeElementEditor() {
  const el = useUIStore((s) => s.selectedIframeElement)
  const setSelectedIframeElement = useUIStore((s) => s.setSelectedIframeElement)
  const [localStyles, setLocalStyles] = React.useState<Record<string, string>>({})
  // 컬러 토큰 탭: 'new' = DS (신버전), 'old' = Service (구버전)
  const [colorTab, setColorTab] = React.useState<'new' | 'old'>('new')

  React.useEffect(() => {
    if (el) setLocalStyles({ ...el.styles })
  }, [el])

  if (!el) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center px-6">
        <span className="material-symbols-rounded text-[32px] text-muted-foreground/30 mb-2">
          ads_click
        </span>
        <p className="text-sm text-muted-foreground/50 font-medium">화면에서 요소를 클릭하세요</p>
        <p className="text-xs text-muted-foreground/40 mt-1">
          원래 버전 화면의 요소를 클릭하면 스타일을 편집할 수 있습니다
        </p>
      </div>
    )
  }

  const applyStyle = (key: string, value: string) => {
    const updated = { ...localStyles, [key]: value }
    setLocalStyles(updated)
    sendToIframe({ type: 'BUILDER_APPLY_STYLE', styles: { [key]: value } })
    setSelectedIframeElement({ ...el, styles: updated })
  }

  return (
    <div className="h-full overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-background z-10 border-b border-border px-4 py-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="material-symbols-rounded text-[18px] text-primary shrink-0">
              code
            </span>
            <span className="text-sm font-semibold truncate font-mono">{`<${el.tagName}>`}</span>
          </div>
          <button
            onClick={() => {
              sendToIframe({ type: 'BUILDER_DESELECT' })
              setSelectedIframeElement(null)
            }}
            className="w-6 h-6 flex items-center justify-center rounded hover:bg-accent shrink-0"
          >
            <span className="material-symbols-rounded text-[14px] text-muted-foreground">close</span>
          </button>
        </div>
        {el.path && (
          <p className="text-[10px] text-muted-foreground/50 mt-1 truncate font-mono">{el.path}</p>
        )}
        {el.textContent && (
          <p className="text-[11px] text-muted-foreground mt-1 truncate">"{el.textContent}"</p>
        )}
      </div>

      {/* ── Vue Component section ── */}
      {el.vueComponent && (() => {
        const vc = el.vueComponent!
        const registered = findComponentByName(vc.name)
        return (
          <div className="px-4 pt-4 pb-3 border-b border-border space-y-2">
            <div className="text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-wider">
              Vue Component
            </div>
            {/* Current component badge */}
            <div className="flex items-center gap-2">
              <span className="material-symbols-rounded text-[14px] text-violet-500 shrink-0">widgets</span>
              <div className="min-w-0 flex-1">
                <div className="text-[12px] font-semibold text-violet-700 font-mono truncate">{vc.name}</div>
                {vc.file && (
                  <div className="text-[10px] text-muted-foreground/50 font-mono truncate">{vc.file}</div>
                )}
              </div>
            </div>
            {registered?.description && (
              <p className="text-[10px] text-muted-foreground/60">{registered.description}</p>
            )}
            {/* Swap dropdown */}
            <ComponentSwapDropdown currentName={vc.name} />
          </div>
        )
      })()}

      {/* ── Typography mixin section ── */}
      {(() => {
        const typo = matchTypo(
          localStyles.fontSize ?? '',
          localStyles.fontWeight ?? '',
          localStyles.lineHeight ?? ''
        )
        if (!typo) return null
        return (
          <div className="px-4 pt-4 pb-3 border-b border-border space-y-3">
            <div className="text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-wider">
              Typography
            </div>

            {/* Detected values */}
            <div className="flex gap-2 text-[11px] text-muted-foreground font-mono">
              <span className="bg-muted px-1.5 py-0.5 rounded">{typo.fontSize}px</span>
              <span className="bg-muted px-1.5 py-0.5 rounded">fw{typo.fontWeight}</span>
              {typo.lineHeightPx > 0 && (
                <span className="bg-muted px-1.5 py-0.5 rounded">lh {typo.lineHeightPx.toFixed(0)}px</span>
              )}
            </div>

            {/* Current mixin match */}
            {typo.current.length > 0 && (
              <div className="space-y-1">
                <div className="text-[10px] text-muted-foreground/50 uppercase tracking-wider">현재 매핑</div>
                {typo.current.slice(0, 1).map((m) => (
                  <code key={m.mixin} className="block text-[11px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-mono border border-blue-100">
                    @include {m.mixin}
                  </code>
                ))}
              </div>
            )}

            {/* Legacy match */}
            {typo.legacy.length > 0 && typo.current.length === 0 && (
              <div className="space-y-1">
                <div className="text-[10px] text-orange-500/70 uppercase tracking-wider">레거시 매핑</div>
                {typo.legacy.slice(0, 1).map((m) => (
                  <code key={m.mixin} className="block text-[11px] bg-orange-50 text-orange-700 px-2 py-0.5 rounded font-mono border border-orange-100">
                    @include {m.mixin}
                  </code>
                ))}
              </div>
            )}

            {/* Mixin picker dropdown */}
            <div className="space-y-1">
              <div className="text-[10px] text-muted-foreground/50 uppercase tracking-wider">믹스인 교체 적용</div>
              <select
                className="w-full h-7 text-[11px] px-2 rounded border border-input bg-background font-mono cursor-pointer"
                defaultValue=""
                onChange={(e) => {
                  const found = TYPO_MIXINS.find((m) => m.mixin === e.target.value)
                  if (!found) return
                  const styles: Record<string, string> = {
                    fontSize: `${found.fontSize}px`,
                    fontWeight: String(found.fontWeight),
                    ...(found.lineHeightPx ? { lineHeight: `${found.lineHeightPx}px` } : {}),
                  }
                  Object.entries(styles).forEach(([k, v]) => applyStyle(k, v))
                  e.target.value = ''
                }}
              >
                <option value="" disabled>믹스인 선택...</option>
                {(['display', 'title', 'body', 'label', 'text', 'oneline'] as const).map((cat) => {
                  const items = TYPO_MIXINS.filter((m) => m.category === cat && !m.isLegacy)
                  if (items.length === 0) return null
                  const labels: Record<string, string> = {
                    display: 'Display', title: 'Title', body: 'Body',
                    label: 'Label', text: 'Text (현재)', oneline: 'OneLine',
                  }
                  return (
                    <optgroup key={cat} label={labels[cat]}>
                      {items.map((m) => (
                        <option key={m.mixin} value={m.mixin}>
                          {m.mixin} — {m.fontSize}px / fw{m.fontWeight}
                        </option>
                      ))}
                    </optgroup>
                  )
                })}
                <optgroup label="── Legacy ──">
                  {TYPO_MIXINS.filter((m) => m.isLegacy).map((m) => (
                    <option key={m.mixin} value={m.mixin}>
                      {m.mixin} — {m.fontSize}px / fw{m.fontWeight}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>
          </div>
        )
      })()}

      <div className="p-4 space-y-3">
        <div className="text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-wider mb-2">
          Styles
        </div>
        {STYLE_FIELDS.map(({ key, label, type }) => (
          <div key={key} className={`flex gap-2 ${type === 'color' ? 'items-start' : 'items-center'}`}>
            <label className={`text-xs text-muted-foreground w-[96px] shrink-0 ${type === 'color' ? 'pt-1.5' : ''}`}>{label}</label>
            {type === 'color' ? (
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                {/* Color swatch + matched tokens row */}
                <div className="flex items-center gap-1.5">
                  <input
                    type="color"
                    value={cssColorToHex(localStyles[key] ?? '')}
                    onChange={(e) => applyStyle(key, e.target.value)}
                    className="w-7 h-7 rounded cursor-pointer border border-input p-0.5 bg-white shrink-0"
                  />
                  <div className="flex flex-wrap gap-1 min-w-0">
                    {resolveColorTokens(localStyles[key] ?? '').length > 0 ? (
                      resolveColorTokens(localStyles[key] ?? '').slice(0, 3).map((t) => (
                        <code key={t.name} className="text-[10px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded border border-emerald-100 font-mono truncate max-w-[120px]">
                          {t.label ?? t.name}
                        </code>
                      ))
                    ) : (
                      <code className="text-[10px] bg-muted text-muted-foreground px-1.5 py-0.5 rounded font-mono truncate max-w-full">
                        {localStyles[key] ?? ''}
                      </code>
                    )}
                  </div>
                </div>
                {/* 신버전/구버전 탭 */}
                <div className="flex rounded border border-input overflow-hidden text-[10px] font-medium">
                  {(['new', 'old'] as const).map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setColorTab(tab)}
                      className={`flex-1 py-0.5 transition-colors ${colorTab === tab ? 'bg-primary text-primary-foreground' : 'bg-background text-muted-foreground hover:bg-accent'}`}
                    >
                      {tab === 'new' ? '신버전 (DS)' : '구버전 (Service)'}
                    </button>
                  ))}
                </div>
                {/* Color token dropdown — filtered by tab */}
                <select
                  className="w-full h-7 text-[11px] px-2 rounded border border-input bg-background font-mono cursor-pointer"
                  value={resolveColorTokens(localStyles[key] ?? '')[0]?.varExpr ?? ''}
                  onChange={(e) => applyStyle(key, e.target.value)}
                >
                  <option value="">컬러 토큰 선택...</option>
                  {colorTab === 'new' ? (
                    <>
                      <optgroup label="DS Semantic (--ds-*)">
                        {COLOR_TOKENS.filter((t) => t.group === 'ds-semantic').map((t) => (
                          <option key={t.name} value={t.varExpr}>{t.label ?? t.name}</option>
                        ))}
                      </optgroup>
                      <optgroup label="DS Primitive (--ds-gray / --ds-emerald)">
                        {COLOR_TOKENS.filter((t) => t.group === 'ds-primitive').map((t) => (
                          <option key={t.name} value={t.varExpr}>{t.name}</option>
                        ))}
                      </optgroup>
                    </>
                  ) : (
                    <>
                      <optgroup label="Semantic ($Variables)">
                        {COLOR_TOKENS.filter((t) => t.group === 'semantic-var').map((t) => (
                          <option key={t.name} value={t.varExpr}>{t.label ?? t.name}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Service Gray">
                        {COLOR_TOKENS.filter((t) => t.group === 'service' && t.name.includes('gray')).map((t) => (
                          <option key={t.name} value={t.varExpr}>{t.name}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Service Green (dg)">
                        {COLOR_TOKENS.filter((t) => t.group === 'service' && t.name.includes('dg')).map((t) => (
                          <option key={t.name} value={t.varExpr}>{t.name}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Service Red">
                        {COLOR_TOKENS.filter((t) => t.group === 'service' && t.name.includes('red')).map((t) => (
                          <option key={t.name} value={t.varExpr}>{t.name}</option>
                        ))}
                      </optgroup>
                    </>
                  )}
                </select>
              </div>
            ) : (
              <input
                type="text"
                value={localStyles[key] ?? ''}
                onChange={(e) => applyStyle(key, e.target.value)}
                className="flex-1 h-7 text-xs px-2 rounded border border-input bg-background font-mono"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function cssColorToHex(color: string): string {
  if (!color || color === 'transparent') return '#000000'
  if (color.startsWith('#')) return color
  // rgb(r, g, b) → #rrggbb
  const m = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)
  if (m) {
    return '#' + [m[1], m[2], m[3]].map((n) => parseInt(n).toString(16).padStart(2, '0')).join('')
  }
  return '#000000'
}

export function PropertyEditor() {
  const selectedNodeId = useSelectionStore((s) => s.selectedNodeId)
  const previewMode = useUIStore((s) => s.previewMode)
  const page = useDocumentStore((s) => s.getActivePage())
  const updateNodeProps = useDocumentStore((s) => s.updateNodeProps)
  const updateTextContent = useDocumentStore((s) => s.updateTextContent)
  const removeNode = useDocumentStore((s) => s.removeNode)
  const duplicateNode = useDocumentStore((s) => s.duplicateNode)
  const selectNode = useSelectionStore((s) => s.selectNode)

  // In original mode, always show the iframe element editor
  if (previewMode === 'original') {
    return <IframeElementEditor />
  }

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
