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
  Header,
  HeaderHeading,
  HeaderDescription,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Checkbox,
  Badge,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from 'doctalk-design-system'

export function NaverReservationPreview() {
  return (
    <div className="px-5 py-8 space-y-6">
      <div className="text-center mb-4">
        <div className="text-xl font-bold text-foreground">닥톡 예약</div>
      </div>

      <Stepper defaultValue="step1">
        <StepperList>
          <StepperItem value="step1" step={1}>
            <StepperTrigger>약관 동의</StepperTrigger>
          </StepperItem>
          <StepperSeparator />
          <StepperItem value="step2" step={2}>
            <StepperTrigger>정보 입력</StepperTrigger>
          </StepperItem>
          <StepperSeparator />
          <StepperItem value="step3" step={3}>
            <StepperTrigger>연동 완료</StepperTrigger>
          </StepperItem>
        </StepperList>
      </Stepper>

      <Surface variant="default" padding="lg" className="w-full rounded-2xl border space-y-4">
        <h2 className="text-lg font-bold">네이버 예약 가입</h2>
        <p className="text-sm text-muted-foreground">네이버 예약 서비스 연동을 위한 정보를 입력해주세요.</p>

        <div>
          <Label className="mb-1.5">네이버 예약 업체 ID</Label>
          <Input placeholder="업체 ID를 입력해주세요." />
        </div>
        <div>
          <Label className="mb-1.5">네이버 예약 API 키</Label>
          <Input placeholder="API 키를 입력해주세요." />
        </div>

        <Separator />

        <div className="flex items-center gap-2">
          <Checkbox id="naver-agree" />
          <Label htmlFor="naver-agree" className="text-sm">네이버 예약 서비스 이용약관에 동의합니다.</Label>
        </div>

        <Button variant="primary" size="lg" className="w-full">다음</Button>
      </Surface>
    </div>
  )
}

export function NaverProductPreview() {
  return (
    <div className="px-5 py-6 space-y-6">
      <Header>
        <HeaderHeading>네이버 상품 불러오기</HeaderHeading>
        <HeaderDescription>네이버 예약에서 등록된 상품을 불러옵니다.</HeaderDescription>
      </Header>

      <Card>
        <CardHeader>
          <CardTitle>불러올 상품 선택</CardTitle>
          <CardDescription>닥톡에 등록할 상품을 선택해주세요.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[40px]"></TableHead>
                <TableHead className="text-xs">상품명</TableHead>
                <TableHead className="text-xs">상태</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell><Checkbox /></TableCell>
                <TableCell className="text-xs font-medium">일반 진료</TableCell>
                <TableCell><Badge variant="success" emphasis="subtle" size="sm">운영중</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><Checkbox /></TableCell>
                <TableCell className="text-xs font-medium">건강검진</TableCell>
                <TableCell><Badge variant="success" emphasis="subtle" size="sm">운영중</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><Checkbox /></TableCell>
                <TableCell className="text-xs font-medium">예방접종</TableCell>
                <TableCell><Badge variant="neutral" emphasis="subtle" size="sm">중지</Badge></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Button variant="primary" size="lg" className="w-full">선택 상품 불러오기</Button>
    </div>
  )
}
