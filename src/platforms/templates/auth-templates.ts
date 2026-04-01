import { n } from './helpers'

// 로그인 page - /pages/login.vue
export function loginTemplate(): ReturnType<typeof n>[] {
  return [
    // 로고 영역
    n('Surface', { variant: 'default', padding: 'lg', align: 'center' }, [
      // DoctalkReservationLogo
      n('Header', { size: 'section', heading: '닥톡 예약', description: '' }),

      // 로그인 카드
      n('Card', { variant: 'elevated', interactive: false, padding: 'xl', radius: 'xxxl' }, [
        // 카드 제목
        n('Header', { size: 'section', heading: '로그인' }),

        // 아이디 입력
        n('Input', {
          variant: 'outline',
          size: 'default',
          placeholder: '아이디를 입력해주세요.',
          type: 'text',
          label: true,
        }, [], '아이디'),

        // 비밀번호 입력
        n('Input', {
          variant: 'outline',
          size: 'default',
          placeholder: '비밀번호를 입력해주세요.',
          type: 'password',
          label: true,
        }, [], '비밀번호'),

        // QnA 로그인 안내 (로그인 에러 시 노출)
        n('Alert', {
          variant: 'muted',
          inline: true,
          title: '닥톡 전문가 QnA 회원이신가요?',
          description: '닥톡 전문가 QnA 로그인',
        }),

        // 로그인 버튼
        n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg', fullWidth: true }, [], '로그인'),

        // 아이디 찾기 버튼
        n('Button', { variant: 'ghost', size: 'default' }, [], '아이디 찾기'),
      ]),

      // 하단 옵션 링크 목록
      n('Surface', { variant: 'default', padding: 'none', align: 'center' }, [
        n('Button', { variant: 'link', size: 'default' }, [], '닥톡 예약이 처음이신가요? 가입 신청하기'),
        n('Button', { variant: 'link', size: 'default' }, [], '전문가 QnA 회원이신가요? 전문가 QnA 서비스 로그인하기'),
      ]),
    ]),
  ]
}

// 아이디 찾기 page - /pages/find-id.vue
// Step 0: 휴대폰 번호 입력 -> Step 1: 인증번호 입력 -> 결과: 아이디 찾기 성공
export function findIdTemplate(): ReturnType<typeof n>[] {
  return [
    n('Surface', { variant: 'default', padding: 'lg', align: 'center', maxWidth: 520 }, [
      // 로고
      n('Header', { size: 'section', heading: '닥톡 예약', description: '' }),

      // 아이디 찾기 카드 (기본 상태 - Step 0: 휴대폰 번호 입력)
      n('Card', { variant: 'elevated', interactive: false, padding: 'xl', radius: 'xl' }, [
        // 제목 영역
        n('Header', { size: 'section', heading: '아이디 찾기' }),
        n('Label', { size: 'default' }, [], '닥톡 예약에 등록된 담당자 혹은 원장님 휴대폰 번호를 입력해주세요.'),

        // 휴대폰 번호 입력
        n('Input', {
          variant: 'outline',
          size: 'default',
          placeholder: '010-1234-5678',
          type: 'tel',
          label: true,
          maxLength: 13,
        }, [], '휴대폰 번호'),

        // 인증번호 받기 버튼
        n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg', fullWidth: true }, [], '인증번호 받기'),
      ]),

      // 문의 링크
      n('Button', { variant: 'link', size: 'default' }, [], '등록된 휴대폰 번호가 없나요? 문의하기'),
    ]),
  ]
}

