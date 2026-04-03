import React from 'react'
import {
  font,
  colors,
  styleInput,
  styleBtnPrimary,
  styleBtnOutline,
  styleBtnGhost,
  styleLabel,
  styleCard,
  styleSectionTitle,
  styleField,
  styleBase,
  DoctalkReservationLogo,
  DoctalkHeader,
  DoctalkLayout,
  SettingsLayout,
  IcLogoKakao,
  IcArrowLeft,
  IcEdit,
} from './_shared'

/* ══════════════════════════════════════════════
   1. OriginalKinJoinPreview
   - Source: pages/kin-join.vue + components/kinJoin/CellPhoneInput.vue
   ══════════════════════════════════════════════ */

const kinJoinStepTitle: React.CSSProperties = {
  fontWeight: 400,
  fontSize: 24,
  lineHeight: '38.4px',
  color: '#1a1e1e',
  margin: 0,
  fontFamily: font,
}

const kinJoinGreen: React.CSSProperties = {
  color: '#29bc86',
  fontWeight: 700,
}

const kinJoinWrap: React.CSSProperties = {
  width: 640,
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  fontFamily: font,
}

const kinJoinTextField: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
}

const kinJoinTextFieldLabel: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 600,
  color: colors.gray1000,
  fontFamily: font,
}

const kinJoinTextFieldRow: React.CSSProperties = {
  display: 'flex',
  gap: 8,
  alignItems: 'center',
}

const kinJoinTextFieldInput: React.CSSProperties = {
  ...styleInput,
  flex: 1,
}

const kinJoinTextFieldBtn: React.CSSProperties = {
  height: 48,
  padding: '0 16px',
  border: `1px solid ${colors.gray150}`,
  borderRadius: 8,
  backgroundColor: colors.white,
  fontSize: 14,
  fontWeight: 600,
  color: colors.gray900,
  cursor: 'pointer',
  fontFamily: font,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box' as const,
}

const kinJoinBtnBox: React.CSSProperties = {
  marginTop: 4,
  display: 'flex',
  alignItems: 'center',
  gap: 10,
}

const kinJoinBtnOutline: React.CSSProperties = {
  ...styleBtnOutline,
  flex: 1,
  width: '100%',
}

const kinJoinBtnFilled: React.CSSProperties = {
  ...styleBtnPrimary,
  flex: 1,
  width: '100%',
}

const kinJoinProgressBar: React.CSSProperties = {
  width: '100%',
  height: 4,
  borderRadius: 2,
  backgroundColor: colors.gray100,
  overflow: 'hidden',
}

const kinJoinProgressFill: React.CSSProperties = {
  width: '10%',
  height: '100%',
  borderRadius: 2,
  backgroundColor: colors.dg500,
}

export function OriginalKinJoinPreview() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: font,
        backgroundColor: '#fff',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* Progress bar */}
        <div style={kinJoinProgressBar}>
          <div style={kinJoinProgressFill} />
        </div>

        {/* CellPhoneInput step (step 1) */}
        <div style={kinJoinWrap}>
          <p style={kinJoinStepTitle}>
            <b style={kinJoinGreen}>1.</b> 휴대폰 번호를 입력해주세요.
          </p>

          {/* Phone field */}
          <div style={kinJoinTextField}>
            <span style={kinJoinTextFieldLabel}>휴대폰 번호</span>
            <div style={kinJoinTextFieldRow}>
              <input
                style={kinJoinTextFieldInput}
                type="tel"
                placeholder="01012345678"
                defaultValue="01012345678"
                readOnly
              />
              <button style={kinJoinTextFieldBtn}>인증번호 받기</button>
            </div>
          </div>

          {/* Auth field */}
          <div style={kinJoinTextField}>
            <span style={kinJoinTextFieldLabel}>인증번호</span>
            <div style={kinJoinTextFieldRow}>
              <input
                style={kinJoinTextFieldInput}
                type="text"
                placeholder="123456"
                readOnly
              />
              <button style={kinJoinTextFieldBtn}>인증하기</button>
            </div>
          </div>

          {/* Buttons */}
          <div style={kinJoinBtnBox}>
            <button style={kinJoinBtnOutline}>이전</button>
            <button style={kinJoinBtnFilled}>다음</button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   2. OriginalNaverKinPaymentPreview
   - Source: pages/naver-kin-payment.vue
   ══════════════════════════════════════════════ */

