import React from 'react'
import { Alert, AlertTitle, AlertDescription } from 'doctalk-design-system'
import type { ComponentDefinition } from '../types'

export const AlertDefinition: ComponentDefinition = {
  type: 'Alert',
  displayName: 'Alert',
  category: 'Indicators and Feedback',
  description: '사용자에게 중요한 메시지를 전달하는 알림 컴포넌트',
  icon: 'info',
  props: [
    { name: 'variant', type: { kind: 'select', options: ['info', 'success', 'warning', 'destructive'], default: 'info' }, label: 'Variant', category: 'Component' },
    { name: 'inline', type: { kind: 'boolean', default: false }, label: 'Inline', category: 'Component' },
    { name: 'title', type: { kind: 'text', default: '알림 제목' }, label: 'Title', category: 'Component' },
    { name: 'description', type: { kind: 'text', default: '알림 내용을 입력하세요.' }, label: 'Description', category: 'Component' },
    { name: 'showIcon', type: { kind: 'boolean', default: true }, label: 'Show Icon', category: 'Composition' },
    { name: 'trailingType', type: { kind: 'select', options: ['none', 'close', 'button', 'link'], default: 'none' }, label: 'Trailing Type', category: 'Composition' },
  ],
  slots: [],
  defaultNode: () => ({
    type: 'Alert',
    props: { variant: 'info', title: '알림 제목', description: '알림 내용을 입력하세요.' },
    children: [],
  }),
  importPath: 'doctalk-design-system',
  importNames: ['Alert', 'AlertTitle', 'AlertDescription'],
  customRenderer: (node) => {
    const { variant, inline, removable, title, description } = node.props as Record<string, any>
    return React.createElement(
      Alert,
      { variant, inline, removable },
      title && React.createElement(AlertTitle, null, title),
      description && React.createElement(AlertDescription, null, description)
    )
  },
}
