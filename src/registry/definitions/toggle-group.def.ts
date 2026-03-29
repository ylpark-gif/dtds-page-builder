import React from 'react'
import { ToggleGroup, ToggleGroupItem } from 'doctalk-design-system'
import type { ComponentDefinition } from '../types'

export const ToggleGroupDefinition: ComponentDefinition = {
  type: 'ToggleGroup',
  displayName: 'ToggleGroup',
  category: 'Action',
  description: '여러 옵션 중 하나 또는 여러 개를 선택하는 토글 그룹',
  icon: 'view_column',
  props: [
    { name: 'variant', type: { kind: 'select', options: ['default', 'outline'], default: 'default' }, label: 'Variant', category: 'Component' },
    { name: 'size', type: { kind: 'select', options: ['sm', 'default', 'lg'], default: 'default' }, label: 'Size', category: 'Component' },
    { name: 'type', type: { kind: 'select', options: ['single', 'multiple'], default: 'single' }, label: 'Type', category: 'Component' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'ToggleGroup', props: { variant: 'default', size: 'default', type: 'single' }, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['ToggleGroup', 'ToggleGroupItem'],
  customRenderer: (node) => {
    const { variant, size, type: groupType } = node.props as Record<string, any>
    return React.createElement(ToggleGroup as any, { type: groupType || 'single', variant, size },
      React.createElement(ToggleGroupItem, { value: 'a' } as any, 'A'),
      React.createElement(ToggleGroupItem, { value: 'b' } as any, 'B'),
      React.createElement(ToggleGroupItem, { value: 'c' } as any, 'C')
    )
  },
}
