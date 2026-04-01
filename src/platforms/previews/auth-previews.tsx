import React from 'react'
import {
  Button,
  Input,
  Surface,
  Alert,
  AlertTitle,
  AlertDescription,
  Separator,
  Label,
  Spinner,
} from 'doctalk-design-system'

export function LoginPreview() {
  return (
    <div className="flex flex-col items-center px-5 py-8">
      {/* Logo */}
      <div className="mb-6 text-center">
        <div className="text-xl font-bold text-foreground">닥톡 예약</div>
      </div>

      {/* Login card */}
      <Surface variant="default" padding="lg" className="w-full rounded-2xl border">
        <h2 className="text-xl font-bold mb-6">로그인</h2>

        <div className="space-y-4">
          <div>
            <Label className="mb-1.5">아이디</Label>
            <Input placeholder="아이디를 입력해주세요." />
          </div>

          <div>
            <Label className="mb-1.5">비밀번호</Label>
            <Input type="password" placeholder="비밀번호를 입력해주세요." />
          </div>
        </div>

        <Alert variant="info" className="mt-4">
          <AlertTitle>닥톡 전문가 QnA 회원이신가요?</AlertTitle>
          <AlertDescription>전문가 QnA 서비스에서 로그인해주세요.</AlertDescription>
        </Alert>

        <Button variant="primary" size="lg" className="w-full mt-6">로그인</Button>

        <div className="text-center mt-4">
          <Button variant="ghost" size="sm">아이디 찾기</Button>
        </div>
      </Surface>

      {/* Bottom links */}
      <div className="mt-6 text-center space-y-2 text-sm text-muted-foreground">
        <p>닥톡 예약이 처음이신가요? <span className="text-primary font-medium">가입 신청하기</span></p>
        <p>전문가 QnA 회원이신가요? <span className="text-primary font-medium">전문가 QnA 서비스 로그인하기</span></p>
      </div>
    </div>
  )
}

export function FindIdPreview() {
  return (
    <div className="flex flex-col items-center px-5 py-8">
      <div className="mb-6 text-center">
        <div className="text-xl font-bold text-foreground">닥톡 예약</div>
      </div>

      <Surface variant="default" padding="lg" className="w-full rounded-2xl border">
        <h2 className="text-xl font-bold mb-2">아이디 찾기</h2>
        <p className="text-sm text-muted-foreground mb-6">
          담당자 혹은 원장님 휴대폰 번호를 입력해주세요.
        </p>

        <div className="space-y-4">
          <Input type="tel" placeholder="010-1234-5678" />
          <Button variant="primary" size="lg" className="w-full">인증번호 받기</Button>
        </div>

        <Separator className="my-4" />

        <div className="text-center">
          <span className="text-sm text-muted-foreground">등록된 휴대폰 번호가 없나요? </span>
          <Button variant="ghost" size="sm">문의하기</Button>
        </div>
      </Surface>
    </div>
  )
}

export function EmrLoginErrorPreview() {
  return (
    <div className="flex flex-col items-center justify-center px-5 py-16">
      <div className="text-center space-y-4">
        <span className="material-symbols-rounded text-[48px] text-destructive">error</span>
        <h2 className="text-xl font-bold">오류 발생</h2>
        <p className="text-sm text-muted-foreground">
          요양기관번호가 이미 가입된 병원입니다.<br />
          관리자에게 문의해주세요.
        </p>
        <Button variant="outline" size="lg">문의하기</Button>
      </div>
    </div>
  )
}

export function EmrSsoLoginPreview() {
  return (
    <div className="flex flex-col items-center justify-center px-5 py-16">
      <Spinner />
      <p className="mt-4 text-sm text-muted-foreground">EMR 인증 중입니다...</p>
    </div>
  )
}

export function AutoLoginPreview() {
  return (
    <div className="flex flex-col items-center justify-center px-5 py-16">
      <Spinner />
      <p className="mt-4 text-sm text-muted-foreground">자동 로그인 중...</p>
    </div>
  )
}
