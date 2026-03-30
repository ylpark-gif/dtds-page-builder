import type { ComponentDefinition } from '../types'

export const SeparatorDefinition: ComponentDefinition = {
  type: 'Separator',
  displayName: 'Separator',
  category: 'Content Display',
  description: '콘텐츠 사이의 시각적 구분선',
  icon: 'horizontal_rule',
  props: [
    {
      name: 'orientation',
      type: { kind: 'select', options: ['horizontal', 'vertical'], default: 'horizontal' },
      label: 'Orientation',
      category: 'Component',
    },
    { name: 'decorative', type: { kind: 'boolean', default: true }, label: 'Decorative', category: 'Component' },
  ],
  slots: [],
  defaultNode: () => ({
    type: 'Separator',
    props: { orientation: 'horizontal' },
    children: [],
  }),
  importPath: 'doctalk-design-system',
  importNames: ['Separator'],
}
