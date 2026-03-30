import React from 'react'
import { Item, ItemContent, ItemTitle, ItemDescription } from 'doctalk-design-system'
import type { ComponentDefinition } from '../types'

export const ItemDefinition: ComponentDefinition = {
  type: 'Item',
  displayName: 'Item',
  category: 'Content Display',
  description: '리스트 항목을 표시하는 컴포넌트',
  icon: 'list_alt',
  props: [
    { name: 'variant', type: { kind: 'select', options: ['default', 'outline', 'muted'], default: 'default' }, label: 'Variant', category: 'Component' },
    { name: 'density', type: { kind: 'select', options: ['default', 'compact'], default: 'default' }, label: 'Density', category: 'Component' },
    { name: 'interactive', type: { kind: 'boolean', default: false }, label: 'Interactive', category: 'Component' },
    { name: 'title', type: { kind: 'text', default: '항목 제목' }, label: 'Title', category: 'Component' },
    { name: 'description', type: { kind: 'text', default: '항목 설명 텍스트입니다.' }, label: 'Description', category: 'Component' },
    { name: 'showAsset', type: { kind: 'boolean', default: false }, label: 'Show Asset', category: 'Composition' },
    { name: 'showTrailing', type: { kind: 'boolean', default: false }, label: 'Show Trailing', category: 'Composition' },
    { name: 'trailing', type: { kind: 'select', options: ['badge', 'button', 'menu'], default: 'badge' }, label: 'Trailing Type', category: 'Composition', condition: { prop: 'showTrailing', truthy: true } },
  ],
  slots: [],
  defaultNode: () => ({ type: 'Item', props: { variant: 'default', title: '항목 제목', description: '항목 설명 텍스트입니다.' }, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['Item', 'ItemContent', 'ItemTitle', 'ItemDescription'],
  customRenderer: (node) => {
    const { variant, density, interactive, title, description } = node.props as Record<string, any>
    return React.createElement(Item, { variant, density, interactive },
      React.createElement(ItemContent, null,
        title && React.createElement(ItemTitle, null, title),
        description && React.createElement(ItemDescription, null, description)
      )
    )
  },
}
