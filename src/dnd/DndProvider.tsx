import React from 'react'
import {
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from '@dnd-kit/core'
import { nanoid } from 'nanoid'
import { useDocumentStore } from '@/store/document-store'
import { registry } from '@/registry/registry'
import type { PageNode } from '@/schema/node'

export function BuilderDndProvider({ children }: { children: React.ReactNode }) {
  const [activeDragType, setActiveDragType] = React.useState<string | null>(null)
  const addNode = useDocumentStore((s) => s.addNode)
  const moveNode = useDocumentStore((s) => s.moveNode)
  const page = useDocumentStore((s) => s.getActivePage())

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 5 },
  })
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 200, tolerance: 5 },
  })
  const sensors = useSensors(mouseSensor, touchSensor)

  const handleDragStart = (event: DragStartEvent) => {
    const data = event.active.data.current
    if (data?.source === 'library') {
      setActiveDragType(data.componentType)
    }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveDragType(null)
    const { active, over } = event
    if (!over) return

    const activeData = active.data.current
    const overData = over.data.current

    if (!activeData || !overData) return

    const targetNodeId = overData.targetNodeId as string

    if (activeData.source === 'library') {
      const componentType = activeData.componentType as string
      const def = registry.get(componentType)
      if (!def) return

      const defaultData = def.defaultNode()
      const newNode: PageNode = {
        id: nanoid(),
        type: defaultData.type!,
        props: defaultData.props ?? {},
        children: defaultData.children ?? [],
        textContent: defaultData.textContent,
        slots: defaultData.slots as Record<string, PageNode[]> | undefined,
      }

      addNode(targetNodeId, newNode)
    } else if (activeData.source === 'canvas') {
      const nodeId = activeData.nodeId as string
      if (nodeId !== targetNodeId) {
        // Find the position within the target's children
        const target = findNodeById(page.root, targetNodeId)
        const pos = target ? target.children.length : 0
        moveNode(nodeId, targetNodeId, pos)
      }
    }
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {children}
      <DragOverlay dropAnimation={null}>
        {activeDragType && (
          <div className="px-3 py-2 bg-white rounded-lg shadow-lg border border-primary/30 text-sm font-medium flex items-center gap-2">
            <span className="material-symbols-rounded text-[18px] text-primary">
              {registry.get(activeDragType)?.icon}
            </span>
            {registry.get(activeDragType)?.displayName}
          </div>
        )}
      </DragOverlay>
    </DndContext>
  )
}

function findNodeById(root: PageNode, id: string): PageNode | null {
  if (root.id === id) return root
  for (const child of root.children) {
    const found = findNodeById(child, id)
    if (found) return found
  }
  return null
}
