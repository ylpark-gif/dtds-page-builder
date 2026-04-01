import { n } from './helpers'

// 병원정보
// Source: /pages/settings/hospital-info/index.vue
export function hospitalInfoTemplate() {
  return [
    n('Header', { size: 'page', heading: '병원정보' }),

    // 메인 카드
    n('Surface', { variant: 'default', padding: 'lg', border: true }, [

      // -- 병원 이름 & 설명 --
      n('Input', { variant: 'outline', size: 'default', placeholder: '병원 이름을 입력해주세요.', label: true, maxLength: 50, required: true }, [], '병원 이름'),
      n('Textarea', { variant: 'outline', placeholder: '병원 설명을 최소 20자 이상 입력해주세요.', maxLength: 2000, required: true, resizable: true }, [], '병원 설명'),

      n('Separator', { orientation: 'horizontal' }),

      // -- 병원 종류 & 진료과 --
      n('Select', { variant: 'outline', size: 'default', placeholder: '병원 종류 선택', label: '병원 종류', required: true }),
      n('Input', { variant: 'outline', size: 'default', placeholder: '진료과를 선택해주세요.', label: true, required: true }, [], '진료과'),
      n('Select', { variant: 'outline', size: 'default', placeholder: '대표 진료과를 선택해주세요.', label: '대표 진료과', disabled: true, required: true }),

      n('Separator', { orientation: 'horizontal' }),

      // -- 병원 사진 --
      n('Label', { size: 'default', weight: 'medium', required: true }, [], '병원 사진'),
      n('Button', { variant: 'outline', size: 'sm' }, [], '사진 업로드'),
      n('Label', { size: 'sm', weight: 'regular', muted: true }, [], '한 장당 최대 20MB, 1200*750 권장, 최대 120장'),

      n('Separator', { orientation: 'horizontal' }),

      // -- 병원 주소 --
      n('Input', { variant: 'outline', size: 'default', placeholder: '병원 주소', disabled: true, label: true, required: true }, [], '병원 주소'),
      n('Button', { variant: 'tonal', size: 'default' }, [], '주소 찾기'),
      n('Input', { variant: 'outline', size: 'default', placeholder: '상세 주소를 입력해주세요.' }),
      n('Input', { variant: 'outline', size: 'default', placeholder: '우편 번호', disabled: true }),

      n('Separator', { orientation: 'horizontal' }),

      // -- 연락처 (2열) --
      n('Input', { variant: 'outline', size: 'default', placeholder: '02-1234-5678', type: 'tel', label: true, required: true }, [], '병원 연락처'),
      n('Input', { variant: 'outline', size: 'default', placeholder: 'doctalk@email.com', maxLength: 50, label: true, required: true }, [], '이메일'),
      n('Input', { variant: 'outline', size: 'default', placeholder: '성함을 입력해주세요.', maxLength: 16, label: true, required: true }, [], '대표원장 성함'),
      n('Input', { variant: 'outline', size: 'default', placeholder: '010-1234-5678', type: 'tel', label: true, required: true }, [], '대표원장 연락처'),
      n('Input', { variant: 'outline', size: 'default', placeholder: '1234-5678', type: 'tel', label: true, required: true, prefix: '010-' }, [], '관리자 연락처'),

      n('Separator', { orientation: 'horizontal' }),

      // -- 주차 --
      n('Label', { size: 'default', weight: 'medium', required: true }, [], '주차'),
      n('Switch', { size: 'default', label: '주차 가능' }),
      n('Select', { variant: 'outline', size: 'default', placeholder: '주차비 선택', label: '주차비', disabled: true }),

      n('Separator', { orientation: 'horizontal' }),

      // -- 사업자 정보 --
      n('Select', { variant: 'outline', size: 'default', placeholder: '사업자 유형 선택', label: '사업자 유형', required: true }),
      n('Input', { variant: 'outline', size: 'default', placeholder: '123-45-67890', maxLength: 10, label: true, required: true }, [], '사업자등록번호'),
      n('Input', { variant: 'outline', size: 'default', placeholder: '사업장 이름을 입력해주세요.', maxLength: 25, label: true, required: true }, [], '사업장 이름(상호)'),
      n('Input', { variant: 'outline', size: 'default', placeholder: '사업자 이름을 입력해주세요.', maxLength: 16, label: true, required: true }, [], '사업자 이름(성명)'),
      n('Input', { variant: 'outline', size: 'default', placeholder: '업태를 입력해주세요.', label: true, required: true }, [], '업태'),
      n('Input', { variant: 'outline', size: 'default', placeholder: '종목을 입력해주세요.', label: true, required: true }, [], '종목'),

      n('Separator', { orientation: 'horizontal' }),

      // -- 요양기관번호 --
      n('Input', { variant: 'outline', size: 'default', placeholder: '요양기관번호 8자리를 입력해주세요.', maxLength: 8, type: 'number', label: true, required: true }, [], '요양기관번호'),
    ]),

    // 하단 저장 버튼
    n('Surface', { variant: 'default', padding: 'md' }, [
      n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '저장'),
    ]),
  ]
}

