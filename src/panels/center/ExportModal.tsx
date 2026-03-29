import React, { useState } from 'react'
import { useDocumentStore } from '@/store/document-store'
import { generatePageCode, generateProjectCode } from '@/codegen/generator'

export function ExportModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pages = useDocumentStore((s) => s.pages)
  const activePageId = useDocumentStore((s) => s.activePageId)
  const [exportAll, setExportAll] = useState(false)
  const [copied, setCopied] = useState(false)

  if (!open) return null

  const activePage = pages.find((p) => p.id === activePageId) ?? pages[0]
  const files = exportAll ? generateProjectCode(pages) : [{ filename: `${activePage.name}-page.tsx`, code: generatePageCode(activePage) }]

  const handleCopy = async (code: string) => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-background rounded-2xl shadow-2xl border border-border w-[700px] max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <div className="flex items-center gap-2">
            <span className="material-symbols-rounded text-[20px] text-primary">code</span>
            <span className="text-sm font-semibold">Export React Code</span>
          </div>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer">
              <input
                type="checkbox"
                checked={exportAll}
                onChange={(e) => setExportAll(e.target.checked)}
                className="rounded"
              />
              모든 페이지 export
            </label>
            <button
              onClick={onClose}
              className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-accent transition-colors"
            >
              <span className="material-symbols-rounded text-[18px]">close</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {files.map((file) => (
            <div key={file.filename} className="rounded-xl border border-border overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-border">
                <span className="text-xs font-mono font-medium text-muted-foreground">
                  {file.filename}
                </span>
                <button
                  onClick={() => handleCopy(file.code)}
                  className="flex items-center gap-1 px-2 py-1 text-xs rounded-md hover:bg-accent transition-colors text-muted-foreground"
                >
                  <span className="material-symbols-rounded text-[14px]">
                    {copied ? 'check' : 'content_copy'}
                  </span>
                  {copied ? '복사됨' : '복사'}
                </button>
              </div>
              <pre className="p-4 text-xs font-mono text-foreground overflow-x-auto bg-white leading-relaxed">
                <code>{file.code}</code>
              </pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
