// Migration map: Old Doctalk Design System → New Design System
// Maps components, colors, typography, and grid patterns

export interface ComponentMapping {
  oldName: string
  newName: string
  newProps?: Record<string, string>
  newImports: string[]
  category: 'button' | 'input' | 'select' | 'feedback' | 'navigation' | 'layout' | 'data-display'
}

export interface ColorMapping {
  oldVar: string
  oldHex: string
  newVar: string
  newTailwind: string
  context: 'text' | 'background' | 'border' | 'accent'
}

export interface TypoMapping {
  oldMixin: string
  oldSize: string
  oldWeight: string
  newClass: string
  newSize: string
  newWeight: string
}

export interface GridMapping {
  oldPattern: string
  newPattern: string
  description: string
}

// ---------------------------------------------------------------------------
// Component Map
// ---------------------------------------------------------------------------

export const COMPONENT_MAP: ComponentMapping[] = [
  {
    oldName: 'AppButton',
    newName: 'Button',
    newProps: { variant: 'default' },
    newImports: ['Button'],
    category: 'button',
  },
  {
    oldName: 'FiledButton',
    newName: 'Button',
    newProps: { variant: 'default', size: 'sm' },
    newImports: ['Button'],
    category: 'button',
  },
  {
    oldName: 'OutlinedButton',
    newName: 'Button',
    newProps: { variant: 'outline' },
    newImports: ['Button'],
    category: 'button',
  },
  {
    oldName: 'ButtonLargeFilled',
    newName: 'Button',
    newProps: { size: 'lg' },
    newImports: ['Button'],
    category: 'button',
  },
  {
    oldName: 'ButtonStorkeLarge',
    newName: 'Button',
    newProps: { variant: 'outline', size: 'lg' },
    newImports: ['Button'],
    category: 'button',
  },
  {
    oldName: 'TextButton',
    newName: 'Button',
    newProps: { variant: 'ghost' },
    newImports: ['Button'],
    category: 'button',
  },
  {
    oldName: 'Chips',
    newName: 'Chip',
    newImports: ['Chip'],
    category: 'feedback',
  },
  {
    oldName: 'AppTextField',
    newName: 'Input + Field + FieldLabel',
    newImports: ['Input', 'Field', 'FieldLabel'],
    category: 'input',
  },
  {
    oldName: 'TextField',
    newName: 'Input',
    newImports: ['Input'],
    category: 'input',
  },
  {
    oldName: 'LabelTextInput',
    newName: 'Input + FieldLabel',
    newImports: ['Input', 'FieldLabel'],
    category: 'input',
  },
  {
    oldName: 'AppSelect',
    newName: 'Select + SelectTrigger + SelectContent + SelectItem',
    newImports: ['Select', 'SelectTrigger', 'SelectContent', 'SelectItem'],
    category: 'select',
  },
  {
    oldName: 'AppCheckBox',
    newName: 'Checkbox',
    newImports: ['Checkbox'],
    category: 'input',
  },
  {
    oldName: 'RadioField',
    newName: 'RadioGroup + RadioGroupItem',
    newImports: ['RadioGroup', 'RadioGroupItem'],
    category: 'input',
  },
  {
    oldName: 'AppTable',
    newName: 'Table + TableHeader + TableBody + TableRow + TableCell',
    newImports: ['Table', 'TableHeader', 'TableBody', 'TableRow', 'TableCell'],
    category: 'data-display',
  },
  {
    oldName: 'PageNation',
    newName: 'Pagination',
    newImports: ['Pagination'],
    category: 'navigation',
  },
  {
    oldName: 'SkeletonUi',
    newName: 'Skeleton',
    newImports: ['Skeleton'],
    category: 'feedback',
  },
  {
    oldName: 'PrograssBar',
    newName: 'Progress',
    newImports: ['Progress'],
    category: 'feedback',
  },
  {
    oldName: 'Switch',
    newName: 'Switch',
    newImports: ['Switch'],
    category: 'input',
  },
  {
    oldName: 'TwoButtonPopup',
    newName: 'Dialog',
    newImports: ['Dialog'],
    category: 'feedback',
  },
  {
    oldName: 'AppHeader',
    newName: 'TopNavigation',
    newImports: ['TopNavigation'],
    category: 'navigation',
  },
  {
    oldName: 'DatePicker',
    newName: 'DatePicker',
    newImports: ['DatePicker'],
    category: 'input',
  },
  {
    oldName: 'TimePicker',
    newName: 'TimePicker',
    newImports: ['TimePicker'],
    category: 'input',
  },
]

