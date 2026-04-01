import React from 'react'
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyMedia } from 'doctalk-design-system'
import { Icon } from 'doctalk-design-system'
import type { ComponentDefinition } from '../types'

export const EmptyDefinition: ComponentDefinition = {
  type: 'Empty',
  displayName: 'Empty',
  category: 'Indicators and Feedback',
  description: '콘텐츠가 없는 빈 상태를 표시하는 컴포넌트',
  icon: 'inbox',
  props: [
    { name: 'title', type: { kind: 'text', default: '데이터가 없습니다' }, label: 'Title', category: 'Component' },
    { name: 'description', type: { kind: 'text', default: '아직 등록된 항목이 없습니다.' }, label: 'Description', category: 'Component' },
    { name: 'iconName', type: { kind: 'text', default: 'inbox' }, label: 'Icon', category: 'Component' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'Empty', props: { title: '데이터가 없습니다', description: '아직 등록된 항목이 없습니다.', iconName: 'inbox' }, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['Empty', 'EmptyHeader', 'EmptyTitle', 'EmptyDescription', 'EmptyMedia', 'Icon'],
  customRenderer: (node) => {
    const { title, description, iconName } = node.props as Record<string, any>
    return React.createElement(Empty, null,
      React.createElement(EmptyHeader, null,
        React.createElement(EmptyMedia, null, React.createElement(Icon, { name: iconName || 'inbox', size: 48 })),
        React.createElement(EmptyTitle, null, title),
        React.createElement(EmptyDescription, null, description)
      )
    )
  },
}
