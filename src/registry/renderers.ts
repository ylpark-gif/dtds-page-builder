import React from 'react'
import {
  Button,
  Input,
  Badge,
  Chip,
  Separator,
  Textarea,
  Toggle,
  Checkbox,
  Switch,
  Label,
  Skeleton,
  Spinner,
  Progress,
  Kbd,
  Surface,
} from 'doctalk-design-system'
import type { PageNode } from '@/schema/node'
import { registry } from './registry'

const componentMap: Record<string, React.ComponentType<any>> = {
  Button,
  Input,
  Badge,
  Chip,
  Separator,
  Textarea,
  Toggle,
  Checkbox,
  Switch,
  Label,
  Skeleton,
  Spinner,
  Progress,
  Kbd,
  Surface,
}

export function getComponent(type: string): React.ComponentType<any> | undefined {
  return componentMap[type]
}

export function renderNode(node: PageNode): React.ReactElement | null {
  const def = registry.get(node.type)
  if (!def) return null

  if (def.customRenderer) {
    return def.customRenderer(node, (children) =>
      children.map((child) => renderNode(child)).filter(Boolean) as React.ReactElement[]
    )
  }

  const Component = getComponent(node.type)
  if (!Component) return null

  const filteredProps: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(node.props)) {
    const propDef = def.props.find((p) => p.name === key)
    if (!propDef) continue
    const defaultVal = 'default' in propDef.type ? propDef.type.default : undefined
    if (value !== defaultVal) {
      filteredProps[key] = value
    }
  }

  // Render children recursively, fall back to textContent
  if (node.children && node.children.length > 0) {
    const renderedChildren = node.children
      .map((child) => renderNode(child))
      .filter(Boolean) as React.ReactElement[]
    return React.createElement(Component, { ...filteredProps, key: node.id }, ...renderedChildren)
  }

  const children = node.textContent || undefined
  return React.createElement(Component, { ...filteredProps, key: node.id }, children)
}
