import React from 'react'
import { useMigrationStore } from '@/store/migration-store'
import { processAnalysisResults } from '@/lib/migration-analyzer'

// ─── Change type metadata ─────────────────────────────────────────────────────
const CHANGE_TYPE_META: Record<
  'component' | 'color' | 'typography' | 'grid' | 'layout',
  { label: string; icon: string }
> = {
  grid:       { label: '그리드 변경',    icon: 'grid_on' },
  color:      { label: '컬러 변경',      icon: 'palette' },
  typography: { label: '타이포 변경',    icon: 'text_fields' },
  component:  { label: '컴포넌트 변경',  icon: 'widgets' },
  layout:     { label: '레이아웃 변경',  icon: 'dashboard' },
}

// ─── Scope option list ────────────────────────────────────────────────────────
const SCOPE_OPTIONS = [
  { value: 'full-page' as const,         icon: 'select_all',  label: '페이지 전체',        desc: '현재 페이지 전체를 분석합니다' },
  { value: 'area-select' as const,       icon: 'drag_indicator', label: '영역 드래그 선택', desc: '드래그로 분석 영역을 지정합니다' },
  { value: 'component-select' as const,  icon: 'touch_app',   label: '컴포넌트 개별 선택', desc: '클릭으로 대상을 직접 선택합니다' },
]

// ─── Step: idle ───────────────────────────────────────────────────────────────
function StepIdle() {
  const setStep = useMigrationStore((s) => s.setStep)
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6 gap-4">
      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
        <span className="material-symbols-rounded text-[26px] text-primary">transform</span>
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">DS 마이그레이션</p>
        <p className="text-xs text-muted-foreground/60 mt-1 leading-relaxed">
          기존 컴포넌트를 새 디자인 시스템으로<br />자동 변환합니다
        </p>
      </div>
      <button
        onClick={() => setStep('scope-select')}
        className="w-full h-9 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-1.5"
      >
        <span className="material-symbols-rounded text-[16px]">play_arrow</span>
        DS 마이그레이션 시작
      </button>
    </div>
  )
}

// ─── Step: scope-select ───────────────────────────────────────────────────────
function StepScopeSelect() {
  const scope = useMigrationStore((s) => s.scope)
  const setScope = useMigrationStore((s) => s.setScope)
  const setStep = useMigrationStore((s) => s.setStep)
  const reset = useMigrationStore((s) => s.reset)

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="sticky top-0 bg-background z-10 border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="material-symbols-rounded text-[18px] text-primary">crop_free</span>
          <span className="text-sm font-semibold">변환 범위 선택</span>
        </div>
        <p className="text-[11px] text-muted-foreground/60 mt-1">분석할 범위를 선택하세요</p>
      </div>

      {/* Options */}
      <div className="flex-1 p-4 space-y-2 overflow-y-auto">
        {SCOPE_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => setScope(opt.value)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border text-left transition-colors ${
              scope === opt.value
                ? 'border-primary bg-primary/5 text-foreground'
                : 'border-input bg-background text-muted-foreground hover:bg-accent hover:text-foreground'
            }`}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
              scope === opt.value ? 'bg-primary/15' : 'bg-muted'
            }`}>
              <span className={`material-symbols-rounded text-[18px] ${
                scope === opt.value ? 'text-primary' : 'text-muted-foreground'
              }`}>
                {opt.icon}
              </span>
            </div>
            <div className="min-w-0">
              <div className="text-[12px] font-medium leading-tight">{opt.label}</div>
              <div className="text-[10px] text-muted-foreground/60 mt-0.5">{opt.desc}</div>
            </div>
            {scope === opt.value && (
              <span className="material-symbols-rounded text-[16px] text-primary ml-auto shrink-0">
                check_circle
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Footer buttons */}
      <div className="p-4 border-t border-border space-y-2">
        {scope === 'area-select' ? (
          <div className="w-full h-9 rounded-lg bg-muted border border-dashed border-primary/40 text-sm text-primary/70 flex items-center justify-center gap-1.5">
            <span className="material-symbols-rounded text-[16px]">drag_indicator</span>
            캔버스에서 영역을 드래그하세요
          </div>
        ) : (
          <button
            onClick={() => setStep('analyzing')}
            className="w-full h-9 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-1.5"
          >
            다음
            <span className="material-symbols-rounded text-[16px]">arrow_forward</span>
          </button>
        )}
        <button
          onClick={reset}
          className="w-full h-8 rounded-lg border border-input bg-background text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
        >
          취소
        </button>
      </div>
    </div>
  )
}

