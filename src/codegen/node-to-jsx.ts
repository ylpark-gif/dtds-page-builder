import type { PageNode } from '@/schema/node'
import { registry } from '@/registry/registry'
import { ImportsCollector } from './imports-collector'

function indent(str: string, spaces: number): string {
  const pad = ' '.repeat(spaces)
  return str
    .split('\n')
    .map((line) => (line.trim() ? pad + line : line))
    .join('\n')
}

function propsToString(props: Record<string, unknown>, def: ReturnType<typeof registry.get>): string {
  if (!def) return ''

  const parts: string[] = []
  for (const [key, value] of Object.entries(props)) {
    const propDef = def.props.find((p) => p.name === key)
    if (!propDef) continue
    const defaultVal = 'default' in propDef.type ? propDef.type.default : undefined
    if (value === defaultVal) continue
    if (value === undefined || value === null) continue

    if (typeof value === 'boolean') {
      parts.push(value ? key : `${key}={false}`)
    } else if (typeof value === 'number') {
      parts.push(`${key}={${value}}`)
    } else if (typeof value === 'string') {
      parts.push(`${key}="${value}"`)
    } else {
      parts.push(`${key}={${JSON.stringify(value)}}`)
    }
  }
  return parts.length > 0 ? ' ' + parts.join(' ') : ''
}

export function nodeToJsx(node: PageNode, imports: ImportsCollector, depth: number = 0): string {
  if (node.type === '__root__') {
    return node.children.map((child) => nodeToJsx(child, imports, depth)).join('\n')
  }

  const def = registry.get(node.type)
  if (!def) return `{/* Unknown: ${node.type} */}`

  imports.add(def.importPath, ...def.importNames)

  // Handle composition components with custom rendering
  if (def.type === 'Card') {
    return cardToJsx(node, imports, depth)
  }
  if (def.type === 'Alert') {
    return alertToJsx(node, imports, depth)
  }
  if (def.type === 'Header') {
    return headerToJsx(node, imports, depth)
  }

  const tag = node.type
  const propsStr = propsToString(node.props, def)

  // Self-closing if no content
  if (!node.textContent && node.children.length === 0) {
    return `<${tag}${propsStr} />`
  }

  // With children
  if (node.textContent && node.children.length === 0) {
    return `<${tag}${propsStr}>${node.textContent}</${tag}>`
  }

  const childrenJsx = node.children.map((child) => nodeToJsx(child, imports, depth + 1)).join('\n')
  return `<${tag}${propsStr}>\n${indent(childrenJsx, 2)}\n</${tag}>`
}

function cardToJsx(node: PageNode, imports: ImportsCollector, depth: number): string {
  const { variant, interactive, title, description, showFooter, footerText } = node.props as Record<string, any>
  const def = registry.get('Card')!
  const variantStr = variant && variant !== 'default' ? ` variant="${variant}"` : ''
  const interactiveStr = interactive ? ' interactive' : ''

  const lines: string[] = []
  lines.push(`<Card${variantStr}${interactiveStr}>`)

  if (title || description) {
    lines.push('  <CardHeader>')
    if (title) lines.push(`    <CardTitle>${title}</CardTitle>`)
    if (description) lines.push(`    <CardDescription>${description}</CardDescription>`)
    lines.push('  </CardHeader>')
  }

  lines.push('  <CardContent>')
  lines.push('    {/* Content */}')
  lines.push('  </CardContent>')

  if (showFooter) {
    lines.push('  <CardFooter>')
    lines.push(`    <Button>${footerText || '확인'}</Button>`)
    lines.push('  </CardFooter>')
    imports.add('doctalk-design-system', 'Button')
  }

  lines.push('</Card>')
  return lines.join('\n')
}

function alertToJsx(node: PageNode, imports: ImportsCollector, depth: number): string {
  const { variant, inline, removable, title, description } = node.props as Record<string, any>
  const propsArr: string[] = []
  if (variant && variant !== 'info') propsArr.push(`variant="${variant}"`)
  if (inline) propsArr.push('inline')
  if (removable) propsArr.push('removable')
  const propsStr = propsArr.length > 0 ? ' ' + propsArr.join(' ') : ''

  const lines: string[] = []
  lines.push(`<Alert${propsStr}>`)
  if (title) lines.push(`  <AlertTitle>${title}</AlertTitle>`)
  if (description) lines.push(`  <AlertDescription>${description}</AlertDescription>`)
  lines.push('</Alert>')
  return lines.join('\n')
}

function headerToJsx(node: PageNode, imports: ImportsCollector, depth: number): string {
  const { size, heading, description } = node.props as Record<string, any>
  const sizeStr = size && size !== 'section' ? ` size="${size}"` : ''

  const lines: string[] = []
  lines.push('<Header>')
  if (heading) lines.push(`  <HeaderHeading${sizeStr}>${heading}</HeaderHeading>`)
  if (description) lines.push(`  <HeaderDescription>${description}</HeaderDescription>`)
  lines.push('</Header>')
  return lines.join('\n')
}
