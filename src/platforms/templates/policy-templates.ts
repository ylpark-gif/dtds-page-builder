import { n } from './helpers'

// 개인정보취급방침 (policy/privacy.vue)
// Fetches content from API: category BT0402, type BT04
export function privacyPolicyTemplate() {
  return [
    n('Header', { size: 'page', heading: '개인정보취급방침' }),
    n('Surface', { variant: 'default', padding: 'lg', border: true }, [
      n('Label', { size: 'default' }, [], '(API에서 불러온 HTML 콘텐츠가 표시됩니다)'),
    ]),
  ]
}

// 개인정보취급방침 - 로딩 상태
export function privacyPolicyLoadingTemplate() {
  return [
    n('Surface', { variant: 'default', padding: 'lg' }, [
      n('Spinner', { size: 'lg' }),
    ]),
  ]
}

// 서비스이용약관 (policy/service.vue)
// Fetches content from API: category BT0401, type BT04
export function servicePolicyTemplate() {
  return [
    n('Header', { size: 'page', heading: '서비스이용약관' }),
    n('Surface', { variant: 'default', padding: 'lg', border: true }, [
      n('Label', { size: 'default' }, [], '(API에서 불러온 HTML 콘텐츠가 표시됩니다)'),
    ]),
  ]
}

// 서비스이용약관 - 로딩 상태
export function servicePolicyLoadingTemplate() {
  return [
    n('Surface', { variant: 'default', padding: 'lg' }, [
      n('Spinner', { size: 'lg' }),
    ]),
  ]
}

// Generic policy template (backward-compatible)
export function policyTemplate(title: string) {
  return [
    n('Header', { size: 'page', heading: title }),
    n('Surface', { variant: 'default', padding: 'lg', border: true }, [
      n('Label', { size: 'default' }, [], '(API에서 불러온 HTML 콘텐츠가 표시됩니다)'),
    ]),
  ]
}
