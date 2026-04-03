import React from 'react'

// Auth & Home pages
import {
  OriginalLoginPreview,
  OriginalFindIdPreview,
  OriginalEmrLoginErrorPreview,
  OriginalHomePreview,
  OriginalLoadingPreview,
} from './_auth'

// Settings pages
import {
  OriginalSettingsHospitalPreview,
  OriginalSettingsPlatformPreview,
  OriginalSettingsProductListPreview,
  OriginalSettingsProductDetailPreview,
  OriginalSettingsReservationSettingPreview,
  OriginalSettingsSameDayReservationPreview,
} from './_settings'

// Onboarding pages
import {
  OriginalAgreementsPreview,
  OriginalSignupRequestPreview,
  OriginalApplicationPreview,
  OriginalApplyReservationPreview,
  OriginalLinkingPlatformPreview,
  OriginalNaverReservationPreview,
  OriginalLoadNaverProductPreview,
} from './_onboarding'

// Other pages
import {
  OriginalKinJoinPreview,
  OriginalNaverKinPaymentPreview,
  OriginalLinkKeyPreview,
  OriginalKakaoReservationPreview,
  OriginalProductCreatePreview,
  OriginalProductDetailPreview,
  OriginalPolicyPreview,
  OriginalFallbackPreview,
} from './_others'

const originalPreviewMap: Record<string, React.ComponentType> = {
  '/login': OriginalLoginPreview,
  '/find-id': OriginalFindIdPreview,
  '/emr-login-error': OriginalEmrLoginErrorPreview,
  '/service/reservation/login': () => <OriginalLoadingPreview text="로그인 중" />,
  '/reservation-auto-login': () => <OriginalLoadingPreview text="로그인 중" />,
  '/': OriginalHomePreview,
  '/settings/hospital-info': OriginalSettingsHospitalPreview,
  '/settings/platform-sync': OriginalSettingsPlatformPreview,
  '/settings/product': OriginalSettingsProductListPreview,
  '/settings/product/detail:id': OriginalSettingsProductDetailPreview,
  '/settings/reservation-setting': OriginalSettingsReservationSettingPreview,
  '/settings/same-day-reservation': OriginalSettingsSameDayReservationPreview,
  '/agreements': OriginalAgreementsPreview,
  '/apply-reservation': OriginalApplyReservationPreview,
  '/application': OriginalApplicationPreview,
  '/linking-platform': OriginalLinkingPlatformPreview,
  '/signup-request': OriginalSignupRequestPreview,
  '/naver-reservation': OriginalNaverReservationPreview,
  '/load-naver-product': OriginalLoadNaverProductPreview,
  '/kin-join': OriginalKinJoinPreview,
  '/naver-kin-payment': OriginalNaverKinPaymentPreview,
  '/link-key': OriginalLinkKeyPreview,
  '/product/create': OriginalProductCreatePreview,
  '/product/detail:id': OriginalProductDetailPreview,
  '/kakao-reservation': OriginalKakaoReservationPreview,
  '/policy/privacy': () => <OriginalPolicyPreview title="개인정보취급방침" />,
  '/policy/service': () => <OriginalPolicyPreview title="서비스이용약관" />,
  '/policy/reservation-privacy': () => <OriginalPolicyPreview title="예약서비스 개인정보취급방침" />,
  '/policy/reservation-service': () => <OriginalPolicyPreview title="예약서비스이용약관" />,
}

export function getOriginalPreviewForRoute(route: string): React.ComponentType | null {
  return originalPreviewMap[route] || null
}
