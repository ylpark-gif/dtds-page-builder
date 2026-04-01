import { nanoid } from 'nanoid'
import type { PageNode } from '../../schema/node'

export function n(type: string, props: Record<string, unknown> = {}, children: PageNode[] = [], textContent?: string): PageNode {
  return {
    id: nanoid(),
    type,
    props,
    children,
    textContent,
  }
}
