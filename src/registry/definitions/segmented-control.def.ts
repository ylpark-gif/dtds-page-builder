import React from 'react'
import type { ComponentDefinition } from '../types'

function previewCard(label: string, icon: string, description?: string) {
  return React.createElement('div', { className: 'rounded-xl border border-dashed border-border p-6 flex flex-col items-center gap-2 bg-muted/30' },
    React.createElement('span', { className: 'material-symbols-rounded text-[32px] text-muted-foreground/40' }, icon),
    React.createElement('span', { className: 'text-xs font-medium text-muted-foreground' }, label),
    description && React.createElement('span', { className: 'text-[10px] text-muted-foreground/50' }, description)
  )
}

export const SegmentedControlDefinition: ComponentDefinition = {
  type: 'SegmentedControl',
  displayName: 'Segmented Control',
  category: 'Navigation',
  description: '상호 배타적인 옵션 간 전환하는 세그먼트 컨트롤',
  icon: 'view_column',
  props: [
    { name: 'size', type: { kind: 'select', options: ['sm', 'default', 'lg'], default: 'default' }, label: 'Size', category: 'Component' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'SegmentedControl', props: { size: 'default' }, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['SegmentedControl', 'SegmentedControlList', 'SegmentedControlItem'],
  customRenderer: () => previewCard('SegmentedControl', 'view_column', '옵션 1 | 옵션 2 | 옵션 3'),
}
