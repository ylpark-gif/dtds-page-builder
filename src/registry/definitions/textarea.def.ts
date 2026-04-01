import type { ComponentDefinition } from '../types'

export const TextareaDefinition: ComponentDefinition = {
  type: 'Textarea',
  displayName: 'Textarea',
  category: 'Selection and Input',
  description: '여러 줄의 텍스트를 입력받는 컴포넌트',
  icon: 'notes',
  props: [
    { name: 'variant', type: { kind: 'select', options: ['outline', 'underline'], default: 'outline' }, label: 'Variant', category: 'Component' },
    { name: 'placeholder', type: { kind: 'text', default: '내용을 입력하세요' }, label: 'Placeholder', category: 'Component' },
    { name: 'resizable', type: { kind: 'boolean', default: false }, label: 'Resizable', category: 'Component' },
    { name: 'disabled', type: { kind: 'boolean', default: false }, label: 'Disabled', category: 'Component' },
    { name: 'readOnly', type: { kind: 'boolean', default: false }, label: 'Read Only', category: 'Component' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'Textarea', props: { variant: 'outline', placeholder: '내용을 입력하세요' }, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['Textarea'],
}
