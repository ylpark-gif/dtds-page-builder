import React from 'react'
import {
  Button,
  Input,
  Textarea,
  Select,
  SelectTrigger,
  SelectValue,
  Switch,
  Label,
  Surface,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  Alert,
  AlertTitle,
  AlertDescription,
  Separator,
  Tab,
  TabList,
  TabTrigger,
  TabContent,
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
  Chip,
  Header,
  HeaderHeading,
  HeaderDescription,
} from 'doctalk-design-system'

/* ─────────────────────────────────────────────
 * 1. SettingsHospitalPreview - 병원정보 설정
 *
 * Source: pages/settings/hospital-info/index.vue
 * Fields: 병원 이름, 병원 설명, 병원 종류, 진료과, 대표 진료과,
 *         병원 사진, 병원 주소, 연락처, 이메일, 대표원장,
 *         관리자 연락처, 주차, 사업자 정보, 요양기관번호
 * ───────────────────────────────────────────── */
export function SettingsHospitalPreview() {
  return (
    <div className="space-y-4" style={{ maxWidth: 1080 }}>
      <Header>
        <HeaderHeading>병원정보</HeaderHeading>
      </Header>

      <Surface variant="default" padding="lg" className="rounded-2xl border space-y-6">
        {/* 병원 이름 */}
        <div className="space-y-4">
          <div>
            <Label className="mb-1.5">
              병원 이름 <span className="text-primary">*</span>
            </Label>
            <Input placeholder="병원 이름을 입력해주세요." defaultValue="닥톡치과의원" />
            <p className="text-xs text-muted-foreground text-right mt-1">7/50자</p>
          </div>

          {/* 병원 설명 */}
          <div>
            <Label className="mb-1.5">
              병원 설명 <span className="text-primary">*</span>
            </Label>
            <Textarea
              placeholder="병원 설명을 최소 20자 이상 입력해주세요."
              defaultValue="서울시 강남구에 위치한 닥톡치과의원입니다. 친절하고 정확한 진료를 약속드립니다."
            />
            <p className="text-xs text-muted-foreground text-right mt-1">42/2000자 (최소 20자)</p>
          </div>
        </div>

        <Separator />

        {/* 병원 종류 / 진료과 / 대표 진료과 */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="mb-1.5">
                병원 종류 <span className="text-primary">*</span>
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="치과" />
                </SelectTrigger>
              </Select>
            </div>
            <div>
              <Label className="mb-1.5">
                진료과 <span className="text-primary">*</span>
              </Label>
              <div className="flex flex-wrap gap-1.5 mt-1">
                <Chip>일반진료</Chip>
                <Chip>교정</Chip>
                <Chip>임플란트</Chip>
              </div>
            </div>
          </div>
          <div>
            <Label className="mb-1.5">
              대표 진료과 <span className="text-primary">*</span>
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="일반진료" />
              </SelectTrigger>
            </Select>
          </div>
        </div>

        <Separator />

        {/* 병원 사진 */}
        <div>
          <Label className="mb-1.5">
            병원 사진 <span className="text-primary">*</span>
          </Label>
          <div className="flex gap-2 mt-2">
            <div className="w-[76px] h-[76px] rounded-lg bg-muted flex items-center justify-center">
              <span className="text-xs text-muted-foreground">+</span>
            </div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-[76px] h-[76px] rounded-lg bg-muted" />
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-2">한 장당 최대 20MB, 1200*750 권장, 최대 120장</p>
        </div>

        <Separator />

        {/* 병원 주소 */}
        <div className="space-y-3">
          <div className="flex gap-2 items-end">
            <div className="flex-1">
              <Label className="mb-1.5">
                병원 주소 <span className="text-primary">*</span>
              </Label>
              <Input placeholder="병원 주소" defaultValue="서울특별시 강남구 테헤란로 123" disabled />
            </div>
            <Button variant="outline">주소 찾기</Button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Input placeholder="상세 주소를 입력해주세요." defaultValue="3층 301호" />
            <Input placeholder="우편 번호" defaultValue="06234" disabled />
          </div>
        </div>

        <Separator />

        {/* 병원 연락처 / 이메일 */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="mb-1.5">
              병원 연락처 <span className="text-primary">*</span>
            </Label>
            <Input type="tel" placeholder="02-1234-5678" defaultValue="02-1234-5678" />
          </div>
          <div>
            <Label className="mb-1.5">
              이메일 <span className="text-primary">*</span>
            </Label>
            <Input placeholder="doctalk@email.com" defaultValue="doctalk@email.com" />
            <p className="text-xs text-muted-foreground text-right mt-1">18/50자</p>
          </div>
        </div>

        {/* 대표원장 성함 / 연락처 */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="mb-1.5">
              대표원장 성함 <span className="text-primary">*</span>
            </Label>
            <Input placeholder="성함을 입력해주세요." defaultValue="홍길동" />
            <p className="text-xs text-muted-foreground text-right mt-1">3/16자</p>
          </div>
          <div>
            <Label className="mb-1.5">
              대표원장 연락처 <span className="text-primary">*</span>
            </Label>
            <Input type="tel" placeholder="010-1234-5678" defaultValue="010-1234-5678" />
          </div>
        </div>

        {/* 관리자 연락처 */}
        <div>
          <Label className="mb-1.5">
            관리자 연락처 <span className="text-primary">*</span>
          </Label>
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium text-muted-foreground shrink-0">010-</span>
            <Input placeholder="1234-5678" defaultValue="1234-5678" />
          </div>
        </div>

        <Separator />

        {/* 주차 */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="mb-1.5">
              주차 <span className="text-primary">*</span>
            </Label>
            <div className="flex items-center gap-2 mt-1">
              <Switch defaultChecked />
              <span className="text-sm text-muted-foreground">주차 가능</span>
            </div>
          </div>
          <div>
            <Label className="mb-1.5">주차비</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="무료" />
              </SelectTrigger>
            </Select>
          </div>
        </div>

        <Separator />

        {/* 사업자 유형 / 사업자등록번호 */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="mb-1.5">
              사업자 유형 <span className="text-primary">*</span>
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="개인사업자" />
              </SelectTrigger>
            </Select>
          </div>
          <div>
            <Label className="mb-1.5">
              사업자등록번호 <span className="text-primary">*</span>
            </Label>
            <Input placeholder="123-45-67890" defaultValue="123-45-67890" />
            <p className="text-xs text-muted-foreground text-right mt-1">10/10자</p>
          </div>
        </div>

        {/* 사업장 이름 / 사업자 이름 */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="mb-1.5">
              사업장 이름(상호) <span className="text-primary">*</span>
            </Label>
            <Input placeholder="사업장 이름을 입력해주세요." defaultValue="닥톡치과의원" />
            <p className="text-xs text-muted-foreground text-right mt-1">6/25자</p>
          </div>
          <div>
            <Label className="mb-1.5">
              사업자 이름(성명) <span className="text-primary">*</span>
            </Label>
            <Input placeholder="사업자 이름을 입력해주세요." defaultValue="홍길동" />
            <p className="text-xs text-muted-foreground text-right mt-1">3/16자</p>
          </div>
        </div>

        {/* 업태 / 종목 */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="mb-1.5">
              업태 <span className="text-primary">*</span>
            </Label>
            <Input placeholder="업태를 입력해주세요." defaultValue="보건업" />
          </div>
          <div>
            <Label className="mb-1.5">
              종목 <span className="text-primary">*</span>
            </Label>
            <Input placeholder="종목을 입력해주세요." defaultValue="치과의원" />
          </div>
        </div>

        {/* 요양기관번호 */}
        <div>
          <Label className="mb-1.5">
            요양기관번호 <span className="text-primary">*</span>
          </Label>
          <Input placeholder="요양기관번호 8자리를 입력해주세요." defaultValue="12345678" />
          <p className="text-xs text-muted-foreground text-right mt-1">8/8자</p>
        </div>
      </Surface>

      {/* 저장 버튼 */}
      <div className="flex justify-end">
        <Button variant="primary" size="lg">저장</Button>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
 * 2. SettingsPlatformSyncPreview - 플랫폼 연동 상태
 *
 * Source: pages/settings/platform-sync/index.vue
 * Platforms: 네이버 (운영 중), 카카오 (검수중), 당근 (운영 중 + 대기 접수)
 * ───────────────────────────────────────────── */
export function SettingsPlatformSyncPreview() {
  return (
    <div className="space-y-4" style={{ maxWidth: 1080 }}>
      <Header>
        <HeaderHeading>플랫폼</HeaderHeading>
      </Header>

      <Surface variant="default" padding="lg" className="rounded-2xl border">
        <div className="space-y-8">
          {/* 네이버 */}
          <Item>
            <ItemContent>
              <div className="flex items-center gap-2">
                <ItemTitle>네이버</ItemTitle>
              </div>
            </ItemContent>
            <span className="text-lg font-bold" style={{ color: 'var(--dg600)' }}>운영 중</span>
          </Item>

          <Separator />

          {/* 카카오 */}
          <Item>
            <ItemContent>
              <div className="flex items-center gap-2">
                <ItemTitle>카카오</ItemTitle>
                <Badge variant="neutral" size="sm">검수중</Badge>
              </div>
            </ItemContent>
            <span className="text-lg font-bold text-muted-foreground">-</span>
          </Item>

          <Separator />

          {/* 당근 */}
          <Item>
            <ItemContent>
              <div className="flex items-center gap-2">
                <ItemTitle>당근</ItemTitle>
                <Chip>대기 접수 <strong>사용</strong></Chip>
              </div>
            </ItemContent>
            <span className="text-lg font-bold" style={{ color: 'var(--dg600)' }}>운영 중</span>
          </Item>
        </div>
      </Surface>

      {/* 검수 안내 */}
      <Alert variant="info">
        <AlertDescription>
          카카오 연동이 완료되면 병원 정보에 입력한 연락처 <strong>02-1234-5678</strong>로 안내드릴게요. (영업일 기준 최대 3~5일 소요)
          <br />
          다른 연락처로 안내받길 원하는 경우 문의하기를 이용해주세요.
        </AlertDescription>
      </Alert>
    </div>
  )
}

/* ─────────────────────────────────────────────
 * 3. SettingsProductListPreview - 예약 상품 목록
 *
 * Source: pages/settings/product/index.vue
 * Features: 상품 카드 리스트, 노출 토글, 운영일/휴무일 메타,
 *           진료실 배지, 당일예약 바, 상품 추가 버튼
 * ───────────────────────────────────────────── */
export function SettingsProductListPreview() {
  const products = [
    {
      title: '일반 진료',
      visible: true,
      days: '월, 화, 수, 목, 금',
      holidays: '토, 일',
      rooms: ['진료실 1', '진료실 2'],
      tempSchedules: 0,
    },
    {
      title: '교정 상담',
      visible: true,
      days: '월, 수, 금',
      holidays: '토, 일, 공휴일',
      rooms: ['진료실 3'],
      tempSchedules: 2,
    },
    {
      title: '임플란트 상담',
      visible: false,
      days: '화, 목',
      holidays: '토, 일',
      rooms: [],
      tempSchedules: 0,
    },
  ]

  return (
    <div className="space-y-4" style={{ maxWidth: 1280 }}>
      {/* 타이틀 영역 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Header>
            <HeaderHeading>예약 상품</HeaderHeading>
          </Header>
          <span className="text-sm text-muted-foreground">
            <strong style={{ color: 'var(--dg600)' }}>노출 중 2</strong> / 전체 3
          </span>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">예약 상품 추가</Button>
        </div>
      </div>

      {/* 당일예약 바 */}
      <Surface variant="default" padding="md" className="rounded-2xl border cursor-pointer">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-muted-foreground">
            당일예약 <strong style={{ color: 'var(--dg600)' }}>1시간 전</strong>까지 예약을 받아요
          </span>
          <span className="text-muted-foreground">&rsaquo;</span>
        </div>
      </Surface>

      {/* 상품 카드 목록 */}
      <div className="space-y-3">
        {products.map((product, idx) => (
          <Card key={idx} variant="outlined">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 flex-wrap">
                  <CardTitle>{product.title}</CardTitle>
                  {product.rooms.map((room, i) => (
                    <Badge key={i} variant="neutral" size="sm">{room}</Badge>
                  ))}
                  {product.rooms.length === 0 && (
                    <Badge variant="destructive" size="sm">진료실 연결 안됨</Badge>
                  )}
                  {product.tempSchedules > 0 && (
                    <Badge variant="warning" size="sm">임시 스케줄 {product.tempSchedules}건</Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Switch defaultChecked={product.visible} />
                  <span className="text-sm font-medium" style={{ color: product.visible ? 'var(--foreground)' : 'var(--muted-foreground)' }}>
                    {product.visible ? '노출 중' : '미노출'}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="material-symbols-rounded text-base">schedule</span>
                  <span>{product.days}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="material-symbols-rounded text-base">beach_access</span>
                  <span>휴무: {product.holidays}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
 * 4. SettingsProductDetailPreview - 예약 상품 상세
 *
 * Source: pages/settings/product/detail/[id]/index.vue
 * Tabs: 예약 스케줄, 기본정보
 * Sub-components: ProductBasicInfo (사진, 소개글, 유의사항, 확정 시점),
 *                 ProductSchedule (운영 시간, 예약 설정)
 * ───────────────────────────────────────────── */
export function SettingsProductDetailPreview() {
  return (
    <div className="space-y-6" style={{ maxWidth: 1280 }}>
      {/* 타이틀 - 뒤로가기 + 상품명 + 더보기 메뉴 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">&larr;</Button>
          <Header>
            <HeaderHeading>일반 진료</HeaderHeading>
          </Header>
        </div>
        <Button variant="ghost" size="icon">&#8943;</Button>
      </div>

      {/* 탭: 예약 스케줄 / 기본정보 */}
      <Tab defaultValue="schedule">
        <TabList>
          <TabTrigger value="schedule">예약 스케줄</TabTrigger>
          <TabTrigger value="info">기본정보</TabTrigger>
        </TabList>

        {/* 예약 스케줄 탭 */}
        <TabContent value="schedule">
          <div className="space-y-4 pt-4">
            {/* 운영 시간 */}
            <Surface variant="default" padding="lg" className="rounded-2xl border space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold">운영 시간</span>
                <Button variant="outline" size="sm">수정</Button>
              </div>
              <div className="space-y-2">
                {['월', '화', '수', '목', '금'].map((day) => (
                  <div key={day} className="flex items-center gap-4">
                    <span className="w-6 text-sm font-semibold text-muted-foreground">{day}</span>
                    <span className="text-sm">09:00 ~ 18:00</span>
                    <span className="text-xs text-muted-foreground">점심 12:00 ~ 13:00</span>
                  </div>
                ))}
                {['토', '일'].map((day) => (
                  <div key={day} className="flex items-center gap-4">
                    <span className="w-6 text-sm font-semibold" style={{ color: 'var(--muted-foreground)' }}>{day}</span>
                    <span className="text-sm text-muted-foreground">휴무</span>
                  </div>
                ))}
              </div>
            </Surface>

            {/* 예약 설정 */}
            <Surface variant="default" padding="lg" className="rounded-2xl border space-y-3">
              <span className="text-base font-semibold">예약 설정</span>
              <Item density="compact">
                <ItemContent>
                  <ItemTitle>예약 단위</ItemTitle>
                  <ItemDescription>30분</ItemDescription>
                </ItemContent>
              </Item>
              <Item density="compact">
                <ItemContent>
                  <ItemTitle>시간당 예약 건수</ItemTitle>
                  <ItemDescription>제한 없음</ItemDescription>
                </ItemContent>
              </Item>
            </Surface>
          </div>
        </TabContent>

        {/* 기본정보 탭 */}
        <TabContent value="info">
          <div className="pt-4">
            <Surface variant="default" padding="lg" className="rounded-2xl border space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold" style={{ color: '#585858' }}>기본정보</span>
                <Button variant="outline" size="sm">수정</Button>
              </div>

              {/* 상품 사진 */}
              <div className="space-y-3">
                <span className="text-sm font-medium text-muted-foreground">상품 사진</span>
                <div className="flex gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-[76px] h-[76px] rounded-lg bg-muted" />
                  ))}
                </div>
              </div>

              <Separator />

              {/* 소개글 */}
              <div className="space-y-2">
                <span className="text-sm font-medium text-muted-foreground">소개글</span>
                <p className="text-sm">일반 진료 예약 상품입니다. 충치 치료, 스케일링 등 일반 치과 진료를 예약하실 수 있습니다.</p>
              </div>

              <Separator />

              {/* 예약/방문 관련 유의사항 */}
              <div className="space-y-2">
                <span className="text-sm font-medium text-muted-foreground">예약/방문 관련 유의사항</span>
                <p className="text-sm">예약 시간 10분 전까지 내원해주세요.</p>
              </div>

              <Separator />

              {/* 예약 확정 시점 */}
              <div className="space-y-2">
                <span className="text-sm font-medium text-muted-foreground">예약 확정 시점</span>
                <p className="text-sm">즉시 확정</p>
              </div>
            </Surface>
          </div>
        </TabContent>
      </Tab>
    </div>
  )
}

/* ─────────────────────────────────────────────
 * 5. SettingsReservationPreview - 예약설정
 *
 * Source: pages/settings/reservation-setting/index.vue
 * Tabs: 예약 시 사전질문, 당일예약
 * Sub-components: PreQuestionTab (질문 목록 + 미리보기), SameDayTab
 * ───────────────────────────────────────────── */
export function SettingsReservationPreview() {
  return (
    <div className="space-y-4" style={{ maxWidth: 1200 }}>
      <Header>
        <HeaderHeading>예약설정</HeaderHeading>
      </Header>

      <Tab defaultValue="pre-question">
        <TabList>
          <TabTrigger value="pre-question">예약 시 사전질문</TabTrigger>
          <TabTrigger value="same-day">당일예약</TabTrigger>
        </TabList>

        {/* 사전질문 탭 */}
        <TabContent value="pre-question">
          <div className="space-y-4 pt-4">
            {/* 안내 배너 */}
            <Alert variant="info">
              <AlertDescription>
                환자가 예약할 때 사전 질문이 노출됩니다. (최대 10개)
              </AlertDescription>
            </Alert>

            <div className="grid gap-4" style={{ gridTemplateColumns: '1fr 380px' }}>
              {/* 질문 목록 */}
              <Surface variant="default" className="rounded-2xl border overflow-hidden">
                <div className="flex items-center justify-between p-5 pb-3">
                  <span className="text-base font-semibold">사전질문 목록</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">순서 변경</Button>
                    <Button variant="primary" size="sm">질문 추가</Button>
                  </div>
                </div>

                {[
                  { question: '방문 목적을 선택해주세요.', type: '단일선택', required: true },
                  { question: '증상을 선택해주세요.', type: '복수선택', required: true },
                  { question: '추가 요청사항이 있으시면 작성해주세요.', type: '직접입력', required: false },
                ].map((q, idx) => (
                  <div key={idx} className="px-5 py-4 hover:bg-muted/50 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{q.question}</span>
                        <Badge
                          variant={q.required ? 'success' : 'neutral'}
                          emphasis="subtle"
                          size="sm"
                        >
                          {q.required ? '필수' : '선택'}
                        </Badge>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">수정</Button>
                        <Button variant="ghost" size="sm">삭제</Button>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{q.type}</span>
                  </div>
                ))}
              </Surface>

              {/* 미리보기 */}
              <Surface variant="default" padding="lg" className="rounded-2xl border h-fit">
                <span className="text-base font-semibold mb-3 block">미리보기</span>
                <div className="rounded-xl bg-muted/30 p-4 space-y-4">
                  <div>
                    <Label className="mb-1.5">
                      방문 목적을 선택해주세요. <span className="text-primary">*</span>
                    </Label>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      <Chip>충치 치료</Chip>
                      <Chip>스케일링</Chip>
                      <Chip>교정 상담</Chip>
                    </div>
                  </div>
                  <div>
                    <Label className="mb-1.5">
                      증상을 선택해주세요. <span className="text-primary">*</span>
                    </Label>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      <Chip>통증</Chip>
                      <Chip>부종</Chip>
                      <Chip>출혈</Chip>
                    </div>
                  </div>
                  <div>
                    <Label className="mb-1.5">추가 요청사항이 있으시면 작성해주세요.</Label>
                    <Textarea placeholder="내용을 입력해주세요." rows={3} />
                  </div>
                </div>
              </Surface>
            </div>
          </div>
        </TabContent>

        {/* 당일예약 탭 */}
        <TabContent value="same-day">
          <div className="space-y-4 pt-4">
            <Surface variant="default" className="rounded-2xl border overflow-hidden">
              <div className="flex items-center justify-between p-7 pb-5">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-semibold">당일예약</span>
                  <div className="flex gap-2">
                    <Badge variant="neutral" emphasis="subtle" size="sm">네이버</Badge>
                    <Badge variant="neutral" emphasis="subtle" size="sm">카카오</Badge>
                    <Badge variant="neutral" size="sm">당근</Badge>
                  </div>
                </div>
                <Button variant="outline" size="sm">수정</Button>
              </div>
              <div className="px-7 pb-7 space-y-2">
                <p className="text-base font-semibold">
                  예약 시간 <strong style={{ color: 'var(--dg600)' }}>1시간 전까지</strong> 예약을 받을게요.
                </p>
                <p className="text-sm text-muted-foreground">
                  [예시] 오후 3시 예약 건은 오후 2시까지 예약을 신청할 수 있어요.
                </p>
              </div>
            </Surface>
          </div>
        </TabContent>
      </Tab>
    </div>
  )
}

/* ─────────────────────────────────────────────
 * 6. SettingsSameDayPreview - 당일예약 설정 (독립 페이지)
 *
 * Source: pages/settings/same-day-reservation/index.vue
 * Features: 플랫폼 아이콘 (네이버, 카카오, 당근 비활성),
 *           경고 배너 (상품 없을 때), 당일예약 설정 카드
 * ───────────────────────────────────────────── */
export function SettingsSameDayPreview() {
  return (
    <div className="space-y-4" style={{ maxWidth: 1080 }}>
      <div className="flex items-center gap-2">
        <Header>
          <HeaderHeading>당일예약</HeaderHeading>
        </Header>
        <div className="flex items-center gap-1 rounded-xl bg-muted/50 px-1.5 py-1">
          <Badge variant="neutral" emphasis="subtle" size="sm">N</Badge>
          <Badge variant="neutral" emphasis="subtle" size="sm">K</Badge>
          <Badge variant="neutral" size="sm" style={{ opacity: 0.5 }}>당근</Badge>
        </div>
      </div>

      {/* 경고 배너 - 예약 상품 없을 때 */}
      <Alert variant="warning">
        <AlertTitle>예약 상품을 먼저 등록해주세요.</AlertTitle>
        <AlertDescription>
          <a className="underline font-semibold text-sm cursor-pointer">예약 상품 생성하기</a>
        </AlertDescription>
      </Alert>

      {/* 당일예약 설정 카드 */}
      <Surface variant="default" padding="lg" className="rounded-3xl border">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-base font-semibold">
              예약시간 <strong style={{ color: 'var(--dg600)' }}>1시간 전까지</strong> 예약을 받을게요.
            </p>
            <p className="text-sm text-muted-foreground">
              [예시] 오후 3시 예약 건은 오후 2시까지 예약을 신청할 수 있어요.
            </p>
          </div>
          <Button variant="outline" size="sm">수정</Button>
        </div>
      </Surface>
    </div>
  )
}
