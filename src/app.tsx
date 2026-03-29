import React, { useState } from 'react'
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

export function App() {
  const [exportOpen, setExportOpen] = useState(false)
  useKeyboardShortcuts()

  return (
    <BuilderDndProvider>
      <div className="h-screen flex flex-col bg-background text-foreground">
        <TopToolbar onExport={() => setExportOpen(true)} />
        <div className="flex-1 flex overflow-hidden">
          <LeftPanel />
          <CenterPanel />
          <RightPanel />
        </div>
      </div>
      <ExportModal open={exportOpen} onClose={() => setExportOpen(false)} />
    </BuilderDndProvider>
  )
}
