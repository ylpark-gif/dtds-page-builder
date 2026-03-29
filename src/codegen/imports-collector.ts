export class ImportsCollector {
  private imports = new Map<string, Set<string>>()

  add(from: string, ...names: string[]) {
    if (!this.imports.has(from)) {
      this.imports.set(from, new Set())
    }
    const set = this.imports.get(from)!
    for (const name of names) {
      set.add(name)
    }
  }

  toCode(): string {
    const lines: string[] = []
    for (const [from, names] of this.imports) {
      const sorted = Array.from(names).sort()
      lines.push(`import { ${sorted.join(', ')} } from "${from}";`)
    }
    return lines.join('\n')
  }
}
