import { n } from './helpers'

// 카카오 예약 랜딩 (kakao-reservation/index.vue)
// Composed of: KakaoHeader, MainSection, KakaoInfoSection, KakaoChartsSection, ApplicationSection, KakaoFooter
export function kakaoReservationTemplate() {
  return [
    // KakaoHeader (navigation)
    n('TopNavigation', { variant: 'default' }, [
      n('Label', { size: 'default', weight: 'bold' }, [], '카카오톡 예약하기 X 닥톡'),
    ]),
    // MainSection - hero
    n('Surface', { variant: 'default', padding: 'lg' }, [
      n('Badge', { variant: 'outline' }, [], '카카오톡 예약하기 X 닥톡'),
      n('Header', { size: 'page', heading: '지금 쓰는 차트 그대로\n카카오 예약 받기', description: '이제 카카오 예약도 지금 사용하는 차트에서 바로 받아보세요.\n모든 예약을 한곳에서 편리하게 관리할 수 있어요.' }),
      // Statistics dashboard
      n('Surface', { variant: 'default', padding: 'md' }, [
        n('Item', { variant: 'default', title: '3500+', description: '월 기준 최대\n환자 방문 수' }),
        n('Item', { variant: 'default', title: '15%', description: '예약 환자\n방문 증가율' }),
        n('Item', { variant: 'default', title: '18%', description: '신규 예약 환자\n유입 증가율' }),
      ]),
      n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '가입 신청하기'),
    ]),
    // ApplicationSection - CTA repeat
    n('Surface', { variant: 'muted', padding: 'lg' }, [
      n('Badge', { variant: 'outline' }, [], '카카오톡 예약하기 X 닥톡'),
      n('Header', { size: 'section', heading: '지금 쓰는 차트 그대로\n카카오 예약 받기' }),
      n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '가입 신청하기'),
    ]),
  ]
}
