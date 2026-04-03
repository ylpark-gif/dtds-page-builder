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
  getStatusBadge,
  IcLogoNaver,
  IcLogoKakao,
} from './_shared'

/* ══════════════════════════════════════════════
   1. OriginalLoginPreview  (pages/login.vue)
   ══════════════════════════════════════════════ */

export function OriginalLoginPreview() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        backgroundColor: '#f9f9f9',
        ...styleBase,
      }}
    >
      <DoctalkHeader />
      <main
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        {/* section.sec */}
        <section
          style={{
            width: '100%',
            maxWidth: 580,
            padding: '40px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 40,
            boxSizing: 'border-box' as const,
          }}
        >
          {/* login-top-wrap */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 20,
            }}
          >
            <a href="javascript:;" style={{ cursor: 'pointer' }}>
              <DoctalkReservationLogo width={250} height={52} />
            </a>

            {/* card */}
            <article
              style={{
                width: '100%',
                maxWidth: 520,
                padding: '48px 40px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 48,
                borderRadius: 36,
                boxSizing: 'border-box' as const,
                backgroundColor: colors.white,
              }}
            >
              <h2
                style={{
                  fontFamily: font,
                  fontWeight: 700,
                  fontSize: 28,
                  lineHeight: '136%',
                  color: colors.gray1000,
                  margin: 0,
                }}
              >
                로그인
              </h2>

              {/* card-content */}
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 28,
                }}
              >
                {/* card-content-input-wrap */}
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 20,
                  }}
                >
                  {/* InputFiled: 아이디 */}
                  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <label
                      style={{
                        fontFamily: font,
                        fontWeight: 600,
                        fontSize: 16,
                        lineHeight: '22.4px',
                        display: 'flex',
                        gap: 4,
                      }}
                    >
                      아이디
                    </label>
                    <input
                      type="text"
                      placeholder="아이디를 입력해주세요."
                      readOnly
                      style={{
                        ...styleInput,
                        fontSize: 16,
                        lineHeight: '22px',
                        color: colors.gray300,
                      }}
                    />
                  </div>

                  {/* InputFiled: 비밀번호 */}
                  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <label
                      style={{
                        fontFamily: font,
                        fontWeight: 600,
                        fontSize: 16,
                        lineHeight: '22.4px',
                        display: 'flex',
                        gap: 4,
                      }}
                    >
                      비밀번호
                    </label>
                    <input
                      type="password"
                      placeholder="비밀번호를 입력해주세요."
                      readOnly
                      style={{
                        ...styleInput,
                        fontSize: 16,
                        lineHeight: '22px',
                        color: colors.gray300,
                      }}
                    />
                  </div>
                </div>

                {/* btn-wrap */}
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 16,
                  }}
                >
                  <button
                    style={{
                      ...styleBtnPrimary,
                      width: '100%',
                    }}
                  >
                    로그인
                  </button>
                  <button
                    style={{
                      padding: '4px 12px',
                      border: 'none',
                      borderRadius: 8,
                      fontFamily: font,
                      fontWeight: 500,
                      fontSize: 16,
                      lineHeight: '22px',
                      color: colors.gray500,
                      backgroundColor: 'transparent',
                      cursor: 'pointer',
                    }}
                  >
                    아이디 찾기
                  </button>
                </div>
              </div>
            </article>
          </div>

          {/* login-option-list */}
          <ul
            style={{
              width: '100%',
              padding: '0 36px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
              boxSizing: 'border-box' as const,
              listStyle: 'none',
              margin: 0,
            }}
          >
            <li>
              <button
                style={{
                  display: 'block',
                  textAlign: 'center' as const,
                  fontFamily: font,
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: '148%',
                  color: colors.gray400,
                  border: 'none',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                }}
              >
                닥톡 예약이 처음이신가요?{' '}
                <b style={{ textDecoration: 'underline' }}>가입 신청하기</b>
              </button>
            </li>
            <li>
              <a
                href="#"
                style={{
                  display: 'block',
                  textAlign: 'center' as const,
                  fontFamily: font,
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: '148%',
                  color: colors.gray400,
                  textDecoration: 'none',
                }}
              >
                전문가 QnA 회원이신가요?{' '}
                <b style={{ textDecoration: 'underline' }}>전문가 QnA 서비스 로그인하기</b>
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

