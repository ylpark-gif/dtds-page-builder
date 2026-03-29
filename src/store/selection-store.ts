import { create } from 'zustand'

interface SelectionState {
  selectedNodeId: string | null
  hoveredNodeId: string | null
  selectNode: (id: string | null) => void
  hoverNode: (id: string | null) => void
}

export const useSelectionStore = create<SelectionState>()((set) => ({
  selectedNodeId: null,
  hoveredNodeId: null,
  selectNode: (id) => set({ selectedNodeId: id }),
  hoverNode: (id) => set({ hoveredNodeId: id }),
}))
