import type { ComponentDefinition } from '../types'

export const ChipDefinition: ComponentDefinition = {
  type: 'Chip',
  displayName: 'Chip',
  category: 'Action',
  description: '필터, 태그, 선택 항목을 나타내는 컴팩트한 인터랙션 요소',
  icon: 'label_important',
  props: [
    {
      name: 'variant',
      type: { kind: 'select', options: ['primary', 'secondary', 'destructive', 'outline', 'ghost'], default: 'secondary' },
      label: 'Variant',
      category: 'Component',
    },
    {
      name: 'size',
      type: { kind: 'select', options: ['xs', 'sm', 'default', 'lg'], default: 'default' },
      label: 'Size',
      category: 'Component',
    },
    {
      name: 'circle',
      type: { kind: 'boolean', default: false },
      label: 'Circle',
      category: 'Component',
    },
    {
      name: 'checked',
      type: { kind: 'boolean', default: false },
      label: 'Checked',
      category: 'Component',
    },
    {
      name: 'removable',
      type: { kind: 'boolean', default: false },
      label: 'Removable',
      category: 'Component',
    },
    {
      name: 'disabled',
      type: { kind: 'boolean', default: false },
      label: 'Disabled',
      category: 'Component',
    },
  ],
  slots: [],
  defaultNode: () => ({
    type: 'Chip',
    props: { variant: 'secondary', size: 'default' },
    textContent: 'Chip',
    children: [],
  }),
  importPath: 'doctalk-design-system',
  importNames: ['Chip'],
}
