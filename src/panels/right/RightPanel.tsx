import React from 'react'
import { PropertyEditor } from './PropertyEditor'

export function RightPanel({ width }: { width?: number }) {
  return (
    <div
      className="min-w-[160px] border-l border-border bg-background flex flex-col h-full"
      style={width !== undefined ? { width } : { width: 300 }}
    >
      <PropertyEditor />
    </div>
  )
}
