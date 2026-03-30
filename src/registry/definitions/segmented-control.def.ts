import React from 'react'
import { SegmentedControl, SegmentedControlList, SegmentedControlItem } from 'doctalk-design-system'
import type { ComponentDefinition } from '../types'

export const SegmentedControlDefinition: ComponentDefinition = {
  type: 'SegmentedControl',
  displayName: 'Segmented Control',
  category: 'Navigation',
  description: '상호 배타적인 옵션 간 전환하는 세그먼트 컨트롤',
  icon: 'view_column',
  props: [
    { name: 'size', type: { kind: 'select', options: ['sm', 'default', 'lg'], default: 'default' }, label: 'Size', category: 'Component' },
    { name: 'iconOnly', type: { kind: 'boolean', default: false }, label: 'Icon Only', category: 'Component' },
    { name: 'segmentCount', type: { kind: 'select', options: ['2', '3', '4', '5'], default: '3' }, label: 'Segment Count', category: 'Composition' },
    { name: 'showIcon', type: { kind: 'boolean', default: false }, label: 'Show Icon', category: 'Composition' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'SegmentedControl', props: { size: 'default' }, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['SegmentedControl', 'SegmentedControlList', 'SegmentedControlItem'],
  customRenderer: (node) => {
    const { size } = node.props as Record<string, any>
    return React.createElement(SegmentedControl, { defaultValue: 'tab1', size },
      React.createElement(SegmentedControlList, null,
        React.createElement(SegmentedControlItem, { value: 'tab1' }, '옵션 1'),
        React.createElement(SegmentedControlItem, { value: 'tab2' }, '옵션 2'),
        React.createElement(SegmentedControlItem, { value: 'tab3' }, '옵션 3'),
      )
    )
  },
}
