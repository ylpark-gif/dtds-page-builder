import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from 'doctalk-design-system'
import type { ComponentDefinition } from '../types'
import type { PageNode } from '@/schema/node'

export const CardDefinition: ComponentDefinition = {
  type: 'Card',
  displayName: 'Card',
  category: 'Content Display',
  description: '관련 콘텐츠를 그룹화하는 컨테이너',
  icon: 'crop_square',
  props: [
    { name: 'variant', type: { kind: 'select', options: ['default', 'outlined', 'muted'], default: 'default' }, label: 'Variant', category: 'Component' },
    { name: 'interactive', type: { kind: 'boolean', default: false }, label: 'Interactive', category: 'Component' },
    { name: 'title', type: { kind: 'text', default: '카드 제목' }, label: 'Title', category: 'Component' },
    { name: 'description', type: { kind: 'text', default: '카드 설명 텍스트입니다.' }, label: 'Description', category: 'Component' },
    { name: 'showFooter', type: { kind: 'boolean', default: false }, label: 'Show Footer', category: 'Component' },
    { name: 'footerText', type: { kind: 'text', default: '확인' }, label: 'Footer Button Text', category: 'Component', condition: { prop: 'showFooter' } },
  ],
  slots: [],
  defaultNode: () => ({
    type: 'Card',
    props: { variant: 'outlined', title: '카드 제목', description: '카드 설명 텍스트입니다.', showFooter: false, footerText: '확인' },
    children: [],
  }),
  importPath: 'doctalk-design-system',
  importNames: ['Card', 'CardHeader', 'CardTitle', 'CardDescription', 'CardContent', 'CardFooter'],
  customRenderer: (node) => {
    const { variant, interactive, title, description, showFooter, footerText } = node.props as Record<string, any>
    return React.createElement(
      Card,
      { variant, interactive },
      React.createElement(
        CardHeader,
        null,
        title && React.createElement(CardTitle, null, title),
        description && React.createElement(CardDescription, null, description)
      ),
      React.createElement(
        CardContent,
        null,
        React.createElement('p', { className: 'text-sm text-muted-foreground' }, '카드 콘텐츠 영역')
      ),
      showFooter &&
        React.createElement(
          CardFooter,
          null,
          React.createElement('button', { className: 'inline-flex items-center justify-center h-11 px-3 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium' }, footerText || '확인')
        )
    )
  },
}
