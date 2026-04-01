import React, { useState } from 'react'
import { usePlatformStore } from '../../store/platform-store'

export function PlatformSelector() {
  const { platforms, activePlatformId, setActivePlatform, addCustomPlatform } = usePlatformStore()
  const [showNewDialog, setShowNewDialog] = useState(false)
  const [newName, setNewName] = useState('')

  const activePlatform = platforms.find(p => p.id === activePlatformId)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    if (value === '__new__') {
      setShowNewDialog(true)
      return
    }
    setActivePlatform(value)
  }

  const handleCreateNew = () => {
    if (newName.trim()) {
      addCustomPlatform(newName.trim())
      setNewName('')
      setShowNewDialog(false)
    }
  }

  return (
    <div className="border-b border-border p-3">
      <label className="text-xs font-medium text-muted-foreground mb-1.5 block">PLATFORM</label>
      <select
        value={activePlatformId || ''}
        onChange={handleChange}
        className="w-full h-8 px-2 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-ring"
      >
        <option value="" disabled>플랫폼 선택...</option>
        {platforms.map(p => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
        <option value="__new__">+ 신규 플랫폼</option>
      </select>

      {activePlatform && (
        <div className="mt-1.5 flex items-center gap-1.5">
          <span className="text-xs text-muted-foreground">{activePlatform.framework}</span>
          {activePlatform.description && (
            <>
              <span className="text-xs text-muted-foreground">·</span>
              <span className="text-xs text-muted-foreground truncate">{activePlatform.description}</span>
            </>
          )}
        </div>
      )}

      {showNewDialog && (
        <div className="mt-2 flex gap-1.5">
          <input
            type="text"
            value={newName}
            onChange={e => setNewName(e.target.value)}
            placeholder="플랫폼 이름"
            className="flex-1 h-7 px-2 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-ring"
            autoFocus
            onKeyDown={e => {
              if (e.key === 'Enter') handleCreateNew()
              if (e.key === 'Escape') setShowNewDialog(false)
            }}
          />
          <button
            onClick={handleCreateNew}
            className="h-7 px-2 text-xs bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            추가
          </button>
          <button
            onClick={() => setShowNewDialog(false)}
            className="h-7 px-2 text-xs bg-muted text-muted-foreground rounded-md hover:bg-muted/80"
          >
            취소
          </button>
        </div>
      )}
    </div>
  )
}
