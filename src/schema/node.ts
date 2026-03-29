export type PageNode = {
  id: string
  type: string
  props: Record<string, unknown>
  children: PageNode[]
  textContent?: string
  slots?: Record<string, PageNode[]>
  meta?: {
    locked?: boolean
    hidden?: boolean
    label?: string
  }
}

export type PageSettings = {
  gridType: 'fluid' | 'fixed-wide' | 'fixed-narrow'
  viewportWidth: number
}

export type Page = {
  id: string
  name: string
  root: PageNode
  settings: PageSettings
}

export type Project = {
  id: string
  name: string
  pages: Page[]
  version: number
}

export function createRootNode(id: string): PageNode {
  return {
    id,
    type: '__root__',
    props: {},
    children: [],
  }
}
