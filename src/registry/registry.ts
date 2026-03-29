import type { ComponentDefinition } from './types'
// Phase 1 + 2 definitions
import { ButtonDefinition } from './definitions/button.def'
import { InputDefinition } from './definitions/input.def'
import { BadgeDefinition } from './definitions/badge.def'
import { ChipDefinition } from './definitions/chip.def'
import { SeparatorDefinition } from './definitions/separator.def'
import { TextareaDefinition } from './definitions/textarea.def'
import { ToggleDefinition } from './definitions/toggle.def'
import { CheckboxDefinition } from './definitions/checkbox.def'
import { SwitchDefinition } from './definitions/switch.def'
import { LabelDefinition } from './definitions/label.def'
import { SkeletonDefinition } from './definitions/skeleton.def'
import { SpinnerDefinition } from './definitions/spinner.def'
import { ProgressDefinition } from './definitions/progress.def'
import { KbdDefinition } from './definitions/kbd.def'
import { SurfaceDefinition } from './definitions/surface.def'
import { CardDefinition } from './definitions/card.def'
import { AlertDefinition } from './definitions/alert.def'
import { HeaderDefinition } from './definitions/header.def'
// Phase 3 definitions
import { RadioGroupDefinition } from './definitions/radio-group.def'
import { SelectDefinition } from './definitions/select.def'
import { ToggleGroupDefinition } from './definitions/toggle-group.def'
import { TabDefinition } from './definitions/tab.def'
import { SegmentedControlDefinition } from './definitions/segmented-control.def'
import { EmptyDefinition } from './definitions/empty.def'
import { TooltipDefinition } from './definitions/tooltip.def'
import { AccordionDefinition } from './definitions/accordion.def'
import { DialogDefinition } from './definitions/dialog.def'
import { ItemDefinition } from './definitions/item.def'
import { StepperDefinition } from './definitions/stepper.def'
import { PaginationDefinition } from './definitions/pagination.def'
import { BottomNavigationDefinition } from './definitions/bottom-navigation.def'
import { TopNavigationDefinition } from './definitions/top-navigation.def'
import {
  ComboboxDefinition,
  DatePickerDefinition,
  TimePickerDefinition,
  DropdownMenuDefinition,
  FieldDefinition,
  ImageUploaderDefinition,
  SheetDefinition,
  CalendarDefinition,
  DataTableDefinition,
  TableDefinition,
  SidebarDefinition,
} from './definitions/complex-components.def'

const definitions: ComponentDefinition[] = [
  // Action
  ButtonDefinition,
  ChipDefinition,
  ToggleDefinition,
  // Indicators and Feedback
  AlertDefinition,
  BadgeDefinition,
  KbdDefinition,
  LabelDefinition,
  ProgressDefinition,
  SkeletonDefinition,
  SpinnerDefinition,
  TooltipDefinition,
  EmptyDefinition,
  // Navigation
  BottomNavigationDefinition,
  TopNavigationDefinition,
  TabDefinition,
  StepperDefinition,
  PaginationDefinition,
  SidebarDefinition,
  // Selection and Input
  CheckboxDefinition,
  ComboboxDefinition,
  DatePickerDefinition,
  DropdownMenuDefinition,
  FieldDefinition,
  ImageUploaderDefinition,
  InputDefinition,
  RadioGroupDefinition,
  SegmentedControlDefinition,
  SelectDefinition,
  SwitchDefinition,
  TextareaDefinition,
  TimePickerDefinition,
  ToggleGroupDefinition,
  // Content Display
  AccordionDefinition,
  CalendarDefinition,
  CardDefinition,
  DataTableDefinition,
  DialogDefinition,
  HeaderDefinition,
  ItemDefinition,
  SeparatorDefinition,
  SheetDefinition,
  SurfaceDefinition,
  TableDefinition,
]

const registryMap = new Map<string, ComponentDefinition>()
for (const def of definitions) {
  registryMap.set(def.type, def)
}

export const registry = {
  get(type: string): ComponentDefinition | undefined {
    return registryMap.get(type)
  },
  getAll(): ComponentDefinition[] {
    return definitions
  },
  getByCategory(category: string): ComponentDefinition[] {
    return definitions.filter((d) => d.category === category && !d.isSubComponent)
  },
  has(type: string): boolean {
    return registryMap.has(type)
  },
}