/* ══════════════════════════════════════════════
   2. OriginalFindIdPreview  (pages/find-id.vue)
   ══════════════════════════════════════════════ */

export function OriginalFindIdPreview() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        backgroundColor: '#f9f9f9',
        ...styleBase,
      }}
    >
      <DoctalkHeader />
      <main
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        {/* find-id-section */}
        <section
          style={{
            width: '100%',
            maxWidth: 520,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <a href="javascript:;" style={{ cursor: 'pointer' }}>
            <DoctalkReservationLogo width={250} height={52} />
          </a>

          {/* find-id-content */}
          <article
            style={{
              width: '100%',
              maxWidth: 520,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 32,
            }}
          >
            {/* find-id-card (default step: phone number input) */}
            <div
              style={{
                width: '100%',
                padding: '48px 40px',
                display: 'flex',
                flexDirection: 'column',
                gap: 32,
                borderRadius: 24,
                boxSizing: 'border-box' as const,
                boxShadow: '0 4px 20px 0 #0000000d',
                backgroundColor: colors.white,
              }}
            >
              {/* find-id-top-wrap */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 12,
                }}
              >
                <h2
                  style={{
                    fontFamily: font,
                    fontWeight: 700,
                    fontSize: 28,
                    lineHeight: '32px',
                    color: colors.gray1000,
                    margin: 0,
                  }}
                >
                  아이디 찾기
                </h2>
                <p
                  style={{
                    fontFamily: font,
                    fontWeight: 500,
                    fontSize: 15,
                    lineHeight: '22px',
                    color: '#000000',
                    margin: 0,
                    textAlign: 'center' as const,
                  }}
                >
                  닥톡 예약에 등록된{' '}
                  <b style={{ fontWeight: 700 }}>담당자 혹은 원장님 휴대폰 번호</b>
                  <b>를 입력해주세요.</b>
                </p>
              </div>

              {/* InputPhoneNumber (flattened) */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 32,
                }}
              >
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <label
                    style={{
                      fontFamily: font,
                      fontWeight: 600,
                      fontSize: 16,
                      lineHeight: '22.4px',
                      display: 'flex',
                      gap: 4,
                    }}
                  >
                    휴대폰 번호
                  </label>
                  <input
                    type="text"
                    placeholder="010-1234-5678"
                    readOnly
                    style={{
                      ...styleInput,
                      fontSize: 16,
                      lineHeight: '22px',
                    }}
                  />
                </div>
                <button
                  style={{
                    ...styleBtnPrimary,
                    width: '100%',
                  }}
                >
                  인증번호 받기
                </button>
              </div>
            </div>

            {/* channel-talk-link */}
            <a
              href="https://doctalk.channel.io"
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: font,
                fontWeight: 500,
                fontSize: 16,
                lineHeight: '148%',
                color: colors.gray500,
                textDecoration: 'none',
              }}
            >
              등록된 휴대폰 번호가 없나요?{' '}
              <b style={{ textDecoration: 'underline' }}>문의하기</b>
            </a>
          </article>
        </section>
      </main>
    </div>
  )
}

/* ══════════════════════════════════════════════
   3. OriginalEmrLoginErrorPreview  (pages/emr-login-error.vue)
   ══════════════════════════════════════════════ */

