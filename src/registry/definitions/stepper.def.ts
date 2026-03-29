import React from 'react'
import { Stepper, StepperList, StepperItem, StepperSeparator } from 'doctalk-design-system'
import type { ComponentDefinition } from '../types'

export const StepperDefinition: ComponentDefinition = {
  type: 'Stepper',
  displayName: 'Stepper',
  category: 'Navigation',
  description: '단계별 프로세스를 시각적으로 표시하는 컴포넌트',
  icon: 'format_list_numbered',
  props: [
    { name: 'orientation', type: { kind: 'select', options: ['horizontal', 'vertical'], default: 'horizontal' }, label: 'Orientation', category: 'Component' },
    { name: 'size', type: { kind: 'select', options: ['sm', 'default', 'lg'], default: 'default' }, label: 'Size', category: 'Component' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'Stepper', props: { orientation: 'horizontal', size: 'default' }, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['Stepper', 'StepperList', 'StepperItem', 'StepperSeparator'],
  customRenderer: (node) => {
    const { orientation, size } = node.props as Record<string, any>
    return React.createElement(Stepper, { value: 2, orientation, size },
      React.createElement(StepperList, null,
        React.createElement(StepperItem, { step: 1, title: '단계 1' }),
        React.createElement(StepperSeparator, null),
        React.createElement(StepperItem, { step: 2, title: '단계 2' }),
        React.createElement(StepperSeparator, null),
        React.createElement(StepperItem, { step: 3, title: '단계 3' })
      )
    )
  },
}
