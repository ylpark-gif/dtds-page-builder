import { n } from './helpers'

// 약관 동의 (agreements.vue)
// Shows SignUpAgree (ReservationAgreeForm) or SignUpComplete based on query
export function agreementsTemplate() {
  return [
    n('Header', { size: 'page', heading: '약관에 동의하고\n닥톡 예약을 신청해보세요', description: '닥톡 지역 담당자가 순차적으로 방문하여 상세히 안내드릴게요.' }),
    n('Surface', { variant: 'default', padding: 'lg', border: true }, [
      n('Checkbox', { size: 'default' }, [], '[필수] 서비스 이용약관 동의'),
      n('Checkbox', { size: 'default' }, [], '[필수] 개인정보 수집 및 이용 동의'),
      n('Checkbox', { size: 'default' }, [], '[필수] 당근 회원가입 및 서비스 이용약관 동의'),
    ]),
    n('Surface', { variant: 'muted', padding: 'md' }, [
      n('Checkbox', { size: 'default' }, [], '[필수] 모두 동의하고 신청하기'),
    ]),
    n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '확인'),
  ]
}

// 약관 동의 완료 (SignUpComplete)
export function agreementsCompleteTemplate() {
  return [
    n('Surface', { variant: 'default', padding: 'lg' }, [
      n('Label', { size: 'lg', weight: 'bold' }, [], '가입 및 연동 신청을 완료했어요!'),
      n('Label', { size: 'default' }, [], '닥톡 지역 담당자가 순차적으로 방문하여 상세히 안내드릴게요.'),
    ]),
    n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '홈으로'),
  ]
}

// 예약 가입 신청 (apply-reservation.vue) - multi-step wizard
// default flow: InputIDPW -> BusinessUploads -> HospitalInfo -> NursingNumberInput -> ChartSelect -> AgreeToTermsCondition
export function applyReservationTemplate() {
  return [
    n('Progress', { value: 16 }),
    // Step 1: InputIDPW
    n('Header', { size: 'section', heading: '아이디와 비밀번호를 새로 만들어주세요', description: '기존 네이버 예약 사용자도 네이버 예약, 당근 예약을 함께 이용하려면 닥톡 계정이 필요해요. 닥톡을 통해 네이버 예약, 당근 예약을 한번에 관리해 보세요.' }),
    n('Surface', { variant: 'default', padding: 'lg' }, [
      n('Input', { variant: 'outline', size: 'default', placeholder: '아이디', label: true, maxlength: 30 }),
      n('Input', { variant: 'outline', size: 'default', placeholder: '비밀번호', type: 'password', label: true, maxlength: 50 }),
      n('Input', { variant: 'outline', size: 'default', placeholder: '비밀번호 확인', type: 'password', label: true, maxlength: 50 }),
    ]),
    n('Tooltip', { side: 'top' }, [], '20초만에 가입하기!'),
    n('Surface', { variant: 'default', padding: 'md' }, [
      n('Button', { variant: 'outline', size: 'default' }, [], '이전'),
      n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '다음'),
    ]),
  ]
}

// Step 2: 사업자등록증 업로드 (BusinessUploads)
export function applyReservationBusinessTemplate() {
  return [
    n('Progress', { value: 33 }),
    n('Header', { size: 'section', heading: '사업자등록증을 올려주세요' }),
    n('Surface', { variant: 'default', padding: 'lg' }, [
      n('Button', { variant: 'outline', size: 'lg' }, [], '파일 첨부'),
      n('Label', { size: 'sm' }, [], '사업자등록증을 분석하고 있어요'),
      n('Button', { variant: 'ghost', size: 'sm' }, [], '사업자등록증이 없어요 (직접 입력)'),
    ]),
    n('Surface', { variant: 'default', padding: 'md' }, [
      n('Button', { variant: 'outline', size: 'default' }, [], '이전'),
      n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '다음'),
    ]),
  ]
}

