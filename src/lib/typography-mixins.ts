/**
 * Doctalk SCSS mixin typography map.
 * Source: assets/scss/abstracts/_mixin.scss
 */

export interface TypoMixin {
  mixin: string       // @include usage, e.g. text2('SemiBold')
  fontSize: number    // px
  fontWeight: number
  lineHeightPx?: number   // resolved px (approximate)
  isLegacy: boolean
  category: 'display' | 'title' | 'body' | 'label' | 'text' | 'oneline'
}

export const TYPO_MIXINS: TypoMixin[] = [
  // ── New DS system (preferred) ──────────────────────────────
  { mixin: "display1Bold",   fontSize: 60, fontWeight: 700, lineHeightPx: 77,  isLegacy: false, category: 'display' },
  { mixin: "display2Bold",   fontSize: 52, fontWeight: 700, lineHeightPx: 67,  isLegacy: false, category: 'display' },
  { mixin: "display3Bold",   fontSize: 48, fontWeight: 700, lineHeightPx: 61,  isLegacy: false, category: 'display' },
  { mixin: "display4Bold",   fontSize: 44, fontWeight: 700, lineHeightPx: 58,  isLegacy: false, category: 'display' },
  { mixin: "display5Bold",   fontSize: 40, fontWeight: 700, lineHeightPx: 55,  isLegacy: false, category: 'display' },
  { mixin: "title1Bold",     fontSize: 36, fontWeight: 700, lineHeightPx: 49,  isLegacy: false, category: 'title' },
  { mixin: "title3Bold",     fontSize: 28, fontWeight: 700, lineHeightPx: 38,  isLegacy: false, category: 'title' },
  { mixin: "title4Bold",     fontSize: 24, fontWeight: 700, lineHeightPx: 33,  isLegacy: false, category: 'title' },
  { mixin: "title5Bold",     fontSize: 20, fontWeight: 700, lineHeightPx: 28,  isLegacy: false, category: 'title' },
  { mixin: "body1Medium",    fontSize: 18, fontWeight: 500, lineHeightPx: 26,  isLegacy: false, category: 'body' },
  { mixin: "body2SemiBold",  fontSize: 16, fontWeight: 600, lineHeightPx: 24,  isLegacy: false, category: 'body' },
  { mixin: "body2Medium",    fontSize: 16, fontWeight: 500, lineHeightPx: 24,  isLegacy: false, category: 'body' },
  { mixin: "body2Regular",   fontSize: 16, fontWeight: 400, lineHeightPx: 24,  isLegacy: false, category: 'body' },
  { mixin: "label1SemiBold", fontSize: 14, fontWeight: 600, lineHeightPx: 20,  isLegacy: false, category: 'label' },
  { mixin: "label2SemiBold", fontSize: 12, fontWeight: 600, lineHeightPx: 17,  isLegacy: false, category: 'label' },

  // ── Current system (text1-7) ───────────────────────────────
  { mixin: "text1('Bold')",      fontSize: 28, fontWeight: 700, lineHeightPx: 30, isLegacy: false, category: 'text' },
  { mixin: "text1('SemiBold')",  fontSize: 28, fontWeight: 600, lineHeightPx: 30, isLegacy: false, category: 'text' },
  { mixin: "text2('Bold')",      fontSize: 24, fontWeight: 700, lineHeightPx: 30, isLegacy: false, category: 'text' },
  { mixin: "text2('SemiBold')",  fontSize: 24, fontWeight: 600, lineHeightPx: 30, isLegacy: false, category: 'text' },
  { mixin: "text3('Bold')",      fontSize: 20, fontWeight: 700, lineHeightPx: 24, isLegacy: false, category: 'text' },
  { mixin: "text3('SemiBold')",  fontSize: 20, fontWeight: 600, lineHeightPx: 24, isLegacy: false, category: 'text' },
  { mixin: "text4('SemiBold')",  fontSize: 18, fontWeight: 600, lineHeightPx: 22, isLegacy: false, category: 'text' },
  { mixin: "text4('Medium')",    fontSize: 18, fontWeight: 500, lineHeightPx: 22, isLegacy: false, category: 'text' },
  { mixin: "oneLineText7('SemiBold')", fontSize: 14, fontWeight: 600, lineHeightPx: 22, isLegacy: false, category: 'oneline' },
  { mixin: "oneLineText7('Medium')",   fontSize: 14, fontWeight: 500, lineHeightPx: 22, isLegacy: false, category: 'oneline' },

  // ── Legacy system ──────────────────────────────────────────
  { mixin: "text1Bold",       fontSize: 28, fontWeight: 700, lineHeightPx: 30, isLegacy: true, category: 'text' },
  { mixin: "text2SemiBold",   fontSize: 28, fontWeight: 600, lineHeightPx: 30, isLegacy: true, category: 'text' },
  { mixin: "text2Bold",       fontSize: 24, fontWeight: 700, lineHeightPx: 30, isLegacy: true, category: 'text' },
  { mixin: "text3SemiBold",   fontSize: 20, fontWeight: 600, lineHeightPx: 24, isLegacy: true, category: 'text' },
  { mixin: "text3Bold",       fontSize: 18, fontWeight: 600, lineHeightPx: 22, isLegacy: true, category: 'text' },
  { mixin: "text4Bold",       fontSize: 16, fontWeight: 700, lineHeightPx: 22, isLegacy: true, category: 'text' },
  { mixin: "text4SemiBold",   fontSize: 18, fontWeight: 600, lineHeightPx: 22, isLegacy: true, category: 'text' },
  { mixin: "text4Medium",     fontSize: 18, fontWeight: 500, lineHeightPx: 22, isLegacy: true, category: 'text' },
  { mixin: "text4Nolmal",     fontSize: 16, fontWeight: 400, lineHeightPx: 22, isLegacy: true, category: 'text' },
  { mixin: "text5Medium",     fontSize: 16, fontWeight: 500, lineHeightPx: 22, isLegacy: true, category: 'text' },
  { mixin: "text5Nolmal",     fontSize: 15, fontWeight: 400, lineHeightPx: 21, isLegacy: true, category: 'text' },
  { mixin: "text6Bold",       fontSize: 14, fontWeight: 600, lineHeightPx: 20, isLegacy: true, category: 'text' },
  { mixin: "text7Semibold",   fontSize: 14, fontWeight: 600, lineHeightPx: 20, isLegacy: true, category: 'text' },
  { mixin: "text6Nolmal",     fontSize: 14, fontWeight: 400, lineHeightPx: 20, isLegacy: true, category: 'text' },
  { mixin: "oneLineText4Bold",fontSize: 16, fontWeight: 700, lineHeightPx: 16, isLegacy: true, category: 'oneline' },
  { mixin: "oneLineText5Bold",fontSize: 18, fontWeight: 700, lineHeightPx: 22, isLegacy: true, category: 'oneline' },
  { mixin: "oneLineText6Bold",fontSize: 14, fontWeight: 600, lineHeightPx: 14, isLegacy: true, category: 'oneline' },
]