export function OriginalNaverKinPaymentPreview() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 50,
        padding: 70,
        boxSizing: 'border-box' as const,
        fontFamily: font,
        backgroundColor: '#fff',
      }}
    >
      {/* Title area */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <h1
          style={{
            fontSize: 40,
            lineHeight: '42px',
            fontWeight: 700,
            margin: 0,
            fontFamily: font,
            color: colors.gray1000,
          }}
        >
          네이버 지식iN 결제 수단 등록
        </h1>
        <p
          style={{
            fontWeight: 400,
            fontSize: 22,
            lineHeight: '26px',
            color: '#8a9299',
            margin: 0,
            fontFamily: font,
          }}
        >
          등록하신 결제 수단으로 매월 10일 정기 결제 됩니다.
        </p>
      </div>

      {/* Button */}
      <button
        style={{
          width: '100%',
          maxWidth: 300,
          height: 60,
          display: 'block',
          fontSize: 20,
          color: '#fff',
          border: 'none',
          borderRadius: 15,
          backgroundColor: '#00c772',
          cursor: 'pointer',
          fontFamily: font,
          fontWeight: 600,
        }}
      >
        결제 수단 등록
      </button>

      {/* Notice */}
      <ul
        style={{
          listStyle: 'inside',
          fontSize: 14,
          lineHeight: '20px',
          color: '#868e96',
          fontFamily: font,
          margin: 0,
          padding: 0,
          maxWidth: 600,
        }}
      >
        유의사항
        <li style={{ marginTop: 5 }}>
          무료체험 서비스는 신규 가입자에게만 적용됩니다.
        </li>
        <li>
          매월 자동 갱신되며, 해지 시 종료됩니다.(약관이 적용됩니다.) 월
          29,900원/VAT 별도
        </li>
        <li>
          예약 프로모션 신청자는 무료체험 기간이 1개월 제공됩니다. 무료체험 기간이
          끝나면 선택하신 이용권으로 매월 자동 갱신됩니다.
        </li>
        <li>
          닥톡 네이버 지식iN 가입 시 10G의 저장 공간이 제공되며, 10G 초과 시 별도
          비용이 부과될 수 있습니다.
        </li>
      </ul>
    </div>
  )
}

/* ══════════════════════════════════════════════
   3. OriginalLinkKeyPreview
   - Source: pages/link-key.vue
   ══════════════════════════════════════════════ */

export function OriginalLinkKeyPreview() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: font,
        backgroundColor: '#fff',
      }}
    >
      {/* Spinner */}
      <span
        style={{
          width: 48,
          height: 48,
          border: `5px solid ${colors.gray500}`,
          borderBottomColor: 'transparent',
          borderRadius: '50%',
          display: 'inline-block',
          boxSizing: 'border-box' as const,
          animation: 'spin 1s linear infinite',
        }}
      />
    </div>
  )
}

/* ══════════════════════════════════════════════
   4. OriginalKakaoReservationPreview
   - Source: pages/kakao-reservation/index.vue
     + KakaoHeader, MainSection, KakaoInfoSection,
       KakaoChartsSection, ApplicationSection, KakaoFooter
   ══════════════════════════════════════════════ */

/* --- Kakao sub-component styles --- */

const kakaoLabelBadge: React.CSSProperties = {
  width: 'fit-content',
  padding: 12,
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  border: '1px solid #eff1f6',
  borderRadius: 12,
  backgroundColor: '#fefefe',
}

const kakaoLabelTxt: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  fontWeight: 700,
  fontSize: 20,
  lineHeight: '24px',
  color: colors.gray1000,
  fontFamily: font,
}

