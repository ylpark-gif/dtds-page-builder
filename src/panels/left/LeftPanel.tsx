import React from 'react'
import { PageTree } from './PageTree'
import { ComponentLibrary } from './ComponentLibrary'

export function LeftPanel() {
  return (
    <div className="w-[260px] min-w-[240px] border-r border-border bg-background flex flex-col h-full">
      <PageTree />
      <div className="px-3 py-2 border-b border-border">
        <span className="text-xs font-semibold text-muted-foreground">Components</span>
      </div>
      <ComponentLibrary />
    </div>
  )
}