export interface TypoMatch {
  current: TypoMixin[]    // current system matches (non-legacy, non display/title/body/label)
  suggested: TypoMixin[]  // new DS suggestions (display/title/body/label)
  legacy: TypoMixin[]     // legacy matches
  fontSize: number
  fontWeight: number
  lineHeightPx: number
}

export function matchTypo(fontSizeStr: string, fontWeightStr: string, lineHeightStr: string): TypoMatch | null {
  const fontSize = parseFloat(fontSizeStr)
  const fontWeight = parseInt(fontWeightStr) || 400
  const lineHeightPx = parseFloat(lineHeightStr) || 0

  if (!fontSize || fontSize < 10) return null

  // Score: exact size+weight = 10pts, size only = 5pts, ±1px size = 3pts
  function score(m: TypoMixin): number {
    const sizeDiff = Math.abs(m.fontSize - fontSize)
    const weightDiff = Math.abs(m.fontWeight - fontWeight)
    if (sizeDiff > 3) return -1
    let s = 0
    if (sizeDiff === 0) s += 10; else if (sizeDiff <= 1) s += 3; else s += 1
    if (weightDiff === 0) s += 10; else if (weightDiff <= 100) s += 3; else s += 1
    return s
  }

  const scored = TYPO_MIXINS
    .map((m) => ({ m, s: score(m) }))
    .filter((x) => x.s >= 8) // must match closely
    .sort((a, b) => b.s - a.s)

  if (scored.length === 0) return null

  const newDS = ['display', 'title', 'body', 'label'] as const
  const current = scored.filter((x) => !x.m.isLegacy && !newDS.includes(x.m.category as never)).map((x) => x.m)
  const suggested = scored.filter((x) => !x.m.isLegacy && newDS.includes(x.m.category as never)).map((x) => x.m)
  const legacy = scored.filter((x) => x.m.isLegacy).map((x) => x.m)

  return { current, suggested, legacy, fontSize, fontWeight, lineHeightPx }
}