function KakaoBadge() {
  return (
    <div style={kakaoLabelBadge}>
      <span style={{ ...kakaoLabelTxt, gap: 6 }}>
        <IcLogoKakao width={28} height={28} />
        카카오톡 예약하기
      </span>
      <span style={{ ...kakaoLabelTxt, color: colors.gray300 }}>X</span>
      <span style={{ ...kakaoLabelTxt, color: '#2fd095' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#2fd095" />
          <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">D</text>
        </svg>
        닥톡
      </span>
    </div>
  )
}

const kakaoCTABtn: React.CSSProperties = {
  width: 'fit-content',
  height: 74,
  padding: '0 28px',
  border: 'none',
  borderRadius: 20,
  boxSizing: 'border-box' as const,
  fontWeight: 700,
  fontSize: 24,
  lineHeight: '28px',
  color: '#fff',
  backgroundColor: colors.dg500,
  cursor: 'pointer',
  fontFamily: font,
}

const dashItem: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
}

const dashResult: React.CSSProperties = {
  fontWeight: 700,
  fontSize: 28,
  lineHeight: '128%',
  color: colors.gray1000,
  fontFamily: font,
  margin: 0,
}

const dashDesc: React.CSSProperties = {
  fontWeight: 500,
  fontSize: 16,
  lineHeight: '132%',
  color: colors.gray600,
  fontFamily: font,
  margin: 0,
}

/* KakaoInfoItem inline */
function KakaoInfoItemInline({
  labelColor,
  label,
  title,
  description,
}: {
  labelColor: string
  label: string
  title: React.ReactNode
  description: React.ReactNode
}) {
  return (
    <li
      style={{
        width: '100%',
        maxWidth: 1280,
        padding: '0 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 60,
        boxSizing: 'border-box' as const,
      }}
    >
      <div
        style={{
          width: 440,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <p
            style={{
              fontWeight: 500,
              fontSize: 16,
              lineHeight: '128%',
              color: labelColor,
              margin: 0,
              fontFamily: font,
            }}
          >
            {label}
          </p>
          <p
            style={{
              fontWeight: 700,
              fontSize: 36,
              lineHeight: '124%',
              color: '#1a1a1a',
              margin: 0,
              fontFamily: font,
            }}
          >
            {title}
          </p>
        </div>
        <p
          style={{
            fontWeight: 400,
            fontSize: 16,
            lineHeight: '140%',
            color: '#666675',
            margin: 0,
            fontFamily: font,
          }}
        >
          {description}
        </p>
      </div>
      <div
        style={{
          width: 500,
          height: 350,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 40,
          backgroundColor: '#f9fafc',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: 380,
            height: 260,
            borderRadius: 12,
            backgroundColor: colors.gray100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: colors.gray400,
            fontSize: 14,
            fontFamily: font,
          }}
        >
          이미지 영역
        </div>
      </div>
    </li>
  )
}

/* Charts section chart names */
const chartNames = [
  '뷰티라운지', '함소아한의원', '에이치디정션', '비트컴퓨터', '동의보감',
  '엠디소프트', '네오소프트뱅크', '케어랩스', '나스카랩', '다솜메디케어',
  '엠디마케팅', '성민네트웍스', '트라이업', '코디소프트', '아프닥', '한의사랑',
]

export function OriginalKakaoReservationPreview() {
  return (
    <div
      style={{
        paddingTop: 80,
        fontFamily: font,
        backgroundColor: '#fff',
        minHeight: '100%',
      }}
    >
      {/* KakaoHeader */}
      <header
        style={{
          width: '100%',
          height: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute' as const,
          top: 0,
          left: 0,
          borderBottom: `1px solid ${colors.gray50}`,
          boxSizing: 'border-box' as const,
          backgroundColor: '#fff',
          zIndex: 999,
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 1280,
            padding: '16px 20px',
            boxSizing: 'border-box' as const,
          }}
        >
          <DoctalkReservationLogo width={120} height={32} />
        </div>
      </header>

      {/* MainSection */}
      <section
        style={{
          padding: '120px 10px 240px',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative' as const,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 1280,
            padding: '0 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 36,
            boxSizing: 'border-box' as const,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <KakaoBadge />
            <p
              style={{
                fontWeight: 700,
                fontSize: 48,
                lineHeight: '132%',
                color: '#000',
                margin: 0,
                fontFamily: font,
              }}
            >
              지금 쓰는 차트 그대로
              <br />
              카카오 예약 받기
            </p>
            <p
              style={{
                fontWeight: 500,
                fontSize: 18,
                lineHeight: '148%',
                color: colors.gray750,
                margin: 0,
                fontFamily: font,
              }}
            >
              이제 카카오 예약도 지금 사용하는 차트에서 바로 받아보세요.
              <br />
              모든 예약을 한곳에서 편리하게 관리할 수 있어요.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <ul
              style={{
                display: 'flex',
                gap: 24,
                listStyle: 'none',
                margin: 0,
                padding: 0,
              }}
            >
              <li style={dashItem}>
                <p style={dashResult}>3500+</p>
                <p style={dashDesc}>
                  월 기준 최대
                  <br />
                  환자 방문 수
                </p>
              </li>
              <li style={dashItem}>
                <p style={dashResult}>15%</p>
                <p style={dashDesc}>
                  예약 환자
                  <br />
                  방문 증가율
                </p>
              </li>
              <li style={dashItem}>
                <p style={dashResult}>18%</p>
                <p style={dashDesc}>
                  신규 예약 환자
                  <br />
                  유입 증가율
                </p>
              </li>
            </ul>
            <button style={kakaoCTABtn}>가입 신청하기</button>
          </div>
        </div>
        {/* Background circle */}
        <div
          style={{
            width: '70vw',
            height: '70vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute' as const,
            top: '50%',
            right: -15,
            transform: 'translate(0, -50%)',
            borderRadius: '100%',
            backgroundColor: '#effbf7',
            zIndex: -1,
          }}
        >
          <div
            style={{
              width: '35vw',
              maxWidth: 622,
              height: '35vw',
              maxHeight: 622,
              marginLeft: 86,
              borderRadius: 20,
              backgroundColor: '#d5f6ea',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: colors.dg500,
              fontSize: 14,
              fontFamily: font,
            }}
          >
            메인 이미지
          </div>
        </div>
      </section>

      {/* KakaoInfoSection */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '100px 0',
        }}
      >
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 120,
            listStyle: 'none',
            margin: 0,
            padding: 0,
            width: '100%',
            alignItems: 'center',
          }}
        >
          <KakaoInfoItemInline
            labelColor="#FF6F00"
            label="기존 문제점"
            title={<>차트 예약 따로,<br />플랫폼 예약 따로</>}
            description={<>차트/플랫폼 예약을 각각 관리하게 되면<br />예약 환자가 누락되거나 중복 예약이 발생할 수 있어요.</>}
          />
          <KakaoInfoItemInline
            labelColor="#04C75B"
            label="닥톡 예약 솔루션"
            title={<>지금 쓰는 차트에<br />카카오 예약 자동 등록</>}
            description={<>지금 쓰는 차트에 카카오 예약이 자동으로 등록돼요.<br />사용 중인 차트에서 통합 관리할 수 있어요.</>}
          />
          <KakaoInfoItemInline
            labelColor="#04C75B"
            label="닥톡 예약시스템 장점"
            title={<>예약 상품 설정은<br />닥톡에서 한 번만</>}
            description={<>닥톡에서 예약 상품을 만들면, 따로 등록하지 않아도<br />연동된 예약 플랫폼에 자동 적용돼요.</>}
          />
        </ul>
      </section>

      {/* KakaoChartsSection */}
      <section
        style={{
          padding: '100px 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 40,
          backgroundColor: '#fff',
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 48,
            lineHeight: '132%',
            letterSpacing: '0.96px',
            color: '#000',
            margin: 0,
            fontFamily: font,
            textAlign: 'center',
          }}
        >
          30+개 차트에서 바로 쓸 수 있어요
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
          }}
        >
          {[chartNames.slice(0, 5), chartNames.slice(5, 11), chartNames.slice(11, 16)].map(
            (row, ri) => (
              <ul
                key={ri}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 40,
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                }}
              >
                {row.map((name) => (
                  <li key={name}>
                    <div
                      style={{
                        width: 160,
                        height: 48,
                        borderRadius: 8,
                        backgroundColor: colors.gray50,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 13,
                        fontWeight: 500,
                        color: colors.gray600,
                        fontFamily: font,
                      }}
                    >
                      {name}
                    </div>
                  </li>
                ))}
              </ul>
            ),
          )}
        </div>
      </section>

      {/* ApplicationSection */}
      <section
        style={{
          padding: '120px 10px 200px',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative' as const,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 1280,
            padding: '0 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 36,
            boxSizing: 'border-box' as const,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <KakaoBadge />
            <p
              style={{
                fontWeight: 700,
                fontSize: 48,
                lineHeight: '132%',
                color: '#000',
                margin: 0,
                fontFamily: font,
              }}
            >
              지금 쓰는 차트 그대로
              <br />
              카카오 예약 받기
            </p>
          </div>
          <button style={kakaoCTABtn}>가입 신청하기</button>
        </div>
        <div
          style={{
            width: '70vw',
            height: '70vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute' as const,
            top: '50%',
            right: -15,
            transform: 'translate(0, -50%)',
            borderRadius: '100%',
            backgroundColor: '#effbf7',
            zIndex: -1,
          }}
        >
          <div
            style={{
              width: '35vw',
              maxWidth: 622,
              height: '35vw',
              maxHeight: 622,
              marginLeft: 86,
              borderRadius: 20,
              backgroundColor: '#d5f6ea',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: colors.dg500,
              fontSize: 14,
              fontFamily: font,
            }}
          >
            메인 이미지
          </div>
        </div>
      </section>

      {/* KakaoFooter */}
      <footer
        style={{
          boxSizing: 'border-box' as const,
          padding: '40px 0',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#fff',
        }}
      >
        <div
          style={{
            width: 1280,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          <div style={{ display: 'flex' }}>
            <ul
              style={{
                display: 'flex',
                gap: 20,
                listStyle: 'none',
                margin: 0,
                padding: 0,
              }}
            >
              <li>
                <span
                  style={{
                    color: colors.gray600,
                    fontFamily: font,
                    fontSize: 14,
                    lineHeight: '24px',
                    letterSpacing: '-0.28px',
                  }}
                >
                  닥프렌즈 주식회사
                </span>
              </li>
              <li>
                <span
                  style={{
                    color: colors.gray600,
                    fontFamily: font,
                    fontSize: 14,
                    lineHeight: '24px',
                    letterSpacing: '-0.28px',
                  }}
                >
                  서비스 이용약관
                </span>
              </li>
              <li>
                <span
                  style={{
                    color: colors.gray600,
                    fontFamily: font,
                    fontSize: 14,
                    lineHeight: '24px',
                    letterSpacing: '-0.28px',
                  }}
                >
                  개인정보 처리방침
                </span>
              </li>
            </ul>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <p
              style={{
                fontWeight: 400,
                fontSize: 14,
                lineHeight: '24px',
                letterSpacing: '-0.28px',
                color: colors.gray400,
                margin: 0,
                fontFamily: font,
              }}
            >
              사업자등록번호 211-88-49542 | 대표 신철호 | 서울 강남구 논현로 164,
              10층 (도곡동, 튼튼영어빌딩) | 02-543-8805 | info@docfriends.com
            </p>
            <p
              style={{
                fontWeight: 400,
                fontSize: 14,
                lineHeight: '24px',
                letterSpacing: '-0.28px',
                color: colors.gray400,
                margin: 0,
                fontFamily: font,
              }}
            >
              Copyright (c) Docfriends Corp. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* ══════════════════════════════════════════════
   5. OriginalProductCreatePreview
   - Source: pages/product/create.vue
   ══════════════════════════════════════════════ */

export function OriginalProductCreatePreview() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: font,
      }}
    >
      {/* Top area */}
      <div
        style={{
          width: '100%',
          flex: 1,
          padding: '40px 0',
          display: 'flex',
          justifyContent: 'center',
          boxSizing: 'border-box' as const,
          backgroundColor: '#f9f9f9',
          overflow: 'auto',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 1600,
            padding: '0 36px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            boxSizing: 'border-box' as const,
          }}
        >
          <h2
            style={{
              fontWeight: 700,
              fontSize: 24,
              lineHeight: '136%',
              color: colors.gray1000,
              margin: 0,
              fontFamily: font,
            }}
          >
            예약 상품 생성
          </h2>

          {/* Product Info Card */}
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: 12,
              padding: 28,
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              border: `1px solid ${colors.gray100}`,
            }}
          >
            {/* Title field */}
            <div style={styleField}>
              <label style={styleLabel}>
                상품명 <span style={{ color: colors.dg500 }}>*</span>
              </label>
              <input
                style={styleInput}
                placeholder="예: 일반 진료"
                defaultValue="일반 진료"
                readOnly
              />
            </div>

            {/* Image upload area */}
            <div style={styleField}>
              <label style={styleLabel}>
                상품 이미지 <span style={{ color: colors.dg500 }}>*</span>
              </label>
              <div style={{ display: 'flex', gap: 8 }}>
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 8,
                    backgroundColor: colors.gray50,
                    border: `1px solid ${colors.gray150}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: colors.gray400,
                    fontSize: 24,
                  }}
                >
                  +
                </div>
              </div>
            </div>

            {/* Description */}
            <div style={styleField}>
              <label style={styleLabel}>소개글</label>
              <textarea
                style={{
                  ...styleInput,
                  height: 80,
                  resize: 'none',
                }}
                placeholder="상품에 대한 소개를 입력해주세요."
                readOnly
              />
            </div>

            {/* Precaution */}
            <div style={styleField}>
              <label style={styleLabel}>예약/방문 관련 유의사항</label>
              <textarea
                style={{
                  ...styleInput,
                  height: 80,
                  resize: 'none',
                }}
                placeholder="유의사항을 입력해주세요."
                readOnly
              />
            </div>

            {/* Confirm type */}
            <div style={styleField}>
              <label style={styleLabel}>예약 확정 시점</label>
              <div
                style={{
                  display: 'flex',
                  gap: 16,
                  alignItems: 'center',
                }}
              >
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 14,
                    color: colors.gray900,
                    fontFamily: font,
                    cursor: 'pointer',
                  }}
                >
                  <span
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      border: `2px solid ${colors.dg500}`,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        backgroundColor: colors.dg500,
                      }}
                    />
                  </span>
                  예약 신청과 동시에 확정
                </label>
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 14,
                    color: colors.gray900,
                    fontFamily: font,
                    cursor: 'pointer',
                  }}
                >
                  <span
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      border: `2px solid ${colors.gray300}`,
                      display: 'inline-block',
                    }}
                  />
                  예약 신청 후 확인후에 확정
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          height: 80,
          padding: '16px 36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderTop: `1px solid ${colors.gray150}`,
          boxSizing: 'border-box' as const,
          backgroundColor: '#fff',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 1600,
            padding: '0 36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 10,
            boxSizing: 'border-box' as const,
          }}
        >
          <button
            style={{
              ...styleBtnOutline,
              minWidth: 80,
            }}
          >
            취소
          </button>
          <button
            style={{
              ...styleBtnPrimary,
              minWidth: 80,
            }}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   6. OriginalProductDetailPreview
   - Source: pages/product/detail/[id].vue
   ══════════════════════════════════════════════ */

const detailInfoTit: React.CSSProperties = {
  fontWeight: 700,
  fontSize: 16,
  lineHeight: '22.4px',
  width: 180,
  minWidth: 180,
  whiteSpace: 'pre' as const,
  fontFamily: font,
  color: colors.gray1000,
  margin: 0,
}

const detailInfoVal: React.CSSProperties = {
  fontWeight: 400,
  fontSize: 16,
  lineHeight: '22px',
  color: colors.gray1000,
  fontFamily: font,
  margin: 0,
  whiteSpace: 'pre-line' as const,
  wordBreak: 'break-word' as const,
  width: 360,
}

const detailCard: React.CSSProperties = {
  border: `1px solid ${colors.gray150}`,
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  padding: '24px 24px 32px 32px',
  gap: 24,
  boxSizing: 'border-box' as const,
}

const detailCardTop: React.CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
}

const detailEditBtn: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: 14,
  fontWeight: 500,
  color: colors.gray600,
  fontFamily: font,
  padding: 0,
}

const days = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일']

const scheduleData: Record<string, string> = {
  '월요일': '09:00 - 18:00',
  '화요일': '09:00 - 18:00',
  '수요일': '09:00 - 18:00',
  '목요일': '09:00 - 18:00',
  '금요일': '09:00 - 18:00',
  '토요일': '09:00 - 13:00',
  '일요일': '휴무',
}

export function OriginalProductDetailPreview() {
  return (
    <SettingsLayout>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          width: 600,
          fontFamily: font,
        }}
      >
        {/* Header */}
        <h2
          style={{
            alignItems: 'center',
            display: 'flex',
            gap: 8,
            margin: '24px 0 12px',
          }}
        >
          <button
            style={{
              boxSizing: 'border-box' as const,
              display: 'flex',
              padding: 6,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <IcArrowLeft width={24} height={24} fill={colors.gray1000} />
          </button>
          <strong
            style={{
              fontWeight: 700,
              fontSize: 28,
              lineHeight: '30px',
              fontFamily: font,
              color: colors.gray1000,
            }}
          >
            김닥톡 원장
          </strong>
        </h2>

        {/* Basic Info Card */}
        <article style={detailCard}>
          <div style={detailCardTop}>
            <h3
              style={{
                fontWeight: 700,
                fontSize: 20,
                lineHeight: '24px',
                margin: 0,
                fontFamily: font,
                color: colors.gray1000,
              }}
            >
              기본정보
            </h3>
            <button style={detailEditBtn}>
              <IcEdit width={16} height={16} fill={colors.gray600} />
              수정
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Photos */}
            <div style={{ display: 'flex', gap: 8 }}>
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 8,
                  backgroundColor: colors.gray100,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                  color: colors.gray400,
                  fontFamily: font,
                }}
              >
                사진
              </div>
            </div>
            {/* Info list */}
            <div style={{ display: 'flex' }}>
              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                }}
              >
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <strong style={detailInfoTit}>이름</strong>
                  <p style={detailInfoVal}>김닥톡</p>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <strong style={detailInfoTit}>접수 가능 인원</strong>
                  <p style={detailInfoVal}>30분당 1명</p>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <strong style={detailInfoTit}>예약 확정 시점</strong>
                  <p style={detailInfoVal}>예약 신청과 동시에 확정</p>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <strong style={detailInfoTit}>소개글</strong>
                  <p style={detailInfoVal}>내과 전문의 20년 경력</p>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <strong style={detailInfoTit}>
                    예약/방문 관련
                    <br />
                    유의사항
                  </strong>
                  <p style={detailInfoVal}>방문 시 신분증을 지참해주세요.</p>
                </li>
              </ul>
            </div>
          </div>
        </article>

        {/* Schedule Card */}
        <article style={detailCard}>
          <div style={detailCardTop}>
            <h3
              style={{
                fontWeight: 700,
                fontSize: 20,
                lineHeight: '24px',
                margin: 0,
                fontFamily: font,
                color: colors.gray1000,
              }}
            >
              진료시간 및 휴무일
            </h3>
            <button style={detailEditBtn}>
              <IcEdit width={16} height={16} fill={colors.gray600} />
              수정
            </button>
          </div>
          <div style={{ display: 'flex' }}>
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                listStyle: 'none',
                margin: 0,
                padding: 0,
              }}
            >
              {days.map((day) => (
                <li key={day} style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <strong style={detailInfoTit}>{day}</strong>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <p
                      style={{
                        ...detailInfoVal,
                        display: 'flex',
                        gap: 8,
                      }}
                    >
                      {scheduleData[day] !== '휴무' && <span>진료시간</span>}
                      <span>{scheduleData[day]}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </SettingsLayout>
  )
}

/* ══════════════════════════════════════════════
   7. OriginalPolicyPreview
   - Source: pages/policy/privacy.vue
   ══════════════════════════════════════════════ */

export function OriginalPolicyPreview({ title }: { title?: string }) {
  return (
    <div
      style={{
        padding: '80px 100px',
        fontFamily: font,
        backgroundColor: '#fff',
        minHeight: '100%',
        boxSizing: 'border-box' as const,
      }}
    >
      <h1
        style={{
          marginTop: 20,
          marginBottom: 0,
          fontSize: 28,
          fontWeight: 700,
          lineHeight: '136%',
          color: colors.gray1000,
          fontFamily: font,
        }}
      >
        {title || '개인정보취급방침'}
      </h1>
      <div
        style={{
          paddingTop: 50,
          fontSize: 14,
          lineHeight: '24px',
          color: colors.gray800,
          fontFamily: font,
        }}
      >
        <p style={{ margin: '0 0 16px' }}>
          닥프렌즈 주식회사(이하 &quot;회사&quot;)는 개인정보보호법에 따라 이용자의
          개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게
          처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.
        </p>
        <h3
          style={{
            fontSize: 16,
            fontWeight: 700,
            margin: '24px 0 8px',
            color: colors.gray1000,
          }}
        >
          제1조 (개인정보의 처리 목적)
        </h3>
        <p style={{ margin: '0 0 12px' }}>
          회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는
          다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는
          별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
        </p>
        <ol
          style={{
            paddingLeft: 20,
            margin: '0 0 16px',
          }}
        >
          <li>회원 가입 및 관리</li>
          <li>서비스 제공</li>
          <li>마케팅 및 광고 활용</li>
        </ol>
        <h3
          style={{
            fontSize: 16,
            fontWeight: 700,
            margin: '24px 0 8px',
            color: colors.gray1000,
          }}
        >
          제2조 (개인정보의 처리 및 보유 기간)
        </h3>
        <p style={{ margin: '0 0 12px' }}>
          회사는 법령에 따른 개인정보 보유 이용기간 또는 정보주체로부터 개인정보를
          수집 시에 동의 받은 개인정보 보유 이용기간 내에서 개인정보를 처리 보유합니다.
        </p>
        <h3
          style={{
            fontSize: 16,
            fontWeight: 700,
            margin: '24px 0 8px',
            color: colors.gray1000,
          }}
        >
          제3조 (개인정보의 제3자 제공)
        </h3>
        <p style={{ margin: 0 }}>
          회사는 정보주체의 개인정보를 제1조에서 명시한 범위 내에서만 처리하며,
          정보주체의 동의, 법률의 특별한 규정 등에 해당하는 경우에만 개인정보를
          제3자에게 제공합니다.
        </p>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   8. OriginalFallbackPreview
   - Fallback for unknown routes
   ══════════════════════════════════════════════ */

export function OriginalFallbackPreview({ route }: { route?: string }) {
  return (
    <DoctalkLayout>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
          padding: 40,
          fontFamily: font,
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            backgroundColor: colors.gray50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 36,
            color: colors.gray300,
          }}
        >
          ?
        </div>
        <h2
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: colors.gray1000,
            margin: 0,
            fontFamily: font,
          }}
        >
          페이지 미리보기
        </h2>
        <p
          style={{
            fontSize: 16,
            color: colors.gray600,
            margin: 0,
            fontFamily: font,
            textAlign: 'center',
          }}
        >
          {route ? (
            <>
              <code
                style={{
                  padding: '2px 8px',
                  borderRadius: 4,
                  backgroundColor: colors.gray50,
                  fontSize: 14,
                  color: colors.gray800,
                  fontFamily: 'monospace',
                }}
              >
                {route}
              </code>
              <br />
              해당 경로의 미리보기를 준비 중입니다.
            </>
          ) : (
            '알 수 없는 페이지입니다.'
          )}
        </p>
      </div>
    </DoctalkLayout>
  )
}
