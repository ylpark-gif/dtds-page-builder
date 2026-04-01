import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { useDocumentStore } from '@/store/document-store'
import { usePlatformStore } from '@/store/platform-store'
import type { Page } from '@/schema/node'

export function PageTree() {
  const { pages, activePageId, setActivePage, addPage, removePage, renamePage } =
    useDocumentStore()
  const { activePlatformId, getPlatformById } = usePlatformStore()
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editingName, setEditingName] = useState('')
  const [collapsedCategories, setCollapsedCategories] = useState<Set<string>>(new Set())

  const activePlatform = activePlatformId ? getPlatformById(activePlatformId) : null
  const hasPlatformPages = activePlatform && activePlatform.pages.length > 0

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

  const toggleCategory = (category: string) => {
    setCollapsedCategories(prev => {
      const next = new Set(prev)
      if (next.has(category)) {
        next.delete(category)
      } else {
        next.add(category)
      }
      return next
    })
  }

  // Build grouped structure when platform is active with pages
  const buildGrouped = (): Array<{ category: string; items: Array<{ page: Page; route: string }> }> => {
    if (!hasPlatformPages) return []

    const platformPageMap = new Map(activePlatform.pages.map(pp => [pp.name, pp]))
    const categoryOrder: string[] = []
    const categoryMap = new Map<string, Array<{ page: Page; route: string }>>()

    for (const page of pages) {
      const platformPage = platformPageMap.get(page.name)
      const category = platformPage?.category ?? '기타'
      const route = platformPage?.route ?? ''

      if (!categoryMap.has(category)) {
        categoryMap.set(category, [])
        categoryOrder.push(category)
      }
      categoryMap.get(category)!.push({ page, route })
    }

    return categoryOrder.map(cat => ({ category: cat, items: categoryMap.get(cat)! }))
  }

  const renderPageItem = (page: Page, route?: string) => (
    <div
      key={page.id}
      onClick={() => setActivePage(page.id)}
      onDoubleClick={() => handleStartRename(page.id, page.name)}
      className={cn(
        'group flex items-center gap-2 px-3 py-1.5 rounded-md text-sm cursor-pointer transition-colors',
        page.id === activePageId
          ? 'bg-accent text-accent-foreground font-medium'
          : 'text-muted-foreground hover:bg-accent/50'
      )}
    >
      <span className="material-symbols-rounded text-[16px] shrink-0">description</span>
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
      {route && (
        <span className="shrink-0 text-xs text-muted-foreground/60 font-mono truncate max-w-[80px]">
          {route}
        </span>
      )}
      {pages.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            removePage(page.id)
          }}
          className="opacity-0 group-hover:opacity-100 w-4 h-4 flex items-center justify-center rounded text-muted-foreground hover:text-destructive shrink-0"
        >
          <span className="material-symbols-rounded text-[14px]">close</span>
        </button>
      )}
    </div>
  )

  const grouped = buildGrouped()

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
        {hasPlatformPages ? (
          grouped.map(({ category, items }) => {
            const isCollapsed = collapsedCategories.has(category)
            return (
              <div key={category}>
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-muted-foreground hover:bg-accent/50 transition-colors"
                >
                  <span className="material-symbols-rounded text-[14px]">
                    {isCollapsed ? 'chevron_right' : 'expand_more'}
                  </span>
                  <span className="flex-1 text-left">{category}</span>
                  <span className="text-muted-foreground/60">{items.length}</span>
                </button>
                {!isCollapsed && (
                  <div className="ml-2">
                    {items.map(({ page, route }) => renderPageItem(page, route))}
                  </div>
                )}
              </div>
            )
          })
        ) : (
          pages.map((page) => renderPageItem(page))
        )}
      </div>
    </div>
  )
}
