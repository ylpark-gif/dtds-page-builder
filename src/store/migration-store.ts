import { create } from 'zustand'

type MigrationStep = 'idle' | 'scope-select' | 'analyzing' | 'preview' | 'editing' | 'complete'
type MigrationScope = 'full-page' | 'area-select' | 'component-select'

interface SelectedElement {
  tagName: string
  classList: string[]
  rect: { top: number; left: number; width: number; height: number }
  oldComponent?: string
  newComponent?: string
  changes: Array<{
    type: 'component' | 'color' | 'typography' | 'grid' | 'layout'
    old: string
    new: string
    description: string
  }>
}

interface ChangeLogEntry {
  elementIndex: number
  type: string
  old: string
  new: string
  applied: boolean
}

interface MigrationState {
  step: MigrationStep
  scope: MigrationScope
  selectedElements: SelectedElement[]
  dragSelection: { startX: number; startY: number; endX: number; endY: number } | null
  changeLog: ChangeLogEntry[]

  // Actions
  setStep: (step: MigrationStep) => void
  setScope: (scope: MigrationScope) => void
  setSelectedElements: (elements: SelectedElement[]) => void
  addSelectedElement: (el: SelectedElement) => void
  removeSelectedElement: (index: number) => void
  clearSelectedElements: () => void
  setDragSelection: (sel: MigrationState['dragSelection']) => void
  addChangeLog: (entry: ChangeLogEntry) => void
  applyChange: (index: number) => void
  revertChange: (index: number) => void
  revertAll: () => void
  reset: () => void
}

const initialState: Pick<
  MigrationState,
  'step' | 'scope' | 'selectedElements' | 'dragSelection' | 'changeLog'
> = {
  step: 'idle',
  scope: 'full-page',
  selectedElements: [],
  dragSelection: null,
  changeLog: [],
}

export const useMigrationStore = create<MigrationState>((set) => ({
  ...initialState,

  setStep: (step) => set({ step }),

  setScope: (scope) => set({ scope }),

  setSelectedElements: (elements) => set({ selectedElements: elements }),

  addSelectedElement: (el) =>
    set((state) => ({ selectedElements: [...state.selectedElements, el] })),

  removeSelectedElement: (index) =>
    set((state) => ({
      selectedElements: state.selectedElements.filter((_, i) => i !== index),
    })),

  clearSelectedElements: () => set({ selectedElements: [] }),

  setDragSelection: (sel) => set({ dragSelection: sel }),

  addChangeLog: (entry) =>
    set((state) => ({ changeLog: [...state.changeLog, entry] })),

  applyChange: (index) =>
    set((state) => ({
      changeLog: state.changeLog.map((entry, i) =>
        i === index ? { ...entry, applied: true } : entry
      ),
    })),

  revertChange: (index) =>
    set((state) => ({
      changeLog: state.changeLog.map((entry, i) =>
        i === index ? { ...entry, applied: false } : entry
      ),
    })),

  revertAll: () =>
    set((state) => ({
      changeLog: state.changeLog.map((entry) => ({ ...entry, applied: false })),
    })),

  reset: () => set({ ...initialState }),
}))