// ─── Step: analyzing ─────────────────────────────────────────────────────────
function StepAnalyzing() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6 gap-4">
      {/* Spinner */}
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="material-symbols-rounded text-[18px] text-primary">search</span>
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">분석 중...</p>
        <p className="text-xs text-muted-foreground/60 mt-1">
          컴포넌트 및 스타일을 분석하고 있습니다
        </p>
      </div>
    </div>
  )
}

// ─── Step: preview ────────────────────────────────────────────────────────────
function StepPreview() {
  const selectedElements = useMigrationStore((s) => s.selectedElements)
  const changeLog = useMigrationStore((s) => s.changeLog)
  const revertAll = useMigrationStore((s) => s.revertAll)
  const setStep = useMigrationStore((s) => s.setStep)
  const reset = useMigrationStore((s) => s.reset)
  const applyChange = useMigrationStore((s) => s.applyChange)

  // Gather all changes across selected elements
  const allChanges = selectedElements.flatMap((el, elIdx) =>
    el.changes.map((ch, chIdx) => ({ ...ch, elIdx, chIdx, key: `${elIdx}-${chIdx}` }))
  )

  // Count by type
  const counts = allChanges.reduce<Record<string, number>>((acc, ch) => {
    acc[ch.type] = (acc[ch.type] ?? 0) + 1
    return acc
  }, {})

  // Excluded keys (unchecked)
  const [excluded, setExcluded] = React.useState<Set<string>>(new Set())
  const toggleExclude = (key: string) =>
    setExcluded((prev) => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })

  const handleApplyAll = () => {
    allChanges
      .filter((ch) => !excluded.has(ch.key))
      .forEach((_, i) => applyChange(i))
    setStep('complete')
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="sticky top-0 bg-background z-10 border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="material-symbols-rounded text-[18px] text-primary">preview</span>
          <span className="text-sm font-semibold">변환 미리보기</span>
        </div>
        <p className="text-[11px] text-muted-foreground/60 mt-1">
          {selectedElements.length}개 요소에서{' '}
          <span className="text-foreground font-medium">{allChanges.length}개 변경사항</span> 발견
        </p>
      </div>

      {/* Change type summary badges */}
      <div className="px-4 pt-3 pb-2 flex flex-wrap gap-1.5">
        {(Object.keys(CHANGE_TYPE_META) as Array<keyof typeof CHANGE_TYPE_META>)
          .filter((t) => counts[t])
          .map((t) => (
            <div
              key={t}
              className="flex items-center gap-1 text-[10px] bg-muted px-2 py-0.5 rounded-full text-muted-foreground"
            >
              <span className="material-symbols-rounded text-[12px]">{CHANGE_TYPE_META[t].icon}</span>
              {CHANGE_TYPE_META[t].label} {counts[t]}
            </div>
          ))}
      </div>

      {/* Change list */}
      <div className="flex-1 overflow-y-auto px-4 pb-2 space-y-1">
        {allChanges.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <span className="material-symbols-rounded text-[28px] text-muted-foreground/30 mb-2">
              check_circle
            </span>
            <p className="text-xs text-muted-foreground/50">변경사항이 없습니다</p>
          </div>
        ) : (
          allChanges.map((ch) => {
            const meta = CHANGE_TYPE_META[ch.type as keyof typeof CHANGE_TYPE_META]
            const isExcluded = excluded.has(ch.key)
            return (
              <label
                key={ch.key}
                className={`flex items-start gap-2.5 p-2.5 rounded-lg border cursor-pointer transition-colors ${
                  isExcluded
                    ? 'border-border bg-muted/30 opacity-50'
                    : 'border-border bg-background hover:bg-accent/50'
                }`}
              >
                <input
                  type="checkbox"
                  checked={!isExcluded}
                  onChange={() => toggleExclude(ch.key)}
                  className="mt-0.5 shrink-0 accent-primary"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="material-symbols-rounded text-[12px] text-muted-foreground">
                      {meta?.icon ?? 'change_circle'}
                    </span>
                    <span className="text-[10px] text-muted-foreground/70 uppercase tracking-wide">
                      {meta?.label ?? ch.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono flex-wrap">
                    <code className="bg-red-50 text-red-700 px-1.5 py-0.5 rounded border border-red-100 truncate max-w-[80px]">
                      {ch.old}
                    </code>
                    <span className="material-symbols-rounded text-[12px] text-muted-foreground">
                      arrow_forward
                    </span>
                    <code className="bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded border border-emerald-100 truncate max-w-[80px]">
                      {ch.new}
                    </code>
                  </div>
                  {ch.description && (
                    <p className="text-[10px] text-muted-foreground/60 mt-1">{ch.description}</p>
                  )}
                </div>
              </label>
            )
          })
        )}
      </div>

      {/* Footer buttons */}
      <div className="p-4 border-t border-border space-y-2">
        <button
          onClick={handleApplyAll}
          className="w-full h-9 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-1.5"
        >
          이대로 적용
          <span className="material-symbols-rounded text-[16px]">arrow_forward</span>
        </button>
        <button
          onClick={() => setStep('editing')}
          className="w-full h-8 rounded-lg border border-input bg-background text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors flex items-center justify-center gap-1.5"
        >
          <span className="material-symbols-rounded text-[14px]">edit</span>
          수정하기
        </button>
        <button
          onClick={() => { revertAll(); reset() }}
          className="w-full h-8 rounded-lg border border-input bg-background text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors flex items-center justify-center gap-1.5"
        >
          <span className="material-symbols-rounded text-[14px]">undo</span>
          되돌리기
        </button>
      </div>
    </div>
  )
}