// 플랫폼 연동 상태
// Source: /pages/settings/platform-sync/index.vue
export function platformSyncTemplate() {
  return [
    n('Header', { size: 'page', heading: '플랫폼' }),

    // 플랫폼 목록 카드
    n('Surface', { variant: 'default', padding: 'lg', border: true }, [
      // 네이버
      n('Item', { variant: 'default', title: '네이버', interactive: false }, [
        n('Badge', { variant: 'neutral', emphasis: 'subtle', size: 'default' }, [], '연동 전'),
      ]),
      n('Separator', { orientation: 'horizontal' }),

      // 카카오
      n('Item', { variant: 'default', title: '카카오', interactive: false }, [
        n('Badge', { variant: 'neutral', emphasis: 'subtle', size: 'default' }, [], '연동 전'),
      ]),
      n('Separator', { orientation: 'horizontal' }),

      // 당근
      n('Item', { variant: 'default', title: '당근', interactive: false }, [
        n('Badge', { variant: 'neutral', emphasis: 'subtle', size: 'default' }, [], '연동 전'),
      ]),
    ]),

    // 검수 안내 (조건부: 검수중인 플랫폼이 있을 때)
    n('Alert', {
      variant: 'info',
      title: '연동 안내',
      description: '카카오, 당근 연동이 완료되면 병원 정보에 입력한 연락처로 안내드릴게요. (영업일 기준 최대 3~5일 소요) 다른 연락처로 안내받길 원하는 경우 문의하기를 이용해주세요.',
    }),
  ]
}

// 예약 상품 목록
// Source: /pages/settings/product/index.vue
export function productListTemplate() {
  return [
    // 타이틀 영역
    n('Header', { size: 'page', heading: '예약 상품' }, [
      n('Badge', { variant: 'neutral', emphasis: 'subtle', size: 'default' }, [], '노출 중 2 / 전체 3'),
    ]),

    // 상단 액션 버튼
    n('Surface', { variant: 'default', padding: 'md' }, [
      n('Button', { variant: 'primary', emphasis: 'solid', size: 'default' }, [], '예약 상품 추가'),
      n('Button', { variant: 'tonal', size: 'default' }, [], '차트 진료실 연결'),
    ]),

    // 당일예약 바
    n('Surface', { variant: 'default', padding: 'sm', border: true, interactive: true }, [
      n('Label', { size: 'default', weight: 'medium' }, [], '예약시간 1시간 전까지 예약 받는 중'),
    ]),

    // 상품 카드 리스트
    n('Card', { variant: 'outlined', title: '일반 진료', interactive: true }, [
      n('Switch', { size: 'default', label: '노출 중', checked: true }),
      n('Badge', { variant: 'success', emphasis: 'subtle', size: 'sm' }, [], '진료실 A'),
      n('Label', { size: 'sm', weight: 'regular', muted: true }, [], '월, 화, 수, 목, 금'),
      n('Button', { variant: 'ghost', size: 'sm' }, [], '수정'),
      n('Button', { variant: 'ghost', size: 'sm' }, [], '복제'),
      n('Button', { variant: 'ghost', size: 'sm', destructive: true }, [], '삭제'),
    ]),
    n('Card', { variant: 'outlined', title: '건강검진', interactive: true }, [
      n('Switch', { size: 'default', label: '노출 중', checked: true }),
      n('Badge', { variant: 'success', emphasis: 'subtle', size: 'sm' }, [], '진료실 B'),
      n('Label', { size: 'sm', weight: 'regular', muted: true }, [], '월, 수, 금'),
      n('Button', { variant: 'ghost', size: 'sm' }, [], '수정'),
      n('Button', { variant: 'ghost', size: 'sm' }, [], '복제'),
      n('Button', { variant: 'ghost', size: 'sm', destructive: true }, [], '삭제'),
    ]),
    n('Card', { variant: 'outlined', title: '예방접종', interactive: true }, [
      n('Switch', { size: 'default', label: '미노출' }),
      n('Badge', { variant: 'warning', emphasis: 'subtle', size: 'sm' }, [], '임시 스케줄 1건'),
      n('Label', { size: 'sm', weight: 'regular', muted: true }, [], '화, 목'),
      n('Button', { variant: 'ghost', size: 'sm' }, [], '수정'),
      n('Button', { variant: 'ghost', size: 'sm' }, [], '복제'),
      n('Button', { variant: 'ghost', size: 'sm', destructive: true }, [], '삭제'),
    ]),
  ]
}

