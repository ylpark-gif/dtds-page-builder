import type { ComponentDefinition } from '../types'

export const SurfaceDefinition: ComponentDefinition = {
  type: 'Surface',
  displayName: 'Surface',
  category: 'Content Display',
  description: '콘텐츠를 감싸는 배경 컨테이너',
  icon: 'crop_square',
  props: [
    { name: 'variant', type: { kind: 'select', options: ['default', 'outlined', 'muted', 'muted-secondary'], default: 'default' }, label: 'Variant', category: 'Component' },
    { name: 'padding', type: { kind: 'select', options: ['sm', 'md', 'lg'], default: 'md' }, label: 'Padding', category: 'Component' },
    { name: 'border', type: { kind: 'boolean', default: false }, label: 'Border', category: 'Component' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'Surface', props: { variant: 'default', padding: 'md' }, textContent: 'Surface content', children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['Surface'],
}
