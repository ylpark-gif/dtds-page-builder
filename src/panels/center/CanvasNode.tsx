import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import { cn } from '@/lib/utils'
import type { PageNode } from '@/schema/node'
import { useSelectionStore } from '@/store/selection-store'
import { registry } from '@/registry/registry'
import { renderNode } from '@/registry/renderers'

export function CanvasNode({ node }: { node: PageNode }) {
  const { selectedNodeId, selectNode, hoveredNodeId, hoverNode } = useSelectionStore()
  const isSelected = selectedNodeId === node.id
  const isHovered = hoveredNodeId === node.id && !isSelected
  const def = registry.get(node.type)

  const { setNodeRef, isOver } = useDroppable({
    id: `canvas-${node.id}`,
    data: { targetNodeId: node.id },
  })

  const rendered = renderNode(node)
  if (!rendered) return null

  return (
    <div
      ref={setNodeRef}
      className={cn(
        'builder-canvas-node relative',
        isSelected && 'selected',
        isHovered && 'hovered',
        isOver && 'builder-drop-inside'
      )}
      onClick={(e) => {
        e.stopPropagation()
        selectNode(node.id)
      }}
      onMouseEnter={() => hoverNode(node.id)}
      onMouseLeave={() => hoverNode(null)}
    >
      {/* Selection label */}
      {isSelected && def && (
        <div className="absolute -top-6 left-0 px-1.5 py-0.5 bg-primary text-primary-foreground text-[10px] font-medium rounded z-50 whitespace-nowrap">
          {def.displayName}
        </div>
      )}

      {rendered}
    </div>
  )
}
