import type { ComponentDefinition } from '../types'

export const ButtonDefinition: ComponentDefinition = {
  type: 'Button',
  displayName: 'Button',
  category: 'Action',
  description: '사용자가 액션을 실행하도록 유도하는 핵심 인터랙션 요소',
  icon: 'smart_button',
  props: [
    {
      name: 'variant',
      type: { kind: 'select', options: ['primary', 'destructive', 'outline', 'secondary', 'ghost'], default: 'primary' },
      label: 'Variant',
      category: 'Component',
    },
    {
      name: 'emphasis',
      type: { kind: 'select', options: ['solid', 'subtle'], default: 'solid' },
      label: 'Emphasis',
      category: 'Component',
      condition: { prop: 'variant', eq: 'primary' },
    },
    {
      name: 'size',
      type: { kind: 'select', options: ['sm', 'default', 'lg', 'icon', 'icon-sm', 'icon-lg'], default: 'default' },
      label: 'Size',
      category: 'Component',
    },
    {
      name: 'disabled',
      type: { kind: 'boolean', default: false },
      label: 'Disabled',
      category: 'Component',
    },
    {
      name: 'loading',
      type: { kind: 'boolean', default: false },
      label: 'Loading',
      category: 'Component',
    },
  ],
  slots: [],
  defaultNode: () => ({
    type: 'Button',
    props: { variant: 'primary', emphasis: 'solid', size: 'default' },
    textContent: '버튼',
    children: [],
  }),
  importPath: 'doctalk-design-system',
  importNames: ['Button'],
}
