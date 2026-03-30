import type { ComponentDefinition } from '../types'

export const ToggleDefinition: ComponentDefinition = {
  type: 'Toggle',
  displayName: 'Toggle',
  category: 'Action',
  description: '활성/비활성 상태를 전환하는 토글 버튼',
  icon: 'toggle_on',
  props: [
    { name: 'variant', type: { kind: 'select', options: ['default', 'outline'], default: 'default' }, label: 'Variant', category: 'Component' },
    { name: 'size', type: { kind: 'select', options: ['sm', 'default', 'lg'], default: 'default' }, label: 'Size', category: 'Component' },
    { name: 'disabled', type: { kind: 'boolean', default: false }, label: 'Disabled', category: 'Component' },
    { name: 'children', type: { kind: 'text', default: 'Toggle' }, label: 'Label', category: 'Component' },
    { name: 'showIcon', type: { kind: 'boolean', default: false }, label: 'Show Icon', category: 'Composition' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'Toggle', props: { variant: 'default', size: 'default' }, textContent: 'Toggle', children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['Toggle'],
}
