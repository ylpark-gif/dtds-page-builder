import React from 'react'
import {
  BottomNavigationContent,
  BottomNavigationTitle,
  BottomNavigationButton,
} from 'doctalk-design-system'
import type { ComponentDefinition } from '../types'

export const BottomNavigationDefinition: ComponentDefinition = {
  type: 'BottomNavigation',
  displayName: 'Bottom Navigation',
  category: 'Navigation',
  description: '화면 하단에 고정되는 네비게이션 바',
  icon: 'bottom_navigation',
  props: [
    { name: 'title', type: { kind: 'text', default: '하단 네비게이션' }, label: 'Title', category: 'Component' },
    { name: 'buttonText', type: { kind: 'text', default: '확인' }, label: 'Button Text', category: 'Component' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'BottomNavigation', props: { title: '하단 네비게이션', buttonText: '확인' }, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['BottomNavigation', 'BottomNavigationContent', 'BottomNavigationTitle', 'BottomNavigationButton', 'Button'],
  customRenderer: (node) => {
    const { title, buttonText } = node.props as Record<string, any>
    // Render inline (not fixed) for preview purposes
    return React.createElement(
      'div',
      {
        'data-slot': 'bottom-navigation',
        className: 'w-full bg-background border-t border-border p-4 flex items-center gap-2',
      },
      React.createElement(
        BottomNavigationContent,
        null,
        React.createElement(BottomNavigationTitle, null, title || '하단 네비게이션'),
      ),
      React.createElement(BottomNavigationButton, null, buttonText || '확인'),
    )
  },
}
