/**
 * Doctalk color token map
 * Sources: _color.scss (service tokens) + _ds-tokens.scss (DS tokens) + _variables.scss (semantic vars)
 */

export interface ColorToken {
  name: string          // CSS variable name, e.g. "--gray900"
  varExpr: string       // how to write it in CSS, e.g. "var(--gray900)"
  hex: string           // resolved hex value
  group: 'service' | 'ds-primitive' | 'ds-semantic' | 'semantic-var'
  label?: string        // optional friendly label
}

export const COLOR_TOKENS: ColorToken[] = [
  // ── Base ────────────────────────────────────────────────────
  { name: '--white',    varExpr: 'var(--white)',    hex: '#ffffff', group: 'service' },
  { name: '--black',    varExpr: 'var(--black)',    hex: '#000000', group: 'service' },

  // ── Service Gray ─────────────────────────────────────────────
  { name: '--gray50',   varExpr: 'var(--gray50)',   hex: '#f2f2f2', group: 'service' },
  { name: '--gray100',  varExpr: 'var(--gray100)',  hex: '#e6e6e6', group: 'service' },
  { name: '--gray150',  varExpr: 'var(--gray150)',  hex: '#d9d9d9', group: 'service' },
  { name: '--gray200',  varExpr: 'var(--gray200)',  hex: '#cccccc', group: 'service' },
  { name: '--gray300',  varExpr: 'var(--gray300)',  hex: '#b3b3b3', group: 'service' },
  { name: '--gray400',  varExpr: 'var(--gray400)',  hex: '#999999', group: 'service' },
  { name: '--gray500',  varExpr: 'var(--gray500)',  hex: '#808080', group: 'service' },
  { name: '--gray600',  varExpr: 'var(--gray600)',  hex: '#737373', group: 'service' },
  { name: '--gray700',  varExpr: 'var(--gray700)',  hex: '#666666', group: 'service' },
  { name: '--gray750',  varExpr: 'var(--gray750)',  hex: '#585858', group: 'service' },
  { name: '--gray800',  varExpr: 'var(--gray800)',  hex: '#4d4d4d', group: 'service' },
  { name: '--gray900',  varExpr: 'var(--gray900)',  hex: '#333333', group: 'service' },
  { name: '--gray1000', varExpr: 'var(--gray1000)', hex: '#1a1a1a', group: 'service' },

  // ── Service Doctalk Green (dg) ────────────────────────────────
  { name: '--dg25',    varExpr: 'var(--dg25)',    hex: '#f5fdfa', group: 'service' },
  { name: '--dg50',    varExpr: 'var(--dg50)',    hex: '#eafbf5', group: 'service' },
  { name: '--dg100',   varExpr: 'var(--dg100)',   hex: '#d5f6ea', group: 'service' },
  { name: '--dg200',   varExpr: 'var(--dg200)',   hex: '#acecd5', group: 'service' },
  { name: '--dg300',   varExpr: 'var(--dg300)',   hex: '#82e3c0', group: 'service' },
  { name: '--dg400',   varExpr: 'var(--dg400)',   hex: '#59d9ab', group: 'service' },
  { name: '--dg500',   varExpr: 'var(--dg500)',   hex: '#2fd096', group: 'service' },
  { name: '--dg600',   varExpr: 'var(--dg600)',   hex: '#2abb87', group: 'service' },
  { name: '--dg700',   varExpr: 'var(--dg700)',   hex: '#26a678', group: 'service' },
  { name: '--dg800',   varExpr: 'var(--dg800)',   hex: '#1c7d5a', group: 'service' },
  { name: '--dg900',   varExpr: 'var(--dg900)',   hex: '#13533c', group: 'service' },
  { name: '--dg1000',  varExpr: 'var(--dg1000)',  hex: '#092a1e', group: 'service' },

  // ── Service Red ───────────────────────────────────────────────
  { name: '--red100',  varExpr: 'var(--red100)',  hex: '#fbd3d2', group: 'service' },
  { name: '--red200',  varExpr: 'var(--red200)',  hex: '#f7a7a5', group: 'service' },
  { name: '--red300',  varExpr: 'var(--red300)',  hex: '#f47a79', group: 'service' },
  { name: '--red400',  varExpr: 'var(--red400)',  hex: '#f04e4c', group: 'service' },
  { name: '--red500',  varExpr: 'var(--red500)',  hex: '#ec221f', group: 'service' },
  { name: '--red600',  varExpr: 'var(--red600)',  hex: '#d41f1c', group: 'service' },
  { name: '--red700',  varExpr: 'var(--red700)',  hex: '#bd1b19', group: 'service' },
  { name: '--red800',  varExpr: 'var(--red800)',  hex: '#8e1413', group: 'service' },
  { name: '--red900',  varExpr: 'var(--red900)',  hex: '#5e0e0c', group: 'service' },

  // ── Semantic vars ($variables.scss) ──────────────────────────
  { name: '$BgMain',        varExpr: 'var(--white)',    hex: '#ffffff', group: 'semantic-var', label: 'BgMain' },
  { name: '$BgSub',         varExpr: 'var(--gray50)',   hex: '#f2f2f2', group: 'semantic-var', label: 'BgSub' },
  { name: '$BgExtra',       varExpr: 'var(--gray150)',  hex: '#d9d9d9', group: 'semantic-var', label: 'BgExtra' },
  { name: '$BgDisabled',    varExpr: 'var(--gray300)',  hex: '#b3b3b3', group: 'semantic-var', label: 'BgDisabled' },
  { name: '$BdMain',        varExpr: 'var(--gray150)',  hex: '#d9d9d9', group: 'semantic-var', label: 'BdMain' },
  { name: '$BdSub',         varExpr: 'var(--gray600)',  hex: '#737373', group: 'semantic-var', label: 'BdSub' },
  { name: '$BdExtra',       varExpr: 'var(--gray900)',  hex: '#333333', group: 'semantic-var', label: 'BdExtra' },
  { name: '$TxtMain',       varExpr: 'var(--gray900)',  hex: '#333333', group: 'semantic-var', label: 'TxtMain' },
  { name: '$TxtSub',        varExpr: 'var(--gray600)',  hex: '#737373', group: 'semantic-var', label: 'TxtSub' },
  { name: '$TxtExtra',      varExpr: 'var(--gray300)',  hex: '#b3b3b3', group: 'semantic-var', label: 'TxtExtra' },
  { name: '$TxtDisabled',   varExpr: 'var(--gray300)',  hex: '#b3b3b3', group: 'semantic-var', label: 'TxtDisabled' },
  { name: '$TxtHighlight',  varExpr: 'var(--dg500)',    hex: '#2fd096', group: 'semantic-var', label: 'TxtHighlight' },
  { name: '$TxtError',      varExpr: 'var(--red500)',   hex: '#ec221f', group: 'semantic-var', label: 'TxtError' },
  { name: '$BdError',       varExpr: 'var(--red500)',   hex: '#ec221f', group: 'semantic-var', label: 'BdError' },

  // ── DS Primitive: Gray ────────────────────────────────────────
  { name: '--ds-gray-50',  varExpr: 'var(--ds-gray-50)',  hex: '#f8f9fa', group: 'ds-primitive' },
  { name: '--ds-gray-100', varExpr: 'var(--ds-gray-100)', hex: '#f1f2f4', group: 'ds-primitive' },
  { name: '--ds-gray-200', varExpr: 'var(--ds-gray-200)', hex: '#e4e8e6', group: 'ds-primitive' },
  { name: '--ds-gray-300', varExpr: 'var(--ds-gray-300)', hex: '#d0d3d6', group: 'ds-primitive' },
  { name: '--ds-gray-400', varExpr: 'var(--ds-gray-400)', hex: '#9b9fa3', group: 'ds-primitive' },
  { name: '--ds-gray-500', varExpr: 'var(--ds-gray-500)', hex: '#6c7075', group: 'ds-primitive' },
  { name: '--ds-gray-600', varExpr: 'var(--ds-gray-600)', hex: '#4d5257', group: 'ds-primitive' },
  { name: '--ds-gray-700', varExpr: 'var(--ds-gray-700)', hex: '#3a3f44', group: 'ds-primitive' },
  { name: '--ds-gray-800', varExpr: 'var(--ds-gray-800)', hex: '#23272c', group: 'ds-primitive' },
  { name: '--ds-gray-900', varExpr: 'var(--ds-gray-900)', hex: '#14181c', group: 'ds-primitive' },
  { name: '--ds-gray-950', varExpr: 'var(--ds-gray-950)', hex: '#05070a', group: 'ds-primitive' },

  // ── DS Primitive: Emerald (Primary) ──────────────────────────
  { name: '--ds-emerald-50',  varExpr: 'var(--ds-emerald-50)',  hex: '#edfdf6', group: 'ds-primitive' },
  { name: '--ds-emerald-100', varExpr: 'var(--ds-emerald-100)', hex: '#d2fbe8', group: 'ds-primitive' },
  { name: '--ds-emerald-200', varExpr: 'var(--ds-emerald-200)', hex: '#a9f4d2', group: 'ds-primitive' },
  { name: '--ds-emerald-300', varExpr: 'var(--ds-emerald-300)', hex: '#70eabc', group: 'ds-primitive' },
  { name: '--ds-emerald-400', varExpr: 'var(--ds-emerald-400)', hex: '#33d9a3', group: 'ds-primitive' },
  { name: '--ds-emerald-500', varExpr: 'var(--ds-emerald-500)', hex: '#00c48c', group: 'ds-primitive' },
  { name: '--ds-emerald-600', varExpr: 'var(--ds-emerald-600)', hex: '#009e71', group: 'ds-primitive' },
  { name: '--ds-emerald-700', varExpr: 'var(--ds-emerald-700)', hex: '#007d5a', group: 'ds-primitive' },
  { name: '--ds-emerald-800', varExpr: 'var(--ds-emerald-800)', hex: '#006347', group: 'ds-primitive' },

  // ── DS Semantic ───────────────────────────────────────────────
  { name: '--ds-foreground',      varExpr: 'var(--ds-foreground)',      hex: '#05070a', group: 'ds-semantic', label: 'foreground' },
  { name: '--ds-background',      varExpr: 'var(--ds-background)',      hex: '#ffffff', group: 'ds-semantic', label: 'background' },
  { name: '--ds-primary',         varExpr: 'var(--ds-primary)',         hex: '#00c48c', group: 'ds-semantic', label: 'primary' },
  { name: '--ds-primary-muted',   varExpr: 'var(--ds-primary-muted)',   hex: '#d2fbe8', group: 'ds-semantic', label: 'primary-muted' },
  { name: '--ds-muted-foreground',varExpr: 'var(--ds-muted-foreground)',hex: '#6c7075', group: 'ds-semantic', label: 'muted-foreground' },
  { name: '--ds-destructive',     varExpr: 'var(--ds-destructive)',     hex: '#ef4444', group: 'ds-semantic', label: 'destructive' },
  { name: '--ds-border',          varExpr: 'var(--ds-border)',          hex: '#e4e8e6', group: 'ds-semantic', label: 'border' },
]

