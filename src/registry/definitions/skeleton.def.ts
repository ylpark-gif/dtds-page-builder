import type { ComponentDefinition } from '../types'

export const SkeletonDefinition: ComponentDefinition = {
  type: 'Skeleton',
  displayName: 'Skeleton',
  category: 'Indicators and Feedback',
  description: '콘텐츠 로딩 중 표시되는 플레이스홀더',
  icon: 'rectangle',
  props: [],
  slots: [],
  defaultNode: () => ({ type: 'Skeleton', props: {}, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['Skeleton'],
}
