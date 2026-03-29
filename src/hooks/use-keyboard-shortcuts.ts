import { useEffect } from 'react'
import { useDocumentStore } from '@/store/document-store'
import { useSelectionStore } from '@/store/selection-store'

export function useKeyboardShortcuts() {
  const { undo, redo, removeNode, duplicateNode } = useDocumentStore()
  const { selectedNodeId, selectNode } = useSelectionStore()

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Don't trigger in input/textarea
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return
      }

      const isMeta = e.metaKey || e.ctrlKey

      // Delete / Backspace - remove selected node
      if ((e.key === 'Delete' || e.key === 'Backspace') && selectedNodeId) {
        e.preventDefault()
        removeNode(selectedNodeId)
        selectNode(null)
      }

      // Cmd+Z - undo
      if (isMeta && e.key === 'z' && !e.shiftKey) {
        e.preventDefault()
        undo()
      }

      // Cmd+Shift+Z - redo
      if (isMeta && e.key === 'z' && e.shiftKey) {
        e.preventDefault()
        redo()
      }

      // Cmd+D - duplicate
      if (isMeta && e.key === 'd' && selectedNodeId) {
        e.preventDefault()
        duplicateNode(selectedNodeId)
      }

      // Escape - deselect
      if (e.key === 'Escape') {
        selectNode(null)
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [undo, redo, removeNode, duplicateNode, selectedNodeId, selectNode])
}