export function OriginalEmrLoginErrorPreview() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        backgroundColor: '#f9f9f9',
        ...styleBase,
      }}
    >
      <DoctalkHeader />
      <main
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        {/* emr-login-error-wrap with emr-token-loign-invalid */}
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 80,
            padding: 24,
            width: 600,
            boxSizing: 'border-box' as const,
          }}
        >
          {/* emr-login-error-btn-wrap */}
          <article
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '100%',
            }}
          >
            <button
              style={{
                ...styleBtnOutline,
                height: 36,
                padding: '0 16px',
                fontSize: 14,
                fontWeight: 600,
                borderRadius: 8,
              }}
            >
              로그인
            </button>
          </article>

          {/* emr-login-error-msg */}
          <article
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              margin: '48px 0',
            }}
          >
            <strong
              style={{
                fontFamily: font,
                fontWeight: 700,
                fontSize: 28,
                lineHeight: '30px',
                color: colors.gray1000,
              }}
            >
              오류 발생:
            </strong>
            <p
              style={{
                fontFamily: font,
                fontWeight: 700,
                fontSize: 24,
                lineHeight: '30px',
                color: colors.gray1000,
                margin: 0,
              }}
            >
              중복된 요양기관번호가 있어요.
              <br />
              가입을 진행하기 위해서는 닥톡 팀에 문의해주세요.
            </p>
            <span
              style={{
                fontFamily: font,
                fontWeight: 400,
                fontSize: 16,
                lineHeight: '22px',
                color: colors.gray600,
              }}
            >
              하단에 &quot;문의하기&quot; 버튼을 클릭하세요.
            </span>
          </article>

          {/* bottom-btn-wrap */}
          <article
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <button style={{ ...styleBtnPrimary }}>문의하기</button>
          </article>
        </section>
      </main>
    </div>
  )
}

/* ══════════════════════════════════════════════
   4. OriginalHomePreview  (pages/index.vue)
   ══════════════════════════════════════════════ */

/* Dummy reservation data */
const dummyReservations = [
  {
    platform: 'NAVER',
    bookingType: 'NORMAL',
    status: '예약 신청',
    statusClass: 'BS_WAITING',
    bookerName: '김민수',
    bookerPhone: '010-1234-5678',
    visitorName: '김민수',
    visitorPhone: '010-1234-5678',
    productTitle: '일반 진료',
    roomName: '진료실 1',
    startDatetime: '2025.04.01 10:00',
    createdAt: '2025.03.28 14:30',
    acceptedAt: '-',
    cancelReason: '-',
  },
  {
    platform: 'KAKAO',
    bookingType: 'NORMAL',
    status: '예약 확정',
    statusClass: 'BS_ACCEPTED',
    bookerName: '이영희',
    bookerPhone: '010-9876-5432',
    visitorName: '이영희',
    visitorPhone: '010-9876-5432',
    productTitle: '스케일링',
    roomName: '진료실 2',
    startDatetime: '2025.04.02 14:00',
    createdAt: '2025.03.27 09:15',
    acceptedAt: '2025.03.27 10:00',
    cancelReason: '-',
  },
  {
    platform: 'NAVER',
    bookingType: 'NORMAL',
    status: '예약 취소',
    statusClass: 'BS_CANCELLED',
    bookerName: '박지훈',
    bookerPhone: '010-5555-1234',
    visitorName: '박지훈',
    visitorPhone: '010-5555-1234',
    productTitle: '충치 치료',
    roomName: '진료실 1',
    startDatetime: '2025.04.03 11:30',
    createdAt: '2025.03.26 16:40',
    acceptedAt: '-',
    cancelReason: '개인 사정',
  },
  {
    platform: 'KAKAO',
    bookingType: 'NORMAL',
    status: '예약 신청',
    statusClass: 'BS_WAITING',
    bookerName: '최수연',
    bookerPhone: '010-2222-3333',
    visitorName: '최수연',
    visitorPhone: '010-2222-3333',
    productTitle: '교정 상담',
    roomName: '',
    startDatetime: '2025.04.04 15:00',
    createdAt: '2025.03.29 11:20',
    acceptedAt: '-',
    cancelReason: '-',
  },
  {
    platform: 'NAVER',
    bookingType: 'NORMAL',
    status: '예약 확정',
    statusClass: 'BS_ACCEPTED',
    bookerName: '정하늘',
    bookerPhone: '010-7777-8888',
    visitorName: '정하늘',
    visitorPhone: '010-7777-8888',
    productTitle: '임플란트 상담',
    roomName: '진료실 3',
    startDatetime: '2025.04.05 09:30',
    createdAt: '2025.03.25 13:00',
    acceptedAt: '2025.03.25 14:30',
    cancelReason: '-',
  },
]

