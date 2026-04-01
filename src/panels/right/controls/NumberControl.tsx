import React from 'react'

interface NumberControlProps {
  label: string
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
  description?: string
}

export function NumberControl({ label, value, onChange, min, max, step, description }: NumberControlProps) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      <input
        type="number"
        value={value ?? 0}
        onChange={(e) => onChange(Number(e.target.value))}
        min={min}
        max={max}
        step={step}
        className="w-full h-8 px-2 text-sm rounded-lg border border-input bg-white outline-none focus:border-ring focus:ring-[3px] focus:ring-ring/50"
      />
      {description && (
        <p className="text-[11px] text-muted-foreground/60">{description}</p>
      )}
    </div>
  )
}
