import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { useDocumentStore } from '@/store/document-store'

export function PageTree() {
  const { pages, activePageId, setActivePage, addPage, removePage, renamePage } =
    useDocumentStore()
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editingName, setEditingName] = useState('')

  const handleStartRename = (pageId: string, currentName: string) => {
    setEditingId(pageId)
    setEditingName(currentName)
  }

  const handleFinishRename = () => {
    if (editingId && editingName.trim()) {
      renamePage(editingId, editingName.trim())
    }
    setEditingId(null)
  }

  return (
    <div className="border-b border-border">
      <div className="flex items-center justify-between px-3 py-2">
        <span className="text-xs font-semibold text-muted-foreground">Pages</span>
        <button
          onClick={() => addPage(`페이지 ${pages.length + 1}`)}
          className="w-5 h-5 flex items-center justify-center rounded text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
        >
          <span className="material-symbols-rounded text-[16px]">add</span>
        </button>
      </div>

      <div className="pb-1 px-1">
        {pages.map((page) => (
          <div
            key={page.id}
            onClick={() => setActivePage(page.id)}
            onDoubleClick={() => handleStartRename(page.id, page.name)}
            className={cn(
              'flex items-center gap-2 px-3 py-1.5 rounded-md text-sm cursor-pointer transition-colors',
              page.id === activePageId
                ? 'bg-accent text-accent-foreground font-medium'
                : 'text-muted-foreground hover:bg-accent/50'
            )}
          >
            <span className="material-symbols-rounded text-[16px]">description</span>
            {editingId === page.id ? (
              <input
                autoFocus
                value={editingName}
                onChange={(e) => setEditingName(e.target.value)}
                onBlur={handleFinishRename}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleFinishRename()
                  if (e.key === 'Escape') setEditingId(null)
                }}
                className="flex-1 bg-transparent outline-none text-sm"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <span className="flex-1 truncate">{page.name}</span>
            )}
            {pages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  removePage(page.id)
                }}
                className="opacity-0 group-hover:opacity-100 w-4 h-4 flex items-center justify-center rounded text-muted-foreground hover:text-destructive"
              >
                <span className="material-symbols-rounded text-[14px]">close</span>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