// 아이디 찾기 - Step 1: 인증번호 입력
export function findIdAuthStepTemplate(): ReturnType<typeof n>[] {
  return [
    n('Surface', { variant: 'default', padding: 'lg', align: 'center', maxWidth: 520 }, [
      n('Header', { size: 'section', heading: '닥톡 예약', description: '' }),

      n('Card', { variant: 'elevated', interactive: false, padding: 'xl', radius: 'xl' }, [
        n('Header', { size: 'section', heading: '아이디 찾기' }),
        n('Label', { size: 'default' }, [], '닥톡 예약에 등록된 담당자 혹은 원장님 휴대폰 번호를 입력해주세요.'),

        // 휴대폰 번호 (비활성 상태) + 인증번호 재요청 버튼
        n('Surface', { variant: 'default', padding: 'none', direction: 'row', gap: 'md' }, [
          n('Input', {
            variant: 'outline',
            size: 'default',
            type: 'tel',
            label: true,
            disabled: true,
          }, [], '휴대폰 번호'),
          n('Button', { variant: 'secondary', emphasis: 'tonal', size: 'lg' }, [], '인증번호 재요청'),
        ]),

        // 인증번호 입력
        n('Input', {
          variant: 'outline',
          size: 'default',
          placeholder: '인증번호를 입력해주세요.',
          type: 'number',
        }),

        // 인증번호 도움말
        n('Button', { variant: 'link', size: 'sm' }, [], '인증번호가 오지 않는다면?'),

        // 인증하기 버튼
        n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg', fullWidth: true }, [], '인증하기'),
      ]),
    ]),
  ]
}

// 아이디 찾기 - 결과 (성공)
export function findIdSuccessTemplate(): ReturnType<typeof n>[] {
  return [
    n('Surface', { variant: 'default', padding: 'lg', align: 'center', maxWidth: 520 }, [
      n('Header', { size: 'section', heading: '닥톡 예약', description: '' }),

      n('Card', { variant: 'elevated', interactive: false, padding: 'xl', radius: 'xl' }, [
        // 체크 아이콘 + 제목
        n('Header', { size: 'section', heading: '아이디를 찾았어요', iconName: 'check-circle' }),

        // 찾은 아이디 목록
        n('Surface', { variant: 'muted', padding: 'lg', radius: 'lg' }, [
          n('Item', { title: 'doc***', description: '가입일 2024.01.15' }),
        ]),

        // 로그인 버튼
        n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg', fullWidth: true }, [], '로그인'),
      ]),
    ]),
  ]
}

// EMR 로그인 오류 page - /pages/emr-login-error.vue
// 케이스 1: 중복 요양기관번호 오류 (token 쿼리 없음)
export function emrLoginErrorTemplate(): ReturnType<typeof n>[] {
  return [
    n('Surface', { variant: 'default', padding: 'lg', maxWidth: 600 }, [
      // 상단 로그인 버튼 (token 없을 때)
      n('Surface', { variant: 'default', padding: 'none', align: 'right' }, [
        n('Button', { variant: 'secondary', emphasis: 'outlined', size: 'sm' }, [], '로그인'),
      ]),

      // 오류 메시지 영역
      n('Surface', { variant: 'default', padding: 'lg' }, [
        n('Label', { size: 'lg', weight: 'bold' }, [], '오류 발생:'),
        n('Label', { size: 'default', weight: 'bold' }, [], '중복된 요양기관번호가 있어요.\n가입을 진행하기 위해서는 닥톡 팀에 문의해주세요.'),
        n('Label', { size: 'sm', color: 'muted' }, [], '하단에 "문의하기" 버튼을 클릭하세요.'),
      ]),

      // 문의하기 버튼
      n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '문의하기'),
    ]),
  ]
}

// EMR 로그인 오류 - 케이스 2: Token Invalid (token 쿼리 있음)
export function emrTokenInvalidTemplate(): ReturnType<typeof n>[] {
  return [
    n('Surface', { variant: 'default', padding: 'lg', maxWidth: 600 }, [
      // 오류 메시지 영역
      n('Surface', { variant: 'default', padding: 'lg' }, [
        n('Label', { size: 'lg', weight: 'bold' }, [], 'Token Invalid'),
        n('Label', { size: 'default', weight: 'bold' }, [], '오류가 발생했어요. 닥톡 팀에 문의해주세요.'),
        n('Label', { size: 'sm', color: 'muted' }, [], '하단에 "문의하기" 버튼을 클릭하세요.'),
      ]),

      // 문의하기 버튼
      n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '문의하기'),
    ]),
  ]
}

// EMR SSO 로그인 로딩 상태 (login.vue 의 isEmrLoginLoading)
export function emrSsoLoginTemplate(): ReturnType<typeof n>[] {
  return [
    n('Surface', { variant: 'default', padding: 'lg', align: 'center' }, [
      n('Spinner', { size: 'lg' }),
    ]),
  ]
}
