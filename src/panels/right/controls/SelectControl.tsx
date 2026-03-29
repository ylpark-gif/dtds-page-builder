import React from 'react'

interface SelectControlProps {
  label: string
  value: string
  options: string[]
  onChange: (value: string) => void
  description?: string
}

export function SelectControl({ label, value, options, onChange, description }: SelectControlProps) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      <select
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-8 px-2 text-sm rounded-lg border border-input bg-white outline-none focus:border-ring focus:ring-[3px] focus:ring-ring/50"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {description && (
        <p className="text-[11px] text-muted-foreground/60">{description}</p>
      )}
    </div>
  )
}
