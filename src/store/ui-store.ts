import { create } from 'zustand'

interface UIState {
  leftPanelOpen: boolean
  rightPanelOpen: boolean
  viewportWidth: number
  zoom: number
  toggleLeftPanel: () => void
  toggleRightPanel: () => void
  setViewportWidth: (w: number) => void
  setZoom: (z: number) => void
}

export const useUIStore = create<UIState>()((set) => ({
  leftPanelOpen: true,
  rightPanelOpen: true,
  viewportWidth: 375,
  zoom: 1,
  toggleLeftPanel: () => set((s) => ({ leftPanelOpen: !s.leftPanelOpen })),
  toggleRightPanel: () => set((s) => ({ rightPanelOpen: !s.rightPanelOpen })),
  setViewportWidth: (w) => set({ viewportWidth: w }),
  setZoom: (z) => set({ zoom: z }),
}))
