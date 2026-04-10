import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import { cn } from '@/lib/utils'
import { useDocumentStore } from '@/store/document-store'
import { useSelectionStore } from '@/store/selection-store'
import { useUIStore } from '@/store/ui-store'
import { usePlatformStore } from '@/store/platform-store'
import { getPreviewForRoute } from '@/platforms/previews'
import { CanvasNode } from './CanvasNode'
import { registerIframe, sendToIframe } from '@/lib/iframe-bridge'
import { useMigrationStore } from '@/store/migration-store'

const DOCTALK_DEV_URL = 'http://localhost:3000'
const IFRAME_NATIVE_WIDTH = 1920
const IFRAME_NATIVE_HEIGHT = 1080  // 1920×1080 viewport

function PreviewToggle({
  previewMode,
  setPreviewMode,
}: {
  previewMode: string
  setPreviewMode: (mode: 'original' | 'ds-applied') => void
}) {
  return (
    <div className="flex items-center gap-1 p-1 bg-muted rounded-lg w-fit mx-auto mb-3">
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
  )
}

export function Canvas() {
  const page = useDocumentStore((s) => s.getActivePage())
  const selectNode = useSelectionStore((s) => s.selectNode)
  const viewportWidth = useUIStore((s) => s.viewportWidth)
  const previewMode = useUIStore((s) => s.previewMode)
  const setPreviewMode = useUIStore((s) => s.setPreviewMode)
  const setSelectedIframeElement = useUIStore((s) => s.setSelectedIframeElement)
  const iframeEditMode = useUIStore((s) => s.iframeEditMode)
  const setIframeEditMode = useUIStore((s) => s.setIframeEditMode)

  const migrationStep = useMigrationStore((s) => s.step)
  const migrationScope = useMigrationStore((s) => s.scope)
  const setDragSelection = useMigrationStore((s) => s.setDragSelection)

  const activePlatformId = usePlatformStore((s) => s.activePlatformId)
  const platforms = usePlatformStore((s) => s.platforms)
  const activePlatform = platforms.find((p) => p.id === activePlatformId)

  const platformPage = activePlatform?.pages.find((pp) => pp.name === page.name)
  const PreviewComponent = platformPage && previewMode !== 'original'
    ? getPreviewForRoute(platformPage.route)
    : null

  const { setNodeRef, isOver } = useDroppable({
    id: `canvas-root-${page.root.id}`,
    data: { targetNodeId: page.root.id },
  })

  // Measure available container width for iframe scaling
  const [availableWidth, setAvailableWidth] = React.useState(
    () => Math.max(window.innerWidth - 480, 600)
  )
  const observerRef = React.useRef<ResizeObserver | null>(null)
  const containerRef = React.useCallback((node: HTMLDivElement | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect()
      observerRef.current = null
    }
    if (!node) return
    const observer = new ResizeObserver((entries) => {
      const w = entries[0].contentRect.width
      if (w > 0) setAvailableWidth(w)
    })
    observer.observe(node)
    observerRef.current = observer
  }, [])

  // Listen for postMessage from iframe bridge
  React.useEffect(() => {
    if (previewMode !== 'original') return
    const handler = (e: MessageEvent) => {
      if (e.data?.type === 'BUILDER_SELECT') {
        setSelectedIframeElement(e.data.data)
      }
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [previewMode, setSelectedIframeElement])

  // Sync edit mode with iframe
  React.useEffect(() => {
    if (previewMode !== 'original') return
    sendToIframe({ type: iframeEditMode ? 'BUILDER_EDIT_MODE_ON' : 'BUILDER_EDIT_MODE_OFF' })
  }, [iframeEditMode, previewMode])

  // Clear selection and edit mode when leaving original mode
  React.useEffect(() => {
    if (previewMode !== 'original') {
      setSelectedIframeElement(null)
      setIframeEditMode(false)
    }
  }, [previewMode, setSelectedIframeElement, setIframeEditMode])

  // ─── Migration overlay drag state ────────────────────────────
  const [dragState, setDragState] = React.useState<{
    active: boolean
    startX: number
    startY: number
    currentX: number
    currentY: number
  } | null>(null)

  // Send message when step transitions to 'analyzing'
  React.useEffect(() => {
    if (migrationStep !== 'analyzing') return
    if (migrationScope === 'full-page') {
      sendToIframe({ type: 'BUILDER_MIGRATION_ANALYZE_PAGE' })
    }
    // area-select sends on mouseup, component-select handled by iframe BUILDER_SELECT
  }, [migrationStep, migrationScope])

  const isEmpty = page.root.children.length === 0

  // 16:9 비율 기준 최소 높이 계산
  const minCanvasHeight = Math.round(viewportWidth * 9 / 16)

  // ─── 원래 버전: iframe이 컨텐츠 영역 전체를 채움 ───────────────
  if (previewMode === 'original' && platformPage) {
    const scale = availableWidth > 0 ? availableWidth / IFRAME_NATIVE_WIDTH : 1
    const iframeSrc = `${DOCTALK_DEV_URL}${platformPage.route.replace(/:([^/]+)/g, '1')}`

    return (
      <div className="flex-1 flex flex-col overflow-hidden bg-muted/30">
        <div className="flex items-center justify-center gap-3 pt-4 shrink-0">
          <PreviewToggle previewMode={previewMode} setPreviewMode={setPreviewMode} />
          <button
            onClick={() => {
              const next = !iframeEditMode
              setIframeEditMode(next)
              if (!next) setSelectedIframeElement(null)
            }}
            className={cn(
              'flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-lg border transition-all',
              iframeEditMode
                ? 'bg-amber-50 border-amber-400 text-amber-700'
                : 'bg-background border-border text-muted-foreground hover:text-foreground hover:border-primary/50'
            )}
            title="편집 모드 토글"
          >
            <span className="material-symbols-rounded text-[14px]">
              {iframeEditMode ? 'edit_off' : 'edit'}
            </span>
            {iframeEditMode ? '편집 중' : '편집 모드'}
          </button>
        </div>
        <div ref={containerRef} className="flex-1 overflow-y-auto overflow-x-hidden">
          <div
            style={{
              width: availableWidth,
              height: IFRAME_NATIVE_HEIGHT * scale,
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <iframe
              ref={(el) => registerIframe(el)}
              src={iframeSrc}
              scrolling="yes"
              style={{
                width: IFRAME_NATIVE_WIDTH,
                height: IFRAME_NATIVE_HEIGHT,
                border: 'none',
                transformOrigin: 'top left',
                transform: `scale(${scale})`,
                display: 'block',
              }}
              title="original-preview"
            />
            {/* Migration overlay – area-select: drag to select; component-select: pass through */}
            {migrationStep === 'scope-select' && migrationScope === 'area-select' && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'auto',
                  cursor: 'crosshair',
                }}
                onMouseDown={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  setDragState({
                    active: true,
                    startX: e.clientX - rect.left,
                    startY: e.clientY - rect.top,
                    currentX: e.clientX - rect.left,
                    currentY: e.clientY - rect.top,
                  })
                  e.preventDefault()
                }}
                onMouseMove={(e) => {
                  if (!dragState?.active) return
                  const rect = e.currentTarget.getBoundingClientRect()
                  setDragState((prev) =>
                    prev
                      ? { ...prev, currentX: e.clientX - rect.left, currentY: e.clientY - rect.top }
                      : prev
                  )
                }}
                onMouseUp={(e) => {
                  if (!dragState?.active) return
                  const rect = e.currentTarget.getBoundingClientRect()
                  const endX = e.clientX - rect.left
                  const endY = e.clientY - rect.top

                  // Convert overlay coordinates to iframe native coordinates
                  const toNative = (v: number) => Math.round(v / scale)
                  const x = toNative(Math.min(dragState.startX, endX))
                  const y = toNative(Math.min(dragState.startY, endY))
                  const width = toNative(Math.abs(endX - dragState.startX))
                  const height = toNative(Math.abs(endY - dragState.startY))

                  setDragSelection({
                    startX: toNative(dragState.startX),
                    startY: toNative(dragState.startY),
                    endX: toNative(endX),
                    endY: toNative(endY),
                  })

                  sendToIframe({
                    type: 'BUILDER_MIGRATION_ANALYZE_AREA',
                    data: { rect: { top: y, left: x, width, height } },
                  })

                  setDragState(null)
                }}
                onMouseLeave={() => {
                  if (dragState?.active) setDragState(null)
                }}
              >
                {/* Selection rectangle */}
                {dragState?.active && (() => {
                  const x = Math.min(dragState.startX, dragState.currentX)
                  const y = Math.min(dragState.startY, dragState.currentY)
                  const w = Math.abs(dragState.currentX - dragState.startX)
                  const h = Math.abs(dragState.currentY - dragState.startY)
                  return (
                    <div
                      style={{
                        position: 'absolute',
                        left: x,
                        top: y,
                        width: w,
                        height: h,
                        border: '2px dashed #6366f1',
                        background: 'rgba(99, 102, 241, 0.1)',
                        pointerEvents: 'none',
                      }}
                    />
                  )
                })()}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  // ─── DS 적용 / 기본: 고정 뷰포트 프레임 ────────────────────────
  return (
    <div className="flex-1 overflow-auto bg-muted/30 flex justify-center p-8">
      <div className="relative" style={{ width: viewportWidth }}>
        {platformPage && (
          <PreviewToggle previewMode={previewMode} setPreviewMode={setPreviewMode} />
        )}

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-border/50">
          <div
            ref={setNodeRef}
            style={{ minHeight: minCanvasHeight }}
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