// ---------------------------------------------------------------------------
// Color Map
// ---------------------------------------------------------------------------

export const COLOR_MAP: ColorMapping[] = [
  {
    oldVar: '--gray900',
    oldHex: '#333333',
    newVar: '--foreground',
    newTailwind: 'text-foreground',
    context: 'text',
  },
  {
    oldVar: '--gray600',
    oldHex: '#737373',
    newVar: '--muted-foreground',
    newTailwind: 'text-muted-foreground',
    context: 'text',
  },
  {
    oldVar: '--gray300',
    oldHex: '#b3b3b3',
    newVar: '--muted-foreground',
    newTailwind: 'text-muted-foreground',
    context: 'text',
  },
  {
    oldVar: '--gray150',
    oldHex: '#d9d9d9',
    newVar: '--border',
    newTailwind: 'border-border',
    context: 'border',
  },
  {
    oldVar: '--gray100',
    oldHex: '#e6e6e6',
    newVar: '--muted',
    newTailwind: 'bg-muted',
    context: 'background',
  },
  {
    oldVar: '--gray50',
    oldHex: '#f2f2f2',
    newVar: '--background-secondary',
    newTailwind: 'bg-background-secondary',
    context: 'background',
  },
  {
    oldVar: '--dg500',
    oldHex: '#2fd096',
    newVar: '--primary',
    newTailwind: 'bg-primary',
    context: 'accent',
  },
  {
    oldVar: '--dg100',
    oldHex: '',
    newVar: '--primary-muted',
    newTailwind: 'bg-primary/10',
    context: 'accent',
  },
  {
    oldVar: '--red500',
    oldHex: '#ec221f',
    newVar: '--destructive',
    newTailwind: 'text-destructive',
    context: 'accent',
  },
  {
    oldVar: '--white',
    oldHex: '#ffffff',
    newVar: '--background',
    newTailwind: 'bg-background',
    context: 'background',
  },
  {
    oldVar: '--ba700',
    oldHex: '',
    newVar: 'overlay',
    newTailwind: 'bg-black/50',
    context: 'background',
  },
]

// ---------------------------------------------------------------------------
// Typography Map
// ---------------------------------------------------------------------------

export const TYPO_MAP: TypoMapping[] = [
  {
    oldMixin: 'display1Bold',
    oldSize: '60px',
    oldWeight: '700',
    newClass: 'typo-display-01-compact-bold',
    newSize: '60px',
    newWeight: '700',
  },
  {
    oldMixin: 'title1Bold',
    oldSize: '36px',
    oldWeight: '700',
    newClass: 'typo-display-05-compact-bold',
    newSize: '36px',
    newWeight: '700',
  },
  {
    oldMixin: 'title3Bold',
    oldSize: '28px',
    oldWeight: '700',
    newClass: 'typo-heading-01-compact-bold',
    newSize: '28px',
    newWeight: '700',
  },
  {
    oldMixin: 'title5Bold',
    oldSize: '20px',
    oldWeight: '700',
    newClass: 'typo-title-02-compact-bold',
    newSize: '20px',
    newWeight: '700',
  },
  {
    oldMixin: "text1('Bold')",
    oldSize: '28px',
    oldWeight: '700',
    newClass: 'typo-heading-01-compact-bold',
    newSize: '28px',
    newWeight: '700',
  },
  {
    oldMixin: "text2('SemiBold')",
    oldSize: '24px',
    oldWeight: '600',
    newClass: 'typo-heading-02-compact-semibold',
    newSize: '24px',
    newWeight: '600',
  },
  {
    oldMixin: "text3('SemiBold')",
    oldSize: '20px',
    oldWeight: '600',
    newClass: 'typo-title-02-compact-semibold',
    newSize: '20px',
    newWeight: '600',
  },
  {
    oldMixin: "text4('SemiBold')",
    oldSize: '18px',
    oldWeight: '600',
    newClass: 'typo-body-01-compact-semibold',
    newSize: '18px',
    newWeight: '600',
  },
  {
    oldMixin: 'text5Medium',
    oldSize: '16px',
    oldWeight: '500',
    newClass: 'typo-body-02-normal-medium',
    newSize: '16px',
    newWeight: '500',
  },
  {
    oldMixin: 'text6Bold',
    oldSize: '14px',
    oldWeight: '600',
    newClass: 'typo-label-01-compact-semibold',
    newSize: '14px',
    newWeight: '600',
  },
  {
    oldMixin: "oneLineText7('Medium')",
    oldSize: '14px',
    oldWeight: '500',
    newClass: 'typo-label-01-compact-medium',
    newSize: '14px',
    newWeight: '500',
  },
  {
    oldMixin: "oneLineText7('SemiBold')",
    oldSize: '14px',
    oldWeight: '600',
    newClass: 'typo-label-01-compact-semibold',
    newSize: '14px',
    newWeight: '600',
  },
  {
    oldMixin: 'body1Medium',
    oldSize: '18px',
    oldWeight: '500',
    newClass: 'typo-body-01-normal-medium',
    newSize: '18px',
    newWeight: '500',
  },
  {
    oldMixin: 'body2SemiBold',
    oldSize: '16px',
    oldWeight: '600',
    newClass: 'typo-body-02-normal-semibold',
    newSize: '16px',
    newWeight: '600',
  },
  {
    oldMixin: 'body2Medium',
    oldSize: '16px',
    oldWeight: '500',
    newClass: 'typo-body-02-normal-medium',
    newSize: '16px',
    newWeight: '500',
  },
  {
    oldMixin: 'body2Regular',
    oldSize: '16px',
    oldWeight: '400',
    newClass: 'typo-body-02-normal-regular',
    newSize: '16px',
    newWeight: '400',
  },
  {
    oldMixin: 'label1SemiBold',
    oldSize: '14px',
    oldWeight: '600',
    newClass: 'typo-label-01-normal-semibold',
    newSize: '14px',
    newWeight: '600',
  },
  {
    oldMixin: 'label2SemiBold',
    oldSize: '12px',
    oldWeight: '600',
    newClass: 'typo-caption-01-normal-semibold',
    newSize: '12px',
    newWeight: '600',
  },
]

