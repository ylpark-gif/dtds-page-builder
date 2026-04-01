import type { PlatformConfig } from '../schema/node'

export const platformConfigs: PlatformConfig[] = [
  {
    id: 'doctalk-reservation',
    name: '닥톡 예약',
    description: '닥톡 예약 프론트엔드',
    framework: 'Nuxt 3',
    baseBranch: 'develop',
    repoUrl: 'https://github.com/Docfriends/doctalk_front_homepage.git',
    pages: [
      // 인증/로그인
      { name: '로그인', route: '/login', category: '인증', description: '로그인 페이지' },
      { name: '아이디 찾기', route: '/find-id', category: '인증', description: '아이디 찾기' },
      { name: 'EMR 로그인 오류', route: '/emr-login-error', category: '인증', description: 'EMR SSO 로그인 오류 페이지' },
      { name: 'EMR SSO 로그인', route: '/service/reservation/login', category: '인증', description: 'EMR SSO 로그인 처리' },
      { name: '자동 로그인', route: '/reservation-auto-login', category: '인증', description: '토큰 기반 자동 로그인' },

      // 홈
      { name: '홈 대시보드', route: '/', category: '홈', description: '메인 대시보드' },

      // 가입 신청
      { name: '약관 동의', route: '/agreements', category: '가입 신청', description: '약관 동의 페이지' },
      { name: '예약 가입 신청', route: '/apply-reservation', category: '가입 신청', description: '예약 신청 멀티스텝 위자드' },
      { name: '플랫폼 연동 신청', route: '/application', category: '가입 신청', description: '3단계 플랫폼 연동 신청' },
      { name: '플랫폼 연동', route: '/linking-platform', category: '가입 신청', description: '플랫폼 연동 페이지' },
      { name: '가입 신청 (EMR)', route: '/signup-request', category: '가입 신청', description: 'EMR chart 연동 가입 신청' },

      // 네이버
      { name: '네이버 예약 가입', route: '/naver-reservation', category: '네이버', description: '네이버 예약 가입 신청 위자드' },
      { name: '네이버 상품 불러오기', route: '/load-naver-product', category: '네이버', description: '네이버 예약 상품 불러오기' },

      // 지식iN
      { name: '지식iN 회원가입', route: '/kin-join', category: '지식iN', description: '10단계 지식iN 회원가입' },
      { name: '지식iN 결제 등록', route: '/naver-kin-payment', category: '지식iN', description: '네이버 지식iN 결제 수단 등록' },
      { name: 'KIN 링크', route: '/link-key', category: '지식iN', description: 'KIN 링크 리다이렉트' },

      // 예약 상품
      { name: '예약 상품 생성', route: '/product/create', category: '예약 상품', description: '예약 상품 생성/수정' },
      { name: '예약 상품 상세', route: '/product/detail/:id', category: '예약 상품', description: '예약 상품 상세 (legacy)' },

      // 설정
      { name: '병원정보', route: '/settings/hospital-info', category: '설정', description: '병원정보 설정' },
      { name: '플랫폼 연동 상태', route: '/settings/platform-sync', category: '설정', description: '플랫폼 연동 상태 관리' },
      { name: '예약 상품 목록', route: '/settings/product', category: '설정', description: '예약 상품 목록' },
      { name: '예약 상품 상세 설정', route: '/settings/product/detail/:id', category: '설정', description: '예약 상품 상세 (스케줄/기본정보)' },
      { name: '예약 설정', route: '/settings/reservation-setting', category: '설정', description: '사전질문/당일예약 설정' },
      { name: '당일예약 설정', route: '/settings/same-day-reservation', category: '설정', description: '당일예약 설정' },

      // 카카오
      { name: '카카오 예약 랜딩', route: '/kakao-reservation', category: '카카오', description: '카카오 예약 랜딩 페이지' },

      // 정책
      { name: '개인정보취급방침', route: '/policy/privacy', category: '정책', description: '개인정보취급방침' },
      { name: '서비스이용약관', route: '/policy/service', category: '정책', description: '서비스이용약관' },
      { name: '예약 개인정보취급방침', route: '/policy/reservation-privacy', category: '정책', description: '예약서비스 개인정보취급방침' },
      { name: '예약 서비스이용약관', route: '/policy/reservation-service', category: '정책', description: '예약서비스이용약관' },
    ],
  },
  {
    id: 'doctalk-server',
    name: '닥톡 예약 서버',
    description: '닥톡 예약 백엔드',
    framework: 'Backend',
    baseBranch: 'develop',
    repoUrl: 'https://github.com/Docfriends/doctalk_server_booking.git',
    pages: [],
  },
]
