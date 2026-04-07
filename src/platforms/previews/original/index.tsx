import React from 'react'

/* ──────────────────────────────────────────────
   Design Tokens (from _ds-tokens.scss)
   ────────────────────────────────────────────── */
const font = "'Pretendard Variable', system-ui, sans-serif"

const colors = {
  // Legacy gray scale
  gray1000: '#1a1a1a',
  gray900: '#333333',
  gray750: '#585858',
  gray700: '#666666',
  gray600: '#737373',
  gray400: '#999999',
  gray200: '#cccccc',
  gray100: '#e6e6e6',
  gray50: '#f2f2f2',
  white: '#ffffff',
  // DS tokens
  dsPrimary: '#00c48c',
  dsPrimaryMuted: '#d2fbe8',
  dsBackground: '#ffffff',
  dsForeground: '#05070a',
  dsBorder: '#e4e8e6',
  dsInput: '#e4e8e6',
  dsMuted: '#f1f2f4',
  dsMutedFg: '#6c7075',
  dsSecondaryFg: '#6c7075',
  dsDestructive: '#ef4444',
  dsRadiusLg: '8px',
  dsRadiusXl: '12px',
  dsShadowSm: '0 1px 4px -1px rgba(0,0,0,0.05), 0 1px 2px -1px rgba(0,0,0,0.05)',
  // Accent greens
  dg500: '#2fd096',
  dg600: '#2abb87',
}

/* ──────────────────────────────────────────────
   Shared Style Primitives
   ────────────────────────────────────────────── */

const dsInput: React.CSSProperties = {
  width: '100%',
  height: 48,
  padding: '12px 16px',
  border: `1px solid ${colors.gray100}`,
  borderRadius: 12,
  fontSize: 16,
  fontFamily: font,
  background: 'transparent',
  outline: 'none',
  boxSizing: 'border-box',
  color: colors.gray1000,
}

const dsBtnBase: React.CSSProperties = {
  borderRadius: 8,
  fontSize: 14,
  fontWeight: 600,
  gap: 8,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  fontFamily: font,
  border: 'none',
  boxSizing: 'border-box',
}

const dsBtnPrimary: React.CSSProperties = {
  ...dsBtnBase,
  backgroundColor: colors.dg500,
  color: colors.white,
  height: 48,
  padding: '0 16px',
  borderRadius: 12,
  fontSize: 16,
}

const dsBtnPrimaryLg: React.CSSProperties = {
  ...dsBtnPrimary,
  height: 48,
  padding: '0 16px',
  fontSize: 16,
  fontWeight: 700,
}

const dsBtnOutline: React.CSSProperties = {
  ...dsBtnBase,
  border: `1px solid ${colors.gray100}`,
  backgroundColor: colors.white,
  color: colors.gray900,
  height: 48,
  padding: '0 16px',
  borderRadius: 12,
  fontSize: 16,
}

const dsBtnGhost: React.CSSProperties = {
  ...dsBtnBase,
  background: 'transparent',
  color: colors.gray600,
  height: 40,
  padding: '8px 12px',
}

const dsLabel: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 700,
  lineHeight: '148%',
  color: colors.gray1000,
  display: 'block',
  fontFamily: font,
}

const dsCard: React.CSSProperties = {
  borderRadius: 16,
  padding: 32,
  backgroundColor: colors.white,
  boxShadow: '0 4px 20px 0 #0000000d',
}

const dsSectionTitle: React.CSSProperties = {
  fontSize: 28,
  fontWeight: 700,
  lineHeight: '30px',
  color: colors.gray1000,
  fontFamily: font,
  margin: 0,
}

const dsField: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
}

const dsBase: React.CSSProperties = {
  fontFamily: font,
}

/* ──────────────────────────────────────────────
   Shared Layout Components
   ────────────────────────────────────────────── */

function DoctalkReservationLogo({ width = 193, height = 40 }: { width?: number; height?: number }) {
  return (
    <img
      src="/doctalk_reservation_logo.png"
      width={width}
      height={height}
      alt="닥톡 예약"
      style={{ display: 'block', objectFit: 'contain' }}
    />
  )
}

function DoctalkHeader() {
  return (
    <header
      style={{
        height: 72,
        minHeight: 72,
        backgroundColor: colors.white,
        borderBottom: `1px solid ${colors.gray100}`,
        padding: '16px 36px',
        display: 'flex',
        alignItems: 'center',
        fontFamily: font,
        boxSizing: 'border-box',
      }}
    >
      <DoctalkReservationLogo width={193} height={40} />
    </header>
  )
}

function DoctalkLayout({ children, center = true }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%', backgroundColor: '#f9f9f9', ...dsBase }}>
      <DoctalkHeader />
      <main
        style={{
          display: 'flex',
          alignItems: center ? 'center' : 'flex-start',
          justifyContent: 'center',
          flex: 1,
          ...(center ? {} : { alignItems: 'stretch' }),
        }}
      >
        {children}
      </main>
    </div>
  )
}

function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%', backgroundColor: '#f9f9f9', ...dsBase }}>
      <DoctalkHeader />
      <div
        style={{
          width: '100%',
          padding: '40px 36px',
          display: 'flex',
          justifyContent: 'center',
          boxSizing: 'border-box' as const,
          overflowY: 'auto' as const,
        }}
      >
        {children}
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────
   Status Badge helper
   ────────────────────────────────────────────── */

type BadgeVariant = 'info' | 'success' | 'destructive' | 'warning' | 'neutral'

function StatusBadge({ label, variant }: { label: string; variant: BadgeVariant }) {
  const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
    info: { backgroundColor: '#eff6ff', color: '#3b82f6', border: '1px solid #bfdbfe' },
    success: { backgroundColor: '#f0fdf4', color: '#22c55e', border: '1px solid #bbf7d0' },
    destructive: { backgroundColor: '#fef2f2', color: '#ef4444', border: '1px solid #fecaca' },
    warning: { backgroundColor: '#fffbeb', color: '#f59e0b', border: '1px solid #fed7aa' },
    neutral: { backgroundColor: colors.gray50, color: colors.gray600, border: `1px solid ${colors.gray100}` },
  }
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '2px 8px',
        borderRadius: 4,
        fontSize: 13,
        fontWeight: 500,
        fontFamily: font,
        ...variantStyles[variant],
      }}
    >
      {label}
    </span>
  )
}

function getStatusBadge(status: string): React.ReactNode {
  const map: Record<string, { label: string; variant: BadgeVariant }> = {
    '예약 신청': { label: '예약 신청', variant: 'info' },
    '예약 확정': { label: '예약 확정', variant: 'success' },
    '예약 취소': { label: '예약 취소', variant: 'destructive' },
    '노쇼': { label: '노쇼', variant: 'warning' },
    '방문 완료': { label: '방문 완료', variant: 'neutral' },
  }
  const m = map[status]
  if (!m) return status
  return <StatusBadge label={m.label} variant={m.variant} />
}

/* ══════════════════════════════════════════════
   PAGE: Login (/login)
   ══════════════════════════════════════════════ */

function OriginalLoginPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9f9f9', ...dsBase }}>
      <section
        style={{
          maxWidth: 580,
          width: '100%',
          padding: '40px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 40,
          boxSizing: 'border-box' as const,
        }}
      >
        {/* login-top-wrap */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          <DoctalkReservationLogo width={250} height={52} />

          <article
            style={{
              borderRadius: 36,
              maxWidth: 520,
              width: '100%',
              padding: '48px 40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 48,
              backgroundColor: colors.white,
              boxSizing: 'border-box' as const,
            }}
          >
            <h2 style={{ fontSize: 28, fontWeight: 700, lineHeight: '136%', color: colors.gray1000, margin: 0, fontFamily: font }}>로그인</h2>

            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
                {/* 아이디 */}
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label style={{ fontSize: 16, fontWeight: 700, lineHeight: '148%', color: colors.gray1000, fontFamily: font }}>아이디</label>
                  <input style={{ width: '100%', height: 48, padding: '12px 16px', border: `1px solid ${colors.gray100}`, borderRadius: 12, fontSize: 16, fontFamily: font, background: 'transparent', outline: 'none', boxSizing: 'border-box' as const, color: colors.gray1000 }} placeholder="아이디를 입력해주세요." readOnly />
                </div>
                {/* 비밀번호 */}
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label style={{ fontSize: 16, fontWeight: 700, lineHeight: '148%', color: colors.gray1000, fontFamily: font }}>비밀번호</label>
                  <input style={{ width: '100%', height: 48, padding: '12px 16px', border: `1px solid ${colors.gray100}`, borderRadius: 12, fontSize: 16, fontFamily: font, background: 'transparent', outline: 'none', boxSizing: 'border-box' as const, color: colors.gray1000 }} placeholder="비밀번호를 입력해주세요." type="password" readOnly />
                </div>
              </div>

              {/* btn-wrap */}
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                <button style={{ width: '100%', height: 48, borderRadius: 12, backgroundColor: colors.dg500, color: colors.white, fontSize: 16, fontWeight: 700, border: 'none', cursor: 'pointer', fontFamily: font }}>로그인</button>
                <button
                  style={{
                    padding: '4px 12px',
                    border: 'none',
                    borderRadius: 8,
                    background: 'transparent',
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: '22px',
                    color: '#999999',
                    cursor: 'pointer',
                    fontFamily: font,
                  }}
                >
                  아이디 찾기
                </button>
              </div>
            </div>
          </article>
        </div>

        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            listStyle: 'none',
            padding: '0 36px',
            margin: 0,
            boxSizing: 'border-box' as const,
            width: '100%',
          }}
        >
          <li>
            <button style={{ display: 'block', textAlign: 'center', fontWeight: 500, fontSize: 16, color: '#bfbfbf', fontFamily: font, lineHeight: '148%', border: 'none', background: 'transparent', cursor: 'pointer' }}>
              닥톡 예약이 처음이신가요?{' '}
              <b style={{ textDecoration: 'underline' }}>가입 신청하기</b>
            </button>
          </li>
          <li>
            <span style={{ display: 'block', textAlign: 'center', fontWeight: 500, fontSize: 16, color: '#bfbfbf', fontFamily: font, lineHeight: '148%' }}>
              전문가 QnA 회원이신가요?{' '}
              <b style={{ textDecoration: 'underline' }}>전문가 QnA 서비스 로그인하기</b>
            </span>
          </li>
        </ul>
      </section>
    </div>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Home (/)
   ══════════════════════════════════════════════ */

