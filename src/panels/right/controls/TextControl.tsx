import React from 'react'

interface TextControlProps {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  description?: string
}

export function TextControl({ label, value, onChange, placeholder, description }: TextControlProps) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      <input
        type="text"
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-8 px-2 text-sm rounded-lg border border-input bg-white placeholder:text-muted-foreground/50 outline-none focus:border-ring focus:ring-[3px] focus:ring-ring/50"
      />
      {description && (
        <p className="text-[11px] text-muted-foreground/60">{description}</p>
      )}
    </div>
  )
}