// ─── Step: editing ────────────────────────────────────────────────────────────
function StepEditing() {
  const changeLog = useMigrationStore((s) => s.changeLog)
  const revertChange = useMigrationStore((s) => s.revertChange)
  const setStep = useMigrationStore((s) => s.setStep)

  const applied = changeLog.filter((e) => e.applied)

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="sticky top-0 bg-background z-10 border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="material-symbols-rounded text-[18px] text-amber-500">edit_note</span>
          <span className="text-sm font-semibold">수정 모드</span>
        </div>
        <p className="text-[11px] text-muted-foreground/60 mt-1">
          변환된 화면에서 요소를 클릭하여 조정하세요
        </p>
      </div>

      {/* Applied changes list */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-1.5">
        {applied.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <span className="material-symbols-rounded text-[28px] text-muted-foreground/30 mb-2">
              inbox
            </span>
            <p className="text-xs text-muted-foreground/50">적용된 변경사항이 없습니다</p>
          </div>
        ) : (
          applied.map((entry, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-2.5 py-2 rounded-lg border border-border bg-background"
            >
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-muted-foreground/60 uppercase tracking-wide mb-0.5">
                  {entry.type}
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono">
                  <code className="bg-red-50 text-red-700 px-1 py-0.5 rounded border border-red-100 truncate max-w-[60px]">
                    {entry.old}
                  </code>
                  <span className="material-symbols-rounded text-[11px] text-muted-foreground">
                    arrow_forward
                  </span>
                  <code className="bg-emerald-50 text-emerald-700 px-1 py-0.5 rounded border border-emerald-100 truncate max-w-[60px]">
                    {entry.new}
                  </code>
                </div>
              </div>
              <button
                type="button"
                onClick={() => revertChange(changeLog.indexOf(entry))}
                className="w-6 h-6 flex items-center justify-center rounded hover:bg-destructive/10 shrink-0"
                title="되돌리기"
              >
                <span className="material-symbols-rounded text-[14px] text-muted-foreground hover:text-destructive">
                  undo
                </span>
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <button
          onClick={() => setStep('complete')}
          className="w-full h-9 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-1.5"
        >
          <span className="material-symbols-rounded text-[16px]">check</span>
          완료
        </button>
      </div>
    </div>
  )
}

// ─── Step: complete ───────────────────────────────────────────────────────────
function StepComplete() {
  const changeLog = useMigrationStore((s) => s.changeLog)
  const reset = useMigrationStore((s) => s.reset)
  const [copied, setCopied] = React.useState(false)

  const applied = changeLog.filter((e) => e.applied)

  const handleCopyReport = () => {
    const lines = [
      '=== DS 마이그레이션 변경 리포트 ===',
      `총 변경사항: ${applied.length}개`,
      '',
      ...applied.map(
        (e, i) => `[${i + 1}] [${e.type}] ${e.old} → ${e.new}`
      ),
    ]
    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6 gap-4">
      {/* Success icon */}
      <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
        <span className="material-symbols-rounded text-[30px] text-emerald-600">check_circle</span>
      </div>

      <div>
        <p className="text-sm font-semibold text-foreground">마이그레이션 완료!</p>
        <p className="text-xs text-muted-foreground/60 mt-1">
          <span className="text-foreground font-medium">{applied.length}개</span> 변경사항이 적용되었습니다
        </p>
      </div>

      {/* Applied summary */}
      {applied.length > 0 && (
        <div className="w-full bg-muted/50 rounded-lg border border-border p-3 text-left space-y-1 max-h-[140px] overflow-y-auto">
          {applied.map((e, i) => (
            <div key={i} className="flex items-center gap-1.5 text-[11px] font-mono">
              <span className="material-symbols-rounded text-[12px] text-emerald-500 shrink-0">
                check
              </span>
              <span className="text-muted-foreground/70 truncate">
                [{e.type}] {e.old} → {e.new}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="w-full space-y-2">
        <button
          onClick={handleCopyReport}
          className="w-full h-9 rounded-lg border border-input bg-background text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors flex items-center justify-center gap-1.5"
        >
          <span className="material-symbols-rounded text-[15px]">
            {copied ? 'check' : 'content_copy'}
          </span>
          {copied ? '복사됨!' : '변경 리포트 복사'}
        </button>
        <button
          onClick={reset}
          className="w-full h-9 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-1.5"
        >
          <span className="material-symbols-rounded text-[16px]">refresh</span>
          새 마이그레이션
        </button>
      </div>
    </div>
  )
}

// ─── Main panel ───────────────────────────────────────────────────────────────
export function MigrationPanel() {
  const step = useMigrationStore((s) => s.step)
  const setStep = useMigrationStore((s) => s.setStep)
  const setSelectedElements = useMigrationStore((s) => s.setSelectedElements)

  React.useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === 'BUILDER_MIGRATION_RESULTS') {
        console.log('[Migration] Raw iframe data:', e.data.data)
        console.log('[Migration] Raw elements sample:', e.data.data.elements?.slice(0, 5).map((el: any) => ({
          tag: el.tagName,
          classes: el.classList,
          vue: el.vueComponent,
          flags: el.flags,
        })))
        const elements = processAnalysisResults(e.data.data)
        console.log('[Migration] Processed elements:', elements)
        setSelectedElements(elements)
        setStep('preview')
      }
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [setSelectedElements, setStep])

  return (
    <div className="h-full flex flex-col">
      {step === 'idle'         && <StepIdle />}
      {step === 'scope-select' && <StepScopeSelect />}
      {step === 'analyzing'    && <StepAnalyzing />}
      {step === 'preview'      && <StepPreview />}
      {step === 'editing'      && <StepEditing />}
      {step === 'complete'     && <StepComplete />}
    </div>
  )
}
