import React from 'react'
import { RadioGroup, RadioGroupItem } from 'doctalk-design-system'
import type { ComponentDefinition } from '../types'

export const RadioGroupDefinition: ComponentDefinition = {
  type: 'RadioGroup',
  displayName: 'RadioGroup',
  category: 'Selection and Input',
  description: '여러 옵션 중 하나를 선택하는 라디오 버튼 그룹',
  icon: 'radio_button_checked',
  props: [
    { name: 'orientation', type: { kind: 'select', options: ['vertical', 'horizontal'], default: 'vertical' }, label: 'Orientation', category: 'Component' },
    { name: 'size', type: { kind: 'select', options: ['sm', 'default'], default: 'default' }, label: 'Size', category: 'Component' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'RadioGroup', props: { orientation: 'vertical' }, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['RadioGroup', 'RadioGroupItem'],
  customRenderer: (node) => {
    const { orientation } = node.props as Record<string, any>
    return React.createElement(RadioGroup, { orientation, defaultValue: 'opt1' },
      React.createElement('div', { className: 'flex items-center gap-2' }, React.createElement(RadioGroupItem, { value: 'opt1' }), React.createElement('span', { className: 'text-sm' }, '옵션 1')),
      React.createElement('div', { className: 'flex items-center gap-2' }, React.createElement(RadioGroupItem, { value: 'opt2' }), React.createElement('span', { className: 'text-sm' }, '옵션 2')),
      React.createElement('div', { className: 'flex items-center gap-2' }, React.createElement(RadioGroupItem, { value: 'opt3' }), React.createElement('span', { className: 'text-sm' }, '옵션 3'))
    )
  },
}
