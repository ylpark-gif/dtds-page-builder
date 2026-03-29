import type { ComponentCategory } from './types'

export const categories: { key: ComponentCategory; label: string; icon: string }[] = [
  { key: 'Action', label: 'Action', icon: 'touch_app' },
  { key: 'Indicators and Feedback', label: 'Indicators & Feedback', icon: 'info' },
  { key: 'Navigation', label: 'Navigation', icon: 'menu' },
  { key: 'Selection and Input', label: 'Selection & Input', icon: 'text_fields' },
  { key: 'Content Display', label: 'Content Display', icon: 'dashboard' },
]
