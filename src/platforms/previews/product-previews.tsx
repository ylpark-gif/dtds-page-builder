import React from 'react'
import {
  Button,
  Input,
  Textarea,
  Label,
  Surface,
  Separator,
  Header,
  HeaderHeading,
  RadioGroup,
  RadioGroupItem,
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
} from 'doctalk-design-system'

export function ProductCreatePreview() {
  return (
    <div className="space-y-6">
      <Header>
        <HeaderHeading>예약 상품 생성</HeaderHeading>
      </Header>

      <Surface variant="default" padding="lg" className="w-full rounded-2xl border space-y-4">
        <div>
          <Label className="mb-1.5">상품명 <span className="text-primary">*</span></Label>
          <Input placeholder="상품명을 입력해주세요" />
        </div>

        <div>
          <Label className="mb-1.5">상품 이미지 <span className="text-primary">*</span></Label>
          <Button variant="outline" size="sm">이미지 업로드</Button>
          <p className="text-xs text-muted-foreground mt-1">한 장당 최대 20MB, 1200*750 권장, 최대 120장</p>
        </div>

        <Separator />

        <div>
          <Label className="mb-1.5">소개글</Label>
          <Textarea placeholder="소개글을 입력해주세요" />
        </div>

        <div>
          <Label className="mb-1.5">예약/방문 관련 유의사항</Label>
          <Textarea placeholder="예약/방문 관련 유의사항을 입력해주세요" />
        </div>

        <Separator />

        <div>
          <Label className="mb-1.5">예약 확정 방식</Label>
          <RadioGroup defaultValue="IMMEDIATE_CONFIRM">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="IMMEDIATE_CONFIRM" id="immediate" />
              <Label htmlFor="immediate">예약 신청과 동시에 확정</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="CONFIRM_AFTER_CHECK" id="after-check" />
              <Label htmlFor="after-check">예약 신청 후 확인후에 확정</Label>
            </div>
          </RadioGroup>
        </div>
      </Surface>

      <div className="flex justify-end gap-2">
        <Button variant="outline" size="lg">취소</Button>
        <Button variant="primary" size="lg">다음</Button>
      </div>
    </div>
  )
}

export function ProductDetailPreview() {
  return (
    <div className="space-y-4 max-w-xl mx-auto py-6">
      <div className="flex items-center gap-2 mb-4">
        <Button variant="ghost" size="sm">{'<'}</Button>
        <span className="text-lg font-bold">김닥톡 원장</span>
      </div>

      <Surface variant="default" padding="lg" className="rounded-xl border space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">기본정보</h3>
          <Button variant="ghost" size="sm">수정</Button>
        </div>
        <div className="space-y-3">
          <Item>
            <ItemContent>
              <ItemTitle>이름</ItemTitle>
              <ItemDescription>김닥톡</ItemDescription>
            </ItemContent>
          </Item>
          <Item>
            <ItemContent>
              <ItemTitle>접수 가능 인원</ItemTitle>
              <ItemDescription>30분당 1명</ItemDescription>
            </ItemContent>
          </Item>
          <Item>
            <ItemContent>
              <ItemTitle>예약 확정 시점</ItemTitle>
              <ItemDescription>예약 신청과 동시에 확정</ItemDescription>
            </ItemContent>
          </Item>
          <Item>
            <ItemContent>
              <ItemTitle>소개글</ItemTitle>
              <ItemDescription>-</ItemDescription>
            </ItemContent>
          </Item>
          <Item>
            <ItemContent>
              <ItemTitle>예약/방문 관련 유의사항</ItemTitle>
              <ItemDescription>-</ItemDescription>
            </ItemContent>
          </Item>
        </div>
      </Surface>

      <Surface variant="default" padding="lg" className="rounded-xl border space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">진료시간 및 휴무일</h3>
          <Button variant="ghost" size="sm">수정</Button>
        </div>
        <div className="space-y-3">
          <Item>
            <ItemContent>
              <ItemTitle>월요일</ItemTitle>
              <ItemDescription>진료시간 09:00 - 18:00</ItemDescription>
            </ItemContent>
          </Item>
          <Item>
            <ItemContent>
              <ItemTitle>화요일</ItemTitle>
              <ItemDescription>진료시간 09:00 - 18:00</ItemDescription>
            </ItemContent>
          </Item>
          <Item>
            <ItemContent>
              <ItemTitle>수요일</ItemTitle>
              <ItemDescription>진료시간 09:00 - 18:00</ItemDescription>
            </ItemContent>
          </Item>
          <Item>
            <ItemContent>
              <ItemTitle>목요일</ItemTitle>
              <ItemDescription>진료시간 09:00 - 18:00</ItemDescription>
            </ItemContent>
          </Item>
          <Item>
            <ItemContent>
              <ItemTitle>금요일</ItemTitle>
              <ItemDescription>진료시간 09:00 - 18:00</ItemDescription>
            </ItemContent>
          </Item>
          <Item>
            <ItemContent>
              <ItemTitle>토요일</ItemTitle>
              <ItemDescription>휴무</ItemDescription>
            </ItemContent>
          </Item>
          <Item>
            <ItemContent>
              <ItemTitle>일요일</ItemTitle>
              <ItemDescription>휴무</ItemDescription>
            </ItemContent>
          </Item>
        </div>
      </Surface>
    </div>
  )
}
