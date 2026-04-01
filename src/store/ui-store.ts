import { create } from 'zustand'

interface UIState {
  leftPanelOpen: boolean
  rightPanelOpen: boolean
  viewportWidth: number
  zoom: number
  previewMode: 'original' | 'ds-applied'
  toggleLeftPanel: () => void
  toggleRightPanel: () => void
  setViewportWidth: (w: number) => void
  setZoom: (z: number) => void
  setPreviewMode: (mode: 'original' | 'ds-applied') => void
}

export const useUIStore = create<UIState>()((set) => ({
  leftPanelOpen: true,
  rightPanelOpen: true,
  viewportWidth: 1920,
  zoom: 1,
  previewMode: 'ds-applied',
  toggleLeftPanel: () => set((s) => ({ leftPanelOpen: !s.leftPanelOpen })),
  toggleRightPanel: () => set((s) => ({ rightPanelOpen: !s.rightPanelOpen })),
  setViewportWidth: (w) => set({ viewportWidth: w }),
  setZoom: (z) => set({ zoom: z }),
  setPreviewMode: (mode) => set({ previewMode: mode }),
}))
