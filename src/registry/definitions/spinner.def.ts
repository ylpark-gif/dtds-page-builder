import type { ComponentDefinition } from '../types'

export const SpinnerDefinition: ComponentDefinition = {
  type: 'Spinner',
  displayName: 'Spinner',
  category: 'Indicators and Feedback',
  description: '로딩 상태를 표시하는 회전 인디케이터',
  icon: 'progress_activity',
  props: [
    { name: 'size', type: { kind: 'select', options: ['sm', 'md', 'lg', 'xl'], default: 'md' }, label: 'Size', category: 'Component' },
    { name: 'withLabel', type: { kind: 'boolean', default: false }, label: 'With Label', category: 'Composition' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'Spinner', props: {}, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['Spinner'],
}
