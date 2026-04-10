import React from 'react'
import { PropertyEditor } from './PropertyEditor'
import { MigrationPanel } from './MigrationPanel'
import { useUIStore } from '../../store/ui-store'

export function RightPanel({ width }: { width?: number }) {
  const { previewMode, rightPanelTab, setRightPanelTab } = useUIStore()

  return (
    <div
      className="min-w-[160px] border-l border-border bg-background flex flex-col h-full"
      style={width !== undefined ? { width } : { width: 300 }}
    >
      {/* Tab header */}
      <div className="flex border-b border-border shrink-0">
        <button
          className={`flex-1 py-2 text-xs font-medium transition-colors ${
            rightPanelTab === 'properties'
              ? 'text-foreground border-b-2 border-primary'
              : 'text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setRightPanelTab('properties')}
        >
          속성
        </button>
        {previewMode === 'original' && (
          <button
            className={`flex-1 py-2 text-xs font-medium transition-colors ${
              rightPanelTab === 'migration'
                ? 'text-foreground border-b-2 border-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => setRightPanelTab('migration')}
          >
            DS 마이그레이션
          </button>
        )}
      </div>

      {/* Tab content */}
      <div className="flex-1 overflow-auto">
        {rightPanelTab === 'properties' || previewMode !== 'original' ? (
          <PropertyEditor />
        ) : (
          <MigrationPanel />
        )}
      </div>
    </div>
  )
}
