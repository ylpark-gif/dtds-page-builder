import React from 'react'
import {
  Surface,
  Header,
  HeaderHeading,
  Spinner,
  Label,
  Separator,
} from 'doctalk-design-system'

export function PolicyPreview({ title = '개인정보취급방침' }: { title?: string }) {
  return (
    <div className="px-12 py-16">
      <Header>
        <HeaderHeading className="mt-4">{title}</HeaderHeading>
      </Header>

      <Separator className="my-6" />

      <Surface variant="default" className="pt-8">
        <div className="space-y-4">
          <p className="text-sm leading-7 text-muted-foreground">
            주식회사 닥톡(이하 "회사")은 고객의 개인정보를 중요시하며, 「개인정보 보호법」 등
            관련 법령을 준수하고 있습니다.
          </p>
          <p className="text-sm leading-7 text-muted-foreground">
            회사는 개인정보처리방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와
            방식으로 이용되고 있으며, 개인정보 보호를 위해 어떠한 조치가 취해지고 있는지
            알려드립니다.
          </p>
          <div className="p-4 bg-muted rounded-lg">
            <Label className="text-xs text-muted-foreground">
              (API에서 불러온 HTML 콘텐츠가 표시됩니다)
            </Label>
          </div>
        </div>
      </Surface>
    </div>
  )
}
