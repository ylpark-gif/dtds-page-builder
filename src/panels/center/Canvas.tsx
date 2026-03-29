import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import { cn } from '@/lib/utils'
import { useDocumentStore } from '@/store/document-store'
import { useSelectionStore } from '@/store/selection-store'
import { useUIStore } from '@/store/ui-store'
import { CanvasNode } from './CanvasNode'

export function Canvas() {
  const page = useDocumentStore((s) => s.getActivePage())
  const selectNode = useSelectionStore((s) => s.selectNode)
  const viewportWidth = useUIStore((s) => s.viewportWidth)

  const { setNodeRef, isOver } = useDroppable({
    id: `canvas-root-${page.root.id}`,
    data: { targetNodeId: page.root.id },
  })

  const isEmpty = page.root.children.length === 0

  return (
    <div className="flex-1 overflow-auto bg-muted/30 flex justify-center p-8">
      <div
        className="relative"
        style={{ width: viewportWidth }}
      >
        {/* Device frame */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-border/50">
          {/* Status bar mockup */}
          <div className="h-8 bg-white flex items-center justify-between px-4">
            <span className="text-[11px] font-semibold text-foreground">9:41</span>
            <div className="flex items-center gap-1">
              <span className="material-symbols-rounded text-[14px]">signal_cellular_alt</span>
              <span className="material-symbols-rounded text-[14px]">wifi</span>
              <span className="material-symbols-rounded text-[14px]">battery_full</span>
            </div>
          </div>

          {/* Canvas content */}
          <div
            ref={setNodeRef}
            className={cn(
              'min-h-[500px] p-4 space-y-3',
              isOver && isEmpty && 'bg-primary/5',
            )}
            onClick={() => selectNode(null)}
          >
            {page.root.children.map((child) => (
              <CanvasNode key={child.id} node={child} />
            ))}

            {isEmpty && (
              <div
                className={cn(
                  'flex flex-col items-center justify-center py-20 border-2 border-dashed rounded-xl transition-colors',
                  isOver ? 'border-primary bg-primary/5' : 'border-border/50'
                )}
              >
                <span className="material-symbols-rounded text-[40px] text-muted-foreground/40 mb-2">
                  add_circle
                </span>
                <p className="text-sm text-muted-foreground/60 font-medium">
                  컴포넌트를 드래그하세요
                </p>
                <p className="text-xs text-muted-foreground/40 mt-1">
                  왼쪽 패널에서 컴포넌트를 끌어다 놓으세요
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
