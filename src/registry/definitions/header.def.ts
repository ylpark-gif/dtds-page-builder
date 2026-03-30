import React from 'react'
import { Header, HeaderHeading, HeaderDescription } from 'doctalk-design-system'
import type { ComponentDefinition } from '../types'

export const HeaderDefinition: ComponentDefinition = {
  type: 'Header',
  displayName: 'Header',
  category: 'Content Display',
  description: '페이지나 섹션의 제목과 설명을 표시하는 헤더',
  icon: 'title',
  props: [
    { name: 'size', type: { kind: 'select', options: ['page', 'section'], default: 'section' }, label: 'Size', category: 'Component' },
    { name: 'heading', type: { kind: 'text', default: '페이지 제목' }, label: 'Heading', category: 'Component' },
    { name: 'description', type: { kind: 'text', default: '페이지 설명 텍스트입니다.' }, label: 'Description', category: 'Component' },
    { name: 'showDescription', type: { kind: 'boolean', default: true }, label: 'Show Description', category: 'Composition' },
    { name: 'trailingType', type: { kind: 'select', options: ['none', 'buttons', 'icon-button'], default: 'none' }, label: 'Trailing Type', category: 'Composition' },
  ],
  slots: [],
  defaultNode: () => ({
    type: 'Header',
    props: { size: 'section', heading: '페이지 제목', description: '페이지 설명 텍스트입니다.' },
    children: [],
  }),
  importPath: 'doctalk-design-system',
  importNames: ['Header', 'HeaderHeading', 'HeaderDescription'],
  customRenderer: (node) => {
    const { size, heading, description } = node.props as Record<string, any>
    return React.createElement(
      Header,
      null,
      heading && React.createElement(HeaderHeading, { size }, heading),
      description && React.createElement(HeaderDescription, null, description)
    )
  },
}
