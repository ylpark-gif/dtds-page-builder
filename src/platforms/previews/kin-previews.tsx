import React from 'react'
import {
  Button,
  Input,
  Surface,
  Label,
  Separator,
  Stepper,
  StepperList,
  StepperItem,
  StepperTrigger,
  StepperSeparator,
  Spinner,
} from 'doctalk-design-system'

export function KinJoinPreview() {
  return (
    <div className="px-5 py-8 space-y-6">
      <div className="text-center mb-4">
        <div className="text-xl font-bold text-foreground">닥톡 예약</div>
      </div>

      <Stepper defaultValue="step2">
        <StepperList>
          <StepperItem value="step1" step={1} completed>
            <StepperTrigger>약관동의</StepperTrigger>
          </StepperItem>
          <StepperSeparator />
          <StepperItem value="step2" step={2}>
            <StepperTrigger>병원정보</StepperTrigger>
          </StepperItem>
          <StepperSeparator />
          <StepperItem value="step3" step={3}>
            <StepperTrigger>계정설정</StepperTrigger>
          </StepperItem>
        </StepperList>
      </Stepper>

      <Surface variant="default" padding="lg" className="w-full rounded-2xl border space-y-4">
        <h2 className="text-lg font-bold">지식iN 회원가입</h2>
        <p className="text-sm text-muted-foreground">병원 정보를 입력해주세요.</p>

        <div>
          <Label className="mb-1.5">병원명</Label>
          <Input placeholder="병원명을 입력해주세요." />
        </div>
        <div>
          <Label className="mb-1.5">요양기관번호</Label>
          <Input placeholder="요양기관번호를 입력해주세요." />
        </div>
        <div>
          <Label className="mb-1.5">원장님 성함</Label>
          <Input placeholder="원장님 성함을 입력해주세요." />
        </div>

        <Separator />

        <Button variant="primary" size="lg" className="w-full">다음</Button>
      </Surface>
    </div>
  )
}

export function KinPaymentPreview() {
  return (
    <div className="px-5 py-8 space-y-6">
      <div className="text-center mb-4">
        <div className="text-xl font-bold text-foreground">닥톡 예약</div>
      </div>

      <Surface variant="default" padding="lg" className="w-full rounded-2xl border space-y-4">
        <h2 className="text-lg font-bold">결제 수단 등록</h2>
        <p className="text-sm text-muted-foreground">네이버 지식iN 결제 수단을 등록합니다.</p>

        <div>
          <Label className="mb-1.5">카드번호</Label>
          <Input placeholder="0000-0000-0000-0000" />
        </div>
        <div className="flex gap-3">
          <div className="flex-1">
            <Label className="mb-1.5">유효기간</Label>
            <Input placeholder="MM/YY" />
          </div>
          <div className="flex-1">
            <Label className="mb-1.5">CVC</Label>
            <Input type="password" placeholder="000" />
          </div>
        </div>
        <div>
          <Label className="mb-1.5">생년월일 / 사업자번호</Label>
          <Input placeholder="6자리 입력" />
        </div>

        <Button variant="primary" size="lg" className="w-full">등록하기</Button>
      </Surface>
    </div>
  )
}

export function KinLinkPreview() {
  return (
    <div className="flex flex-col items-center justify-center px-5 py-16">
      <Spinner />
      <p className="mt-4 text-sm text-muted-foreground">KIN 링크로 이동 중...</p>
    </div>
  )
}
