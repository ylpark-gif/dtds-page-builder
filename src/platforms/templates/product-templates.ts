import { n } from './helpers'

// 예약 상품 생성 (product/create.vue) - 2 pages: CreateProductInfo -> CreateProductSchedule
export function productCreateTemplate() {
  return [
    n('Header', { size: 'page', heading: '예약 상품 생성' }),
    n('Surface', { variant: 'muted', padding: 'lg' }, [
      // CreateProductInfo fields
      n('Input', { variant: 'outline', size: 'default', placeholder: '상품명을 입력해주세요', label: true }, [], '상품명 *'),
      n('Label', { size: 'default', weight: 'medium' }, [], '상품 이미지 *'),
      n('Button', { variant: 'outline', size: 'default' }, [], '이미지 업로드'),
      n('Label', { size: 'sm' }, [], '한 장당 최대 20MB, 1200*750 권장, 최대 120장'),
      n('Separator', { orientation: 'horizontal' }),
      n('Textarea', { variant: 'outline', placeholder: '소개글을 입력해주세요' }, [], '소개글'),
      n('Textarea', { variant: 'outline', placeholder: '예약/방문 관련 유의사항을 입력해주세요' }, [], '예약/방문 관련 유의사항'),
      n('Separator', { orientation: 'horizontal' }),
      n('Label', { size: 'default', weight: 'medium' }, [], '예약 확정 방식'),
      n('RadioGroup', { orientation: 'vertical', size: 'default' }),
    ]),
    // Sticky bottom bar
    n('Surface', { variant: 'default', padding: 'md', border: true }, [
      n('Button', { variant: 'outline', size: 'lg' }, [], '취소'),
      n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '다음'),
    ]),
  ]
}

// 예약 상품 수정
export function productEditTemplate() {
  return [
    n('Header', { size: 'page', heading: '예약 상품 수정' }),
    n('Surface', { variant: 'muted', padding: 'lg' }, [
      n('Input', { variant: 'outline', size: 'default', placeholder: '상품명을 입력해주세요', label: true }, [], '상품명 *'),
      n('Label', { size: 'default', weight: 'medium' }, [], '상품 이미지 *'),
      n('Button', { variant: 'outline', size: 'default' }, [], '이미지 업로드'),
      n('Separator', { orientation: 'horizontal' }),
      n('Textarea', { variant: 'outline', placeholder: '소개글을 입력해주세요' }, [], '소개글'),
      n('Textarea', { variant: 'outline', placeholder: '예약/방문 관련 유의사항을 입력해주세요' }, [], '예약/방문 관련 유의사항'),
      n('Separator', { orientation: 'horizontal' }),
      n('Label', { size: 'default', weight: 'medium' }, [], '예약 확정 방식'),
      n('RadioGroup', { orientation: 'vertical', size: 'default' }),
    ]),
    n('Surface', { variant: 'default', padding: 'md', border: true }, [
      n('Alert', { variant: 'info', description: '스케줄은 수정해도 기존 예약 건은 취소되지 않아요.' }),
      n('Button', { variant: 'outline', size: 'lg' }, [], '취소'),
      n('Button', { variant: 'primary', emphasis: 'solid', size: 'lg' }, [], '저장하기'),
    ]),
  ]
}

// 예약 상품 상세 (product/detail/[id].vue)
export function productDetailTemplate() {
  return [
    n('Surface', { variant: 'default', padding: 'md' }, [
      n('Button', { variant: 'ghost', size: 'sm' }, [], '뒤로'),
      n('Label', { size: 'lg', weight: 'bold' }, [], '상품명'),
    ]),
    // 기본정보 카드
    n('Card', { variant: 'default', title: '기본정보' }, [
      n('Surface', { variant: 'default', padding: 'md' }, [
        n('Button', { variant: 'ghost', size: 'sm' }, [], '수정'),
      ]),
      n('Item', { variant: 'default', title: '이름', description: '김닥톡' }),
      n('Item', { variant: 'default', title: '접수 가능 인원', description: '30분당 1명' }),
      n('Item', { variant: 'default', title: '예약 확정 시점', description: '예약 신청과 동시에 확정' }),
      n('Item', { variant: 'default', title: '소개글', description: '-' }),
      n('Item', { variant: 'default', title: '예약/방문 관련\n유의사항', description: '-' }),
    ]),
    // 진료시간 및 휴무일 카드
    n('Card', { variant: 'default', title: '진료시간 및 휴무일' }, [
      n('Surface', { variant: 'default', padding: 'md' }, [
        n('Button', { variant: 'ghost', size: 'sm' }, [], '수정'),
      ]),
      n('Item', { variant: 'default', title: '월요일', description: '진료시간 09:00 - 18:00' }),
      n('Item', { variant: 'default', title: '화요일', description: '진료시간 09:00 - 18:00' }),
      n('Item', { variant: 'default', title: '수요일', description: '진료시간 09:00 - 18:00' }),
      n('Item', { variant: 'default', title: '목요일', description: '진료시간 09:00 - 18:00' }),
      n('Item', { variant: 'default', title: '금요일', description: '진료시간 09:00 - 18:00' }),
      n('Item', { variant: 'default', title: '토요일', description: '휴무' }),
      n('Item', { variant: 'default', title: '일요일', description: '휴무' }),
    ]),
  ]
}

// 기본정보 수정 다이얼로그
export function productDetailEditDialogTemplate() {
  return [
    n('Dialog', { title: '기본정보 수정' }, [
      n('Input', { variant: 'outline', size: 'default', placeholder: '입력', label: true, maxlength: 30 }, [], '이름 *'),
      n('Label', { size: 'default', weight: 'medium' }, [], '사진 *'),
      n('Button', { variant: 'outline', size: 'sm' }, [], '이미지 추가'),
      n('Label', { size: 'sm' }, [], '한 장당 최대 20MB, 1200*750 권장, 최대 120장'),
      n('Separator', { orientation: 'horizontal' }),
      n('Label', { size: 'default', weight: 'medium' }, [], '접수 가능 인원 *'),
      n('Select', { variant: 'outline', size: 'default', placeholder: '선택' }),
      n('Label', { size: 'default', weight: 'medium' }, [], '예약 확정 시점 *'),
      n('Select', { variant: 'outline', size: 'default', placeholder: '선택' }),
      n('Separator', { orientation: 'horizontal' }),
      n('Textarea', { variant: 'outline', placeholder: '입력', maxlength: 1000 }, [], '소개글'),
      n('Textarea', { variant: 'outline', placeholder: '입력', maxlength: 1000 }, [], '예약/방문 관련 유의사항'),
      n('Surface', { variant: 'default', padding: 'md' }, [
        n('Button', { variant: 'outline', size: 'default' }, [], '취소'),
        n('Button', { variant: 'primary', emphasis: 'solid', size: 'default' }, [], '저장'),
      ]),
    ]),
  ]
}
