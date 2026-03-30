import type { ComponentDefinition } from '../types'

export const InputDefinition: ComponentDefinition = {
  type: 'Input',
  displayName: 'Input',
  category: 'Selection and Input',
  description: '텍스트 기반 사용자 데이터 입력 컴포넌트',
  icon: 'text_fields',
  props: [
    {
      name: 'variant',
      type: { kind: 'select', options: ['outline', 'underline'], default: 'outline' },
      label: 'Variant',
      category: 'Component',
    },
    {
      name: 'size',
      type: { kind: 'select', options: ['sm', 'default', 'lg'], default: 'default' },
      label: 'Size',
      category: 'Component',
    },
    {
      name: 'placeholder',
      type: { kind: 'text', default: '입력하세요', placeholder: 'Placeholder 텍스트' },
      label: 'Placeholder',
      category: 'Component',
    },
    {
      name: 'type',
      type: { kind: 'select', options: ['text', 'email', 'password', 'number', 'tel', 'url'], default: 'text' },
      label: 'Type',
      category: 'Component',
    },
    {
      name: 'disabled',
      type: { kind: 'boolean', default: false },
      label: 'Disabled',
      category: 'Component',
    },
    {
      name: 'readOnly',
      type: { kind: 'boolean', default: false },
      label: 'Read Only',
      category: 'Component',
    },
    {
      name: 'clearable',
      type: { kind: 'boolean', default: true },
      label: 'Clearable',
      category: 'Component',
    },
    { name: 'leadingType', type: { kind: 'select', options: ['none', 'icon', 'text', 'dropdown'], default: 'none' }, label: 'Leading Type', category: 'Composition' },
    { name: 'trailingType', type: { kind: 'select', options: ['none', 'button', 'kbd', 'text', 'spinner'], default: 'none' }, label: 'Trailing Type', category: 'Composition' },
    { name: 'label', type: { kind: 'boolean', default: false }, label: 'Show Label', category: 'Composition' },
    { name: 'showDescription', type: { kind: 'boolean', default: false }, label: 'Show Description', category: 'Composition' },
    { name: 'showCounter', type: { kind: 'boolean', default: false }, label: 'Show Counter', category: 'Composition' },
    { name: 'draggable', type: { kind: 'boolean', default: false }, label: 'Draggable', category: 'Component' },
  ],
  slots: [],
  defaultNode: () => ({
    type: 'Input',
    props: { variant: 'outline', size: 'default', placeholder: '입력하세요' },
    children: [],
  }),
  importPath: 'doctalk-design-system',
  importNames: ['Input'],
}
