import type { ComponentDefinition } from '../types'

export const SpinnerDefinition: ComponentDefinition = {
  type: 'Spinner',
  displayName: 'Spinner',
  category: 'Indicators and Feedback',
  description: '로딩 상태를 표시하는 회전 인디케이터',
  icon: 'progress_activity',
  props: [],
  slots: [],
  defaultNode: () => ({ type: 'Spinner', props: {}, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['Spinner'],
}
