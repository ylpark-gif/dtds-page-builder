import React from 'react'
import type { ComponentDefinition } from '../types'

function previewCard(label: string, icon: string, description?: string) {
  return React.createElement('div', { className: 'rounded-xl border border-dashed border-border p-6 flex flex-col items-center gap-2 bg-muted/30' },
    React.createElement('span', { className: 'material-symbols-rounded text-[32px] text-muted-foreground/40' }, icon),
    React.createElement('span', { className: 'text-xs font-medium text-muted-foreground' }, label),
    description && React.createElement('span', { className: 'text-[10px] text-muted-foreground/50' }, description)
  )
}

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
    return previewCard('BottomNavigation', 'bottom_navigation', `${title || '하단 네비게이션'} · ${buttonText || '확인'}`)
  },
}
