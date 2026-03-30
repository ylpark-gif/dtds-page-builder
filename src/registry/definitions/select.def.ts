import React from 'react'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from 'doctalk-design-system'
import type { ComponentDefinition } from '../types'

export const SelectDefinition: ComponentDefinition = {
  type: 'Select',
  displayName: 'Select',
  category: 'Selection and Input',
  description: '드롭다운 목록에서 하나의 옵션을 선택하는 컴포넌트',
  icon: 'arrow_drop_down_circle',
  props: [
    { name: 'variant', type: { kind: 'select', options: ['outline', 'underline'], default: 'outline' }, label: 'Variant', category: 'Component' },
    { name: 'size', type: { kind: 'select', options: ['sm', 'default', 'lg'], default: 'default' }, label: 'Size', category: 'Component' },
    { name: 'placeholder', type: { kind: 'text', default: '선택하세요' }, label: 'Placeholder', category: 'Component' },
    { name: 'disabled', type: { kind: 'boolean', default: false }, label: 'Disabled', category: 'Component' },
    { name: 'leadingType', type: { kind: 'select', options: ['none', 'icon', 'partner-logo'], default: 'none' }, label: 'Leading Type', category: 'Composition' },
    { name: 'trailingType', type: { kind: 'select', options: ['none', 'icon', 'badge'], default: 'none' }, label: 'Trailing Type', category: 'Composition' },
    { name: 'label', type: { kind: 'boolean', default: false }, label: 'Show Label', category: 'Composition' },
    { name: 'showDescription', type: { kind: 'boolean', default: false }, label: 'Show Description', category: 'Composition' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'Select', props: { variant: 'outline', size: 'default', placeholder: '선택하세요' }, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['Select', 'SelectTrigger', 'SelectValue', 'SelectContent', 'SelectItem'],
  customRenderer: (node) => {
    const { variant, size, placeholder, disabled } = node.props as Record<string, any>
    return React.createElement(Select, { variant, size, disabled },
      React.createElement(SelectTrigger, null,
        React.createElement(SelectValue, { placeholder: placeholder || '선택하세요' })
      ),
      React.createElement(SelectContent, null,
        React.createElement(SelectItem, { value: '1' }, '옵션 1'),
        React.createElement(SelectItem, { value: '2' }, '옵션 2'),
        React.createElement(SelectItem, { value: '3' }, '옵션 3')
      )
    )
  },
}
