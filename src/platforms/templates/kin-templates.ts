import { n } from './helpers'

// 지식iN 회원가입 (kin-join.vue) - 10-step wizard
// Steps: CellPhoneInput -> EnterAccount -> NaverId -> ProfileImage -> DoctorInfo -> Ability -> Career -> BusinessLicense -> HospitalInfo -> CardPayment -> KinJoinSuccess

// Step 1: 휴대폰 인증 (CellPhoneInput)
export function kinJoinTemplate() {
  return [
    n('Progress', { value: 10 }),
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

// Step 2: 계정 정보 입력 (EnterAccount)
export function kinJoinAccountTemplate() {
  return [
    n('Progress', { value: 20 }),
    n('Header', { size: 'section', heading: '닥톡에서 사용할 아이디, 비밀번호를 입력해주세요.' }),
    n('Surface', { variant: 'default', padding: 'lg' }, [
      n('Input', { variant: 'outline', size: 'default', placeholder: 'doctorKim123', label: true, maxlength: 50 }, [], '아이디'),
      n('Input', { variant: 'outline', size: 'default', placeholder: '********', label: true, type: 'password', maxlength: 20 }, [], '비밀번호'),
    ]),
    n('Surface', { variant: 'default', padding: 'md' }, [
      n('Button', { variant: 'outline', size: 'default' }, [], '이전'),
      n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '다음'),
    ]),
  ]
}

// Step 5: 의사 정보 (DoctorInfo)
export function kinJoinDoctorTemplate() {
  return [
    n('Progress', { value: 50 }),
    n('Header', { size: 'section', heading: '의사 정보를 입력해주세요.' }),
    n('Surface', { variant: 'default', padding: 'lg' }, [
      n('Input', { variant: 'outline', size: 'default', placeholder: '김닥톡', label: true, maxlength: 10 }, [], '이름'),
      n('Label', { size: 'default', weight: 'medium' }, [], '전문가 유형'),
      n('Select', { variant: 'outline', size: 'default', placeholder: '전문가 유형을 선택해주세요' }),
      n('Label', { size: 'default', weight: 'medium' }, [], '전공(주/세부)'),
      n('Select', { variant: 'outline', size: 'default', placeholder: '전공(주/세부)를 선택해주세요' }),
    ]),
    n('Surface', { variant: 'default', padding: 'md' }, [
      n('Button', { variant: 'outline', size: 'default' }, [], '이전'),
      n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '다음'),
    ]),
  ]
}

// 지식iN 결제 수단 등록 (naver-kin-payment.vue)
export function kinPaymentTemplate() {
  return [
    n('Header', { size: 'page', heading: '네이버 지식iN 결제 수단 등록', description: '등록하신 결제 수단으로 매월 10일 정기 결제 됩니다.' }),
    n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '결제 수단 등록'),
    n('Surface', { variant: 'muted', padding: 'md' }, [
      n('Label', { size: 'sm', weight: 'medium' }, [], '유의사항'),
      n('Label', { size: 'sm' }, [], '무료체험 서비스는 신규 가입자에게만 적용됩니다.'),
      n('Label', { size: 'sm' }, [], '매월 자동 갱신되며, 해지 시 종료됩니다.(약관이 적용됩니다.) 월 29,900원/VAT 별도'),
      n('Label', { size: 'sm' }, [], '예약 프로모션 신청자는 무료체험 기간이 1개월 제공됩니다. 무료체험 기간이 끝나면 선택하신 이용권으로 매월 자동 갱신됩니다.'),
      n('Label', { size: 'sm' }, [], '닥톡 네이버 지식iN 가입 시 10G의 저장 공간이 제공되며, 10G 초과 시 별도 비용이 부과될 수 있습니다.'),
    ]),
  ]
}

// KIN 링크 리다이렉트 (link-key.vue) - just a spinner
export function kinLinkTemplate() {
  return [
    n('Surface', { variant: 'default', padding: 'lg' }, [
      n('Spinner', { size: 'lg' }),
    ]),
  ]
}

// 지식iN 점검 안내
export function kinJoinInspectionTemplate() {
  return [
    n('Surface', { variant: 'default', padding: 'lg' }, [
      n('Header', { size: 'section', heading: '시스템 점검으로 인해\n회원가입이 잠시 중단돼요', description: '점검 기간: ~2026년 1월 11일(일) 예정\n가입을 희망하시면 [문의하기]를 눌러 정보를 남겨주세요.\n순차적으로 연락드릴게요.' }),
    ]),
    n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '문의하기'),
  ]
}
