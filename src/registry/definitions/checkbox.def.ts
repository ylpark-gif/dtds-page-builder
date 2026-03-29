import type { ComponentDefinition } from '../types'

export const CheckboxDefinition: ComponentDefinition = {
  type: 'Checkbox',
  displayName: 'Checkbox',
  category: 'Selection and Input',
  description: '하나 이상의 항목을 선택하는 체크박스',
  icon: 'check_box',
  props: [
    { name: 'size', type: { kind: 'select', options: ['sm', 'default'], default: 'default' }, label: 'Size', category: 'Component' },
    { name: 'disabled', type: { kind: 'boolean', default: false }, label: 'Disabled', category: 'Component' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'Checkbox', props: { size: 'default' }, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['Checkbox'],
}
