import React from 'react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'doctalk-design-system'
import type { ComponentDefinition } from '../types'

export const AccordionDefinition: ComponentDefinition = {
  type: 'Accordion',
  displayName: 'Accordion',
  category: 'Content Display',
  description: '콘텐츠를 접었다 펼 수 있는 아코디언',
  icon: 'expand_more',
  props: [
    { name: 'type', type: { kind: 'select', options: ['single', 'multiple'], default: 'single' }, label: 'Type', category: 'Component' },
    { name: 'collapsible', type: { kind: 'boolean', default: true }, label: 'Collapsible', category: 'Component' },
    { name: 'disabled', type: { kind: 'boolean', default: false }, label: 'Disabled', category: 'Component' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'Accordion', props: { type: 'single' }, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['Accordion', 'AccordionItem', 'AccordionTrigger', 'AccordionContent'],
  customRenderer: (node) => {
    const { type: accType } = node.props as Record<string, any>
    return React.createElement(Accordion as any, { type: accType || 'single', collapsible: true },
      React.createElement(AccordionItem, { value: 'item-1' },
        React.createElement(AccordionTrigger, null, '아코디언 항목 1'),
        React.createElement(AccordionContent, null, '아코디언 콘텐츠 1')
      ),
      React.createElement(AccordionItem, { value: 'item-2' },
        React.createElement(AccordionTrigger, null, '아코디언 항목 2'),
        React.createElement(AccordionContent, null, '아코디언 콘텐츠 2')
      ),
      React.createElement(AccordionItem, { value: 'item-3' },
        React.createElement(AccordionTrigger, null, '아코디언 항목 3'),
        React.createElement(AccordionContent, null, '아코디언 콘텐츠 3')
      )
    )
  },
}
