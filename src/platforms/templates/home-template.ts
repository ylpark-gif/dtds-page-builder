import { n } from './helpers'

// 홈 대시보드 - /pages/index.vue
// 구성: TempleCodeAuthCard 또는 ReservationGuideCard + ReservationStatus
export function homeDashboardTemplate(): ReturnType<typeof n>[] {
  return [
    // TempleCodeAuthCard (플랫폼 연동 전 - isCompleted 상태)
    n('Card', {
      variant: 'filled',
      interactive: true,
      padding: 'xl',
      radius: 'xl',
      background: 'gradient-green',
    }, [
      n('Surface', { variant: 'default', padding: 'none' }, [
        n('Surface', { variant: 'default', padding: 'none', direction: 'row', gap: 'sm' }, [
          n('Label', { size: 'xl', weight: 'bold', color: 'white' }, [], '플랫폼 연동하기'),
          n('Badge', { variant: 'outline', color: 'white' }, [], 'FREE'),
        ]),
        n('Label', { size: 'default', color: 'white' }, [], '네이버·카카오·당근 예약을 연동하고 더 많은 신규 환자를 만나보세요.'),
      ]),
      n('Button', { variant: 'secondary', emphasis: 'solid', size: 'default' }, [], '연동하기'),
    ]),

    // TempleCodeAuthCard (연동 설정 미완료 - !isCompleted 상태)
    n('Card', {
      variant: 'filled',
      interactive: true,
      padding: 'xl',
      radius: 'xl',
      background: 'gradient-green',
    }, [
      n('Surface', { variant: 'default', padding: 'none' }, [
        n('Surface', { variant: 'default', padding: 'none', direction: 'row', gap: 'sm' }, [
          n('Label', { size: 'xl', weight: 'bold', color: 'white' }, [], '연동 설정 진행하기'),
          n('Badge', { variant: 'outline', color: 'white' }, [], '전자차트 담당자용'),
        ]),
        n('Label', { size: 'default', color: 'white' }, [], '전자차트 담당자가 직접 방문하여 연동을 도와드려요.\n별도 조작없이 잠시만 기다려주세요. 신속하게 지원해드릴게요.'),
      ]),
      n('Button', { variant: 'secondary', emphasis: 'solid', size: 'default' }, [], '연동 설정 시작'),
    ]),

    // ReservationGuideCard - 예약 설정 안내
    n('Card', {
      variant: 'filled',
      interactive: false,
      padding: 'md',
      radius: 'xl',
      background: 'dg50',
    }, [
      // 상단 타이틀 + 접기/펼치기
      n('Surface', { variant: 'default', padding: 'none', direction: 'row', justify: 'space-between', align: 'center' }, [
        n('Surface', { variant: 'default', padding: 'none', direction: 'row', gap: 'sm' }, [
          n('Label', { size: 'default', weight: 'semibold', color: 'primary' }, [], '예약 설정 안내'),
        ]),
        n('Button', { variant: 'ghost', size: 'sm' }, [], '접기'),
      ]),

      // 가이드 카드 두 개
      n('Surface', { variant: 'default', padding: 'none', direction: 'row', gap: 'md' }, [
        // 01. 플랫폼 연동
        n('Card', { variant: 'outlined', interactive: false, padding: 'lg', radius: 'xl' }, [
          n('Surface', { variant: 'default', padding: 'none' }, [
            n('Surface', { variant: 'default', padding: 'none', direction: 'row', gap: 'sm' }, [
              n('Label', { size: 'lg', weight: 'semibold', color: 'primary' }, [], '01'),
              n('Label', { size: 'lg', weight: 'semibold' }, [], '플랫폼 연동'),
            ]),
            n('Label', { size: 'default', color: 'muted' }, [], '네이버, 카카오, 당근 연동이 완료되지 않았어요. 연동을 시작할까요?'),
          ]),
          n('Button', { variant: 'secondary', emphasis: 'outlined', size: 'lg' }, [], '연동하기'),
        ]),

        // 02. 예약 상품 생성
        n('Card', { variant: 'outlined', interactive: false, padding: 'lg', radius: 'xl' }, [
          n('Surface', { variant: 'default', padding: 'none' }, [
            n('Surface', { variant: 'default', padding: 'none', direction: 'row', gap: 'sm' }, [
              n('Label', { size: 'lg', weight: 'semibold', color: 'primary' }, [], '02'),
              n('Label', { size: 'lg', weight: 'semibold' }, [], '예약 상품 생성'),
            ]),
            n('Label', { size: 'default', color: 'muted' }, [], '연동된 플랫폼에서 예약 환자를 받고 차트에서 예약 현황을 확인해보세요.'),
          ]),
          n('Button', { variant: 'secondary', emphasis: 'outlined', size: 'lg' }, [], '생성하기'),
        ]),
      ]),
    ]),

    // ReservationStatus - 예약현황 섹션
    n('Surface', { variant: 'default', padding: 'none' }, [
      // 제목
      n('Header', { size: 'section', heading: '예약현황' }),

      // ReservationFilter - 필터 바
      n('Surface', { variant: 'default', padding: 'none', gap: 'md' }, [
        // 상태 필터 버튼 (예약 신청 / 예약 확정 / 예약 취소)
        n('Surface', { variant: 'default', padding: 'none', direction: 'row', gap: 'md', align: 'center' }, [
          n('Button', { variant: 'secondary', emphasis: 'outlined', size: 'lg' }, [], '예약 신청'),
          n('Separator', { orientation: 'vertical' }),
          n('Button', { variant: 'secondary', emphasis: 'outlined', size: 'lg' }, [], '예약 확정'),
          n('Button', { variant: 'secondary', emphasis: 'outlined', size: 'lg' }, [], '예약 취소'),
        ]),

        // 날짜/플랫폼/상품/검색 필터
        n('Surface', { variant: 'default', padding: 'none', direction: 'row', gap: 'md' }, [
          // 예약일/예약신청일 선택 + 날짜 범위
          n('Select', { variant: 'outline', size: 'default', placeholder: '예약일', options: '예약일,예약 신청일' }),
          // 플랫폼 선택 태그 필터
          n('Select', { variant: 'outline', size: 'default', placeholder: '플랫폼 선택', multiple: true, options: '네이버,카카오,당근' }),
          // 예약 상품 선택 태그 필터
          n('Select', { variant: 'outline', size: 'default', placeholder: '예약 상품 선택', multiple: true }),
          // 예약자/방문자 검색
          n('Surface', { variant: 'default', padding: 'none', direction: 'row', gap: 'sm' }, [
            n('Select', { variant: 'outline', size: 'default', placeholder: '예약자', options: '예약자,방문자' }),
            n('Input', { variant: 'outline', size: 'default', placeholder: '예약자 이름 검색', type: 'text' }),
          ]),
        ]),

        // 모바일 필터 더보기 버튼
        n('Button', { variant: 'secondary', emphasis: 'tonal', size: 'lg', fullWidth: true }, [], '필터 더보기'),
      ]),

      // 전체 카운트
      n('Label', { size: 'default', color: 'muted' }, [], '전체 0개'),

      // 예약 테이블
      n('Table', {
        columns: '플랫폼,예약 상태,예약자,방문자,예약 상품,예약 일시,예약 신청 일시,확정 일시,취소 사유',
        sortableColumns: '예약 일시,예약 신청 일시',
      }),

      // 데이터 없음 상태 - 플랫폼 연동 전
      n('Empty', {
        title: '플랫폼 연동 전',
        description: '먼저 플랫폼을 연동하고 예약 상품을 등록해주세요.',
      }, [
        n('Button', { variant: 'secondary', emphasis: 'tonal', size: 'default' }, [], '연동하기'),
      ]),

      // 데이터 없음 상태 - 연동 설정 전
      n('Empty', {
        title: '플랫폼 연동 설정 전',
      }, [
        n('Button', { variant: 'secondary', emphasis: 'tonal', size: 'default' }, [], '연동 설정 시작'),
      ]),

      // 데이터 없음 상태 - 예약 상품 생성 전
      n('Empty', {
        title: '예약 상품 생성 전',
        description: '먼저 예약 상품을 등록해주세요.',
      }, [
        n('Button', { variant: 'secondary', emphasis: 'tonal', size: 'default' }, [], '생성하기'),
      ]),

      // 데이터 없음 상태 - 검색 결과 없음
      n('Empty', {
        title: '검색 결과가 없어요',
        description: '검색어를 수정하시거나 검색 기간, 플랫폼, 예약 상품 필터를 확인해 주세요.',
        iconName: 'search',
      }),

      // 페이지네이션
      n('Pagination', {}),
    ]),
  ]
}

// 홈 - 스켈레톤 로딩 상태
export function homeSkeletonTemplate(): ReturnType<typeof n>[] {
  return [
    n('Skeleton', { width: '100%', height: 190, radius: 'xl' }),
    n('Surface', { variant: 'default', padding: 'none' }, [
      n('Header', { size: 'section', heading: '예약현황' }),
      n('Skeleton', { width: '100%', height: 400 }),
    ]),
  ]
}
