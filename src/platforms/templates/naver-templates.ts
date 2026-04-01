import { n } from './helpers'

// 네이버 예약 가입 (naver-reservation.vue)
// default flow: CellPhoneNumberInput -> ChartSelect -> NaverReservationStatus -> AccountStatus -> NaverLogin -> NaverReservationLinking -> BusinessUploads -> HospitalInfo -> NursingNumberInput
export function naverReservationTemplate() {
  return [
    n('Progress', { value: 11 }),
    // Step 1: CellPhoneNumberInput
    n('Header', { size: 'section', heading: '휴대폰 번호를 입력해주세요.' }),
    n('Surface', { variant: 'default', padding: 'lg' }, [
      n('Input', { variant: 'outline', size: 'default', placeholder: '01012345678', label: true, type: 'tel', maxlength: 13 }, [], '휴대폰 번호'),
      n('Button', { variant: 'outline', size: 'default' }, [], '인증번호 받기'),
      n('Separator', { orientation: 'horizontal' }),
      n('Input', { variant: 'outline', size: 'default', placeholder: '123456', label: true, type: 'number', maxlength: 6, disabled: true }, [], '인증번호'),
      n('Button', { variant: 'outline', size: 'default' }, [], '인증하기'),
    ]),
    n('Surface', { variant: 'default', padding: 'md' }, [
      n('Button', { variant: 'outline', size: 'default' }, [], '이전'),
      n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '다음'),
    ]),
  ]
}

// Step 2: ChartSelect (same as apply-reservation chart step)
export function naverReservationChartTemplate() {
  return [
    n('Progress', { value: 22 }),
    n('Header', { size: 'section', heading: '어떤 전자차트를 쓰고 계세요?' }),
    n('Surface', { variant: 'default', padding: 'lg' }, [
      n('Chip', { variant: 'outline', interactive: true }, [], '비트컴퓨터(U차트)'),
      n('Chip', { variant: 'outline', interactive: true }, [], '메디칼소프트'),
      n('Chip', { variant: 'outline', interactive: true }, [], '포인트닉스'),
      n('Chip', { variant: 'outline', interactive: true }, [], '이지스헬스케어'),
      n('Button', { variant: 'ghost', size: 'sm' }, [], '제가 사용하고 있는 전자차트가 없어요'),
    ]),
    n('Surface', { variant: 'default', padding: 'md' }, [
      n('Button', { variant: 'outline', size: 'default' }, [], '이전'),
      n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '다음'),
    ]),
  ]
}

// Step 3: NaverReservationStatus
export function naverReservationStatusTemplate() {
  return [
    n('Progress', { value: 33 }),
    n('Header', { size: 'section', heading: '네이버 예약을 생성하셨나요?' }),
    n('Surface', { variant: 'default', padding: 'lg' }, [
      n('Chip', { variant: 'outline', interactive: true }, [], '네, 네이버 예약을 만들었어요'),
      n('Chip', { variant: 'outline', interactive: true }, [], '아니요, 네이버 예약을 아직 안 만들었어요'),
    ]),
    n('Surface', { variant: 'default', padding: 'md' }, [
      n('Button', { variant: 'outline', size: 'default' }, [], '이전'),
      n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '다음'),
    ]),
  ]
}

// Step 4: AccountStatus
export function naverReservationAccountTemplate() {
  return [
    n('Progress', { value: 44 }),
    n('Header', { size: 'section', heading: '네이버 예약에 등록된 계정 유형을 선택해주세요' }),
    n('Surface', { variant: 'default', padding: 'lg' }, [
      n('Chip', { variant: 'outline', interactive: true }, [], '개인 계정'),
      n('Chip', { variant: 'outline', interactive: true }, [], '단체 계정'),
    ]),
    n('Surface', { variant: 'default', padding: 'md' }, [
      n('Button', { variant: 'outline', size: 'default' }, [], '이전'),
      n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '다음'),
    ]),
  ]
}

// Step 5: NaverLogin
export function naverReservationLoginTemplate() {
  return [
    n('Progress', { value: 55 }),
    n('Header', { size: 'section', heading: '네이버 아이디를 입력해주세요' }),
    n('Surface', { variant: 'default', padding: 'lg' }, [
      n('Input', { variant: 'outline', size: 'default', placeholder: '네이버 아이디', label: true }),
    ]),
    n('Surface', { variant: 'default', padding: 'md' }, [
      n('Button', { variant: 'outline', size: 'default' }, [], '이전'),
      n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '다음'),
    ]),
  ]
}

// 네이버 상품 불러오기 (load-naver-product.vue)
export function naverProductTemplate() {
  return [
    n('Card', { variant: 'default', title: '예약 상품을 생성해주세요' }, [
      n('Label', { size: 'default' }, [], '연동된 플랫폼에서 예약 환자를 받기 위해서 최소 1개 이상의 예약 상품이 필요해요.'),
    ]),
    n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '네이버 예약 상품 불러오기'),
  ]
}

// 네이버 상품 불러오기 - 로딩 중
export function naverProductLoadingTemplate() {
  return [
    n('Card', { variant: 'default', title: '예약 상품을 생성해주세요' }, [
      n('Label', { size: 'default' }, [], '연동된 플랫폼에서 예약 환자를 받기 위해서 최소 1개 이상의 예약 상품이 필요해요.'),
    ]),
    n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg', disabled: true }, [
      n('Spinner', { size: 'sm' }),
    ], '네이버 예약 상품 불러오는 중'),
  ]
}

// 네이버 상품 불러오기 - 상품 없을 때
export function naverProductEmptyTemplate() {
  return [
    n('Card', { variant: 'default', title: '예약 상품을 생성해주세요' }, [
      n('Label', { size: 'default' }, [], '연동된 플랫폼에서 예약 환자를 받기 위해서 최소 1개 이상의 예약 상품이 필요해요.'),
    ]),
    n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '예약 상품 생성하기'),
  ]
}
