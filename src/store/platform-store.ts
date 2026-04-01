import { create } from 'zustand'
import type { PlatformConfig } from '../schema/node'
import { useDocumentStore } from './document-store'
import { platformConfigs } from '../platforms'

interface PlatformState {
  platforms: PlatformConfig[]
  activePlatformId: string | null
  setActivePlatform: (platformId: string) => void
  addCustomPlatform: (name: string, description?: string) => void
  getPlatformById: (id: string) => PlatformConfig | undefined
}

export const usePlatformStore = create<PlatformState>((set, get) => ({
  platforms: platformConfigs,
  activePlatformId: null,

  setActivePlatform: (platformId: string) => {
    const platform = get().platforms.find(p => p.id === platformId)
    if (!platform) return

    set({ activePlatformId: platformId })

    // Load platform pages into document store
    const docStore = useDocumentStore.getState()
    // Clear existing pages and load platform pages
    docStore.loadPlatformPages(platform)
  },

  addCustomPlatform: (name: string, description?: string) => {
    const newPlatform: PlatformConfig = {
      id: `custom-${Date.now()}`,
      name,
      description: description || '',
      framework: 'custom',
      baseBranch: 'main',
      repoUrl: '',
      pages: [],
    }
    set(state => ({
      platforms: [...state.platforms, newPlatform],
      activePlatformId: newPlatform.id,
    }))
    // Load empty page for custom platform
    const docStore = useDocumentStore.getState()
    docStore.loadPlatformPages(newPlatform)
  },

  getPlatformById: (id: string) => {
    return get().platforms.find(p => p.id === id)
  },
}))