function OriginalHomePreview() {
  const tableData = [
    { platform: '네이버', status: '예약 신청', name: '김*수', phone: '010-****-1234', visitor: '김*수', product: '일반 진료', datetime: '2025.03.31 14:00', applied: '2025.03.30 12:30', changed: '2025.03.30 12:30' },
    { platform: '카카오', status: '예약 확정', name: '이*영', phone: '010-****-5678', visitor: '이*영', product: '건강검진', datetime: '2025.04.01 10:00', applied: '2025.03.31 09:00', changed: '2025.03.31 10:00' },
    { platform: '네이버', status: '예약 취소', name: '박*진', phone: '010-****-9012', visitor: '박*진', product: '예방접종', datetime: '2025.04.02 11:00', applied: '2025.03.29 15:00', changed: '2025.03.30 08:00' },
    { platform: '당근', status: '방문 완료', name: '최*희', phone: '010-****-3456', visitor: '최*희', product: '교정 상담', datetime: '2025.03.28 16:00', applied: '2025.03.27 11:00', changed: '2025.03.28 17:00' },
  ]

  const columns = ['플랫폼', '예약상태', '예약자이름', '예약자전화', '방문자이름', '예약상품', '예약일시', '신청일시', '상태변경일시']

  return (
    <DoctalkLayout center={false}>
      <section
        style={{
          width: '100%',
          padding: '28px 36px',
          display: 'flex',
          flexDirection: 'column',
          gap: 40,
        }}
      >
        {/* ReservationGuideCard */}
        <div
          style={{
            backgroundColor: colors.dsPrimaryMuted,
            border: 'none',
            borderRadius: 20,
            padding: '16px 24px 20px',
          }}
        >
          <div style={{ fontSize: 16, fontWeight: 600, color: colors.dg500, marginBottom: 16 }}>
            플랫폼 연동하기
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            {/* Sub-card 1 */}
            <div
              style={{
                flex: 1,
                backgroundColor: colors.white,
                borderRadius: 20,
                padding: 28,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              <span style={{ fontSize: 20, fontWeight: 600, color: colors.dg500 }}>01</span>
              <span style={{ fontSize: 20, fontWeight: 600, color: colors.gray1000 }}>플랫폼 연동하기</span>
              <span style={{ fontSize: 16, fontWeight: 600, color: colors.gray600 }}>
                네이버, 카카오 등 플랫폼을 연동하여 예약을 관리하세요.
              </span>
              <div style={{ marginTop: 8 }}>
                <button style={dsBtnOutline}>연동하러 가기</button>
              </div>
            </div>
            {/* Sub-card 2 */}
            <div
              style={{
                flex: 1,
                backgroundColor: colors.white,
                borderRadius: 20,
                padding: 28,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              <span style={{ fontSize: 20, fontWeight: 600, color: colors.dg500 }}>02</span>
              <span style={{ fontSize: 20, fontWeight: 600, color: colors.gray1000 }}>예약 상품 만들기</span>
              <span style={{ fontSize: 16, fontWeight: 600, color: colors.gray600 }}>
                예약 상품을 만들어 환자들이 예약할 수 있도록 하세요.
              </span>
              <div style={{ marginTop: 8 }}>
                <button style={dsBtnOutline}>상품 만들기</button>
              </div>
            </div>
          </div>
        </div>

        {/* ReservationStatus */}
        <div
          style={{
            border: `1px solid ${colors.gray100}`,
            borderRadius: 12,
            padding: 28,
            boxShadow: '0 1px 4px -1px rgba(0,0,0,0.05), 0 1px 2px -1px rgba(0,0,0,0.05)',
            backgroundColor: colors.white,
          }}
        >
          {/* Header row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: colors.gray1000, margin: 0, fontFamily: font }}>
              예약 현황
            </h2>
            {/* Tab switcher */}
            <div
              style={{
                display: 'flex',
                backgroundColor: colors.gray50,
                borderRadius: 8,
                padding: 2,
              }}
            >
              <button
                style={{
                  ...dsBtnBase,
                  backgroundColor: colors.white,
                  color: colors.gray1000,
                  padding: '6px 16px',
                  fontSize: 14,
                  borderRadius: 6,
                  boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                }}
              >
                테이블
              </button>
              <button
                style={{
                  ...dsBtnBase,
                  backgroundColor: 'transparent',
                  color: colors.gray600,
                  padding: '6px 16px',
                  fontSize: 14,
                  borderRadius: 6,
                }}
              >
                캘린더
              </button>
            </div>
          </div>

          {/* Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: font }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${colors.gray100}` }}>
                  {columns.map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: '12px 8px',
                        textAlign: 'left',
                        color: colors.gray600,
                        fontWeight: 500,
                        fontSize: 16,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${colors.gray50}` }}>
                    <td style={{ padding: '12px 8px', fontSize: 16, fontWeight: 500, color: colors.gray1000 }}>{row.platform}</td>
                    <td style={{ padding: '12px 8px', fontSize: 16, fontWeight: 500 }}>{getStatusBadge(row.status)}</td>
                    <td style={{ padding: '12px 8px', fontSize: 16, fontWeight: 500, color: colors.gray1000 }}>{row.name}</td>
                    <td style={{ padding: '12px 8px', fontSize: 16, fontWeight: 500, color: colors.gray1000 }}>{row.phone}</td>
                    <td style={{ padding: '12px 8px', fontSize: 16, fontWeight: 500, color: colors.gray1000 }}>{row.visitor}</td>
                    <td style={{ padding: '12px 8px', fontSize: 16, fontWeight: 500, color: colors.gray1000 }}>{row.product}</td>
                    <td style={{ padding: '12px 8px', fontSize: 16, fontWeight: 500, color: colors.gray1000, whiteSpace: 'nowrap' }}>{row.datetime}</td>
                    <td style={{ padding: '12px 8px', fontSize: 16, fontWeight: 500, color: colors.gray1000, whiteSpace: 'nowrap' }}>{row.applied}</td>
                    <td style={{ padding: '12px 8px', fontSize: 16, fontWeight: 500, color: colors.gray1000, whiteSpace: 'nowrap' }}>{row.changed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </DoctalkLayout>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Settings - Hospital Info
   ══════════════════════════════════════════════ */

function OriginalSettingsHospitalPreview() {
  return (
    <SettingsLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 1080, width: '100%' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <strong style={{ fontWeight: 700, fontSize: 24, lineHeight: '136%', color: colors.gray1000, fontFamily: font }}>병원정보</strong>
        </h2>
        <div style={{ width: '100%', padding: 28, display: 'flex', flexDirection: 'column', gap: 60, borderRadius: 16, boxSizing: 'border-box' as const, backgroundColor: colors.white }}>
          <div style={dsField}>
            <label style={dsLabel}>병원 이름 <span style={{ color: colors.dg500 }}>*</span></label>
            <input style={dsInput} defaultValue="닥톡치과의원" readOnly />
            <p style={{ color: colors.gray600, fontSize: 12, textAlign: 'right', margin: 0, fontFamily: font }}>7/50자</p>
          </div>
          <div style={dsField}>
            <label style={dsLabel}>병원 설명 <span style={{ color: colors.dg500 }}>*</span></label>
            <textarea
              style={{ ...dsInput, minHeight: 80, resize: 'vertical' as const, height: 'auto' }}
              defaultValue="서울시 강남구에 위치한 닥톡치과의원입니다."
              readOnly
            />
            <p style={{ color: colors.gray600, fontSize: 12, textAlign: 'right', margin: 0, fontFamily: font }}>42/2000자 (최소 20자)</p>
          </div>
          <hr style={{ border: 'none', borderTop: `1px solid ${colors.gray100}`, margin: 0 }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div style={dsField}>
              <label style={dsLabel}>병원 종류 <span style={{ color: colors.dg500 }}>*</span></label>
              <div style={{ ...dsInput, display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: colors.gray900 }}>
                치과 <span style={{ color: colors.gray400 }}>&#x25BE;</span>
              </div>
            </div>
            <div style={dsField}>
              <label style={dsLabel}>진료과 <span style={{ color: colors.dg500 }}>*</span></label>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {['일반진료', '교정', '임플란트'].map((c) => (
                  <span
                    key={c}
                    style={{
                      padding: '4px 10px',
                      borderRadius: 16,
                      backgroundColor: colors.gray50,
                      fontSize: 13,
                      color: colors.gray900,
                      fontFamily: font,
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <hr style={{ border: 'none', borderTop: `1px solid ${colors.gray100}`, margin: 0 }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div style={dsField}>
              <label style={dsLabel}>병원 연락처 <span style={{ color: colors.dg500 }}>*</span></label>
              <input style={dsInput} defaultValue="02-1234-5678" readOnly />
            </div>
            <div style={dsField}>
              <label style={dsLabel}>이메일 <span style={{ color: colors.dg500 }}>*</span></label>
              <input style={dsInput} defaultValue="doctalk@email.com" readOnly />
            </div>
          </div>
          <hr style={{ border: 'none', borderTop: `1px solid ${colors.gray100}`, margin: 0 }} />
          <div style={dsField}>
            <label style={dsLabel}>요양기관번호 <span style={{ color: colors.dg500 }}>*</span></label>
            <input style={dsInput} defaultValue="12345678" readOnly />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button style={dsBtnPrimary}>저장</button>
        </div>
      </div>
    </SettingsLayout>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Settings - Platform Sync
   ══════════════════════════════════════════════ */

function OriginalSettingsPlatformPreview() {
  const platforms = [
    { name: '네이버', status: '운영 중', isOpen: true },
    { name: '카카오', status: '검수중', isOpen: false },
    { name: '당근', status: '운영 중', isOpen: true },
  ]

  return (
    <SettingsLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 1080, width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <h2 style={{ fontWeight: 700, fontSize: 24, lineHeight: '136%', color: colors.gray1000, margin: 0, fontFamily: font }}>플랫폼</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <ul style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 32, borderRadius: 16, boxSizing: 'border-box' as const, backgroundColor: colors.white, listStyle: 'none', margin: 0 }}>
            {platforms.map((p) => (
              <li key={p.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <span style={{ fontWeight: 600, fontSize: 18, lineHeight: '144%', color: colors.gray1000, fontFamily: font }}>{p.name}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontWeight: 700, fontSize: 18, lineHeight: '144%', color: p.isOpen ? colors.dg600 : '#cccccc', fontFamily: font }}>{p.status}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SettingsLayout>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Settings - Product List
   ══════════════════════════════════════════════ */

function OriginalSettingsProductListPreview() {
  const products = [
    { title: '일반 진료', visible: true, days: '월, 화, 수, 목, 금', holidays: '토, 일', rooms: ['진료실 1', '진료실 2'] },
    { title: '교정 상담', visible: true, days: '월, 수, 금', holidays: '토, 일, 공휴일', rooms: ['진료실 3'] },
    { title: '임플란트 상담', visible: false, days: '화, 목', holidays: '토, 일', rooms: [] },
  ]

  return (
    <SettingsLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 1280, width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <h1 style={{ fontWeight: 700, fontSize: 24, lineHeight: '136%', color: colors.gray1000, margin: 0, fontFamily: font }}>예약 상품</h1>
            <span style={{ fontSize: 14, color: colors.gray600, fontFamily: font }}>
              <strong style={{ color: colors.dg600 }}>노출 중 2</strong> / 전체 3
            </span>
          </div>
          <button style={dsBtnOutline}>예약 상품 추가</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {products.map((p, i) => (
            <div key={i} style={{ ...dsCard, padding: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 16, fontWeight: 700, color: colors.gray900, fontFamily: font }}>{p.title}</span>
                  {p.rooms.map((r) => (
                    <span
                      key={r}
                      style={{
                        padding: '2px 8px',
                        borderRadius: 4,
                        backgroundColor: colors.gray50,
                        fontSize: 12,
                        color: colors.gray700,
                        fontFamily: font,
                      }}
                    >
                      {r}
                    </span>
                  ))}
                  {p.rooms.length === 0 && (
                    <span style={{ padding: '2px 8px', borderRadius: 4, backgroundColor: '#fef2f2', fontSize: 12, color: '#ef4444', fontFamily: font }}>
                      진료실 연결 안됨
                    </span>
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div
                    style={{
                      width: 36,
                      height: 20,
                      borderRadius: 10,
                      backgroundColor: p.visible ? colors.dg500 : colors.gray200,
                      position: 'relative',
                      cursor: 'pointer',
                    }}
                  >
                    <div
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: '50%',
                        backgroundColor: colors.white,
                        position: 'absolute',
                        top: 2,
                        left: p.visible ? 18 : 2,
                        transition: 'left 0.2s',
                      }}
                    />
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 500, color: p.visible ? colors.gray900 : colors.gray600, fontFamily: font }}>
                    {p.visible ? '노출 중' : '미노출'}
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 14, color: colors.gray600, fontFamily: font }}>
                <span>{p.days}</span>
                <span>휴무: {p.holidays}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SettingsLayout>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Settings - Product Detail
   ══════════════════════════════════════════════ */

function OriginalSettingsProductDetailPreview() {
  return (
    <SettingsLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 1280, width: '100%' }}>
        <h1 style={{ fontWeight: 700, fontSize: 24, lineHeight: '136%', color: colors.gray1000, margin: 0, fontFamily: font }}>일반 진료</h1>
        {/* Tab nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <button
            style={{
              padding: '12px 0',
              border: 'none',
              fontWeight: 700,
              fontSize: 16,
              lineHeight: '148%',
              color: '#000',
              backgroundColor: 'transparent',
              boxShadow: 'inset 0 -2px 0 0 #000',
              cursor: 'pointer',
              fontFamily: font,
            }}
          >
            예약 스케줄
          </button>
          <button
            style={{
              padding: '12px 0',
              border: 'none',
              fontWeight: 700,
              fontSize: 16,
              lineHeight: '148%',
              color: '#37383c47',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              fontFamily: font,
            }}
          >
            기본정보
          </button>
        </nav>
        {/* Card */}
        <div style={dsCard}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <span style={{ fontSize: 16, fontWeight: 600, fontFamily: font }}>운영 시간</span>
            <button style={dsBtnOutline}>수정</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {['월', '화', '수', '목', '금'].map((day) => (
              <div key={day} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ width: 24, fontSize: 14, fontWeight: 600, color: colors.gray600, fontFamily: font }}>{day}</span>
                <span style={{ fontSize: 14, fontFamily: font }}>09:00 ~ 18:00</span>
                <span style={{ fontSize: 12, color: colors.gray600, fontFamily: font }}>점심 12:00 ~ 13:00</span>
              </div>
            ))}
            {['토', '일'].map((day) => (
              <div key={day} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ width: 24, fontSize: 14, fontWeight: 600, color: colors.gray600, fontFamily: font }}>{day}</span>
                <span style={{ fontSize: 14, color: colors.gray600, fontFamily: font }}>휴무</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SettingsLayout>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Find ID
   ══════════════════════════════════════════════ */

function OriginalFindIdPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9f9f9', ...dsBase }}>
      <section
        style={{
          maxWidth: 520,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <DoctalkReservationLogo width={250} height={52} />

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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <h2 style={{ fontSize: 28, fontWeight: 700, lineHeight: '32px', color: colors.gray1000, margin: 0, fontFamily: font }}>아이디 찾기</h2>
              <p style={{ fontWeight: 500, fontSize: 15, lineHeight: '22px', color: '#000000', margin: 0, fontFamily: font }}>
                닥톡 예약에 등록된 <b style={{ fontWeight: 700 }}>담당자 혹은 원장님 휴대폰 번호</b><b>를 입력해주세요.</b>
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={dsField}>
                <label style={dsLabel}>휴대폰 번호</label>
                <input style={dsInput} placeholder="010-1234-5678" readOnly />
              </div>
              <button style={{ ...dsBtnPrimaryLg, width: '100%' }}>인증번호 받기</button>
            </div>
          </div>

          <span style={{ fontWeight: 500, fontSize: 16, lineHeight: '148%', color: '#999999', fontFamily: font }}>
            등록된 휴대폰 번호가 없나요?{' '}
            <b style={{ textDecoration: 'underline' }}>문의하기</b>
          </span>
        </article>
      </section>
    </div>
  )
}

/* ══════════════════════════════════════════════
   PAGE: EMR Login Error
   ══════════════════════════════════════════════ */

function OriginalEmrLoginErrorPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%', backgroundColor: colors.white, ...dsBase }}>
      {/* emr-login-error-wrap */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: 80,
          paddingTop: 104,
          width: 600,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {/* emr-login-error-btn-wrap */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
          <button
            style={{
              ...dsBtnBase,
              border: `1px solid ${colors.gray100}`,
              backgroundColor: colors.white,
              color: colors.gray900,
              height: 36,
              padding: '0 16px',
              fontSize: 14,
              borderRadius: 8,
            }}
          >
            로그인
          </button>
        </div>

        {/* emr-login-error-msg */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            margin: '48px 0',
          }}
        >
          <strong style={{ fontSize: 24, fontWeight: 700, color: colors.gray1000, fontFamily: font }}>
            오류 발생:
          </strong>
          <p style={{ fontSize: 18, fontWeight: 700, color: colors.gray1000, margin: 0, fontFamily: font }}>
            중복된 요양기관번호가 있어요.<br />
            가입을 진행하기 위해서는 닥톡 팀에 문의해주세요.
          </p>
          <span style={{ fontSize: 16, fontWeight: 400, color: colors.gray600, fontFamily: font }}>
            하단에 &quot;문의하기&quot; 버튼을 클릭하세요.
          </span>
        </div>

        {/* bottom-btn-wrap */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button style={{ ...dsBtnPrimaryLg, width: 'auto', padding: '0 24px' }}>문의하기</button>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Loading screens
   ══════════════════════════════════════════════ */

function OriginalLoadingPreview({ text }: { text: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.white, ...dsBase }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '64px 20px' }}>
        <div
          style={{
            width: 32,
            height: 32,
            border: `3px solid ${colors.gray100}`,
            borderTopColor: colors.dg500,
            borderRadius: '50%',
          }}
        />
        <p style={{ color: colors.gray600, fontSize: 14, marginTop: 16, fontFamily: font }}>{text}</p>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Onboarding - Agreements
   ══════════════════════════════════════════════ */

function OriginalAgreementsPreview() {
  return (
    <div style={{ width: '100%', minHeight: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9f9f9', ...dsBase }}>
      <section style={{ width: 600, padding: '24px 0 48px', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <h2 style={dsSectionTitle}>이용약관 동의</h2>
        <article style={{ ...dsCard, borderRadius: 24, padding: '48px 40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {['서비스 이용약관 동의 (필수)', '개인정보 처리방침 동의 (필수)', '마케팅 정보 수신 동의 (선택)'].map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 20, height: 20, border: `2px solid ${colors.gray200}`, borderRadius: 4, flexShrink: 0 }} />
                <span style={{ fontSize: 14, color: colors.gray900, fontFamily: font }}>{t}</span>
              </div>
            ))}
          </div>
          <button style={{ ...dsBtnPrimaryLg, width: '100%', marginTop: 24 }}>다음</button>
        </article>
      </section>
    </div>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Signup Request
   ══════════════════════════════════════════════ */

function OriginalSignupRequestPreview() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
        backgroundColor: '#f9f9f9',
        ...dsBase,
      }}
    >
      {/* Logo wrap: IconLogoGreen + text */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#2fd096" /><text x="14" y="18" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">D</text></svg>
        <span style={{ fontSize: 20, fontWeight: 700, lineHeight: '136%', color: '#999999', fontFamily: font }}>닥톡 예약</span>
      </div>

      {/* Form card */}
      <div
        style={{
          maxWidth: 520,
          width: '100%',
          padding: '48px 40px',
          backgroundColor: colors.white,
          borderRadius: 24,
          boxShadow: '0 4px 20px 0 #0000000d',
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
          boxSizing: 'border-box' as const,
        }}
      >
        <h2 style={{ fontSize: 28, fontWeight: 700, color: colors.gray1000, margin: 0, fontFamily: font }}>가입 신청</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={dsField}>
            <label style={dsLabel}>병원 이름 <span style={{ color: colors.dg500 }}>*</span></label>
            <input style={dsInput} placeholder="병원 이름을 입력해주세요" readOnly />
          </div>
          <div style={dsField}>
            <label style={dsLabel}>담당자 연락처 <span style={{ color: colors.dg500 }}>*</span></label>
            <input style={dsInput} placeholder="010-0000-0000" readOnly />
          </div>
          <div style={dsField}>
            <label style={dsLabel}>요양기관번호 <span style={{ color: colors.dg500 }}>*</span></label>
            <input style={dsInput} placeholder="8자리 숫자" readOnly />
          </div>
          <button style={{ ...dsBtnPrimaryLg, width: '100%' }}>가입 신청하기</button>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Naver Reservation
   ══════════════════════════════════════════════ */

function OriginalNaverReservationPreview() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        ...dsBase,
      }}
    >
      <div style={{ width: 640, padding: '50px 0', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: colors.gray1000, margin: 0, fontFamily: font }}>
          휴대폰 인증
        </h2>
        <p style={{ fontSize: 16, color: colors.gray600, margin: 0, fontFamily: font, lineHeight: '160%' }}>
          담당자분의 휴대폰 번호를 입력해주세요.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 16 }}>
          <div style={dsField}>
            <label style={dsLabel}>휴대폰 번호</label>
            <div style={{ display: 'flex', gap: 8 }}>
              <input style={{ ...dsInput, flex: 1 }} placeholder="010-0000-0000" readOnly />
              <button style={dsBtnPrimary}>인증번호 받기</button>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 40 }}>
          <button style={dsBtnOutline}>이전</button>
          <button style={dsBtnPrimary}>다음</button>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Kakao Reservation
   ══════════════════════════════════════════════ */

function OriginalKakaoReservationPreview() {
  return (
    <div style={{ width: '100%', minHeight: '100%', display: 'flex', flexDirection: 'column', backgroundColor: colors.white, ...dsBase }}>
      {/* Kakao Header */}
      <header
        style={{
          height: 56,
          minHeight: 56,
          backgroundColor: '#FEE500',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box' as const,
        }}
      >
        <span style={{ fontSize: 18, fontWeight: 700, color: '#3C1E1E', fontFamily: font }}>카카오 예약</span>
      </header>

      {/* Main content */}
      <div style={{ flex: 1, paddingTop: 80 }}>
        {/* Hero section */}
        <section
          style={{
            padding: '0 36px 60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 24,
          }}
        >
          <h1 style={{ fontSize: 32, fontWeight: 700, color: colors.gray1000, margin: 0, fontFamily: font, lineHeight: '140%' }}>
            카카오톡으로<br />간편하게 예약하세요
          </h1>
          <p style={{ fontSize: 16, color: colors.gray600, margin: 0, fontFamily: font, lineHeight: '160%' }}>
            카카오톡 채널을 통해 환자가 간편하게 예약할 수 있습니다.
          </p>
          <button
            style={{
              ...dsBtnBase,
              backgroundColor: '#FEE500',
              color: '#3C1E1E',
              height: 48,
              padding: '0 32px',
              fontSize: 16,
              fontWeight: 700,
              borderRadius: 12,
            }}
          >
            카카오 채널 연동하기
          </button>
        </section>

        {/* Feature cards */}
        <section
          style={{
            padding: '40px 36px',
            backgroundColor: '#f9f9f9',
            display: 'flex',
            justifyContent: 'center',
            gap: 24,
          }}
        >
          {[
            { title: '간편 예약', desc: '카카오톡에서 바로 예약' },
            { title: '자동 알림', desc: '예약 확인/변경 자동 알림' },
            { title: '채널 관리', desc: '카카오 채널로 고객 관리' },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                flex: 1,
                maxWidth: 280,
                padding: 24,
                backgroundColor: colors.white,
                borderRadius: 16,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              <span style={{ fontSize: 18, fontWeight: 700, color: colors.gray1000, fontFamily: font }}>{item.title}</span>
              <span style={{ fontSize: 14, color: colors.gray600, fontFamily: font }}>{item.desc}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Policy
   ══════════════════════════════════════════════ */

function OriginalPolicyPreview({ title }: { title: string }) {
  return (
    <div
      style={{
        minHeight: '100%',
        backgroundColor: colors.white,
        padding: '80px 100px',
        boxSizing: 'border-box' as const,
        ...dsBase,
      }}
    >
      <h1 style={{ fontSize: 24, fontWeight: 700, color: colors.gray1000, margin: '20px 0 0', fontFamily: font }}>
        {title}
      </h1>
      <div
        style={{
          paddingTop: 50,
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          fontSize: 14,
          color: colors.gray700,
          lineHeight: 1.6,
          fontFamily: font,
        }}
      >
        <p style={{ margin: 0 }}>제 1 조 (목적)</p>
        <p style={{ margin: 0 }}>이 약관은 닥톡 예약 서비스의 이용과 관련하여 필요한 사항을 규정함을 목적으로 합니다.</p>
        <p style={{ margin: 0 }}>제 2 조 (정의)</p>
        <p style={{ margin: 0 }}>이 약관에서 사용하는 용어의 정의는 다음과 같습니다...</p>
        <p style={{ margin: 0 }}>제 3 조 (약관의 효력 및 변경)</p>
        <p style={{ margin: 0 }}>본 약관은 서비스를 이용하고자 하는 모든 이용자에게 적용됩니다.</p>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Application (/application)
   ══════════════════════════════════════════════ */

function OriginalApplicationPreview() {
  const steps = ['병원정보', '사업자정보', '플랫폼정보']
  const currentStep = 0

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%', backgroundColor: colors.white, ...dsBase }}>
      {/* Progress bar header */}
      <div
        style={{
          height: 56,
          backgroundColor: colors.white,
          borderBottom: `1px solid ${colors.gray100}`,
          display: 'flex',
          alignItems: 'center',
          padding: '0 24px',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1 }}>
          {steps.map((step, i) => (
            <React.Fragment key={step}>
              {i > 0 && (
                <div style={{ width: 24, height: 1, backgroundColor: colors.gray200 }} />
              )}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    backgroundColor: i <= currentStep ? colors.dg500 : colors.gray200,
                    color: i <= currentStep ? colors.white : colors.gray600,
                    fontSize: 12,
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: font,
                  }}
                >
                  {i + 1}
                </div>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: i === currentStep ? 600 : 400,
                    color: i === currentStep ? colors.gray900 : colors.gray400,
                    fontFamily: font,
                  }}
                >
                  {step}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      {/* Progress bar */}
      <div style={{ height: 4, backgroundColor: colors.gray100 }}>
        <div style={{ height: 4, width: `${((currentStep + 1) / steps.length) * 100}%`, backgroundColor: colors.dg500 }} />
      </div>

      {/* Content - application-content-wrap */}
      <main style={{ flex: 1, display: 'flex', justifyContent: 'center', padding: '126.5px 0 40px 0' }}>
        <div style={{ width: 600, padding: '0 24px' }}>
          <article style={{ ...dsCard, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: colors.gray1000, margin: 0, fontFamily: font }}>병원정보</h3>
            <div style={dsField}>
              <label style={dsLabel}>병원 이름 <span style={{ color: colors.dg500 }}>*</span></label>
              <input style={dsInput} placeholder="병원 이름을 입력해주세요" readOnly />
            </div>
            <div style={dsField}>
              <label style={dsLabel}>병원 연락처 <span style={{ color: colors.dg500 }}>*</span></label>
              <input style={dsInput} placeholder="02-0000-0000" readOnly />
            </div>
            <div style={dsField}>
              <label style={dsLabel}>병원 주소 <span style={{ color: colors.dg500 }}>*</span></label>
              <input style={dsInput} placeholder="주소를 검색해주세요" readOnly />
            </div>
          </article>
        </div>
      </main>

      {/* Fixed footer */}
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
        <button style={{ ...dsBtnOutline, width: 120 }}>이전</button>
        <button style={{ ...dsBtnPrimary, width: 120 }}>다음</button>
      </footer>
    </div>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Apply Reservation (/apply-reservation)
   ══════════════════════════════════════════════ */

function OriginalApplyReservationPreview() {
  return (
    <div style={{ width: '100%', minHeight: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.white, ...dsBase }}>
      <div style={{ width: 640, padding: '50px 0' }}>
        {/* Step indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: colors.dg500, fontFamily: font }}>STEP 1</span>
          <span style={{ fontSize: 14, color: colors.gray400, fontFamily: font }}>/ 6</span>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: colors.gray1000, margin: '0 0 32px', fontFamily: font }}>
          아이디/비밀번호 입력
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={dsField}>
            <label style={dsLabel}>아이디</label>
            <input style={dsInput} placeholder="아이디를 입력해주세요" readOnly />
          </div>
          <div style={dsField}>
            <label style={dsLabel}>비밀번호</label>
            <input style={dsInput} placeholder="비밀번호를 입력해주세요" type="password" readOnly />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 40 }}>
          <button style={dsBtnOutline}>이전</button>
          <button style={dsBtnPrimary}>다음</button>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Linking Platform (/linking-platform)
   ══════════════════════════════════════════════ */

function OriginalLinkingPlatformPreview() {
  const platforms = [
    { name: '네이버', connected: true },
    { name: '카카오', connected: false },
    { name: '당근', connected: false },
  ]

  return (
    <div style={{ width: '100%', minHeight: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#f9f9f9', ...dsBase }}>
      <section style={{ width: 600, padding: '24px 0 48px', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, lineHeight: '30px', color: colors.gray1000, fontFamily: font, margin: 0 }}>플랫폼 연동</h2>
        <article style={{ ...dsCard, borderRadius: 24, padding: '32px 40px', display: 'flex', flexDirection: 'column', gap: 0 }}>
          {platforms.map((p, i) => (
            <React.Fragment key={p.name}>
              {i > 0 && <hr style={{ border: 'none', borderTop: `1px solid ${colors.gray100}`, margin: 0 }} />}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '20px 0',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 16, fontWeight: 600, color: colors.gray900, fontFamily: font }}>{p.name}</span>
                  <StatusBadge
                    label={p.connected ? '연동 완료' : '미연동'}
                    variant={p.connected ? 'success' : 'neutral'}
                  />
                </div>
                <button style={p.connected ? dsBtnOutline : dsBtnPrimary}>
                  {p.connected ? '연동 해제' : '연동하기'}
                </button>
              </div>
            </React.Fragment>
          ))}
        </article>
      </section>
    </div>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Load Naver Product (/load-naver-product)
   ══════════════════════════════════════════════ */

function OriginalLoadNaverProductPreview() {
  return (
    <div style={{ width: '100%', minHeight: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#f9f9f9', ...dsBase }}>
      <div style={{ width: 600, padding: '24px' }}>
        <article style={{ ...dsCard, borderRadius: 24, padding: '48px 40px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: colors.gray1000, margin: 0, fontFamily: font }}>
            네이버 예약 상품 불러오기
          </h2>
          <p style={{ fontSize: 14, color: colors.gray600, margin: 0, fontFamily: font }}>
            네이버 예약에 등록된 상품을 불러와 닥톡 예약에 등록할 수 있습니다.
          </p>
          <button style={{ ...dsBtnPrimaryLg, width: '100%' }}>상품 불러오기</button>
        </article>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Kin Join (/kin-join)
   ══════════════════════════════════════════════ */

function OriginalKinJoinPreview() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        ...dsBase,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* Progress bar */}
        <div style={{ width: '100%', height: 4, backgroundColor: colors.gray100, borderRadius: 2 }}>
          <div style={{ height: 4, width: '10%', backgroundColor: colors.dg500, borderRadius: 2 }} />
        </div>

        <div style={{ width: 600, padding: '0 24px' }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: colors.gray1000, margin: '0 0 8px', fontFamily: font }}>
            닥톡 | 지식iN 신청
          </h1>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: colors.gray1000, margin: '0 0 32px', fontFamily: font }}>
            휴대폰 인증
          </h2>

          <div style={dsField}>
            <label style={dsLabel}>휴대폰 번호</label>
            <div style={{ display: 'flex', gap: 8 }}>
              <input style={{ ...dsInput, flex: 1 }} placeholder="010-0000-0000" readOnly />
              <button style={dsBtnPrimary}>인증번호 받기</button>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 40 }}>
            <button style={dsBtnOutline}>이전</button>
            <button style={dsBtnPrimary}>다음</button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Naver Kin Payment (/naver-kin-payment)
   ══════════════════════════════════════════════ */

function OriginalNaverKinPaymentPreview() {
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
        backgroundColor: colors.white,
        ...dsBase,
      }}
    >
      {/* Title text box */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, textAlign: 'center' }}>
        <h1 style={{ fontSize: 40, lineHeight: '42px', fontWeight: 700, color: colors.gray1000, margin: 0, fontFamily: font }}>
          네이버 지식iN 결제 수단 등록
        </h1>
        <p style={{ fontWeight: 400, fontSize: 22, lineHeight: '26px', color: '#8a9299', margin: 0, fontFamily: font }}>
          등록하신 결제 수단으로 매월 10일 정기 결제 됩니다.
        </p>
      </div>

      {/* CTA Button */}
      <button
        style={{
          width: '100%',
          maxWidth: 300,
          height: 60,
          margin: '0 auto',
          display: 'block',
          fontSize: 20,
          color: '#fff',
          border: 'none',
          borderRadius: 15,
          backgroundColor: '#00c772',
          cursor: 'pointer',
          fontFamily: font,
        }}
      >
        결제 수단 등록
      </button>

      {/* Notice list */}
      <ul
        style={{
          listStyle: 'inside',
          fontSize: 14,
          lineHeight: '20px',
          color: '#868e96',
          margin: 0,
          padding: 0,
          fontFamily: font,
        }}
      >
        유의사항
        <li style={{ marginTop: 5 }}>무료체험 서비스는 신규 가입자에게만 적용됩니다.</li>
        <li>매월 자동 갱신되며, 해지 시 종료됩니다.(약관이 적용됩니다.) 월 29,900원/VAT 별도</li>
        <li>예약 프로모션 신청자는 무료체험 기간이 1개월 제공됩니다. 무료체험 기간이 끝나면 선택하신 이용권으로 매월 자동 갱신됩니다.</li>
        <li>닥톡 네이버 지식iN 가입 시 10G의 저장 공간이 제공되며, 10G 초과 시 별도 비용이 부과될 수 있습니다.</li>
      </ul>
    </div>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Product Create (/product/create)
   ══════════════════════════════════════════════ */

function OriginalProductCreatePreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%', backgroundColor: colors.white, ...dsBase }}>
      {/* Top area with form */}
      <div
        style={{
          width: '100%',
          flex: 1,
          padding: '40px 0',
          display: 'flex',
          justifyContent: 'center',
          boxSizing: 'border-box' as const,
          backgroundColor: '#f9f9f9',
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
          <h2 style={{ fontSize: 28, fontWeight: 700, lineHeight: '136%', color: colors.gray1000, margin: 0, fontFamily: font }}>
            예약 상품 생성
          </h2>

          {/* Product info card */}
          <div style={{ ...dsCard, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={dsField}>
              <label style={dsLabel}>상품명 <span style={{ color: colors.dg500 }}>*</span></label>
              <input style={dsInput} placeholder="상품명을 입력해주세요" readOnly />
            </div>
            <div style={dsField}>
              <label style={dsLabel}>상품 이미지 <span style={{ color: colors.dg500 }}>*</span></label>
              <div
                style={{
                  width: 120,
                  height: 120,
                  border: `2px dashed ${colors.gray100}`,
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: colors.gray600,
                  fontSize: 24,
                }}
              >
                +
              </div>
            </div>
            <div style={dsField}>
              <label style={dsLabel}>소개글</label>
              <textarea
                style={{ ...dsInput, minHeight: 80, resize: 'vertical' as const, height: 'auto' }}
                placeholder="예약 상품에 대한 소개글을 입력해주세요"
                readOnly
              />
            </div>
            <div style={dsField}>
              <label style={dsLabel}>유의사항</label>
              <textarea
                style={{ ...dsInput, minHeight: 80, resize: 'vertical' as const, height: 'auto' }}
                placeholder="유의사항을 입력해주세요"
                readOnly
              />
            </div>
            <div style={dsField}>
              <label style={dsLabel}>예약 확정 방법</label>
              <div style={{ ...dsInput, display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: colors.gray900, maxWidth: 300 }}>
                즉시 확정 <span style={{ color: colors.gray400 }}>&#x25BE;</span>
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
          borderTop: `1px solid ${colors.gray100}`,
          boxSizing: 'border-box' as const,
          backgroundColor: colors.white,
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
          <button style={{ ...dsBtnOutline, height: 48, padding: '0 24px', fontSize: 16 }}>취소</button>
          <button style={{ ...dsBtnPrimary, height: 48, padding: '0 24px', fontSize: 16 }}>다음</button>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Product Detail (/product/detail/:id)
   ══════════════════════════════════════════════ */

function OriginalProductDetailPreview() {
  const schedule = [
    { day: '월', time: '09:00 ~ 18:00' },
    { day: '화', time: '09:00 ~ 18:00' },
    { day: '수', time: '09:00 ~ 18:00' },
    { day: '목', time: '09:00 ~ 18:00' },
    { day: '금', time: '09:00 ~ 18:00' },
    { day: '토', time: '휴무' },
    { day: '일', time: '휴무' },
  ]

  return (
    <div style={{ width: '100%', minHeight: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: colors.white, ...dsBase }}>
      <div style={{ width: 600, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {/* Title */}
        <h2 style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '24px 0 12px' }}>
          <span style={{ fontSize: 20, fontWeight: 700, color: colors.gray1000, fontFamily: font }}>일반 진료</span>
        </h2>

        {/* Card 1: 기본정보 */}
        <article style={{ border: `1px solid #d9d9d9`, borderRadius: 8, padding: '24px 24px 32px 32px', display: 'flex', flexDirection: 'column', gap: 24, backgroundColor: colors.white }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <span style={{ fontSize: 18, fontWeight: 700, color: colors.gray1000, fontFamily: font }}>기본정보</span>
            <button style={dsBtnOutline}>수정</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', gap: 16 }}>
              <span style={{ width: 120, fontSize: 14, fontWeight: 600, color: colors.gray600, fontFamily: font, flexShrink: 0 }}>상품 이름</span>
              <span style={{ fontSize: 14, color: colors.gray900, fontFamily: font }}>일반 진료</span>
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
              <span style={{ width: 120, fontSize: 14, fontWeight: 600, color: colors.gray600, fontFamily: font, flexShrink: 0 }}>접수 가능 인원</span>
              <span style={{ fontSize: 14, color: colors.gray900, fontFamily: font }}>30분당 1명</span>
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
              <span style={{ width: 120, fontSize: 14, fontWeight: 600, color: colors.gray600, fontFamily: font, flexShrink: 0 }}>예약 확정 시점</span>
              <span style={{ fontSize: 14, color: colors.gray900, fontFamily: font }}>자동 확정</span>
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
              <span style={{ width: 120, fontSize: 14, fontWeight: 600, color: colors.gray600, fontFamily: font, flexShrink: 0 }}>소개글</span>
              <span style={{ fontSize: 14, color: colors.gray900, fontFamily: font }}>일반 진료 예약입니다.</span>
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
              <span style={{ width: 120, fontSize: 14, fontWeight: 600, color: colors.gray600, fontFamily: font, flexShrink: 0 }}>유의사항</span>
              <span style={{ fontSize: 14, color: colors.gray900, fontFamily: font }}>예약 시간 10분 전까지 방문해주세요.</span>
            </div>
          </div>
        </article>

        {/* Card 2: 진료시간 및 휴무일 */}
        <article style={{ border: `1px solid #d9d9d9`, borderRadius: 8, padding: '24px 24px 32px 32px', display: 'flex', flexDirection: 'column', gap: 24, backgroundColor: colors.white }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <span style={{ fontSize: 18, fontWeight: 700, color: colors.gray1000, fontFamily: font }}>진료시간 및 휴무일</span>
            <button style={dsBtnOutline}>수정</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {schedule.map((s) => (
              <div key={s.day} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ width: 24, fontSize: 14, fontWeight: 600, color: colors.gray600, fontFamily: font }}>{s.day}</span>
                <span
                  style={{
                    fontSize: 14,
                    color: s.time === '휴무' ? colors.gray600 : colors.gray900,
                    fontFamily: font,
                  }}
                >
                  {s.time}
                </span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Settings - Reservation Setting
   ══════════════════════════════════════════════ */

function OriginalSettingsReservationSettingPreview() {
  return (
    <SettingsLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 1200, width: '100%' }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, lineHeight: '136%', color: colors.gray1000, margin: 0, fontFamily: font }}>예약설정</h1>

        {/* Tab navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <button
            style={{
              padding: '12px 0',
              border: 'none',
              fontWeight: 700,
              fontSize: 16,
              lineHeight: '148%',
              color: '#000',
              backgroundColor: 'transparent',
              boxShadow: 'inset 0 -2px 0 0 #000',
              cursor: 'pointer',
              fontFamily: font,
            }}
          >
            예약 시 사전질문
          </button>
          <button
            style={{
              padding: '12px 0',
              border: 'none',
              fontWeight: 700,
              fontSize: 16,
              lineHeight: '148%',
              color: '#37383c47',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              fontFamily: font,
            }}
          >
            당일예약
          </button>
        </nav>

        {/* Info banner */}
        <div
          style={{
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            borderRadius: 12,
            backgroundColor: colors.gray50,
          }}
        >
          <span style={{ fontSize: 20, color: colors.gray400 }}>&#x24D8;</span>
          <span style={{ fontWeight: 600, fontSize: 16, lineHeight: '144%', color: colors.gray700, fontFamily: font }}>
            환자가 예약할 때 사전 질문이 노출됩니다. (최대 10개)
          </span>
        </div>

        {/* Pre-question content placeholder */}
        <div
          style={{
            ...dsCard,
            borderRadius: 16,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            padding: 24,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 16, fontWeight: 600, color: colors.gray1000, fontFamily: font }}>사전 질문 목록</span>
            <button style={dsBtnOutline}>질문 추가</button>
          </div>
          <div style={{ fontSize: 14, color: colors.gray600, fontFamily: font, padding: '20px 0', textAlign: 'center' }}>
            등록된 사전 질문이 없습니다.
          </div>
        </div>
      </div>
    </SettingsLayout>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Settings - Same Day Reservation
   ══════════════════════════════════════════════ */

function OriginalSettingsSameDayReservationPreview() {
  return (
    <SettingsLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 1080, width: '100%' }}>
        {/* Title with platform icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, lineHeight: '136%', color: colors.gray1000, margin: 0, fontFamily: font }}>당일예약</h1>
          <div
            style={{
              padding: '5px 6px',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              borderRadius: 12,
              backgroundColor: colors.gray50,
            }}
          >
            {/* Naver icon */}
            <div style={{ width: 28, height: 28, borderRadius: 8, backgroundColor: colors.white, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: '#03C75A' }}>N</span>
            </div>
            {/* Kakao icon */}
            <div style={{ width: 28, height: 28, borderRadius: 8, backgroundColor: colors.white, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: '#FFCB05' }}>K</span>
            </div>
            {/* Danggeun icon (disabled) */}
            <div style={{ width: 28, height: 28, borderRadius: 8, backgroundColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.4 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: colors.gray400 }}>D</span>
            </div>
          </div>
        </div>

        {/* Warning banner */}
        <div
          style={{
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 16,
            backgroundColor: '#feeee5',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 20, color: '#FF6A14' }}>&#x26A0;</span>
            <span style={{ fontWeight: 600, fontSize: 16, lineHeight: '148%', color: '#a43c00', fontFamily: font }}>
              예약 상품을 먼저 등록해주세요.
            </span>
          </div>
          <span style={{ textDecoration: 'underline', fontWeight: 600, fontSize: 14, lineHeight: '144%', color: '#a43c00', fontFamily: font, cursor: 'pointer' }}>
            예약 상품 생성하기
          </span>
        </div>

        {/* Content card */}
        <div
          style={{
            padding: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            borderRadius: 24,
            backgroundColor: colors.white,
            border: `1px solid ${colors.gray100}`,
          }}
        >
          <span style={{ fontWeight: 600, fontSize: 16, lineHeight: '148%', color: colors.gray1000, fontFamily: font }}>
            당일 예약 받지 않음
          </span>
          <button
            style={{
              ...dsBtnBase,
              backgroundColor: colors.gray50,
              color: colors.gray900,
              height: 36,
              padding: '0 16px',
              fontSize: 14,
              borderRadius: 8,
              gap: 8,
            }}
          >
            &#x270E; 수정
          </button>
        </div>
      </div>
    </SettingsLayout>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Link Key (/link-key)
   ══════════════════════════════════════════════ */

function OriginalLinkKeyPreview() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        ...dsBase,
      }}
    >
      {/* Spinner */}
      <span
        style={{
          width: 48,
          height: 48,
          border: '5px solid #999999',
          borderBottomColor: 'transparent',
          borderRadius: '50%',
          display: 'inline-block',
          boxSizing: 'border-box' as const,
        }}
      />
    </div>
  )
}

/* ══════════════════════════════════════════════
   PAGE: Reservation Auto Login
   ══════════════════════════════════════════════ */

function OriginalReservationAutoLoginPreview() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
        backgroundColor: colors.white,
        ...dsBase,
      }}
    >
      {/* Pulse loader 100x100 */}
      <div
        style={{
          width: 100,
          height: 100,
          borderRadius: '50%',
          border: `10px solid #999999`,
          boxSizing: 'border-box' as const,
          opacity: 0.5,
        }}
      />
      <p style={{ fontWeight: 700, fontSize: 24, color: colors.gray1000, margin: 0, fontFamily: font }}>로그인 중</p>
    </div>
  )
}

/* ══════════════════════════════════════════════
   Fallback
   ══════════════════════════════════════════════ */

function OriginalFallbackPreview({ route }: { route: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.white, ...dsBase }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px 20px' }}>
        <div style={{ fontSize: 36, marginBottom: 12, opacity: 0.3 }}>&#x1F4C4;</div>
        <h3 style={{ fontSize: 16, fontWeight: 600, color: colors.gray900, marginBottom: 4, fontFamily: font }}>원본 미리보기</h3>
        <p style={{ fontSize: 13, color: colors.gray600, fontFamily: font }}>{route}</p>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   Route Mapping
   ══════════════════════════════════════════════ */

const originalPreviewMap: Record<string, React.ComponentType> = {
  '/login': OriginalLoginPreview,
  '/find-id': OriginalFindIdPreview,
  '/emr-login-error': OriginalEmrLoginErrorPreview,
  '/service/reservation/login': () => <OriginalLoadingPreview text="EMR 인증 중입니다..." />,
  '/reservation-auto-login': OriginalReservationAutoLoginPreview,
  '/': OriginalHomePreview,
  '/settings/hospital-info': OriginalSettingsHospitalPreview,
  '/settings/platform-sync': OriginalSettingsPlatformPreview,
  '/settings/product': OriginalSettingsProductListPreview,
  '/settings/product/detail/:id': OriginalSettingsProductDetailPreview,
  '/settings/reservation-setting': OriginalSettingsReservationSettingPreview,
  '/settings/same-day-reservation': OriginalSettingsSameDayReservationPreview,
  '/agreements': OriginalAgreementsPreview,
  '/apply-reservation': OriginalApplyReservationPreview,
  '/application': OriginalApplicationPreview,
  '/linking-platform': OriginalLinkingPlatformPreview,
  '/signup-request': OriginalSignupRequestPreview,
  '/naver-reservation': OriginalNaverReservationPreview,
  '/load-naver-product': OriginalLoadNaverProductPreview,
  '/kin-join': OriginalKinJoinPreview,
  '/naver-kin-payment': OriginalNaverKinPaymentPreview,
  '/link-key': OriginalLinkKeyPreview,
  '/product/create': OriginalProductCreatePreview,
  '/product/detail/:id': OriginalProductDetailPreview,
  '/kakao-reservation': OriginalKakaoReservationPreview,
  '/policy/privacy': () => <OriginalPolicyPreview title="개인정보취급방침" />,
  '/policy/service': () => <OriginalPolicyPreview title="서비스이용약관" />,
  '/policy/reservation-privacy': () => <OriginalPolicyPreview title="예약서비스 개인정보취급방침" />,
  '/policy/reservation-service': () => <OriginalPolicyPreview title="예약서비스이용약관" />,
}

export function getOriginalPreviewForRoute(route: string): React.ComponentType | null {
  return originalPreviewMap[route] || null
}
