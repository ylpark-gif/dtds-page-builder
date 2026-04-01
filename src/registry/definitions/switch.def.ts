import type { ComponentDefinition } from '../types'

export const SwitchDefinition: ComponentDefinition = {
  type: 'Switch',
  displayName: 'Switch',
  category: 'Selection and Input',
  description: '설정 항목의 On/Off 상태를 전환하는 스위치',
  icon: 'toggle_on',
  props: [
    { name: 'size', type: { kind: 'select', options: ['sm', 'default'], default: 'default' }, label: 'Size', category: 'Component' },
    { name: 'disabled', type: { kind: 'boolean', default: false }, label: 'Disabled', category: 'Component' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'Switch', props: { size: 'default' }, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['Switch'],
}
