import type { PageNode } from '../../schema/node'
import { loginTemplate, findIdTemplate, emrLoginErrorTemplate, emrSsoLoginTemplate } from './auth-templates'
import { homeDashboardTemplate } from './home-template'
import { agreementsTemplate, applyReservationTemplate, applicationTemplate, linkingPlatformTemplate, signupRequestTemplate } from './onboarding-templates'
import { naverReservationTemplate, naverProductTemplate } from './naver-templates'
import { kinJoinTemplate, kinPaymentTemplate, kinLinkTemplate } from './kin-templates'
import { productCreateTemplate, productDetailTemplate } from './product-templates'
import { hospitalInfoTemplate, platformSyncTemplate, productListTemplate, productDetailSettingTemplate, reservationSettingTemplate, sameDayReservationTemplate } from './settings-templates'
import { kakaoReservationTemplate } from './landing-templates'
import { policyTemplate } from './policy-templates'

const templateMap: Record<string, () => PageNode[]> = {
  // Auth
  '/login': loginTemplate,
  '/find-id': findIdTemplate,
  '/emr-login-error': emrLoginErrorTemplate,
  '/service/reservation/login': emrSsoLoginTemplate,
  '/reservation-auto-login': emrSsoLoginTemplate,
  // Home
  '/': homeDashboardTemplate,
  // Onboarding
  '/agreements': agreementsTemplate,
  '/apply-reservation': applyReservationTemplate,
  '/application': applicationTemplate,
  '/linking-platform': linkingPlatformTemplate,
  '/signup-request': signupRequestTemplate,
  // Naver
  '/naver-reservation': naverReservationTemplate,
  '/load-naver-product': naverProductTemplate,
  // KIN
  '/kin-join': kinJoinTemplate,
  '/naver-kin-payment': kinPaymentTemplate,
  '/link-key': kinLinkTemplate,
  // Product
  '/product/create': productCreateTemplate,
  '/product/detail/:id': productDetailTemplate,
  // Settings
  '/settings/hospital-info': hospitalInfoTemplate,
  '/settings/platform-sync': platformSyncTemplate,
  '/settings/product': productListTemplate,
  '/settings/product/detail/:id': productDetailSettingTemplate,
  '/settings/reservation-setting': reservationSettingTemplate,
  '/settings/same-day-reservation': sameDayReservationTemplate,
  // Kakao
  '/kakao-reservation': kakaoReservationTemplate,
  // Policy
  '/policy/privacy': () => policyTemplate('개인정보취급방침'),
  '/policy/service': () => policyTemplate('서비스이용약관'),
  '/policy/reservation-privacy': () => policyTemplate('예약서비스 개인정보취급방침'),
  '/policy/reservation-service': () => policyTemplate('예약서비스이용약관'),
}

export function getTemplateForRoute(route: string): PageNode[] | null {
  const templateFn = templateMap[route]
  return templateFn ? templateFn() : null
}