// Step 3: 병원 정보 입력 (HospitalInfo)
export function applyReservationHospitalTemplate() {
  return [
    n('Progress', { value: 50 }),
    n('Header', { size: 'section', heading: '병원 정보를 입력해주세요' }),
    n('Surface', { variant: 'default', padding: 'lg' }, [
      n('Label', { size: 'default', weight: 'medium' }, [], '사업자 유형'),
      n('Select', { variant: 'outline', size: 'default', placeholder: '선택' }),
      n('Input', { variant: 'outline', size: 'default', placeholder: '1234567890', label: true, type: 'number' }, [], '사업자등록번호'),
      n('Input', { variant: 'outline', size: 'default', placeholder: '닥톡병원', label: true }, [], '병원명'),
      n('Input', { variant: 'outline', size: 'default', placeholder: '김닥톡', label: true }, [], '대표자명'),
      n('Separator', { orientation: 'horizontal' }),
      n('Input', { variant: 'outline', size: 'default', placeholder: '서울특별시 강남구 논현로 164', label: true, disabled: true }, [], '주소'),
      n('Button', { variant: 'outline', size: 'sm' }, [], '주소찾기'),
      n('Input', { variant: 'outline', size: 'default', placeholder: '12345', disabled: true }),
      n('Input', { variant: 'outline', size: 'default', placeholder: '입력' }),
      n('Separator', { orientation: 'horizontal' }),
      n('Input', { variant: 'outline', size: 'default', placeholder: '입력', label: true }, [], '업태'),
      n('Input', { variant: 'outline', size: 'default', placeholder: '입력', label: true }, [], '종목'),
    ]),
    n('Surface', { variant: 'default', padding: 'md' }, [
      n('Button', { variant: 'outline', size: 'default' }, [], '이전'),
      n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '다음'),
    ]),
  ]
}

// Step 4: 요양기관번호 입력 (NursingNumberInput)
export function applyReservationNursingTemplate() {
  return [
    n('Progress', { value: 66 }),
    n('Header', { size: 'section', heading: '요양기관번호를 입력해주세요' }),
    n('Input', { variant: 'outline', size: 'default', placeholder: '12345678', type: 'number', maxlength: 8 }),
    n('Surface', { variant: 'default', padding: 'md' }, [
      n('Button', { variant: 'outline', size: 'default' }, [], '이전'),
      n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '다음'),
    ]),
  ]
}

// Step 5: 전자차트 선택 (ChartSelect)
export function applyReservationChartTemplate() {
  return [
    n('Progress', { value: 83 }),
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

// Step 6: 약관 동의 (AgreeToTermsCondition)
export function applyReservationAgreeTemplate() {
  return [
    n('Progress', { value: 100 }),
    n('Header', { size: 'section', heading: '약관을 확인해주세요', description: '약관에 동의하고 다음 버튼을 누르시면 닥톡 예약 신청이 완료돼요' }),
    n('Surface', { variant: 'default', padding: 'lg' }, [
      n('Chip', { variant: 'outline', interactive: true }, [], '[필수] 서비스 이용약관 동의'),
      n('Chip', { variant: 'outline', interactive: true }, [], '[필수] 개인정보 수집 및 이용 동의'),
      n('Chip', { variant: 'outline', interactive: true }, [], '[필수] 당근 회원가입 및 서비스 이용약관 동의'),
      n('Label', { size: 'sm' }, [], '모든 약관에 동의해주세요'),
    ]),
    n('Surface', { variant: 'default', padding: 'md' }, [
      n('Button', { variant: 'outline', size: 'default' }, [], '이전'),
      n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '다음'),
    ]),
  ]
}

// 플랫폼 연동 신청 (application.vue) - 3-step: hospitalInfo -> businessInfo -> platformInfo
export function applicationTemplate() {
  return [
    n('Stepper', { orientation: 'horizontal', size: 'default' }),
    n('Header', { size: 'section', heading: '플랫폼 연동 신청' }),
    n('Surface', { variant: 'default', padding: 'lg', border: true }, [
      n('Tab', { variant: 'default' }, [
        n('Item', { variant: 'default', title: '병원 정보', interactive: true }),
        n('Item', { variant: 'default', title: '사업자 정보', interactive: true }),
        n('Item', { variant: 'default', title: '플랫폼 정보', interactive: true }),
      ]),
    ]),
    n('Surface', { variant: 'default', padding: 'md', border: true }, [
      n('Button', { variant: 'outline', size: 'default' }, [], '이전'),
      n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '다음'),
    ]),
  ]
}

