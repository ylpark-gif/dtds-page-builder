import React from 'react'
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  Chip,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  Select,
  SelectTrigger,
  SelectValue,
} from 'doctalk-design-system'

export function HomeDashboardPreview() {
  return (
    <div className="px-5 py-6 space-y-4">
      {/* Guide Card */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <div className="flex items-center gap-2">
            <CardTitle>플랫폼 연동하기</CardTitle>
            <Badge variant="success" emphasis="subtle" size="sm">FREE</Badge>
          </div>
          <CardDescription>닥톡 예약 서비스를 시작하려면 플랫폼을 연동해주세요.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="primary" size="default">연동하기</Button>
        </CardContent>
      </Card>

      {/* Reservation Status Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">예약현황</h2>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-2">
        <Chip variant="outline" size="sm">예약 신청</Chip>
        <Chip variant="outline" size="sm">예약 확정</Chip>
        <Chip variant="outline" size="sm">예약 취소</Chip>
      </div>

      <div className="flex flex-wrap gap-2">
        <Select>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="예약일" />
          </SelectTrigger>
        </Select>
        <Select>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="플랫폼" />
          </SelectTrigger>
        </Select>
        <Input placeholder="예약자/방문자 검색" className="flex-1 min-w-[150px]" clearable />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-xs">플랫폼</TableHead>
              <TableHead className="text-xs">예약 상태</TableHead>
              <TableHead className="text-xs">예약자</TableHead>
              <TableHead className="text-xs">방문자</TableHead>
              <TableHead className="text-xs">예약 상품</TableHead>
              <TableHead className="text-xs">예약 일시</TableHead>
              <TableHead className="text-xs">신청 일시</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-xs">네이버</TableCell>
              <TableCell><Badge variant="success" emphasis="subtle" size="sm">예약 확정</Badge></TableCell>
              <TableCell className="text-xs">김*수</TableCell>
              <TableCell className="text-xs">김*수</TableCell>
              <TableCell className="text-xs">일반 진료</TableCell>
              <TableCell className="text-xs">2025.03.31 14:00</TableCell>
              <TableCell className="text-xs">2025.03.30</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-xs">카카오</TableCell>
              <TableCell><Badge variant="warning" emphasis="subtle" size="sm">예약 신청</Badge></TableCell>
              <TableCell className="text-xs">이*영</TableCell>
              <TableCell className="text-xs">이*영</TableCell>
              <TableCell className="text-xs">건강검진</TableCell>
              <TableCell className="text-xs">2025.04.01 10:00</TableCell>
              <TableCell className="text-xs">2025.03.31</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-xs">네이버</TableCell>
              <TableCell><Badge variant="destructive" emphasis="subtle" size="sm">예약 취소</Badge></TableCell>
              <TableCell className="text-xs">박*진</TableCell>
              <TableCell className="text-xs">박*진</TableCell>
              <TableCell className="text-xs">예방접종</TableCell>
              <TableCell className="text-xs">2025.04.02 11:00</TableCell>
              <TableCell className="text-xs">2025.03.29</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
