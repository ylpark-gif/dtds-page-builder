import { create } from 'zustand'

export interface IframeElementInfo {
  tagName: string
  className: string
  id: string
  rect: { top: number; left: number; width: number; height: number }
  styles: Record<string, string>
  textContent: string
  path: string
  vueComponent?: { name: string; file: string } | null
}

interface UIState {
  leftPanelOpen: boolean
  rightPanelOpen: boolean
  viewportWidth: number
  zoom: number
  previewMode: 'original' | 'ds-applied'
  selectedIframeElement: IframeElementInfo | null
  iframeEditMode: boolean
  toggleLeftPanel: () => void
  toggleRightPanel: () => void
  setViewportWidth: (w: number) => void
  setZoom: (z: number) => void
  setPreviewMode: (mode: 'original' | 'ds-applied') => void
  setSelectedIframeElement: (el: IframeElementInfo | null) => void
  setIframeEditMode: (on: boolean) => void
}

export const useUIStore = create<UIState>()((set) => ({
  leftPanelOpen: true,
  rightPanelOpen: true,
  viewportWidth: 1920,
  zoom: 1,
  previewMode: 'ds-applied',
  selectedIframeElement: null,
  iframeEditMode: false,
  toggleLeftPanel: () => set((s) => ({ leftPanelOpen: !s.leftPanelOpen })),
  toggleRightPanel: () => set((s) => ({ rightPanelOpen: !s.rightPanelOpen })),
  setViewportWidth: (w) => set({ viewportWidth: w }),
  setZoom: (z) => set({ zoom: z }),
  setPreviewMode: (mode) => set({ previewMode: mode }),
  setSelectedIframeElement: (el) => set({ selectedIframeElement: el }),
  setIframeEditMode: (on) => set({ iframeEditMode: on }),
}))