// ---------------------------------------------------------------------------
// Grid Map
// ---------------------------------------------------------------------------

export const GRID_MAP: GridMapping[] = [
  {
    oldPattern: 'grid-template-columns: 1fr 1fr 1fr',
    newPattern: 'grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-12 md:gap-4 [&>*]:md:col-span-4',
    description: '3-column equal grid → 12-col grid with col-span-4 per item',
  },
  {
    oldPattern: 'grid-template-columns: 1fr 1fr',
    newPattern: 'grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4 [&>*]:md:col-span-6',
    description: '2-column equal grid → 12-col grid with col-span-6 per item',
  },
  {
    oldPattern: 'max-width: 1120px',
    newPattern: 'max-w-[1280px] mx-auto',
    description: 'Old 1120px content width → Fixed Narrow (1280px)',
  },
  {
    oldPattern: 'max-width: 900px',
    newPattern: 'max-w-[1280px] mx-auto',
    description: 'Old 900px content width → Fixed Narrow (1280px)',
  },
  {
    oldPattern: 'AppHeader (80px fixed)',
    newPattern: 'TopNavigation (56px sticky)',
    description: 'Old fixed 80px header → new sticky 56px TopNavigation',
  },
  {
    oldPattern: 'No sidebar',
    newPattern: 'Optional Sidebar (280px)',
    description: 'Layouts can now include an optional 280px sidebar',
  },
  {
    oldPattern: 'No grid type defined',
    newPattern: 'max-w-[1600px] mx-auto',
    description: 'Default → Fixed Wide (1600px) max-width container',
  },
]

// ---------------------------------------------------------------------------
// Helper Functions
// ---------------------------------------------------------------------------

/**
 * Find a component mapping by the old component name.
 */
export function findComponentMapping(oldName: string): ComponentMapping | undefined {
  return COMPONENT_MAP.find(
    (m) => m.oldName.toLowerCase() === oldName.toLowerCase(),
  )
}

/**
 * Find a color mapping by CSS variable name (with or without `--` prefix) or hex value.
 */
export function findColorMapping(hexOrVar: string): ColorMapping | undefined {
  const normalized = hexOrVar.startsWith('--') ? hexOrVar : hexOrVar.toLowerCase()
  return COLOR_MAP.find(
    (m) =>
      m.oldVar === normalized ||
      m.oldHex.toLowerCase() === normalized ||
      m.newVar === normalized,
  )
}

/**
 * Find a typography mapping by font size (e.g. "16px") and font weight (e.g. "500").
 * When multiple mixins share the same size/weight pair the first match is returned.
 */
export function findTypoMapping(fontSize: string, fontWeight: string): TypoMapping | undefined {
  return TYPO_MAP.find(
    (m) => m.oldSize === fontSize && m.oldWeight === fontWeight,
  )
}
