import React from 'react'
import { PropertyEditor } from './PropertyEditor'

export function RightPanel() {
  return (
    <div className="w-[300px] min-w-[280px] border-l border-border bg-background flex flex-col h-full">
      <PropertyEditor />
    </div>
  )
}
