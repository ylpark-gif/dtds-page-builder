import React from 'react'

interface BooleanControlProps {
  label: string
  value: boolean
  onChange: (value: boolean) => void
  description?: string
}

export function BooleanControl({ label, value, onChange, description }: BooleanControlProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <span className="text-xs font-medium text-muted-foreground">{label}</span>
        {description && (
          <p className="text-[11px] text-muted-foreground/60">{description}</p>
        )}
      </div>
      <button
        onClick={() => onChange(!value)}
        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
          value ? 'bg-primary' : 'bg-input'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${
            value ? 'translate-x-[18px]' : 'translate-x-[2px]'
          }`}
        />
      </button>
    </div>
  )
}