// 플랫폼 연동 신청 완료
export function applicationCompleteTemplate() {
  return [
    n('Surface', { variant: 'default', padding: 'lg' }, [
      n('Label', { size: 'lg', weight: 'bold' }, [], '완료!'),
      n('Label', { size: 'default' }, [], '플랫폼 연동까지 약 3~5일 소요됩니다.'),
    ]),
    n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '홈으로'),
  ]
}

// 플랫폼 연동 (linking-platform.vue)
export function linkingPlatformTemplate() {
  return [
    n('Header', { size: 'page', heading: '플랫폼 연동하기' }),
    n('Surface', { variant: 'default', padding: 'lg', border: true }, [
      n('Label', { size: 'default', weight: 'bold' }, [], '네이버 계정 연동'),
      n('Label', { size: 'sm' }, [], '어떤 병원의 네이버 예약을 연동할까요?'),
      n('Label', { size: 'sm' }, [], '네이버 스마트플레이스 계정에 등록된 병원 중 예약을 연동할 병원을 선택해주세요.'),
      n('Item', { variant: 'outline', title: '병원명', description: '네이버 스마트플레이스', interactive: true }),
      n('Separator', { orientation: 'horizontal' }),
      n('Input', { variant: 'outline', size: 'default', placeholder: '네이버 아이디를 입력해주세요', label: true }),
      n('Input', { variant: 'outline', size: 'default', placeholder: '네이버 비밀번호를 입력해주세요', type: 'password', label: true }),
    ]),
    n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '연동하기'),
  ]
}

// 가입 신청 (signup-request/index.vue)
export function signupRequestTemplate() {
  return [
    n('Surface', { variant: 'default', padding: 'lg' }, [
      n('Label', { size: 'lg', weight: 'bold' }, [], '닥톡 예약'),
    ]),
    n('Card', { variant: 'default', title: '가입 신청하기' }, [
      n('Input', { variant: 'outline', size: 'default', placeholder: '닥톡의원', label: true }, [], '병원 이름 *'),
      n('Select', { variant: 'outline', size: 'default', placeholder: '사용 중인 차트를 선택해주세요.' }, [], '사용 중인 차트 *'),
      n('Button', { variant: 'ghost', size: 'sm' }, [], '사용 중인 차트가 없나요?'),
      n('Input', { variant: 'outline', size: 'default', placeholder: '123-45-67890', label: true, type: 'business', maxlength: 12 }, [], '사업자등록번호 *'),
      n('Input', { variant: 'outline', size: 'default', placeholder: '요양기관번호(숫자 8자리)를 입력해주세요.', label: true, type: 'number', maxlength: 8 }, [], '요양기관번호 *'),
      n('Input', { variant: 'outline', size: 'default', placeholder: '대표원장님 성함을 입력해주세요.', label: true, maxlength: 16 }, [], '대표원장님 성함 *'),
      n('Input', { variant: 'outline', size: 'default', placeholder: '담당자님 성함을 입력해주세요.', label: true, maxlength: 16 }, [], '담당자님 성함 *'),
      n('Input', { variant: 'outline', size: 'default', placeholder: '010-1234-5678', label: true, type: 'tel', maxlength: 13 }, [], '담당자 연락처 *'),
    ]),
    n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '가입 신청하기'),
  ]
}
