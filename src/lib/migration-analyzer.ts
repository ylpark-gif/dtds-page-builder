import { findComponentMapping, findColorMapping, findTypoMapping } from './ds-migration-map'

// Raw element from iframe analysis
interface RawAnalysisElement {
  tagName: string
  classList: string[]
  styles: {
    color: string
    backgroundColor: string
    fontSize: string
    fontWeight: string
    lineHeight: string
    display: string
  }
  rect: { top: number; left: number; width: number; height: number }
  vueComponent: { name: string; file: string } | null
  flags: { isComponent: boolean; hasColor: boolean; hasTypography: boolean; isGrid: boolean }
  textContent?: string
}

interface AnalysisResult {
  elements: RawAnalysisElement[]
  summary: { components: number; colors: number; typography: number; grid: number }
}

type ChangeType = 'component' | 'color' | 'typography' | 'grid' | 'layout'

interface Change {
  type: ChangeType
  old: string
  new: string
  description: string
}

interface SelectedElement {
  tagName: string
  classList: string[]
  rect: { top: number; left: number; width: number; height: number }
  oldComponent?: string
  newComponent?: string
  changes: Change[]
}

// Convert iframe analysis results into SelectedElement[] for the migration store
export function processAnalysisResults(data: AnalysisResult): SelectedElement[] {
  const results: SelectedElement[] = []

  for (const el of data.elements) {
    const changes: Change[] = []

    // 1a. Component mapping from Vue component
    if (el.vueComponent) {
      const mapping = findComponentMapping(el.vueComponent.name)
      if (mapping) {
        changes.push({
          type: 'component',
          old: el.vueComponent.name,
          new: mapping.newName,
          description: `${el.vueComponent.name} → ${mapping.newName}`,
        })
      }
    }

    // 1b. Fallback: detect old DS components from class names or tag+role
    if (changes.filter(c => c.type === 'component').length === 0) {
      const classStr = el.classList.join(' ').toLowerCase()
      const tag = el.tagName.toLowerCase()

      const classPatterns: Array<{ pattern: RegExp; oldName: string }> = [
        // Actual doctalk class names found in the codebase
        { pattern: /\bapp-header\b|service-header\b|service-header-menu/i, oldName: 'AppHeader' },
        { pattern: /\bapp-button\b|btn-filled|btn-outline|btn-text/i, oldName: 'AppButton' },
        { pattern: /\bapp-text-?field\b|text-field/i, oldName: 'AppTextField' },
        { pattern: /\bapp-select\b/i, oldName: 'AppSelect' },
        { pattern: /\bapp-check-?box\b/i, oldName: 'AppCheckBox' },
        { pattern: /\bapp-table\b|data-table/i, oldName: 'AppTable' },
        { pattern: /\bpage-?nation\b|pagination/i, oldName: 'PageNation' },
        { pattern: /\bskeleton-?ui\b/i, oldName: 'SkeletonUi' },
        { pattern: /\bchips-?wrap\b|chip-/i, oldName: 'Chips' },
        { pattern: /\bservice-lnb\b|lnb-/i, oldName: 'AppHeader' },
        { pattern: /\bnav-menu\b|nav-m-menu\b|menu-list\b/i, oldName: 'AppHeader' },
        { pattern: /\breservation-container\b|service-layout\b/i, oldName: 'AppHeader' },
      ]

      for (const { pattern, oldName } of classPatterns) {
        if (pattern.test(classStr) || (tag === 'header' && oldName === 'AppHeader') || (tag === 'nav' && oldName === 'AppHeader')) {
          const mapping = findComponentMapping(oldName)
          if (mapping) {
            changes.push({
              type: 'component',
              old: oldName,
              new: mapping.newName,
              description: `${oldName} → ${mapping.newName} (클래스 기반 감지)`,
            })
            break
          }
        }
      }
    }

    // 2. Grid detection - only for substantial layout containers
    if (el.flags.isGrid && el.rect.width > 600) {
      const display = el.styles.display
      changes.push({
        type: 'grid',
        old: `display: ${display}`,
        new: 'grid grid-cols-12',
        description: `${display} 레이아웃을 12컬럼 그리드로 변환`,
      })
    }

    // 2b. Layout detection for structural elements
    {
      const tag = el.tagName.toLowerCase()
      if ((tag === 'header' || tag === 'nav' || tag === 'aside') && changes.filter(c => c.type === 'layout' || c.type === 'component').length === 0) {
        if (tag === 'header' || tag === 'nav') {
          changes.push({
            type: 'layout',
            old: `<${tag}> (기존 헤더/네비게이션)`,
            new: 'TopNavigation (h-14 sticky)',
            description: '기존 헤더를 TopNavigation 컴포넌트로 교체',
          })
        } else if (tag === 'aside') {
          changes.push({
            type: 'layout',
            old: `<aside> (기존 사이드바)`,
            new: 'Sidebar (280px)',
            description: '기존 사이드바를 Sidebar 컴포넌트로 교체',
          })
        }
      }
    }

    // 3. Color mapping
    if (el.flags.hasColor) {
      // Check text color
      if (el.styles.color && el.styles.color !== 'rgb(0, 0, 0)') {
        const colorMap = findColorMapping(el.styles.color)
        if (colorMap) {
          changes.push({
            type: 'color',
            old: el.styles.color,
            new: colorMap.newTailwind,
            description: `텍스트 색상: ${colorMap.oldVar} → ${colorMap.newVar}`,
          })
        }
      }
      // Check background color
      if (
        el.styles.backgroundColor &&
        el.styles.backgroundColor !== 'rgba(0, 0, 0, 0)' &&
        el.styles.backgroundColor !== 'transparent'
      ) {
        const bgMap = findColorMapping(el.styles.backgroundColor)
        if (bgMap) {
          changes.push({
            type: 'color',
            old: el.styles.backgroundColor,
            new: bgMap.newTailwind,
            description: `배경 색상: ${bgMap.oldVar} → ${bgMap.newVar}`,
          })
        }
      }
    }

    // 4. Typography mapping
    if (el.flags.hasTypography && el.styles.fontSize) {
      const typoMap = findTypoMapping(el.styles.fontSize, el.styles.fontWeight)
      if (typoMap) {
        changes.push({
          type: 'typography',
          old: `${el.styles.fontSize}/${el.styles.fontWeight}`,
          new: typoMap.newClass,
          description: `${typoMap.oldMixin} → ${typoMap.newClass}`,
        })
      }
    }

    // Only include elements with actual changes
    if (changes.length > 0) {
      results.push({
        tagName: el.tagName,
        classList: el.classList,
        rect: el.rect,
        oldComponent: el.vueComponent?.name,
        newComponent: el.vueComponent
          ? findComponentMapping(el.vueComponent.name)?.newName
          : undefined,
        changes,
      })
    }
  }

  // Sort: grid first, then layout, then components, then colors, then typography
  const typePriority: Record<string, number> = {
    grid: 0,
    layout: 1,
    component: 2,
    color: 3,
    typography: 4,
  }
  results.sort((a, b) => {
    const aPri = Math.min(...a.changes.map((c) => typePriority[c.type] ?? 99))
    const bPri = Math.min(...b.changes.map((c) => typePriority[c.type] ?? 99))
    return aPri - bPri
  })

  return results
}
