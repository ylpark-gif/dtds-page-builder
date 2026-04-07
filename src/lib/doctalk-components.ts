/**
 * Doctalk Vue component registry
 * Used to show component info and swap suggestions in the right panel
 */

export interface DoctalkComponent {
  name: string           // Component name (matches Vue __name)
  file: string           // Relative path from components/
  label: string          // Friendly Korean/English label
  category: 'common' | 'input' | 'layout' | 'page' | 'svg'
  description?: string
}

export const DOCTALK_COMPONENTS: DoctalkComponent[] = [
  // ── Buttons ──────────────────────────────────────────────────
  { name: 'AppButton',          file: 'common/AppButton.vue',          label: 'AppButton',          category: 'common', description: '범용 버튼' },
  { name: 'FiledButton',        file: 'common/FiledButton.vue',        label: 'FiledButton',        category: 'common', description: 'Filled 버튼 (소)' },
  { name: 'FiledButtonLarge',   file: 'common/FiledButtonLarge.vue',   label: 'FiledButtonLarge',   category: 'common', description: 'Filled 버튼 (대)' },
  { name: 'ButtonLargeFilled',  file: 'common/ButtonLargeFilled.vue',  label: 'ButtonLargeFilled',  category: 'common', description: 'Filled 버튼 Large' },
  { name: 'OutlinedButton',     file: 'common/OutlinedButton.vue',     label: 'OutlinedButton',     category: 'common', description: 'Outlined 버튼 (소)' },
  { name: 'OutlinedButtonLarge',file: 'common/OutlinedButtonLarge.vue',label: 'OutlinedButtonLarge',category: 'common', description: 'Outlined 버튼 (대)' },
  { name: 'ButtonStorkeLarge',  file: 'common/ButtonStorkeLarge.vue',  label: 'ButtonStrokeLarge',  category: 'common', description: 'Stroke 버튼 Large' },
  { name: 'TextButton',         file: 'common/TextButton.vue',         label: 'TextButton',         category: 'common', description: '텍스트 버튼' },

  // ── Form / Input ──────────────────────────────────────────────
  { name: 'AppTextField',       file: 'common/AppTextField.vue',       label: 'AppTextField',       category: 'input', description: '텍스트 필드' },
  { name: 'AppCheckBox',        file: 'common/AppCheckBox.vue',        label: 'AppCheckBox',        category: 'input', description: '체크박스' },
  { name: 'AppSelect',          file: 'common/AppSelect.vue',          label: 'AppSelect',          category: 'input', description: '셀렉트 박스' },
  { name: 'RadioField',         file: 'common/RadioField.vue',         label: 'RadioField',         category: 'input', description: '라디오 필드' },
  { name: 'Switch',             file: 'common/Switch.vue',             label: 'Switch',             category: 'input', description: '토글 스위치' },
  { name: 'SelectFieldAndBox',  file: 'common/SelectFieldAndBox.vue',  label: 'SelectFieldAndBox',  category: 'input', description: '셀렉트+박스' },
  { name: 'AppImageUploadButton',file:'common/AppImageUploadButton.vue',label:'AppImageUploadButton',category: 'input', description: '이미지 업로드 버튼' },
  { name: 'LabelTextInput',     file: 'common/input/LabelTextInput.vue',label: 'LabelTextInput',    category: 'input', description: '라벨 텍스트 인풋' },
  { name: 'DatePicker',         file: 'common/input/DatePicker.vue',   label: 'DatePicker',         category: 'input', description: '날짜 선택' },
  { name: 'MaxPeople',          file: 'common/input/MaxPeople.vue',    label: 'MaxPeople',          category: 'input', description: '최대 인원 입력' },

  // ── Display / Feedback ────────────────────────────────────────
  { name: 'Chips',              file: 'common/Chips.vue',              label: 'Chips',              category: 'common', description: '칩/태그' },
  { name: 'AppBanner',          file: 'common/AppBanner.vue',          label: 'AppBanner',          category: 'common', description: '배너' },
  { name: 'AppBelt',            file: 'common/AppBelt.vue',            label: 'AppBelt',            category: 'common', description: '벨트 배너' },
  { name: 'AppSpinner',         file: 'common/AppSpinner.vue',         label: 'AppSpinner',         category: 'common', description: '로딩 스피너' },
  { name: 'SkeletonUi',         file: 'common/SkeletonUi.vue',         label: 'SkeletonUi',         category: 'common', description: '스켈레톤 UI' },
  { name: 'PrograssBar',        file: 'common/PrograssBar.vue',        label: 'ProgressBar',        category: 'common', description: '진행 바' },
  { name: 'UserState',          file: 'common/UserState.vue',          label: 'UserState',          category: 'common', description: '유저 상태' },
  { name: 'TimeUnit',           file: 'common/TimeUnit.vue',           label: 'TimeUnit',           category: 'common', description: '시간 단위' },
  { name: 'ExpertReview',       file: 'common/ExpertReview.vue',       label: 'ExpertReview',       category: 'common', description: '전문가 리뷰' },
  { name: 'AppPromotion',       file: 'common/AppPromotion.vue',       label: 'AppPromotion',       category: 'common', description: '프로모션 배너' },
  { name: 'PageNation',         file: 'common/PageNation.vue',         label: 'PageNation',         category: 'common', description: '페이지네이션' },

  // ── Layout / Table ─────────────────────────────────────────────
  { name: 'AppTable',           file: 'common/AppTable.vue',           label: 'AppTable',           category: 'layout', description: '테이블' },
  { name: 'Floating',           file: 'common/Floating.vue',           label: 'Floating',           category: 'layout', description: '플로팅 버튼' },

  // ── Page-level ────────────────────────────────────────────────
  { name: 'AppHeader',          file: 'AppHeader.vue',                 label: 'AppHeader',          category: 'page', description: '앱 헤더' },
  { name: 'AppFooter',          file: 'AppFooter.vue',                 label: 'AppFooter',          category: 'page', description: '앱 푸터' },
  { name: 'ReservationStatus',  file: 'ReservationStatus.vue',         label: 'ReservationStatus',  category: 'page', description: '예약 상태' },
  { name: 'ReservationGuideCard',file:'ReservationGuideCard.vue',      label: 'ReservationGuideCard',category: 'page', description: '예약 가이드 카드' },
]

export const DOCTALK_COMPONENT_CATEGORIES = [
  { key: 'common' as const, label: '공통 컴포넌트' },
  { key: 'input'  as const, label: '입력 컴포넌트' },
  { key: 'layout' as const, label: '레이아웃' },
  { key: 'page'   as const, label: '페이지 컴포넌트' },
]

/** Find component by __name (from Vue instance) */
export function findComponentByName(name: string): DoctalkComponent | undefined {
  return DOCTALK_COMPONENTS.find(
    (c) => c.name === name || c.name.toLowerCase() === name.toLowerCase()
  )
}