// 예약 상품 상세 설정
// Source: /pages/settings/product/detail/[id]/index.vue
// Child: ProductBasicInfo.vue, ProductSchedule.vue, RegularSchedule.vue
export function productDetailSettingTemplate() {
  return [
    // 타이틀: 뒤로가기 + 상품명 + 더보기 메뉴
    n('Header', { size: 'page', heading: '일반 진료', backButton: true }, [
      n('Button', { variant: 'ghost', size: 'sm', destructive: true }, [], '예약상품 삭제'),
    ]),

    // 탭: 예약 스케줄 / 기본정보
    n('Tab', { size: 'default', items: ['예약 스케줄', '기본정보'], activeIndex: 0 }),

    // == 예약 스케줄 탭 콘텐츠 ==

    // 예약중지 바
    n('Surface', { variant: 'default', padding: 'sm', border: true, interactive: true }, [
      n('Label', { size: 'default', weight: 'medium' }, [], '3월 31일 (월)'),
      n('Label', { size: 'sm', weight: 'regular', muted: true }, [], '예약중지한 시간 없음'),
      n('Button', { variant: 'ghost', size: 'sm' }, [], '예약중지 설정'),
    ]),

    // 정규 스케줄 카드
    n('Surface', { variant: 'default', padding: 'lg', border: true }, [
      n('Label', { size: 'lg', weight: 'semibold' }, [], '정규스케줄'),
      n('Button', { variant: 'ghost', size: 'sm' }, [], '수정'),
      n('Separator', { orientation: 'horizontal' }),

      // 운영기간
      n('Label', { size: 'default', weight: 'medium' }, [], '운영기간'),
      n('Label', { size: 'default', weight: 'regular' }, [], '2025.01.01 (수) ~ 상시'),
      n('Separator', { orientation: 'horizontal' }),

      // 예약 가능한 시간
      n('Label', { size: 'default', weight: 'medium' }, [], '예약 가능한 시간'),
      n('Item', { variant: 'default', title: '월, 화, 수, 목, 금' }, [
        n('Label', { size: 'sm', weight: 'regular' }, [], '09:00 ~ 18:00  3명 / 30분'),
      ]),
      n('Separator', { orientation: 'horizontal' }),

      // 휴무일
      n('Label', { size: 'default', weight: 'medium' }, [], '휴무일'),
      n('Item', { variant: 'default', title: '정기 휴무' }, [
        n('Label', { size: 'sm', weight: 'regular' }, [], '토, 일'),
      ]),
      n('Item', { variant: 'default', title: '공휴일' }, [
        n('Label', { size: 'sm', weight: 'regular' }, [], '공휴일 휴무'),
      ]),
    ]),

    // 임시 스케줄 카드
    n('Surface', { variant: 'default', padding: 'lg', border: true }, [
      n('Label', { size: 'lg', weight: 'semibold' }, [], '임시스케줄'),
      n('Button', { variant: 'ghost', size: 'sm' }, [], '추가'),
      n('Separator', { orientation: 'horizontal' }),

      // 임시운영 가이드
      n('Label', { size: 'default', weight: 'regular', muted: true }, [], '평소와 다르게 운영하는 날은 임시운영'),
      n('Card', { variant: 'outlined' }, [
        n('Label', { size: 'sm', weight: 'regular', muted: true }, [], '[예시] O월 O일 임시운영'),
        n('Label', { size: 'sm', weight: 'regular' }, [], '10:00 ~ 13:30  3명/1시간'),
      ]),
      n('Separator', { orientation: 'horizontal' }),

      // 임시휴무 가이드
      n('Label', { size: 'default', weight: 'regular', muted: true }, [], '평소와 달리 운영하지 않는 날은 임시휴무'),
      n('Card', { variant: 'outlined' }, [
        n('Label', { size: 'sm', weight: 'regular', muted: true }, [], '[예시] O월 O일 임시휴무'),
      ]),
    ]),

    // == 기본정보 탭 콘텐츠 (별도 표시) ==
    n('Surface', { variant: 'default', padding: 'lg', border: true }, [
      n('Label', { size: 'lg', weight: 'semibold' }, [], '기본정보'),
      n('Button', { variant: 'ghost', size: 'sm' }, [], '수정'),
      n('Separator', { orientation: 'horizontal' }),

      n('Label', { size: 'default', weight: 'medium', muted: true }, [], '상품 사진'),
      n('Skeleton', { width: 76, height: 76, variant: 'rounded' }),

      n('Separator', { orientation: 'horizontal' }),
      n('Label', { size: 'default', weight: 'medium', muted: true }, [], '소개글'),
      n('Label', { size: 'default', weight: 'regular' }, [], '상품 소개글 내용'),

      n('Separator', { orientation: 'horizontal' }),
      n('Label', { size: 'default', weight: 'medium', muted: true }, [], '예약/방문 관련 유의사항'),
      n('Label', { size: 'default', weight: 'regular' }, [], '유의사항 내용'),

      n('Separator', { orientation: 'horizontal' }),
      n('Label', { size: 'default', weight: 'medium', muted: true }, [], '예약 확정 시점'),
      n('Label', { size: 'default', weight: 'regular' }, [], '자동 확정'),
    ]),
  ]
}

