import React from 'react'
import { PageTree } from './PageTree'
import { ComponentLibrary } from './ComponentLibrary'
import { PlatformSelector } from './PlatformSelector'

export function LeftPanel({ width }: { width?: number }) {
  return (
    <div
      className="min-w-[160px] border-r border-border bg-background flex flex-col h-full"
      style={width !== undefined ? { width } : { width: 260 }}
    >
      <PlatformSelector />
      <PageTree />
      <div className="px-3 py-2 border-b border-border">
        <span className="text-xs font-semibold text-muted-foreground">Components</span>
      </div>
      <ComponentLibrary />
    </div>
  )
}
