import React from 'react'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from 'doctalk-design-system'
import type { ComponentDefinition } from '../types'

export const DialogDefinition: ComponentDefinition = {
  type: 'Dialog',
  displayName: 'Dialog',
  category: 'Content Display',
  description: '사용자와 상호작용하는 모달 다이얼로그',
  icon: 'open_in_new',
  props: [
    { name: 'variant', type: { kind: 'select', options: ['info', 'destructive'], default: 'info' }, label: 'Variant', category: 'Component' },
    { name: 'size', type: { kind: 'select', options: ['sm', 'md', 'lg', 'xl', 'full'], default: 'md' }, label: 'Size', category: 'Component' },
    { name: 'title', type: { kind: 'text', default: '다이얼로그 제목' }, label: 'Title', category: 'Component' },
    { name: 'description', type: { kind: 'text', default: '다이얼로그 설명 텍스트입니다.' }, label: 'Description', category: 'Component' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'Dialog', props: { variant: 'info', size: 'md', title: '다이얼로그 제목', description: '다이얼로그 설명 텍스트입니다.' }, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['Dialog', 'DialogTrigger', 'DialogContent', 'DialogHeader', 'DialogTitle', 'DialogDescription', 'DialogFooter'],
  customRenderer: (node) => {
    const { title, description } = node.props as Record<string, any>
    // Show a preview card instead of actual dialog (since dialogs need trigger)
    return React.createElement('div', { className: 'rounded-xl border border-border bg-white p-6 shadow-lg space-y-3' },
      React.createElement('div', { className: 'space-y-1.5' },
        React.createElement('h3', { className: 'text-base font-semibold' }, title),
        React.createElement('p', { className: 'text-sm text-muted-foreground' }, description)
      ),
      React.createElement('div', { className: 'flex justify-end gap-2' },
        React.createElement('button', { className: 'h-9 px-3 text-sm rounded-lg border border-input bg-background hover:bg-accent transition-colors' }, '취소'),
        React.createElement('button', { className: 'h-9 px-3 text-sm rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors' }, '확인')
      )
    )
  },
}
