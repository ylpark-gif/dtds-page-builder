import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import { cn } from '@/lib/utils'
import { useDocumentStore } from '@/store/document-store'
import { useSelectionStore } from '@/store/selection-store'
import { useUIStore } from '@/store/ui-store'
import { usePlatformStore } from '@/store/platform-store'
import { getPreviewForRoute } from '@/platforms/previews'
import { CanvasNode } from './CanvasNode'

export function Canvas() {
  const page = useDocumentStore((s) => s.getActivePage())
  const selectNode = useSelectionStore((s) => s.selectNode)
  const viewportWidth = useUIStore((s) => s.viewportWidth)

  const activePlatformId = usePlatformStore((s) => s.activePlatformId)
  const platforms = usePlatformStore((s) => s.platforms)
  const activePlatform = platforms.find((p) => p.id === activePlatformId)

  // Find the route for current page by matching name
  const platformPage = activePlatform?.pages.find((pp) => pp.name === page.name)
  const PreviewComponent = platformPage
    ? getPreviewForRoute(platformPage.route)
    : null

  const { setNodeRef, isOver } = useDroppable({
    id: `canvas-root-${page.root.id}`,
    data: { targetNodeId: page.root.id },
  })

  const isEmpty = page.root.children.length === 0

  // 16:9 비율 기준 최소 높이 계산
  const minCanvasHeight = Math.round(viewportWidth * 9 / 16)

  return (
    <div className="flex-1 overflow-auto bg-muted/30 flex justify-center p-8">
      <div
        className="relative"
        style={{ width: viewportWidth }}
      >
        {/* Device frame */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-border/50">
          {/* Canvas content */}
          <div
            ref={setNodeRef}
            style={{ minHeight: minCanvasHeight }}
            className={cn(
              !PreviewComponent && 'p-4 space-y-3',
              isOver && isEmpty && !PreviewComponent && 'bg-primary/5',
            )}
            onClick={() => selectNode(null)}
          >
            {PreviewComponent ? (
              <PreviewComponent />
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
