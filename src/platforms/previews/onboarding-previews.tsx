import React from 'react'
import {
  Button,
  Input,
  Surface,
  Label,
  Separator,
  Checkbox,
  Stepper,
  StepperList,
  StepperItem,
  StepperTrigger,
  StepperSeparator,
  Header,
  HeaderHeading,
  HeaderDescription,
} from 'doctalk-design-system'

export function AgreementsPreview() {
  return (
    <div className="px-5 py-8 space-y-6">
      <div className="text-center mb-6">
        <div className="text-xl font-bold text-foreground">닥톡 예약</div>
      </div>

      <Surface variant="default" padding="lg" className="w-full rounded-2xl border space-y-4">
        <h2 className="text-xl font-bold">약관 동의</h2>
        <p className="text-sm text-muted-foreground">서비스 이용을 위해 약관에 동의해주세요.</p>

        <Separator />

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Checkbox id="all" />
            <Label htmlFor="all" className="font-bold">전체 동의</Label>
          </div>
          <Separator />
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">서비스 이용약관 (필수)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="privacy" />
            <Label htmlFor="privacy">개인정보 수집 및 이용 (필수)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="marketing" />
            <Label htmlFor="marketing">마케팅 수신 동의 (선택)</Label>
          </div>
        </div>

        <Button variant="primary" size="lg" className="w-full mt-4">다음</Button>
      </Surface>
    </div>
  )
}

export function ApplyReservationPreview() {
  return (
    <div className="px-5 py-8 space-y-6">
      <div className="text-center mb-4">
        <div className="text-xl font-bold text-foreground">닥톡 예약</div>
      </div>

      <Stepper defaultValue="step2">
        <StepperList>
          <StepperItem value="step1" step={1} completed>
            <StepperTrigger>병원정보</StepperTrigger>
          </StepperItem>
          <StepperSeparator />
          <StepperItem value="step2" step={2}>
            <StepperTrigger>담당자 정보</StepperTrigger>
          </StepperItem>
          <StepperSeparator />
          <StepperItem value="step3" step={3}>
            <StepperTrigger>완료</StepperTrigger>
          </StepperItem>
        </StepperList>
      </Stepper>

      <Surface variant="default" padding="lg" className="w-full rounded-2xl border space-y-4">
        <h2 className="text-lg font-bold">담당자 정보</h2>
        <div>
          <Label className="mb-1.5">담당자명</Label>
          <Input placeholder="담당자명을 입력해주세요." />
        </div>
        <div>
          <Label className="mb-1.5">연락처</Label>
          <Input type="tel" placeholder="010-0000-0000" />
        </div>
        <div>
          <Label className="mb-1.5">이메일</Label>
          <Input type="email" placeholder="example@email.com" />
        </div>
        <Button variant="primary" size="lg" className="w-full">다음</Button>
      </Surface>
    </div>
  )
}

export function ApplicationPreview() {
  return (
    <div className="px-5 py-8 space-y-6">
      <div className="text-center mb-4">
        <div className="text-xl font-bold text-foreground">닥톡 예약</div>
      </div>

      <Stepper defaultValue="step1">
        <StepperList>
          <StepperItem value="step1" step={1}>
            <StepperTrigger>플랫폼 선택</StepperTrigger>
          </StepperItem>
          <StepperSeparator />
          <StepperItem value="step2" step={2}>
            <StepperTrigger>정보 입력</StepperTrigger>
          </StepperItem>
          <StepperSeparator />
          <StepperItem value="step3" step={3}>
            <StepperTrigger>완료</StepperTrigger>
          </StepperItem>
        </StepperList>
      </Stepper>

      <Surface variant="default" padding="lg" className="w-full rounded-2xl border space-y-4">
        <h2 className="text-lg font-bold">플랫폼 연동 신청</h2>
        <p className="text-sm text-muted-foreground">연동할 플랫폼을 선택해주세요.</p>

        <div className="space-y-3">
          <Surface variant="default" padding="md" className="rounded-xl border cursor-pointer hover:border-primary">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">네이버 예약</p>
                <p className="text-xs text-muted-foreground">네이버 예약 서비스와 연동합니다.</p>
              </div>
              <Checkbox />
            </div>
          </Surface>
          <Surface variant="default" padding="md" className="rounded-xl border cursor-pointer hover:border-primary">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">카카오 예약</p>
                <p className="text-xs text-muted-foreground">카카오 예약 서비스와 연동합니다.</p>
              </div>
              <Checkbox />
            </div>
          </Surface>
        </div>

        <Button variant="primary" size="lg" className="w-full">다음</Button>
      </Surface>
    </div>
  )
}

export function LinkingPlatformPreview() {
  return (
    <div className="px-5 py-8 space-y-6">
      <Header>
        <HeaderHeading>플랫폼 연동</HeaderHeading>
        <HeaderDescription>플랫폼 연동을 진행합니다.</HeaderDescription>
      </Header>

      <Surface variant="default" padding="lg" className="w-full rounded-2xl border space-y-4">
        <div>
          <Label className="mb-1.5">플랫폼 API 키</Label>
          <Input placeholder="API 키를 입력해주세요." />
        </div>
        <div>
          <Label className="mb-1.5">시크릿 키</Label>
          <Input type="password" placeholder="시크릿 키를 입력해주세요." />
        </div>
        <Button variant="primary" size="lg" className="w-full">연동하기</Button>
      </Surface>
    </div>
  )
}

export function SignupRequestPreview() {
  return (
    <div className="px-5 py-8 space-y-6">
      <div className="text-center mb-4">
        <div className="text-xl font-bold text-foreground">닥톡 예약</div>
      </div>

      <Surface variant="default" padding="lg" className="w-full rounded-2xl border space-y-4">
        <h2 className="text-lg font-bold">가입 신청</h2>
        <p className="text-sm text-muted-foreground">EMR 연동 가입 신청을 진행합니다.</p>

        <div>
          <Label className="mb-1.5">요양기관번호</Label>
          <Input placeholder="요양기관번호를 입력해주세요." />
        </div>
        <div>
          <Label className="mb-1.5">병원명</Label>
          <Input placeholder="병원명을 입력해주세요." />
        </div>
        <div>
          <Label className="mb-1.5">담당자 연락처</Label>
          <Input type="tel" placeholder="010-0000-0000" />
        </div>
        <Button variant="primary" size="lg" className="w-full">가입 신청</Button>
      </Surface>
    </div>
  )
}
