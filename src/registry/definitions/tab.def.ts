import React from 'react'
import { Tab, TabList, TabTrigger, TabContent } from 'doctalk-design-system'
import type { ComponentDefinition } from '../types'

export const TabDefinition: ComponentDefinition = {
  type: 'Tab',
  displayName: 'Tab',
  category: 'Navigation',
  description: '관련 콘텐츠를 탭으로 구분하여 전환하는 컴포넌트',
  icon: 'tab',
  props: [
    { name: 'size', type: { kind: 'select', options: ['sm', 'default', 'lg'], default: 'default' }, label: 'Size', category: 'Component' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'Tab', props: { size: 'default' }, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['Tab', 'TabList', 'TabTrigger', 'TabContent'],
  customRenderer: (node) => {
    const { size } = node.props as Record<string, any>
    return React.createElement(Tab, { defaultValue: 'tab1', size },
      React.createElement(TabList, null,
        React.createElement(TabTrigger, { value: 'tab1' }, '탭 1'),
        React.createElement(TabTrigger, { value: 'tab2' }, '탭 2'),
        React.createElement(TabTrigger, { value: 'tab3' }, '탭 3')
      ),
      React.createElement(TabContent, { value: 'tab1', className: 'p-4' }, React.createElement('p', { className: 'text-sm text-muted-foreground' }, '탭 1 콘텐츠')),
      React.createElement(TabContent, { value: 'tab2', className: 'p-4' }, React.createElement('p', { className: 'text-sm text-muted-foreground' }, '탭 2 콘텐츠')),
      React.createElement(TabContent, { value: 'tab3', className: 'p-4' }, React.createElement('p', { className: 'text-sm text-muted-foreground' }, '탭 3 콘텐츠'))
    )
  },
}
