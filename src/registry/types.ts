import type { ReactElement } from 'react'
import type { PageNode } from '@/schema/node'

export type PropType =
  | { kind: 'select'; options: string[]; default?: string }
  | { kind: 'text'; default?: string; placeholder?: string }
  | { kind: 'boolean'; default?: boolean }
  | { kind: 'number'; default?: number; min?: number; max?: number; step?: number }
  | { kind: 'icon'; default?: string }
  | { kind: 'items-list'; default?: { label: string; value: string }[] }

export type PropDefinition = {
  name: string
  type: PropType
  label: string
  description?: string
  category: 'Component' | 'Composition'
  condition?: {
    prop: string
    eq?: unknown
    neq?: unknown
    truthy?: boolean
  }
}

export type SlotDefinition = {
  name: string
  label: string
  accepts: string[]
  maxItems?: number
  required?: boolean
  defaultChildren?: Omit<PageNode, 'id'>[]
}

export type ComponentCategory =
  | 'Action'
  | 'Indicators and Feedback'
  | 'Navigation'
  | 'Selection and Input'
  | 'Content Display'

export type ComponentDefinition = {
  type: string
  displayName: string
  category: ComponentCategory
  description: string
  icon: string
  props: PropDefinition[]
  slots: SlotDefinition[]
  defaultNode: () => Omit<PageNode, 'id'>
  isSubComponent?: boolean
  parentType?: string
  importPath: string
  importNames: string[]
  customRenderer?: (
    node: PageNode,
    renderChildren: (children: PageNode[]) => ReactElement[]
  ) => ReactElement
}
