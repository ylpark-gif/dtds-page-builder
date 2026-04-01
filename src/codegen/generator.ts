import type { Page } from '@/schema/node'
import { ImportsCollector } from './imports-collector'
import { nodeToJsx } from './node-to-jsx'

function toComponentName(pageName: string): string {
  return pageName
    .replace(/[^a-zA-Z0-9가-힣\s]/g, '')
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

function getGridClasses(settings: Page['settings']): string {
  switch (settings.gridType) {
    case 'fixed-wide':
      return 'max-w-[1600px] mx-auto px-4 py-6 md:px-8 md:py-8'
    case 'fixed-narrow':
      return 'max-w-[1280px] mx-auto px-4 py-6 md:px-8 md:py-8'
    case 'fluid':
    default:
      return 'px-4 py-6 md:px-8 md:py-8'
  }
}

function formatCode(code: string): string {
  // Simple formatting: normalize indentation
  const lines = code.split('\n')
  const result: string[] = []
  let indentLevel = 0

  for (const rawLine of lines) {
    const line = rawLine.trim()
    if (!line) {
      result.push('')
      continue
    }

    // Decrease indent for closing tags
    if (line.startsWith('</') || line.startsWith('}') || line === ')' || line === ');') {
      indentLevel = Math.max(0, indentLevel - 1)
    }

    result.push('  '.repeat(indentLevel) + line)

    // Increase indent for opening tags (not self-closing)
    if (
      (line.startsWith('<') && !line.startsWith('</') && !line.endsWith('/>') && !line.includes('</')) ||
      line.endsWith('{') ||
      line === '('
    ) {
      indentLevel++
    }
  }

  return result.join('\n')
}

export function generatePageCode(page: Page): string {
  const imports = new ImportsCollector()
  const jsxContent = nodeToJsx(page.root, imports)

  if (!jsxContent.trim()) {
    return `// ${page.name} - Empty page\nexport default function ${toComponentName(page.name)}Page() {\n  return <div />;\n}\n`
  }

  const importBlock = imports.toCode()
  const gridClasses = getGridClasses(page.settings)

  const indentedJsx = jsxContent
    .split('\n')
    .map((line) => (line.trim() ? '        ' + line : ''))
    .join('\n')

  const code = `${importBlock}

export default function ${toComponentName(page.name)}Page() {
  return (
    <div className="${gridClasses}">
      <div className="space-y-4">
${indentedJsx}
      </div>
    </div>
  );
}
`

  return code
}

export function generateProjectCode(pages: Page[]): { filename: string; code: string }[] {
  return pages.map((page) => ({
    filename: `${page.name.replace(/\s+/g, '-').toLowerCase()}-page.tsx`,
    code: generatePageCode(page),
  }))
}
