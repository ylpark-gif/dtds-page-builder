import React from 'react'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from 'doctalk-design-system'
import type { ComponentDefinition } from '../types'

export const PaginationDefinition: ComponentDefinition = {
  type: 'Pagination',
  displayName: 'Pagination',
  category: 'Navigation',
  description: '페이지 간 이동을 위한 페이지네이션',
  icon: 'more_horiz',
  props: [
    { name: 'totalPages', type: { kind: 'number', default: 3, min: 1, max: 20 }, label: 'Total Pages', category: 'Component' },
    { name: 'currentPage', type: { kind: 'number', default: 1, min: 1, max: 20 }, label: 'Current Page', category: 'Component' },
    { name: 'showFirstLast', type: { kind: 'boolean', default: false }, label: 'Show First/Last', category: 'Component' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'Pagination', props: {}, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['Pagination', 'PaginationContent', 'PaginationItem', 'PaginationLink', 'PaginationPrevious', 'PaginationNext'],
  customRenderer: () => {
    return React.createElement(Pagination, null,
      React.createElement(PaginationContent, null,
        React.createElement(PaginationItem, null, React.createElement(PaginationPrevious, { href: '#' })),
        React.createElement(PaginationItem, null, React.createElement(PaginationLink, { href: '#', isActive: true }, '1')),
        React.createElement(PaginationItem, null, React.createElement(PaginationLink, { href: '#' }, '2')),
        React.createElement(PaginationItem, null, React.createElement(PaginationLink, { href: '#' }, '3')),
        React.createElement(PaginationItem, null, React.createElement(PaginationNext, { href: '#' }))
      )
    )
  },
}
