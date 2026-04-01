import React from 'react'
import {
  Button,
  Badge,
  Header,
  HeaderHeading,
  HeaderDescription,
  Surface,
  Separator,
} from 'doctalk-design-system'

export function KakaoReservationPreview() {
  return (
    <div className="w-full">
      {/* KakaoHeader */}
      <div className="sticky top-0 h-16 px-6 flex items-center justify-between bg-white border-b z-10">
        <span className="font-bold text-lg">카카오톡 예약하기 X 닥톡</span>
        <Button variant="primary" size="sm">가입 신청하기</Button>
      </div>

      {/* MainSection - Hero */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-3">
            <Badge variant="neutral" emphasis="outline" className="px-3 py-2 rounded-xl">
              카카오톡 예약하기 X 닥톡
            </Badge>

            <Header>
              <HeaderHeading className="text-4xl leading-snug">
                {'지금 쓰는 차트 그대로\n카카오 예약 받기'}
              </HeaderHeading>
              <HeaderDescription className="text-lg">
                {'이제 카카오 예약도 지금 사용하는 차트에서 바로 받아보세요.\n모든 예약을 한곳에서 편리하게 관리할 수 있어요.'}
              </HeaderDescription>
            </Header>
          </div>

          <div className="space-y-6">
            {/* Statistics */}
            <div className="flex gap-8">
              <div className="space-y-1">
                <span className="text-2xl font-bold">3500+</span>
                <p className="text-sm text-muted-foreground">{'월 기준 최대\n환자 방문 수'}</p>
              </div>
              <div className="space-y-1">
                <span className="text-2xl font-bold">15%</span>
                <p className="text-sm text-muted-foreground">{'예약 환자\n방문 증가율'}</p>
              </div>
              <div className="space-y-1">
                <span className="text-2xl font-bold">18%</span>
                <p className="text-sm text-muted-foreground">{'신규 예약 환자\n유입 증가율'}</p>
              </div>
            </div>

            <Button variant="primary" size="lg" className="h-16 px-7 text-xl font-bold rounded-2xl">
              가입 신청하기
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* ApplicationSection - CTA Repeat */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-3">
            <Badge variant="neutral" emphasis="outline" className="px-3 py-2 rounded-xl">
              카카오톡 예약하기 X 닥톡
            </Badge>
            <Header>
              <HeaderHeading className="text-4xl leading-snug">
                {'지금 쓰는 차트 그대로\n카카오 예약 받기'}
              </HeaderHeading>
            </Header>
          </div>
          <Button variant="primary" size="lg" className="h-16 px-7 text-xl font-bold rounded-2xl">
            가입 신청하기
          </Button>
        </div>
      </section>

      {/* KakaoFooter */}
      <footer className="py-10 px-6 border-t text-center">
        <span className="text-sm text-muted-foreground">Copyright Doctalk. All rights reserved.</span>
      </footer>
    </div>
  )
}
