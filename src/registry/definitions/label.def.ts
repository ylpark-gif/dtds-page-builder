import type { ComponentDefinition } from '../types'

export const LabelDefinition: ComponentDefinition = {
  type: 'Label',
  displayName: 'Label',
  category: 'Indicators and Feedback',
  description: '폼 요소에 대한 설명을 제공하는 라벨',
  icon: 'label',
  props: [
    { name: 'size', type: { kind: 'select', options: ['sm', 'default'], default: 'default' }, label: 'Size', category: 'Component' },
    { name: 'weight', type: { kind: 'select', options: ['medium', 'regular'], default: 'medium' }, label: 'Weight', category: 'Component' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'Label', props: { size: 'default', weight: 'medium' }, textContent: '라벨', children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['Label'],
}