// 예약 설정 (사전질문 + 당일예약 탭)
// Source: /pages/settings/reservation-setting/index.vue
// Child: PreQuestionTab.vue, PreQuestionList.vue, PreQuestionItem.vue, PreQuestionPreview.vue, SameDayTab.vue
export function reservationSettingTemplate() {
  return [
    n('Header', { size: 'page', heading: '예약설정' }),

    // 탭 네비게이션: 예약 시 사전질문 / 당일예약
    n('Tab', { size: 'default', items: ['예약 시 사전질문', '당일예약'], activeIndex: 0 }),

    // == 사전질문 탭 ==

    // 안내 배너
    n('Alert', { variant: 'info', inline: true, description: '환자가 예약할 때 사전 질문이 노출됩니다. (최대 10개)' }),

    // 2컬럼 레이아웃: 질문 목록 + 미리보기

    // 좌측: 사전질문 카드
    n('Surface', { variant: 'default', padding: 'lg', border: true }, [
      // 헤더
      n('Label', { size: 'lg', weight: 'semibold' }, [], '사전질문'),
      n('Badge', { variant: 'neutral', emphasis: 'subtle', size: 'sm' }, [], '네이버'),
      n('Badge', { variant: 'neutral', emphasis: 'subtle', size: 'sm' }, [], '카카오'),
      n('Button', { variant: 'tonal', size: 'sm' }, [], '순서변경'),
      n('Button', { variant: 'primary', emphasis: 'solid', size: 'sm' }, [], '질문추가'),

      n('Separator', { orientation: 'horizontal' }),

      // 질문 항목 1
      n('Item', { variant: 'default', title: '어떤 증상으로 방문하시나요?', interactive: true }, [
        n('Badge', { variant: 'success', emphasis: 'subtle', size: 'sm' }, [], '필수'),
        n('Label', { size: 'sm', weight: 'regular', muted: true }, [], '단일선택'),
        n('Button', { variant: 'ghost', size: 'sm' }, [], '수정'),
        n('Button', { variant: 'ghost', size: 'sm', destructive: true }, [], '삭제'),
      ]),

      // 질문 항목 2
      n('Item', { variant: 'default', title: '방문 경로를 알려주세요', interactive: true }, [
        n('Badge', { variant: 'neutral', emphasis: 'subtle', size: 'sm' }, [], '선택'),
        n('Label', { size: 'sm', weight: 'regular', muted: true }, [], '복수선택'),
        n('Button', { variant: 'ghost', size: 'sm' }, [], '수정'),
        n('Button', { variant: 'ghost', size: 'sm', destructive: true }, [], '삭제'),
      ]),

      // 질문 항목 3
      n('Item', { variant: 'default', title: '전달할 내용을 입력해주세요', interactive: true }, [
        n('Badge', { variant: 'neutral', emphasis: 'subtle', size: 'sm' }, [], '선택'),
        n('Label', { size: 'sm', weight: 'regular', muted: true }, [], '직접입력'),
        n('Button', { variant: 'ghost', size: 'sm' }, [], '수정'),
        n('Button', { variant: 'ghost', size: 'sm', destructive: true }, [], '삭제'),
      ]),
    ]),

    // 우측: 미리보기 카드
    n('Surface', { variant: 'default', padding: 'lg', border: true }, [
      n('Label', { size: 'lg', weight: 'semibold' }, [], '미리보기'),
      n('Separator', { orientation: 'horizontal' }),

      // 미리보기 질문 1 (단일선택)
      n('Label', { size: 'default', weight: 'medium' }, [], '1. 어떤 증상으로 방문하시나요? *'),
      n('Select', { variant: 'outline', size: 'default', placeholder: '선택해주세요' }),

      // 미리보기 질문 2 (복수선택)
      n('Label', { size: 'default', weight: 'medium' }, [], '2. 방문 경로를 알려주세요'),
      n('Checkbox', { size: 'sm', label: '블로그' }),
      n('Checkbox', { size: 'sm', label: '지인 추천' }),
      n('Checkbox', { size: 'sm', label: '네이버 검색' }),

      // 미리보기 질문 3 (직접입력)
      n('Label', { size: 'default', weight: 'medium' }, [], '3. 전달할 내용을 입력해주세요'),
      n('Textarea', { variant: 'outline', placeholder: '내용을 입력해주세요', maxLength: 500 }),
    ]),
  ]
}