/** hex → #rrggbb normalized */
function normalizeHex(hex: string): string {
  const h = hex.toLowerCase().replace('#', '')
  if (h.length === 3) return '#' + h.split('').map((c) => c + c).join('')
  return '#' + h
}

/** rgb(r,g,b) string → #rrggbb */
export function rgbToHex(rgb: string): string {
  const m = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)
  if (!m) return rgb
  return '#' + [m[1], m[2], m[3]].map((n) => parseInt(n).toString(16).padStart(2, '0')).join('')
}

/** Find best matching color tokens for a computed color string */
export function matchColorToken(colorStr: string): ColorToken[] {
  if (!colorStr || colorStr === 'transparent' || colorStr === 'none') return []
  const hex = normalizeHex(colorStr.startsWith('rgb') ? rgbToHex(colorStr) : colorStr)
  return COLOR_TOKENS.filter((t) => normalizeHex(t.hex) === hex)
}

/** Groups for the dropdown selector */
export const COLOR_TOKEN_GROUPS = [
  { key: 'semantic-var' as const, label: 'Semantic ($Variables)' },
  { key: 'ds-semantic' as const, label: 'DS Semantic (--ds-*)' },
  { key: 'service' as const, label: 'Service (Gray / dg / Red)' },
  { key: 'ds-primitive' as const, label: 'DS Primitive (--ds-gray / --ds-emerald)' },
]
