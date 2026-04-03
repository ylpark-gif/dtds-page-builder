import React from 'react'
import { font, colors, styleInput, styleBtnPrimary, styleBtnOutline, styleBtnGhost, styleLabel, styleCard, styleSectionTitle, styleField, styleBase, DoctalkReservationLogo, DoctalkHeader, DoctalkLayout, IcLogoGreen, IcLogoNaver, IcLogoKakao, IcLogoDaangn } from './_shared'

/* ══════════════════════════════════════════════
   PAGE: Agreements (/agreements)
   Vue source: pages/agreements.vue
     → components/reservation/signup/SignUpAgree.vue
       → components/reservation/signup/ReservationAgreeForm.vue
   ══════════════════════════════════════════════ */

export function OriginalAgreementsPreview() {
  const agreeItems = [
    '[필수] 서비스 이용약관 동의',
    '[필수] 개인정보 수집 및 이용 동의',
    '[필수] 당근 회원가입 및 서비스 이용약관 동의',
  ]

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100%',
        ...styleBase,
      }}
    >
      {/* Left: Agreement form (ReservationAgreeForm) */}
      <div
        style={{
          width: '50%',
          minHeight: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Top text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <h2
              style={{
                fontWeight: 500,
                fontSize: 28,
                lineHeight: '36.96px',
                letterSpacing: '0.072px',
                color: '#1a1e1e',
                margin: 0,
                fontFamily: font,
              }}
            >
              약관에 동의하고
              <br />
              닥톡 예약을 신청해보세요
            </h2>
            <p
              style={{
                fontWeight: 500,
                fontSize: 18,
                lineHeight: '22.32px',
                letterSpacing: '0.054px',
                color: '#959b97',
                margin: 0,
                fontFamily: font,
              }}
            >
              닥톡 지역 담당자가 순차적으로 방문하여 상세히 안내드릴게요.
            </p>
          </div>

          {/* Bottom: agreement checks */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Agreement list */}
              <ul
                style={{
                  width: 600,
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '8px 0',
                  border: `1px solid ${colors.gray100}`,
                  borderRadius: 12,
                  listStyle: 'none',
                  margin: 0,
                  boxSizing: 'border-box' as const,
                }}
              >
                {agreeItems.map((t) => (
                  <li
                    key={t}
                    style={{
                      padding: '12px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      {/* IcCheck circle (unchecked) */}
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          border: `2px solid ${colors.gray100}`,
                          flexShrink: 0,
                          boxSizing: 'border-box' as const,
                        }}
                      />
                      <span style={{ fontSize: 14, color: colors.gray1000, fontFamily: font, whiteSpace: 'normal' as const }}>
                        {t}
                      </span>
                    </div>
                    {/* IcArrowRight */}
                    <span style={{ fontSize: 14, color: colors.gray400, cursor: 'pointer' }}>&#x203A;</span>
                  </li>
                ))}
              </ul>

              {/* All agree chip */}
              <div
                style={{
                  padding: '16px 20px',
                  border: '1px solid transparent',
                  borderRadius: 12,
                  backgroundColor: '#f5f5f5',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    border: `2px solid ${colors.gray100}`,
                    flexShrink: 0,
                    boxSizing: 'border-box' as const,
                  }}
                />
                <span style={{ fontSize: 14, color: '#585858', fontFamily: font }}>
                  [필수] 모두 동의하고 신청하기
                </span>
              </div>
            </div>

            {/* Submit button */}
            <button style={{ ...styleBtnPrimary, width: '100%', padding: '16px 20px', fontSize: 16 }}>
              확인
            </button>
          </div>
        </div>
      </div>

      {/* Right: ReservationProductDescription (visual placeholder) */}
      <div
        style={{
          width: '50%',
          minHeight: '100%',
          backgroundColor: colors.dg25 || '#f5fdfa',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 24,
          padding: 40,
          boxSizing: 'border-box' as const,
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            backgroundColor: colors.dg100 || '#d5f6ea',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ fontSize: 48, color: colors.dg500 }}>&#x2714;</span>
        </div>
        <div style={{ textAlign: 'center' as const, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <h3
            style={{
              fontWeight: 700,
              fontSize: 24,
              lineHeight: '136%',
              color: colors.gray1000,
              margin: 0,
              fontFamily: font,
            }}
          >
            닥톡 예약
          </h3>
          <p
            style={{
              fontWeight: 500,
              fontSize: 16,
              lineHeight: '148%',
              color: colors.gray600,
              margin: 0,
              fontFamily: font,
            }}
          >
            네이버 예약, 당근 예약을
            <br />
            한번에 관리해 보세요.
          </p>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Signup Request (/signup-request)
   Vue source: pages/signup-request/index.vue
     → components/reservation/joinApplication/JoinApplicationForm.vue
     → components/reservation/joinApplication/SucessApplication.vue
   ══════════════════════════════════════════════ */

export function OriginalSignupRequestPreview() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
        backgroundColor: '#f9f9f9',
        ...styleBase,
      }}
    >
      {/* Logo wrap */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <IcLogoGreen />
      </div>

      {/* JoinApplicationForm card */}
      <article
        style={{
          width: 600,
          maxHeight: 'calc(100dvh - 180px)',
          padding: 40,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
          borderRadius: 40,
          boxSizing: 'border-box' as const,
          backgroundColor: colors.white,
        }}
      >
        {/* Title: text1Bold */}
        <h2
          style={{
            fontWeight: 700,
            fontSize: 28,
            lineHeight: '30px',
            color: colors.gray1000,
            margin: 0,
            fontFamily: font,
          }}
        >
          가입 신청하기
        </h2>

        {/* Form fields */}
        <div
          style={{
            width: '100%',
            maxHeight: 760,
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            overflowY: 'auto' as const,
          }}
        >
          {/* 병원 이름 */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <label style={styleLabel}>
              병원 이름 <b style={{ color: colors.dg600 }}>*</b>
            </label>
            <input style={styleInput} placeholder="닥톡의원" readOnly />
          </div>

          {/* 사용 중인 차트 */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={styleLabel}>
                사용 중인 차트 <b style={{ color: colors.dg600 }}>*</b>
              </label>
              <select
                style={{
                  ...styleInput,
                  appearance: 'none' as const,
                  color: colors.gray400,
                  cursor: 'pointer',
                }}
                disabled
              >
                <option>사용 중인 차트를 선택해주세요.</option>
              </select>
            </div>
            <button
              style={{
                width: 'fit-content',
                margin: 0,
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                border: 'none',
                fontWeight: 500,
                fontSize: 14,
                lineHeight: '144%',
                color: colors.gray400,
                backgroundColor: 'transparent',
                cursor: 'pointer',
                fontFamily: font,
              }}
            >
              &#x2753; 사용 중인 차트가 없나요?
            </button>
          </div>

          {/* 사업자등록번호 */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <label style={styleLabel}>
              사업자등록번호 <b style={{ color: colors.dg600 }}>*</b>
            </label>
            <input style={styleInput} placeholder="123-45-67890" readOnly />
          </div>

          {/* 요양기관번호 */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <label style={styleLabel}>
              요양기관번호 <b style={{ color: colors.dg600 }}>*</b>
            </label>
            <input style={styleInput} placeholder="요양기관번호(숫자 8자리)를 입력해주세요." readOnly />
          </div>

          {/* 대표원장님 성함 */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <label style={styleLabel}>
              대표원장님 성함 <b style={{ color: colors.dg600 }}>*</b>
            </label>
            <input style={styleInput} placeholder="대표원장님 성함을 입력해주세요." readOnly />
          </div>

          {/* 담당자님 성함 */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <label style={styleLabel}>
              담당자님 성함 <b style={{ color: colors.dg600 }}>*</b>
            </label>
            <input style={styleInput} placeholder="담당자님 성함을 입력해주세요." readOnly />
          </div>

          {/* 담당자 연락처 */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <label style={styleLabel}>
              담당자 연락처 <b style={{ color: colors.dg600 }}>*</b>
            </label>
            <input style={styleInput} placeholder="010-1234-5678" readOnly />
          </div>
        </div>

        {/* Submit button */}
        <button style={{ ...styleBtnPrimary, width: '100%' }}>가입 신청하기</button>
      </article>
    </div>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Application (/application)
   Vue source: pages/application.vue
     → components/service/application/ProgressBarHeader.vue
     → components/service/application/ApplicationContent.vue
     → components/service/application/ApplicationFooter.vue
   ══════════════════════════════════════════════ */

export function OriginalApplicationPreview() {
  const steps = ['병원정보', '사업자정보', '플랫폼정보']
  const currentStep = 0

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        width: '100%',
        backgroundColor: colors.white,
        ...styleBase,
      }}
    >
      {/* ProgressBarHeader */}
      <header
        style={{
          width: '100%',
          backgroundColor: colors.white,
          zIndex: 999,
        }}
      >
        {/* Top bar */}
        <div
          style={{
            height: 72,
            padding: '26px 36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxSizing: 'border-box' as const,
          }}
        >
          {/* Logo */}
          <button
            style={{
              margin: 0,
              padding: 0,
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
            }}
          >
            <DoctalkReservationLogo width={193} height={40} />
          </button>

          {/* Salesperson info */}
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <span
                style={{
                  fontWeight: 500,
                  fontSize: 18,
                  lineHeight: '22px',
                  color: colors.gray900,
                  fontFamily: font,
                }}
              >
                비트컴퓨터
              </span>
            </li>
          </ul>

          {/* Mobile salesperson button (hidden on desktop) */}
          <button
            style={{
              ...styleBtnGhost,
              display: 'none',
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            사원 정보
          </button>
        </div>

        {/* Progress bar */}
        <div style={{ height: 4, backgroundColor: colors.gray150 }}>
          <div
            style={{
              height: '100%',
              width: `${((currentStep + 1) / steps.length) * 100}%`,
              backgroundColor: colors.dg500,
              transition: '0.3s',
            }}
          />
        </div>
      </header>

      {/* ApplicationContent */}
      <div
        style={{
          padding: '50px 0 40px',
          display: 'flex',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <div style={{ width: 600, padding: '0 24px' }}>
          <article
            style={{
              ...styleCard,
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}
          >
            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: colors.gray1000,
                margin: 0,
                fontFamily: font,
              }}
            >
              병원정보
            </h3>

            {/* 병원 이름 */}
            <div style={styleField}>
              <label style={styleLabel}>
                병원 이름 <span style={{ color: colors.dg500 }}>*</span>
              </label>
              <input style={styleInput} placeholder="병원 이름을 입력해주세요" readOnly />
            </div>

            {/* 병원 연락처 */}
            <div style={styleField}>
              <label style={styleLabel}>
                병원 연락처 <span style={{ color: colors.dg500 }}>*</span>
              </label>
              <input style={styleInput} placeholder="02-0000-0000" readOnly />
            </div>

            {/* 병원 주소 */}
            <div style={styleField}>
              <label style={styleLabel}>
                병원 주소 <span style={{ color: colors.dg500 }}>*</span>
              </label>
              <input style={styleInput} placeholder="주소를 검색해주세요" readOnly />
            </div>

            {/* 진료과목 */}
            <div style={styleField}>
              <label style={styleLabel}>
                진료과목 <span style={{ color: colors.dg500 }}>*</span>
              </label>
              <input style={styleInput} placeholder="진료과목을 선택해주세요" readOnly />
            </div>

            {/* 병원 소개 */}
            <div style={styleField}>
              <label style={styleLabel}>병원 소개</label>
              <textarea
                style={{
                  ...styleInput,
                  height: 100,
                  resize: 'none' as const,
                }}
                placeholder="병원 소개를 입력해주세요"
                readOnly
              />
            </div>
          </article>
        </div>
      </div>

      {/* ApplicationFooter */}
      <footer
        style={{
          height: 72,
          borderTop: `1px solid ${colors.gray100}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
          padding: '0 24px',
          backgroundColor: colors.white,
        }}
      >
        <button style={{ ...styleBtnOutline, width: 120 }}>이전</button>
        <button style={{ ...styleBtnPrimary, width: 120 }}>다음</button>
      </footer>
    </div>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Apply Reservation (/apply-reservation)
   Vue source: pages/apply-reservation.vue
     → components/applyReservation/InputIDPW.vue
     → components/applyReservation/ApplyQuestion.vue
   ══════════════════════════════════════════════ */

export function OriginalApplyReservationPreview() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        ...styleBase,
      }}
    >
      <div
        style={{
          maxHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <div style={{ width: 640, padding: '50px 0' }}>
          {/* InputIDPW content (first step of default flow) */}
          <article style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* ApplyQuestion */}
            <div style={{ position: 'relative' as const }}>
              <span
                style={{
                  width: 30,
                  position: 'absolute' as const,
                  top: 0,
                  left: -42,
                  fontWeight: 500,
                  fontSize: 24,
                  lineHeight: '38.4px',
                  color: '#29bc86',
                  fontFamily: font,
                }}
              >
                Q
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span
                  style={{
                    fontWeight: 400,
                    fontSize: 24,
                    lineHeight: '38.4px',
                    letterSpacing: '-0.72px',
                    color: '#1a1e1e',
                    fontFamily: font,
                  }}
                >
                  아이디와 비밀번호를 새로 만들어주세요
                </span>
                <p
                  style={{
                    opacity: 0.5,
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: '25.6px',
                    letterSpacing: '-0.48px',
                    color: '#1a1e1e',
                    margin: 0,
                    fontFamily: font,
                  }}
                >
                  기존 네이버 예약 사용자도 네이버 예약, 당근 예약을 함께 이용하려면 닥톡 계정이 필요해요.
                  <br />
                  닥톡을 통해 네이버 예약, 당근 예약을 한번에 관리해 보세요.
                </p>
              </div>
            </div>

            {/* Input fields (SortTextFiled) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {/* 아이디 */}
              <div style={styleField}>
                <label style={{ ...styleLabel, fontSize: 14, fontWeight: 600, lineHeight: '144%' }}>아이디</label>
                <input style={styleInput} placeholder="아이디" readOnly />
              </div>
              {/* 비밀번호 */}
              <div style={styleField}>
                <label style={{ ...styleLabel, fontSize: 14, fontWeight: 600, lineHeight: '144%' }}>비밀번호</label>
                <input style={styleInput} placeholder="비밀번호" type="password" readOnly />
              </div>
              {/* 비밀번호 확인 */}
              <div style={styleField}>
                <label style={{ ...styleLabel, fontSize: 14, fontWeight: 600, lineHeight: '144%' }}>비밀번호 확인</label>
                <input style={styleInput} placeholder="비밀번호 확인" type="password" readOnly />
              </div>
            </div>

            {/* Button wrap */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative' as const }}>
              <button style={{ ...styleBtnOutline, flex: 'none' }}>이전</button>
              <button style={{ ...styleBtnPrimary, flex: 1 }}>다음</button>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Linking Platform (/linking-platform)
   Vue source: pages/linking-platform.vue
     → components/linkingPlatform/LinkingPlatformForm.vue
     → components/linkingPlatform/LinkingPlatformCompleted.vue
   ══════════════════════════════════════════════ */

export function OriginalLinkingPlatformPreview() {
  const platforms = [
    { name: '네이버', status: 'NOT_STARTED' as const },
    { name: '카카오', status: 'NOT_STARTED' as const },
    { name: '당근', status: 'NOT_STARTED' as const },
  ]

  const platformLogo = (name: string) => {
    if (name === '네이버') return <IcLogoNaver />
    if (name === '카카오') return <IcLogoKakao />
    if (name === '당근') return <IcLogoDaangn />
    return null
  }

  const statusText = (s: string) => {
    switch (s) {
      case 'LINKED': return '연동 완료'
      case 'IN_REVIEW': return '검수 중'
      case 'NOT_STARTED': return '연동 전'
      case 'UNLINKED': return '연동 해제'
      default: return ''
    }
  }

  return (
    <DoctalkLayout center={false}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          padding: '40px 36px',
          boxSizing: 'border-box' as const,
        }}
      >
        <div style={{ width: '100%', maxWidth: 660 }}>
          {/* LinkingPlatformForm */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Title */}
            <div>
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
                플랫폼 연동하기
              </h2>
            </div>

            {/* Platform cards */}
            {platforms.map((p) => (
              <div
                key={p.name}
                style={{
                  ...styleCard,
                  borderRadius: 24,
                  padding: 28,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                }}
              >
                {/* Platform header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  {/* Platform logo icon */}
                  {platformLogo(p.name)}
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: 18,
                      lineHeight: '22px',
                      color: colors.gray1000,
                      margin: 0,
                      fontFamily: font,
                    }}
                  >
                    {p.name} 계정 연동
                  </h3>
                </div>

                {/* Status + action */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: colors.gray400,
                      fontFamily: font,
                    }}
                  >
                    {statusText(p.status)}
                  </span>
                  <button style={{ ...styleBtnPrimary, height: 40, fontSize: 14, padding: '0 20px' }}>
                    연동하기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DoctalkLayout>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Naver Reservation (/naver-reservation)
   Vue source: pages/naver-reservation.vue
     → components/naverReservation/CellPhoneNumberInput.vue (first step)
   ══════════════════════════════════════════════ */

export function OriginalNaverReservationPreview() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        ...styleBase,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <div style={{ width: 640 }}>
          {/* CellPhoneNumberInput - first step of default flow */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <h2
              style={{
                fontWeight: 400,
                fontSize: 24,
                lineHeight: '38.4px',
                letterSpacing: '-0.72px',
                color: '#1a1e1e',
                margin: 0,
                fontFamily: font,
              }}
            >
              담당자분의 휴대폰 번호를 입력해주세요
            </h2>
            <p
              style={{
                opacity: 0.5,
                fontWeight: 500,
                fontSize: 16,
                lineHeight: '25.6px',
                letterSpacing: '-0.48px',
                color: '#1a1e1e',
                margin: 0,
                fontFamily: font,
              }}
            >
              본인 인증을 위해 휴대폰 번호가 필요해요.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 16 }}>
              <div style={styleField}>
                <label style={{ ...styleLabel, fontSize: 14, fontWeight: 600, lineHeight: '144%' }}>
                  휴대폰 번호
                </label>
                <div style={{ display: 'flex', gap: 8 }}>
                  <input style={{ ...styleInput, flex: 1 }} placeholder="010-0000-0000" readOnly />
                  <button style={{ ...styleBtnPrimary, whiteSpace: 'nowrap' as const }}>인증번호 받기</button>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 40 }}>
              <button style={styleBtnOutline}>이전</button>
              <button style={styleBtnPrimary}>다음</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Load Naver Product (/load-naver-product)
   Vue source: pages/load-naver-product.vue
     → components/loadNaverProduct/LoadNaverProductCard.vue
   ══════════════════════════════════════════════ */

export function OriginalLoadNaverProductPreview() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
        justifyContent: 'center',
        ...styleBase,
      }}
    >
      {/* LoadNaverProductCard */}
      <div
        style={{
          width: '100%',
          maxWidth: 660,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            padding: '0 36px',
            boxSizing: 'border-box' as const,
          }}
        >
          <article
            style={{
              width: '100%',
              padding: '40px 28px 28px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 28,
              borderRadius: 24,
              boxSizing: 'border-box' as const,
              backgroundColor: colors.white,
            }}
          >
            {/* Content */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 24,
              }}
            >
              {/* Image placeholder */}
              <div
                style={{
                  width: '100%',
                  maxWidth: 360,
                  height: 200,
                  backgroundColor: colors.gray50,
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontSize: 14, color: colors.gray400, fontFamily: font }}>
                  예약 상품 이미지
                </span>
              </div>

              {/* Text wrap */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                <h2
                  style={{
                    textAlign: 'left' as const,
                    fontWeight: 700,
                    fontSize: 24,
                    lineHeight: '136%',
                    color: colors.gray1000,
                    margin: 0,
                    fontFamily: font,
                  }}
                >
                  예약 상품을 생성해주세요
                </h2>
                <p
                  style={{
                    textAlign: 'center' as const,
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: '148%',
                    color: colors.gray1000,
                    margin: 0,
                    fontFamily: font,
                  }}
                >
                  연동된 플랫폼에서 예약 환자를 받기 위해서
                  <br />
                  최소 1개 이상의 예약 상품이 필요해요.
                </p>
              </div>
            </div>

            {/* Button */}
            <button
              style={{
                ...styleBtnPrimary,
                width: '100%',
                height: 48,
              }}
            >
              네이버 예약 상품 불러오기
            </button>
          </article>
        </div>
      </div>
    </div>
  )
}
