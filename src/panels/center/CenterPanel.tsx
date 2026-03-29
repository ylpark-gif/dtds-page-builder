import React from 'react'
import { Canvas } from './Canvas'

export function CenterPanel() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <Canvas />
    </div>
  )
}
