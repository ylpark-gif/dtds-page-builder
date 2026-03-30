import type { ComponentDefinition } from '../types'

export const ProgressDefinition: ComponentDefinition = {
  type: 'Progress',
  displayName: 'Progress',
  category: 'Indicators and Feedback',
  description: '작업 진행률을 시각적으로 표시하는 바',
  icon: 'linear_scale',
  props: [
    { name: 'value', type: { kind: 'number', default: 60, min: 0, max: 100 }, label: 'Value (%)', category: 'Component' },
    { name: 'width', type: { kind: 'select', options: ['sm', 'md', 'lg'], default: 'md' }, label: 'Width', category: 'Component' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'Progress', props: { value: 60 }, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['Progress'],
}
