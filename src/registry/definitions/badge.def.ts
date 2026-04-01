import type { ComponentDefinition } from '../types'

export const BadgeDefinition: ComponentDefinition = {
  type: 'Badge',
  displayName: 'Badge',
  category: 'Indicators and Feedback',
  description: '상태, 카운트, 라벨 등 짧은 정보를 표시하는 인라인 요소',
  icon: 'label',
  props: [
    {
      name: 'variant',
      type: { kind: 'select', options: ['success', 'neutral', 'warning', 'destructive'], default: 'success' },
      label: 'Variant',
      category: 'Component',
    },
    {
      name: 'emphasis',
      type: { kind: 'select', options: ['solid', 'subtle', 'ghost', 'outline'], default: 'solid' },
      label: 'Emphasis',
      category: 'Component',
    },
    {
      name: 'size',
      type: { kind: 'select', options: ['sm', 'default', 'lg'], default: 'default' },
      label: 'Size',
      category: 'Component',
    },
    {
      name: 'number',
      type: { kind: 'boolean', default: false },
      label: 'Number',
      description: '숫자 뱃지 스타일 (원형)',
      category: 'Component',
    },
  ],
  slots: [],
  defaultNode: () => ({
    type: 'Badge',
    props: { variant: 'success', emphasis: 'solid', size: 'default' },
    textContent: 'Badge',
    children: [],
  }),
  importPath: 'doctalk-design-system',
  importNames: ['Badge'],
}
