import type { ComponentDefinition } from '../types'

export const KbdDefinition: ComponentDefinition = {
  type: 'Kbd',
  displayName: 'Kbd',
  category: 'Indicators and Feedback',
  description: '키보드 단축키를 표시하는 컴포넌트',
  icon: 'keyboard',
  props: [
    { name: 'children', type: { kind: 'text', default: '⌘K' }, label: 'Label', category: 'Component' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'Kbd', props: {}, textContent: '⌘K', children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['Kbd'],
}
