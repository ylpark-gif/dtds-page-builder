import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { nanoid } from 'nanoid'
import type { Page, PageNode } from '@/schema/node'
import { createRootNode } from '@/schema/node'

function createDefaultPage(): Page {
  return {
    id: nanoid(),
    name: '메인',
    root: createRootNode(nanoid()),
    settings: { gridType: 'fixed-wide', viewportWidth: 375 },
  }
}

interface DocumentState {
  pages: Page[]
  activePageId: string
  past: Page[][]
  future: Page[][]

  getActivePage: () => Page
  addNode: (parentId: string, node: PageNode, position?: number) => void
  removeNode: (nodeId: string) => void
  updateNodeProps: (nodeId: string, props: Record<string, unknown>) => void
  updateTextContent: (nodeId: string, text: string) => void
  moveNode: (nodeId: string, targetParentId: string, position: number) => void
  duplicateNode: (nodeId: string) => void

  addPage: (name: string) => void
  removePage: (pageId: string) => void
  renamePage: (pageId: string, name: string) => void
  setActivePage: (pageId: string) => void

  undo: () => void
  redo: () => void
}

function findNodeInTree(root: PageNode, id: string): PageNode | null {
  if (root.id === id) return root
  for (const child of root.children) {
    const found = findNodeInTree(child, id)
    if (found) return found
  }
  if (root.slots) {
    for (const slotChildren of Object.values(root.slots)) {
      for (const child of slotChildren) {
        const found = findNodeInTree(child, id)
        if (found) return found
      }
    }
  }
  return null
}

function findParentInTree(root: PageNode, id: string): { parent: PageNode; index: number } | null {
  for (let i = 0; i < root.children.length; i++) {
    if (root.children[i].id === id) return { parent: root, index: i }
    const found = findParentInTree(root.children[i], id)
    if (found) return found
  }
  if (root.slots) {
    for (const slotChildren of Object.values(root.slots)) {
      for (let i = 0; i < slotChildren.length; i++) {
        if (slotChildren[i].id === id) return { parent: root, index: i }
        const found = findParentInTree(slotChildren[i], id)
        if (found) return found
      }
    }
  }
  return null
}

function removeFromParent(root: PageNode, id: string): PageNode | null {
  for (let i = 0; i < root.children.length; i++) {
    if (root.children[i].id === id) {
      return root.children.splice(i, 1)[0]
    }
    const found = removeFromParent(root.children[i], id)
    if (found) return found
  }
  if (root.slots) {
    for (const slotChildren of Object.values(root.slots)) {
      for (let i = 0; i < slotChildren.length; i++) {
        if (slotChildren[i].id === id) {
          return slotChildren.splice(i, 1)[0]
        }
        const found = removeFromParent(slotChildren[i], id)
        if (found) return found
      }
    }
  }
  return null
}

function deepCloneNode(node: PageNode): PageNode {
  return {
    ...node,
    id: nanoid(),
    props: { ...node.props },
    children: node.children.map(deepCloneNode),
    slots: node.slots
      ? Object.fromEntries(
          Object.entries(node.slots).map(([k, v]) => [k, v.map(deepCloneNode)])
        )
      : undefined,
    meta: node.meta ? { ...node.meta } : undefined,
  }
}

const defaultPage = createDefaultPage()

export const useDocumentStore = create<DocumentState>()(
  immer((set, get) => ({
    pages: [defaultPage],
    activePageId: defaultPage.id,
    past: [],
    future: [],

    getActivePage: () => {
      const state = get()
      return state.pages.find((p) => p.id === state.activePageId) ?? state.pages[0]
    },

    addNode: (parentId, node, position) => {
      set((state) => {
        state.past.push(JSON.parse(JSON.stringify(state.pages)))
        state.future = []
        if (state.past.length > 50) state.past.shift()

        const page = state.pages.find((p) => p.id === state.activePageId)
        if (!page) return
        const parent = findNodeInTree(page.root, parentId)
        if (!parent) return
        const pos = position ?? parent.children.length
        parent.children.splice(pos, 0, node)
      })
    },

    removeNode: (nodeId) => {
      set((state) => {
        state.past.push(JSON.parse(JSON.stringify(state.pages)))
        state.future = []
        if (state.past.length > 50) state.past.shift()

        const page = state.pages.find((p) => p.id === state.activePageId)
        if (!page) return
        removeFromParent(page.root, nodeId)
      })
    },

    updateNodeProps: (nodeId, props) => {
      set((state) => {
        const page = state.pages.find((p) => p.id === state.activePageId)
        if (!page) return
        const node = findNodeInTree(page.root, nodeId)
        if (!node) return
        Object.assign(node.props, props)
      })
    },

    updateTextContent: (nodeId, text) => {
      set((state) => {
        const page = state.pages.find((p) => p.id === state.activePageId)
        if (!page) return
        const node = findNodeInTree(page.root, nodeId)
        if (!node) return
        node.textContent = text
      })
    },

    moveNode: (nodeId, targetParentId, position) => {
      set((state) => {
        state.past.push(JSON.parse(JSON.stringify(state.pages)))
        state.future = []
        if (state.past.length > 50) state.past.shift()

        const page = state.pages.find((p) => p.id === state.activePageId)
        if (!page) return
        const removed = removeFromParent(page.root, nodeId)
        if (!removed) return
        const target = findNodeInTree(page.root, targetParentId)
        if (!target) return
        target.children.splice(position, 0, removed)
      })
    },

    duplicateNode: (nodeId) => {
      set((state) => {
        state.past.push(JSON.parse(JSON.stringify(state.pages)))
        state.future = []
        if (state.past.length > 50) state.past.shift()

        const page = state.pages.find((p) => p.id === state.activePageId)
        if (!page) return
        const result = findParentInTree(page.root, nodeId)
        if (!result) return
        const node = findNodeInTree(page.root, nodeId)
        if (!node) return
        const clone = deepCloneNode(node)
        result.parent.children.splice(result.index + 1, 0, clone)
      })
    },

    addPage: (name) => {
      set((state) => {
        const page = createDefaultPage()
        page.name = name
        state.pages.push(page)
        state.activePageId = page.id
      })
    },

    removePage: (pageId) => {
      set((state) => {
        if (state.pages.length <= 1) return
        state.pages = state.pages.filter((p) => p.id !== pageId)
        if (state.activePageId === pageId) {
          state.activePageId = state.pages[0].id
        }
      })
    },

    renamePage: (pageId, name) => {
      set((state) => {
        const page = state.pages.find((p) => p.id === pageId)
        if (page) page.name = name
      })
    },

    setActivePage: (pageId) => {
      set((state) => {
        state.activePageId = pageId
      })
    },

    undo: () => {
      set((state) => {
        if (state.past.length === 0) return
        state.future.push(JSON.parse(JSON.stringify(state.pages)))
        state.pages = state.past.pop()!
      })
    },

    redo: () => {
      set((state) => {
        if (state.future.length === 0) return
        state.past.push(JSON.parse(JSON.stringify(state.pages)))
        state.pages = state.future.pop()!
      })
    },
  }))
)
