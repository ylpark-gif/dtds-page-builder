import React from 'react'
import type { ComponentDefinition } from '../types'

// Helper: creates a preview placeholder for complex components
function previewCard(label: string, icon: string, description?: string) {
  return React.createElement('div', { className: 'rounded-xl border border-dashed border-border p-6 flex flex-col items-center gap-2 bg-muted/30' },
    React.createElement('span', { className: 'material-symbols-rounded text-[32px] text-muted-foreground/40' }, icon),
    React.createElement('span', { className: 'text-xs font-medium text-muted-foreground' }, label),
    description && React.createElement('span', { className: 'text-[10px] text-muted-foreground/50' }, description)
  )
}

export const ComboboxDefinition: ComponentDefinition = {
  type: 'Combobox',
  displayName: 'Combobox',
  category: 'Selection and Input',
  description: '검색 가능한 드롭다운 선택 컴포넌트',
  icon: 'search',
  props: [
    { name: 'variant', type: { kind: 'select', options: ['outline', 'underline'], default: 'outline' }, label: 'Variant', category: 'Component' },
    { name: 'size', type: { kind: 'select', options: ['sm', 'default', 'lg'], default: 'default' }, label: 'Size', category: 'Component' },
    { name: 'placeholder', type: { kind: 'text', default: '검색하세요' }, label: 'Placeholder', category: 'Component' },
    { name: 'multiple', type: { kind: 'boolean', default: false }, label: 'Multiple', category: 'Component' },
    { name: 'disabled', type: { kind: 'boolean', default: false }, label: 'Disabled', category: 'Component' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'Combobox', props: { variant: 'outline', size: 'default', placeholder: '검색하세요' }, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['Combobox'],
  customRenderer: (node) => previewCard('Combobox', 'search', node.props.placeholder as string),
}

export const DatePickerDefinition: ComponentDefinition = {
  type: 'DatePicker',
  displayName: 'DatePicker',
  category: 'Selection and Input',
  description: '날짜를 선택하는 컴포넌트',
  icon: 'calendar_today',
  props: [
    { name: 'variant', type: { kind: 'select', options: ['outline', 'underline'], default: 'outline' }, label: 'Variant', category: 'Component' },
    { name: 'size', type: { kind: 'select', options: ['sm', 'default', 'lg'], default: 'default' }, label: 'Size', category: 'Component' },
    { name: 'placeholder', type: { kind: 'text', default: '날짜 선택' }, label: 'Placeholder', category: 'Component' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'DatePicker', props: { variant: 'outline', size: 'default', placeholder: '날짜 선택' }, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['DatePicker'],
  customRenderer: (node) => previewCard('DatePicker', 'calendar_today', node.props.placeholder as string),
}

export const TimePickerDefinition: ComponentDefinition = {
  type: 'TimePicker',
  displayName: 'TimePicker',
  category: 'Selection and Input',
  description: '시간을 선택하는 컴포넌트',
  icon: 'schedule',
  props: [
    { name: 'variant', type: { kind: 'select', options: ['outline', 'underline'], default: 'outline' }, label: 'Variant', category: 'Component' },
    { name: 'size', type: { kind: 'select', options: ['sm', 'default', 'lg'], default: 'default' }, label: 'Size', category: 'Component' },
    { name: 'use12Hour', type: { kind: 'boolean', default: false }, label: '12시간 형식', category: 'Component' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'TimePicker', props: { variant: 'outline', size: 'default' }, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['TimePicker'],
  customRenderer: () => previewCard('TimePicker', 'schedule', '시간 선택'),
}

export const DropdownMenuDefinition: ComponentDefinition = {
  type: 'DropdownMenu',
  displayName: 'Dropdown Menu',
  category: 'Selection and Input',
  description: '클릭 시 메뉴 목록을 표시하는 드롭다운',
  icon: 'menu',
  props: [],
  slots: [],
  defaultNode: () => ({ type: 'DropdownMenu', props: {}, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['DropdownMenu', 'DropdownMenuTrigger', 'DropdownMenuContent', 'DropdownMenuItem'],
  customRenderer: () => previewCard('DropdownMenu', 'menu', '클릭하여 메뉴 열기'),
}

export const FieldDefinition: ComponentDefinition = {
  type: 'Field',
  displayName: 'Field',
  category: 'Selection and Input',
  description: '라벨, 입력, 설명, 에러를 조합하는 폼 필드',
  icon: 'input',
  props: [
    { name: 'label', type: { kind: 'text', default: '라벨' }, label: 'Label', category: 'Component' },
    { name: 'description', type: { kind: 'text', default: '' }, label: 'Description', category: 'Component' },
    { name: 'error', type: { kind: 'text', default: '' }, label: 'Error', category: 'Component' },
    { name: 'placeholder', type: { kind: 'text', default: '입력하세요' }, label: 'Placeholder', category: 'Component' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'Field', props: { label: '라벨', placeholder: '입력하세요' }, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['Field', 'FieldLabel', 'FieldDescription', 'FieldError', 'FieldContent', 'Input'],
  customRenderer: (node) => {
    const { label, description, error, placeholder } = node.props as Record<string, any>
    return React.createElement('div', { className: 'space-y-1.5' },
      label && React.createElement('label', { className: 'text-sm font-medium' }, label),
      React.createElement('input', { className: 'w-full h-11 px-3 rounded-xl border border-input bg-white text-sm placeholder:text-muted-foreground outline-none', placeholder }),
      description && React.createElement('p', { className: 'text-xs text-muted-foreground' }, description),
      error && React.createElement('p', { className: 'text-xs text-destructive' }, error)
    )
  },
}

export const ImageUploaderDefinition: ComponentDefinition = {
  type: 'ImageUploader',
  displayName: 'ImageUploader',
  category: 'Selection and Input',
  description: '이미지 파일을 업로드하는 컴포넌트',
  icon: 'upload_file',
  props: [
    { name: 'multiple', type: { kind: 'boolean', default: false }, label: 'Multiple', category: 'Component' },
    { name: 'aspect', type: { kind: 'select', options: ['square', 'wide'], default: 'square' }, label: 'Aspect', category: 'Component' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'ImageUploader', props: { aspect: 'square' }, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['ImageUploader'],
  customRenderer: () => previewCard('ImageUploader', 'upload_file', '이미지를 드래그하거나 클릭'),
}

export const SheetDefinition: ComponentDefinition = {
  type: 'Sheet',
  displayName: 'Sheet',
  category: 'Content Display',
  description: '화면 가장자리에서 슬라이드되는 패널',
  icon: 'side_navigation',
  props: [
    { name: 'side', type: { kind: 'select', options: ['top', 'right', 'bottom', 'left'], default: 'right' }, label: 'Side', category: 'Component' },
    { name: 'title', type: { kind: 'text', default: 'Sheet 제목' }, label: 'Title', category: 'Component' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'Sheet', props: { side: 'right', title: 'Sheet 제목' }, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['Sheet', 'SheetTrigger', 'SheetContent', 'SheetHeader', 'SheetTitle', 'SheetDescription'],
  customRenderer: (node) => previewCard('Sheet', 'side_navigation', `${(node.props.side as string) || 'right'} side`),
}

export const CalendarDefinition: ComponentDefinition = {
  type: 'Calendar',
  displayName: 'Calendar',
  category: 'Content Display',
  description: '날짜를 표시하고 선택하는 캘린더',
  icon: 'calendar_month',
  props: [],
  slots: [],
  defaultNode: () => ({ type: 'Calendar', props: {}, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['Calendar'],
  customRenderer: () => previewCard('Calendar', 'calendar_month', '날짜 캘린더'),
}

export const DataTableDefinition: ComponentDefinition = {
  type: 'DataTable',
  displayName: 'DataTable',
  category: 'Content Display',
  description: '데이터를 정렬, 필터, 페이지네이션하는 테이블',
  icon: 'table_chart',
  props: [
    { name: 'searchPlaceholder', type: { kind: 'text', default: '검색...' }, label: 'Search Placeholder', category: 'Component' },
    { name: 'hideToolbar', type: { kind: 'boolean', default: false }, label: 'Hide Toolbar', category: 'Component' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'DataTable', props: { searchPlaceholder: '검색...' }, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['DataTable'],
  customRenderer: () => previewCard('DataTable', 'table_chart', '데이터 테이블'),
}

export const TableDefinition: ComponentDefinition = {
  type: 'Table',
  displayName: 'Table',
  category: 'Content Display',
  description: '데이터를 행과 열로 표시하는 기본 테이블',
  icon: 'grid_on',
  props: [],
  slots: [],
  defaultNode: () => ({ type: 'Table', props: {}, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['Table', 'TableHeader', 'TableBody', 'TableRow', 'TableHead', 'TableCell'],
  customRenderer: () => previewCard('Table', 'grid_on', '기본 테이블'),
}

export const SidebarDefinition: ComponentDefinition = {
  type: 'Sidebar',
  displayName: 'Sidebar',
  category: 'Navigation',
  description: '사이드바 네비게이션 컴포넌트',
  icon: 'side_navigation',
  props: [
    { name: 'side', type: { kind: 'select', options: ['left', 'right'], default: 'left' }, label: 'Side', category: 'Component' },
    { name: 'variant', type: { kind: 'select', options: ['sidebar', 'floating', 'inset'], default: 'sidebar' }, label: 'Variant', category: 'Component' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'Sidebar', props: { side: 'left', variant: 'sidebar' }, children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['Sidebar', 'SidebarProvider', 'SidebarContent', 'SidebarMenu', 'SidebarMenuItem', 'SidebarMenuButton'],
  customRenderer: (node) => previewCard('Sidebar', 'side_navigation', `${(node.props.variant as string) || 'sidebar'} variant`),
}
