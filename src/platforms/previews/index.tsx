import React from 'react'
import { LoginPreview, FindIdPreview, EmrLoginErrorPreview, EmrSsoLoginPreview, AutoLoginPreview } from './auth-previews'
import { HomeDashboardPreview } from './home-preview'
import { SettingsHospitalPreview, SettingsPlatformSyncPreview, SettingsProductListPreview, SettingsProductDetailPreview, SettingsReservationPreview, SettingsSameDayPreview } from './settings-previews'
import { AgreementsPreview, ApplyReservationPreview, ApplicationPreview, LinkingPlatformPreview, SignupRequestPreview } from './onboarding-previews'
import { NaverReservationPreview, NaverProductPreview } from './naver-previews'
import { KinJoinPreview, KinPaymentPreview, KinLinkPreview } from './kin-previews'
import { ProductCreatePreview, ProductDetailPreview } from './product-previews'
import { KakaoReservationPreview } from './landing-previews'
import { PolicyPreview } from './policy-previews'

const previewMap: Record<string, React.ComponentType> = {
  '/login': LoginPreview,
  '/find-id': FindIdPreview,
  '/emr-login-error': EmrLoginErrorPreview,
  '/service/reservation/login': EmrSsoLoginPreview,
  '/reservation-auto-login': AutoLoginPreview,
  '/': HomeDashboardPreview,
  '/settings/hospital-info': SettingsHospitalPreview,
  '/settings/platform-sync': SettingsPlatformSyncPreview,
  '/settings/product': SettingsProductListPreview,
  '/settings/product/detail/:id': SettingsProductDetailPreview,
  '/settings/reservation-setting': SettingsReservationPreview,
  '/settings/same-day-reservation': SettingsSameDayPreview,
  '/agreements': AgreementsPreview,
  '/apply-reservation': ApplyReservationPreview,
  '/application': ApplicationPreview,
  '/linking-platform': LinkingPlatformPreview,
  '/signup-request': SignupRequestPreview,
  '/naver-reservation': NaverReservationPreview,
  '/load-naver-product': NaverProductPreview,
  '/kin-join': KinJoinPreview,
  '/naver-kin-payment': KinPaymentPreview,
  '/link-key': KinLinkPreview,
  '/product/create': ProductCreatePreview,
  '/product/detail/:id': ProductDetailPreview,
  '/kakao-reservation': KakaoReservationPreview,
  '/policy/privacy': () => <PolicyPreview title="개인정보취급방침" />,
  '/policy/service': () => <PolicyPreview title="서비스이용약관" />,
  '/policy/reservation-privacy': () => <PolicyPreview title="예약서비스 개인정보취급방침" />,
  '/policy/reservation-service': () => <PolicyPreview title="예약서비스이용약관" />,
}

export function getPreviewForRoute(route: string): React.ComponentType | null {
  return previewMap[route] || null
}