function PlatformLogo({ platform }: { platform: string }) {
  if (platform === 'NAVER') {
    return (
      <span
        style={{
          width: 20,
          height: 20,
          borderRadius: 4,
          backgroundColor: '#03c75a',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <IcLogoNaver width={13} height={12} fill="#ffffff" />
      </span>
    )
  }
  if (platform === 'KAKAO') {
    return (
      <span
        style={{
          width: 20,
          height: 20,
          borderRadius: 4,
          backgroundColor: '#fee500',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <IcLogoKakao width={14} height={14} fill="#3c1e1e" />
      </span>
    )
  }
  return null
}

function StatusLabel({ status, statusClass }: { status: string; statusClass: string }) {
  let labelColor = colors.gray1000
  let labelBg = colors.gray50

  if (statusClass === 'BS_ACCEPTED') {
    labelColor = '#1690ed'
    labelBg = '#f1f9ff'
  } else if (statusClass === 'BS_CANCELLED') {
    labelColor = '#ec221f'
    labelBg = '#feeeed'
  }

  return (
    <span
      style={{
        width: 'fit-content',
        padding: '6px 8px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 2,
        borderRadius: 8,
        fontFamily: font,
        fontWeight: 600,
        fontSize: 14,
        lineHeight: '144%',
        color: labelColor,
        backgroundColor: labelBg,
        whiteSpace: 'nowrap' as const,
      }}
    >
      {status}
    </span>
  )
}

export function OriginalHomePreview() {
  const thStyle: React.CSSProperties = {
    fontFamily: font,
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '148%',
    color: colors.gray700,
    textAlign: 'left' as const,
    padding: '12px 16px',
    borderBottom: `1px solid ${colors.gray100}`,
    whiteSpace: 'nowrap' as const,
  }

  const tdStyle: React.CSSProperties = {
    fontFamily: font,
    padding: '12px 16px',
    borderBottom: `1px solid ${colors.gray50}`,
    verticalAlign: 'top' as const,
  }

  const filterBtnStyle: React.CSSProperties = {
    ...styleBtnOutline,
    height: 48,
    padding: '0 20px',
    fontSize: 16,
    fontWeight: 500,
    whiteSpace: 'nowrap' as const,
  }

  const filterBtnActiveStyle: React.CSSProperties = {
    ...filterBtnStyle,
    border: `1px solid ${colors.dg500}`,
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%', ...styleBase }}>
      <DoctalkHeader />
      {/* reservation-home-wrap */}
      <section
        style={{
          width: '100%',
          minHeight: '100vh',
          padding: '28px 36px',
          display: 'flex',
          flexDirection: 'column',
          gap: 40,
          boxSizing: 'border-box' as const,
          backgroundColor: colors.white,
        }}
      >
        {/* ReservationGuideCard */}
        <article
          style={{
            padding: '16px 24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            borderRadius: 20,
            backgroundColor: colors.dg50,
          }}
        >
          {/* top-wrap */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {/* MenuBook icon placeholder */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"
                  fill={colors.dg600}
                />
              </svg>
              <h3
                style={{
                  fontFamily: font,
                  fontWeight: 600,
                  fontSize: 16,
                  lineHeight: '148%',
                  color: colors.dg600,
                  margin: 0,
                }}
              >
                예약 설정 안내
              </h3>
            </div>
            <button
              style={{
                ...styleBtnGhost,
                fontSize: 14,
                color: colors.gray600,
                flexDirection: 'row-reverse' as const,
                border: 'none',
              }}
            >
              접기 ▲
            </button>
          </div>

          {/* bot-wrap */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 16,
            }}
          >
            {/* card 01 - 플랫폼 연동 */}
            <div
              style={{
                width: '50%',
                padding: 28,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 28,
                borderRadius: 20,
                boxSizing: 'border-box' as const,
                backgroundColor: colors.white,
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span
                    style={{
                      fontFamily: font,
                      fontWeight: 600,
                      fontSize: 20,
                      lineHeight: '140%',
                      color: colors.dg500,
                    }}
                  >
                    01
                  </span>
                  <h4
                    style={{
                      fontFamily: font,
                      fontWeight: 600,
                      fontSize: 20,
                      lineHeight: '140%',
                      color: colors.gray1000,
                      margin: 0,
                    }}
                  >
                    플랫폼 연동
                  </h4>
                </div>
                <div
                  style={{
                    fontFamily: font,
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: '148%',
                    color: colors.gray400,
                  }}
                >
                  플랫폼 연동을 완료했어요.
                </div>
              </div>
              <button style={{ ...styleBtnOutline, flexShrink: 0, whiteSpace: 'nowrap' as const }}>
                플랫폼 관리
              </button>
            </div>

            {/* card 02 - 예약 상품 생성 */}
            <div
              style={{
                width: '50%',
                padding: 28,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 28,
                borderRadius: 20,
                boxSizing: 'border-box' as const,
                backgroundColor: colors.white,
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span
                    style={{
                      fontFamily: font,
                      fontWeight: 600,
                      fontSize: 20,
                      lineHeight: '140%',
                      color: colors.dg500,
                    }}
                  >
                    02
                  </span>
                  <h4
                    style={{
                      fontFamily: font,
                      fontWeight: 600,
                      fontSize: 20,
                      lineHeight: '140%',
                      color: colors.gray1000,
                      margin: 0,
                    }}
                  >
                    예약 상품 생성
                  </h4>
                </div>
                <div
                  style={{
                    fontFamily: font,
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: '148%',
                    color: colors.gray400,
                  }}
                >
                  예약 상품을 등록했어요.
                </div>
              </div>
              <button style={{ ...styleBtnOutline, flexShrink: 0, whiteSpace: 'nowrap' as const }}>
                예약 상품 관리
              </button>
            </div>
          </div>
        </article>

        {/* ReservationStatus */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* title */}
          <div>
            <h2
              style={{
                fontFamily: font,
                fontWeight: 700,
                fontSize: 24,
                lineHeight: '136%',
                color: colors.gray1000,
                margin: 0,
              }}
            >
              예약현황
            </h2>
          </div>

          {/* ReservationFilter + Table */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* ReservationFilter */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {/* filter top buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <button style={{ ...filterBtnActiveStyle }}>
                  예약 신청 <b style={{ color: colors.dg500, fontWeight: 700, marginLeft: 4 }}>3</b>
                </button>
                <span
                  style={{
                    width: 1,
                    height: 40,
                    backgroundColor: colors.gray100,
                    flexShrink: 0,
                  }}
                />
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <button style={filterBtnStyle}>예약 확정</button>
                  <button style={filterBtnStyle}>예약 취소</button>
                </div>
              </div>

              {/* filter bottom row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                {/* date select */}
                <div
                  style={{
                    minWidth: 360,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    border: `1px solid ${colors.gray150}`,
                    borderRadius: 8,
                    overflow: 'hidden',
                  }}
                >
                  <select
                    style={{
                      height: '100%',
                      padding: '0 12px',
                      border: 'none',
                      borderRight: `1px solid ${colors.gray150}`,
                      fontFamily: font,
                      fontWeight: 500,
                      fontSize: 16,
                      color: colors.gray1000,
                      backgroundColor: colors.gray50,
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                    defaultValue="dateTime"
                  >
                    <option value="dateTime">예약일</option>
                    <option value="createdAt">예약 신청일</option>
                  </select>
                  <div
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0 8px',
                    }}
                  >
                    <button
                      style={{
                        width: 36,
                        height: 36,
                        border: 'none',
                        borderRadius: 8,
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 18,
                        color: colors.gray600,
                      }}
                    >
                      ◀
                    </button>
                    <span
                      style={{
                        fontFamily: font,
                        fontWeight: 700,
                        fontSize: 16,
                        lineHeight: '148%',
                        color: colors.gray1000,
                        whiteSpace: 'nowrap' as const,
                      }}
                    >
                      25. 3. 31 - 4. 6
                    </span>
                    <button
                      style={{
                        width: 36,
                        height: 36,
                        border: 'none',
                        borderRadius: 8,
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 18,
                        color: colors.gray600,
                      }}
                    >
                      ▶
                    </button>
                  </div>
                </div>

                {/* platform tag input */}
                <div
                  style={{
                    flex: 1,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    border: `1px solid ${colors.gray150}`,
                    borderRadius: 8,
                    padding: '0 12px',
                    gap: 8,
                    boxSizing: 'border-box' as const,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 11V3h-7l-2 2H3v16h10"
                      stroke={colors.gray400}
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                  <span
                    style={{
                      fontFamily: font,
                      fontSize: 16,
                      color: colors.gray300,
                    }}
                  >
                    플랫폼 선택
                  </span>
                </div>

                {/* product tag input */}
                <div
                  style={{
                    flex: 1,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    border: `1px solid ${colors.gray150}`,
                    borderRadius: 8,
                    padding: '0 12px',
                    gap: 8,
                    boxSizing: 'border-box' as const,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M4 8h16M4 16h16" stroke={colors.gray400} strokeWidth="2" />
                  </svg>
                  <span
                    style={{
                      fontFamily: font,
                      fontSize: 16,
                      color: colors.gray300,
                    }}
                  >
                    예약 상품 선택
                  </span>
                </div>

                {/* booker name search */}
                <div
                  style={{
                    minWidth: 360,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    border: `1px solid ${colors.gray150}`,
                    borderRadius: 8,
                    overflow: 'hidden',
                  }}
                >
                  <select
                    style={{
                      height: '100%',
                      padding: '0 12px',
                      border: 'none',
                      borderRight: `1px solid ${colors.gray150}`,
                      fontFamily: font,
                      fontWeight: 500,
                      fontSize: 16,
                      color: colors.gray1000,
                      backgroundColor: colors.gray50,
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                    defaultValue="bookerName"
                  >
                    <option value="bookerName">예약자</option>
                    <option value="visitorName">방문자</option>
                  </select>
                  <input
                    type="text"
                    placeholder="예약자 이름 검색"
                    readOnly
                    style={{
                      flex: 1,
                      height: '100%',
                      border: 'none',
                      padding: '0 12px',
                      fontFamily: font,
                      fontSize: 16,
                      color: colors.gray1000,
                      outline: 'none',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* table area */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <p
                style={{
                  fontFamily: font,
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: '148%',
                  color: colors.gray400,
                  margin: 0,
                }}
              >
                전체 {dummyReservations.length}개
              </p>

              {/* AppTable */}
              <div style={{ width: '100%', overflowX: 'auto' as const }}>
                <table
                  style={{
                    width: '100%',
                    borderCollapse: 'collapse' as const,
                    fontFamily: font,
                  }}
                >
                  <thead>
                    <tr>
                      <th style={thStyle}>플랫폼</th>
                      <th style={thStyle}>예약 상태</th>
                      <th style={thStyle}>예약자</th>
                      <th style={thStyle}>방문자</th>
                      <th style={thStyle}>예약 상품</th>
                      <th style={thStyle}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                          예약 일시 ▼
                        </span>
                      </th>
                      <th style={thStyle}>예약 신청 일시</th>
                      <th style={thStyle}>확정 일시</th>
                      <th style={thStyle}>취소 사유</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dummyReservations.map((r, i) => (
                      <tr
                        key={i}
                        style={{ cursor: 'pointer' }}
                      >
                        <td style={tdStyle}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <PlatformLogo platform={r.platform} />
                            <span
                              style={{
                                fontWeight: 500,
                                fontSize: 16,
                                lineHeight: '148%',
                                color: colors.gray1000,
                              }}
                            >
                              {r.bookingType === 'NORMAL' ? '예약' : '대기 접수'}
                            </span>
                          </div>
                        </td>
                        <td style={tdStyle}>
                          <StatusLabel status={r.status} statusClass={r.statusClass} />
                        </td>
                        <td style={tdStyle}>
                          <p
                            style={{
                              fontWeight: 500,
                              fontSize: 16,
                              lineHeight: '148%',
                              color: colors.gray1000,
                              margin: 0,
                            }}
                          >
                            {r.bookerName}
                            <br />
                            <b
                              style={{
                                fontWeight: 400,
                                fontSize: 14,
                                color: colors.gray400,
                              }}
                            >
                              {r.bookerPhone}
                            </b>
                          </p>
                        </td>
                        <td style={tdStyle}>
                          <p
                            style={{
                              fontWeight: 500,
                              fontSize: 16,
                              lineHeight: '148%',
                              color: colors.gray1000,
                              margin: 0,
                            }}
                          >
                            {r.visitorName || '-'}
                            <br />
                            <b
                              style={{
                                fontWeight: 400,
                                fontSize: 14,
                                color: colors.gray400,
                              }}
                            >
                              {r.visitorPhone}
                            </b>
                          </p>
                        </td>
                        <td style={tdStyle}>
                          <p
                            style={{
                              fontWeight: 500,
                              fontSize: 16,
                              lineHeight: '148%',
                              color: colors.gray1000,
                              margin: 0,
                            }}
                          >
                            {r.productTitle}
                            <br />
                            {r.roomName && (
                              <b
                                style={{
                                  fontWeight: 400,
                                  fontSize: 14,
                                  color: colors.gray400,
                                }}
                              >
                                {r.roomName}
                              </b>
                            )}
                          </p>
                        </td>
                        <td style={tdStyle}>
                          <p
                            style={{
                              fontWeight: 400,
                              fontSize: 14,
                              lineHeight: '144%',
                              color: colors.gray1000,
                              margin: 0,
                              maxWidth: 201,
                              whiteSpace: 'break-spaces' as const,
                            }}
                          >
                            {r.startDatetime}
                          </p>
                        </td>
                        <td style={tdStyle}>
                          <p
                            style={{
                              fontWeight: 400,
                              fontSize: 14,
                              lineHeight: '144%',
                              color: colors.gray1000,
                              margin: 0,
                              maxWidth: 201,
                              whiteSpace: 'break-spaces' as const,
                            }}
                          >
                            {r.createdAt}
                          </p>
                        </td>
                        <td style={tdStyle}>
                          <p
                            style={{
                              fontWeight: 400,
                              fontSize: 14,
                              lineHeight: '144%',
                              color: colors.gray1000,
                              margin: 0,
                              maxWidth: 201,
                              whiteSpace: 'break-spaces' as const,
                            }}
                          >
                            {r.acceptedAt}
                          </p>
                        </td>
                        <td style={tdStyle}>
                          <p
                            style={{
                              fontWeight: 400,
                              fontSize: 14,
                              lineHeight: '144%',
                              color: colors.gray1000,
                              margin: 0,
                              maxWidth: 201,
                              whiteSpace: 'break-spaces' as const,
                            }}
                          >
                            {r.cancelReason}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

/* ══════════════════════════════════════════════
   5. OriginalLoadingPreview
   ══════════════════════════════════════════════ */

export function OriginalLoadingPreview({ text = '로딩 중...' }: { text?: string }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        backgroundColor: '#f9f9f9',
        ...styleBase,
      }}
    >
      <DoctalkHeader />
      <main
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
            padding: 40,
          }}
        >
          {/* Spinner */}
          <div
            style={{
              width: 48,
              height: 48,
              border: `4px solid ${colors.gray100}`,
              borderTopColor: colors.dg500,
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
            }}
          />
          <p
            style={{
              fontFamily: font,
              fontWeight: 500,
              fontSize: 16,
              lineHeight: '148%',
              color: colors.gray500,
              margin: 0,
            }}
          >
            {text}
          </p>
        </div>
      </main>
    </div>
  )
}
