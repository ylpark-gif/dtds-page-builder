import React from 'react'
import { TopNavigation, TopNavigationLeft, TopNavigationRight, TopNavigationLogo, TopNavigationNav, TopNavigationNavLink } from 'doctalk-design-system'
import type { ComponentDefinition } from '../types'

export const TopNavigationDefinition: ComponentDefinition = {
  type: 'TopNavigation',
  displayName: 'Top Navigation',
  category: 'Navigation',
  description: '화면 상단의 네비게이션 바',
  icon: 'web',
  props: [
    { name: 'logoText', type: { kind: 'text', default: 'Logo' }, label: 'Logo Text', category: 'Component' },
    { name: 'navItems', type: { kind: 'number', default: 3, min: 0, max: 6 }, label: 'Nav Items', category: 'Composition' },
    { name: 'navPosition', type: { kind: 'select', options: ['left', 'right'], default: 'left' }, label: 'Nav Position', category: 'Component' },
    { name: 'showSearch', type: { kind: 'boolean', default: false }, label: 'Show Search', category: 'Composition' },
    { name: 'showActions', type: { kind: 'boolean', default: false }, label: 'Show Actions', category: 'Composition' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'TopNavigation', props: { logoText: 'Logo' }, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['TopNavigation', 'TopNavigationLeft', 'TopNavigationRight', 'TopNavigationLogo', 'TopNavigationNav', 'TopNavigationNavLink'],
  customRenderer: (node) => {
    const { logoText } = node.props as Record<string, any>
    return React.createElement(TopNavigation, null,
      React.createElement(TopNavigationLeft, null,
        React.createElement(TopNavigationLogo, null, logoText || 'Logo'),
        React.createElement(TopNavigationNav, null,
          React.createElement(TopNavigationNavLink, { active: true }, '메뉴 1'),
          React.createElement(TopNavigationNavLink, null, '메뉴 2'),
          React.createElement(TopNavigationNavLink, null, '메뉴 3')
        )
      )
    )
  },
}
