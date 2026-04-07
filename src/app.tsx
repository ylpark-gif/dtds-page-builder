import React, { useState, useCallback, useRef } from 'react'
import { useDocumentStore } from '@/store/document-store'
import { useUIStore } from '@/store/ui-store'
import { BuilderDndProvider } from '@/dnd/DndProvider'
import { LeftPanel } from '@/panels/left/LeftPanel'
import { CenterPanel } from '@/panels/center/CenterPanel'
import { RightPanel } from '@/panels/right/RightPanel'
import { ExportModal } from '@/panels/center/ExportModal'
import { useKeyboardShortcuts } from '@/hooks/use-keyboard-shortcuts'

const viewportPresets = [
  { label: 'Mobile', width: 375, icon: 'phone_iphone' },
  { label: 'Tablet', width: 768, icon: 'tablet_mac' },
  { label: 'Desktop', width: 1280, icon: 'desktop_windows' },
  { label: 'FHD', width: 1920, icon: 'monitor' },
]

function TopToolbar({ onExport }: { onExport: () => void }) {
  const { undo, redo, past, future } = useDocumentStore()
  const { viewportWidth, setViewportWidth } = useUIStore()
  const page = useDocumentStore((s) => s.getActivePage())

  return (
    <div className="h-12 border-b border-border bg-background flex items-center justify-between px-4 shrink-0">
      {/* Left: Logo & Project name */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-rounded text-[20px] text-primary">dashboard_customize</span>
          <span className="text-sm font-bold text-foreground">dtds Builder</span>
        </div>
        <span className="text-xs text-muted-foreground/50">|</span>
        <span className="text-xs text-muted-foreground font-medium">{page.name}</span>
      </div>

      {/* Center: Viewport presets */}
      <div className="flex items-center gap-1 bg-muted rounded-lg p-0.5">
        {viewportPresets.map((preset) => (
          <button
            key={preset.width}
            onClick={() => setViewportWidth(preset.width)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
              viewportWidth === preset.width
                ? 'bg-white text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <span className="material-symbols-rounded text-[14px]">{preset.icon}</span>
            {preset.label}
          </button>
        ))}
      </div>

      {/* Right: Undo/Redo & Export */}
      <div className="flex items-center gap-1">
        <button
          onClick={undo}
          disabled={past.length === 0}
          className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:bg-accent disabled:opacity-30 transition-colors"
          title="실행 취소 (Cmd+Z)"
        >
          <span className="material-symbols-rounded text-[18px]">undo</span>
        </button>
        <button
          onClick={redo}
          disabled={future.length === 0}
          className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:bg-accent disabled:opacity-30 transition-colors"
          title="다시 실행 (Cmd+Shift+Z)"
        >
          <span className="material-symbols-rounded text-[18px]">redo</span>
        </button>
        <span className="w-px h-5 bg-border mx-1" />
        <button
          onClick={onExport}
          className="h-8 px-3 text-xs font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-1.5"
        >
          <span className="material-symbols-rounded text-[16px]">code</span>
          Export
        </button>
      </div>
    </div>
  )
}

function ResizeHandle({
  onDrag,
  collapsed,
  onToggle,
  collapseIcon,
  expandIcon,
}: {
  onDrag: (dx: number) => void
  collapsed: boolean
  onToggle: () => void
  collapseIcon: string
  expandIcon: string
}) {
  const dragging = useRef(false)
  const lastX = useRef(0)
  const didDrag = useRef(false)

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (collapsed) return
    e.preventDefault()
    dragging.current = true
    didDrag.current = false
    lastX.current = e.clientX

    const onMouseMove = (ev: MouseEvent) => {
      if (!dragging.current) return
      const dx = ev.clientX - lastX.current
      if (Math.abs(dx) > 2) didDrag.current = true
      lastX.current = ev.clientX
      onDrag(dx)
    }
    const onMouseUp = () => {
      dragging.current = false
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }, [onDrag, collapsed])

  return (
    <div
      className="relative shrink-0 flex items-center justify-center group select-none"
      style={{ width: collapsed ? 12 : 4, zIndex: 10 }}
    >
      {/* drag bar (only when expanded) */}
      {!collapsed && (
        <div
          onMouseDown={onMouseDown}
          className="absolute inset-0 cursor-col-resize bg-border group-hover:bg-primary/30 transition-colors"
        />
      )}
      {/* collapsed strip */}
      {collapsed && (
        <div className="absolute inset-0 bg-muted border-x border-border" />
      )}
      {/* toggle button */}
      <button
        onClick={onToggle}
        className="relative z-10 w-4 h-8 flex items-center justify-center rounded bg-background border border-border shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent"
        title={collapsed ? '패널 열기' : '패널 닫기'}
      >
        <span className="material-symbols-rounded text-[12px] text-muted-foreground">
          {collapsed ? expandIcon : collapseIcon}
        </span>
      </button>
    </div>
  )
}

export function App() {
  const [exportOpen, setExportOpen] = useState(false)
  const [leftWidth, setLeftWidth] = useState(260)
  const [rightWidth, setRightWidth] = useState(300)
  const [leftCollapsed, setLeftCollapsed] = useState(false)
  const [rightCollapsed, setRightCollapsed] = useState(false)
  useKeyboardShortcuts()

  const onDragLeft = useCallback((dx: number) => {
    setLeftWidth((w) => Math.max(160, Math.min(480, w + dx)))
  }, [])

  const onDragRight = useCallback((dx: number) => {
    setRightWidth((w) => Math.max(160, Math.min(480, w - dx)))
  }, [])

  return (
    <BuilderDndProvider>
      <div className="h-screen flex flex-col bg-background text-foreground">
        <TopToolbar onExport={() => setExportOpen(true)} />
        <div className="flex-1 flex overflow-hidden">
          {!leftCollapsed && <LeftPanel width={leftWidth} />}
          <ResizeHandle
            onDrag={onDragLeft}
            collapsed={leftCollapsed}
            onToggle={() => setLeftCollapsed((v) => !v)}
            collapseIcon="chevron_left"
            expandIcon="chevron_right"
          />
          <CenterPanel />
          <ResizeHandle
            onDrag={onDragRight}
            collapsed={rightCollapsed}
            onToggle={() => setRightCollapsed((v) => !v)}
            collapseIcon="chevron_right"
            expandIcon="chevron_left"
          />
          {!rightCollapsed && <RightPanel width={rightWidth} />}
        </div>
      </div>
      <ExportModal open={exportOpen} onClose={() => setExportOpen(false)} />
    </BuilderDndProvider>
  )
}