// 당일예약 설정 (독립 페이지)
// Source: /pages/settings/same-day-reservation/index.vue
export function sameDayReservationTemplate() {
  return [
    // 타이틀 + 플랫폼 아이콘
    n('Header', { size: 'page', heading: '당일예약' }, [
      n('Badge', { variant: 'neutral', emphasis: 'subtle', size: 'sm' }, [], '네이버'),
      n('Badge', { variant: 'neutral', emphasis: 'subtle', size: 'sm' }, [], '카카오'),
      n('Badge', { variant: 'neutral', emphasis: 'outline', size: 'sm', disabled: true }, [], '당근'),
    ]),

    // 경고: 상품 미등록 시
    n('Alert', {
      variant: 'warning',
      title: '예약 상품을 먼저 등록해주세요.',
      action: '예약 상품 생성하기',
    }),

    // 당일예약 설정 카드
    n('Surface', { variant: 'default', padding: 'lg', border: true }, [
      n('Label', { size: 'default', weight: 'medium' }, [], '예약시간 1시간 전까지 예약을 받을게요.'),
      n('Label', { size: 'sm', weight: 'regular', muted: true }, [], '[예시] 오후 3시 예약 건은 오후 2시까지 예약을 신청할 수 있어요.'),
      n('Button', { variant: 'tonal', size: 'sm' }, [], '수정'),
    ]),
  ]
}
