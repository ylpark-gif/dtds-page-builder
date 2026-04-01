import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import { cn } from '@/lib/utils'
import { useDocumentStore } from '@/store/document-store'
import { useSelectionStore } from '@/store/selection-store'
import { useUIStore } from '@/store/ui-store'
import { usePlatformStore } from '@/store/platform-store'
import { getPreviewForRoute } from '@/platforms/previews'
import { getOriginalPreviewForRoute } from '@/platforms/previews/original'
import { CanvasNode } from './CanvasNode'

export function Canvas() {
  const page = useDocumentStore((s) => s.getActivePage())
  const selectNode = useSelectionStore((s) => s.selectNode)
  const viewportWidth = useUIStore((s) => s.viewportWidth)
  const previewMode = useUIStore((s) => s.previewMode)
  const setPreviewMode = useUIStore((s) => s.setPreviewMode)

  const activePlatformId = usePlatformStore((s) => s.activePlatformId)
  const platforms = usePlatformStore((s) => s.platforms)
  const activePlatform = platforms.find((p) => p.id === activePlatformId)

  // Find the route for current page by matching name
  const platformPage = activePlatform?.pages.find((pp) => pp.name === page.name)
  const PreviewComponent = platformPage
    ? previewMode === 'original'
      ? getOriginalPreviewForRoute(platformPage.route)
      : getPreviewForRoute(platformPage.route)
    : null

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
        {/* Preview mode toggle */}
        {platformPage && (
          <div className="flex items-center gap-1 p-1 bg-muted rounded-lg mb-3 w-fit mx-auto">
            <button
              className={cn(
                'px-3 py-1 text-xs font-medium rounded-md transition-all',
                previewMode === 'original'
                  ? 'bg-white shadow-sm text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
              onClick={() => setPreviewMode('original')}
            >
              원래 버전
            </button>
            <button
              className={cn(
                'px-3 py-1 text-xs font-medium rounded-md transition-all',
                previewMode === 'ds-applied'
                  ? 'bg-white shadow-sm text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
              onClick={() => setPreviewMode('ds-applied')}
            >
              DS 적용
            </button>
          </div>
        )}

        {/* Device frame */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-border/50">
          {/* Canvas content */}
          <div
            ref={setNodeRef}
            className={cn(
              'min-h-[500px]',
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
