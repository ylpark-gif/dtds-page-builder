import React, { useState } from 'react'
import { useDraggable } from '@dnd-kit/core'
import { cn } from '@/lib/utils'
import { registry } from '@/registry/registry'
import { categories } from '@/registry/categories'
import type { ComponentDefinition } from '@/registry/types'

function DraggableComponentCard({ def }: { def: ComponentDefinition }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `library-${def.type}`,
    data: { source: 'library', componentType: def.type },
  })

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={cn(
        'flex flex-col items-center gap-1.5 p-3 rounded-xl border border-border/50 bg-white cursor-grab',
        'hover:border-primary/30 hover:shadow-sm transition-all duration-150',
        isDragging && 'opacity-40'
      )}
    >
      <span className="material-symbols-rounded text-[24px] text-muted-foreground">
        {def.icon}
      </span>
      <span className="text-xs text-muted-foreground font-medium truncate w-full text-center">
        {def.displayName}
      </span>
    </div>
  )
}

export function ComponentLibrary() {
  const [search, setSearch] = useState('')
  const [expandedCategory, setExpandedCategory] = useState<string | null>('Action')

  const filteredCategories = categories
    .map((cat) => ({
      ...cat,
      components: registry
        .getByCategory(cat.key)
        .filter(
          (def) =>
            !search ||
            def.displayName.toLowerCase().includes(search.toLowerCase()) ||
            def.type.toLowerCase().includes(search.toLowerCase())
        ),
    }))
    .filter((cat) => cat.components.length > 0)

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="p-3">
        <input
          type="text"
          placeholder="컴포넌트 검색..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-8 px-2.5 text-sm rounded-lg border border-input bg-white placeholder:text-muted-foreground outline-none focus:border-ring focus:ring-[3px] focus:ring-ring/50"
        />
      </div>

      <div className="space-y-1 px-2 pb-4">
        {filteredCategories.map((cat) => (
          <div key={cat.key}>
            <button
              onClick={() =>
                setExpandedCategory(expandedCategory === cat.key ? null : cat.key)
              }
              className="flex items-center gap-2 w-full px-2 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground rounded-md transition-colors"
            >
              <span
                className="material-symbols-rounded text-[16px] transition-transform"
                style={{
                  transform: expandedCategory === cat.key ? 'rotate(90deg)' : 'rotate(0deg)',
                }}
              >
                chevron_right
              </span>
              {cat.label}
              <span className="ml-auto text-[10px] text-muted-foreground/60">
                {cat.components.length}
              </span>
            </button>

            {expandedCategory === cat.key && (
              <div className="grid grid-cols-3 gap-1.5 px-1 pt-1 pb-2">
                {cat.components.map((def) => (
                  <DraggableComponentCard key={def.type} def={def} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
