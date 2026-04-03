import React from 'react'
import { font, colors, styleInput, styleBtnPrimary, styleBtnOutline, styleBtnGhost, styleLabel, styleCard, styleSectionTitle, styleField, styleBase, DoctalkHeader, SettingsLayout, IcLogoNaver, IcLogoKakao, IcLogoDaangn, IcInfo, IcEdit, IcArrowLeft, IcWarning, IcAdd, IcDelete, IcSchedule, IcBeachAccess, IcSettings } from './_shared'

/* ══════════════════════════════════════════════
   1. OriginalSettingsHospitalPreview
   Source: pages/settings/hospital-info/index.vue
   ══════════════════════════════════════════════ */

const MoreHorizIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill={colors.gray600} />
  </svg>
)

const ArrowForwardIcon = ({ size = 20, fill = colors.gray500 }: { size?: number; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" fill={fill} />
  </svg>
)

const ReorderIcon = () => (
  <svg width={18} height={18} viewBox="0 0 18 18" fill="none">
    <path d="M16.2375 5.7375L14.145 3.645C14.0928 3.59141 14.0259 3.55461 13.9527 3.5393C13.8795 3.52399 13.8034 3.53087 13.7341 3.55906C13.6649 3.58725 13.6056 3.63547 13.5639 3.69754C13.5222 3.75961 13.4999 3.83272 13.5 3.9075V5.25H3.00001C2.58751 5.25 2.25001 5.5875 2.25001 6C2.25001 6.4125 2.58751 6.75 3.00001 6.75H13.5V8.0925C13.5 8.43 13.905 8.595 14.1375 8.355L16.23 6.2625C16.38 6.12 16.38 5.88 16.2375 5.7375ZM15 11.25H4.50001V9.9075C4.50001 9.57 4.09501 9.405 3.86251 9.645L1.77001 11.7375C1.62001 11.88 1.62001 12.12 1.76251 12.2625L3.85501 14.355C4.09501 14.595 4.50001 14.43 4.50001 14.0925V12.75H15C15.4125 12.75 15.75 12.4125 15.75 12C15.75 11.5875 15.4125 11.25 15 11.25Z" fill="currentColor" />
  </svg>
)

/* Shared small styles */
const labelPoint: React.CSSProperties = { color: colors.red500, fontWeight: 700 }
const countStyle: React.CSSProperties = { fontSize: 14, fontWeight: 400, color: colors.gray400, lineHeight: '19.6px' }

/* Tag chip */
const TagChip = ({ label }: { label: string }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: 4,
    padding: '4px 12px', borderRadius: 20, backgroundColor: colors.gray50,
    fontSize: 14, fontWeight: 500, color: colors.gray900, fontFamily: font,
  }}>
    {label}
  </span>
)

/* Image placeholder */
const ImagePlaceholder = ({ size = 120 }: { size?: number }) => (
  <div style={{
    width: size, height: size, borderRadius: 12, backgroundColor: colors.gray100,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    border: `1px solid ${colors.gray150}`, boxSizing: 'border-box' as const,
  }}>
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" fill={colors.gray300} />
    </svg>
  </div>
)

/* Toggle switch */
const ToggleSwitch = ({ on = true }: { on?: boolean }) => (
  <div style={{
    width: 44, height: 24, borderRadius: 12,
    backgroundColor: on ? colors.dg500 : colors.gray200,
    position: 'relative' as const, cursor: 'pointer', flexShrink: 0,
  }}>
    <div style={{
      width: 20, height: 20, borderRadius: '50%', backgroundColor: colors.white,
      position: 'absolute' as const, top: 2, left: on ? 22 : 2,
      boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
    }} />
  </div>
)

export function OriginalSettingsHospitalPreview() {
  return (
    <SettingsLayout>
      <div style={{ width: '100%', maxWidth: 1080, display: 'flex', flexDirection: 'column' as const, gap: 16, ...styleBase }}>
        {/* Title */}
        <h2 style={{ fontWeight: 700, fontSize: 24, lineHeight: '136%', color: colors.gray1000, margin: 0, fontFamily: font }}>
          <strong>병원정보</strong>
        </h2>

        {/* Card 1: Basic info */}
        <article style={{ ...styleCard, display: 'flex', flexDirection: 'column' as const, gap: 24 }}>
          {/* Hospital name + description */}
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' as const }}>
            <div style={{ flex: 1, minWidth: 280, ...styleField }}>
              <label style={styleLabel}>
                병원 이름 <strong style={labelPoint}>*</strong>
                <span style={{ ...countStyle, marginLeft: 8 }}>8/50자</span>
              </label>
              <input style={styleInput} defaultValue="서울미소치과의원" readOnly />
            </div>
            <div style={{ flex: 1, minWidth: 280, ...styleField }}>
              <label style={styleLabel}>
                병원 설명 <strong style={labelPoint}>*</strong>
              </label>
              <textarea
                style={{ ...styleInput, height: 100, resize: 'none' as const, lineHeight: '1.5' }}
                defaultValue="서울미소치과의원은 강남역 3번 출구에 위치한 치과 전문 병원입니다. 충치치료, 임플란트, 교정 등 다양한 진료를 제공합니다."
                readOnly
              />
              <span style={countStyle}>65/2000자 (최소 20자)</span>
            </div>
          </div>

          {/* Hospital type + departments */}
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' as const }}>
            <div style={{ flex: 1, minWidth: 280, ...styleField }}>
              <strong style={styleLabel}>
                병원 종류 <strong style={labelPoint}>*</strong>
              </strong>
              <div style={{ ...styleInput, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>치과의원</span>
                <svg width={16} height={16} viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill={colors.gray600} /></svg>
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 280, display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
              <div style={styleField}>
                <label style={styleLabel}>
                  진료과 <strong style={labelPoint}>*</strong>
                </label>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' as const }}>
                  <TagChip label="치과" />
                  <TagChip label="교정치과" />
                </div>
              </div>
              <div style={styleField}>
                <strong style={styleLabel}>
                  대표 진료과 <strong style={labelPoint}>*</strong>
                </strong>
                <div style={{ ...styleInput, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>치과</span>
                  <svg width={16} height={16} viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill={colors.gray600} /></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Hospital photos */}
          <div style={styleField}>
            <strong style={styleLabel}>
              병원 사진 <strong style={labelPoint}>*</strong>
            </strong>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' as const }}>
              {[1, 2, 3, 4, 5].map(i => (
                <ImagePlaceholder key={i} size={120} />
              ))}
            </div>
          </div>

          {/* Parking */}
          <div style={styleField}>
            <label style={styleLabel}>주차 안내</label>
            <textarea
              style={{ ...styleInput, height: 80, resize: 'none' as const, lineHeight: '1.5' }}
              defaultValue="건물 지하 주차장 이용 가능 (2시간 무료)"
              readOnly
            />
          </div>
        </article>

        {/* Card 2: Contact + Address */}
        <article style={{ ...styleCard, display: 'flex', flexDirection: 'column' as const, gap: 24 }}>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' as const }}>
            <div style={{ flex: 1, minWidth: 280, ...styleField }}>
              <label style={styleLabel}>
                연락처 <strong style={labelPoint}>*</strong>
              </label>
              <input style={styleInput} defaultValue="02-1234-5678" readOnly />
            </div>
            <div style={{ flex: 1, minWidth: 280, ...styleField }}>
              <label style={styleLabel}>
                주소 <strong style={labelPoint}>*</strong>
              </label>
              <input style={styleInput} defaultValue="서울특별시 강남구 테헤란로 123, 4층" readOnly />
            </div>
          </div>
          <div style={styleField}>
            <label style={styleLabel}>상세 주소</label>
            <input style={styleInput} defaultValue="미래빌딩 4층" readOnly />
          </div>
        </article>

        {/* Save button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button style={{ ...styleBtnPrimary, width: 200 }}>저장</button>
        </div>
      </div>
    </SettingsLayout>
  )
}

/* ══════════════════════════════════════════════
   2. OriginalSettingsPlatformPreview
   Source: pages/settings/platform-sync/index.vue
   ══════════════════════════════════════════════ */

/* Status icon helpers */
const LinkAlertIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="#FF9800" />
  </svg>
)
const SearchActivityIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#2196F3" />
  </svg>
)

export function OriginalSettingsPlatformPreview() {
  return (
    <SettingsLayout>
      <section style={{ width: '100%', maxWidth: 1080, display: 'flex', flexDirection: 'column' as const, gap: 16, ...styleBase }}>
        {/* Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <h2 style={{ fontWeight: 700, fontSize: 24, lineHeight: '136%', color: colors.gray1000, margin: 0, fontFamily: font }}>플랫폼</h2>
        </div>

        {/* Platform list card */}
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 24 }}>
          <ul style={{
            padding: 28, display: 'flex', flexDirection: 'column' as const, gap: 32,
            borderRadius: 16, backgroundColor: colors.white, listStyle: 'none', margin: 0, boxSizing: 'border-box' as const,
          }}>
            {/* Naver */}
            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <IcLogoNaver width={28} height={28} />
                  <span style={{ fontWeight: 600, fontSize: 18, lineHeight: '144%', color: colors.gray1000, fontFamily: font }}>네이버</span>
                </div>
              </div>
              <span style={{ fontWeight: 700, fontSize: 18, lineHeight: '144%', color: '#2abb87', fontFamily: font }}>운영 중</span>
            </li>

            {/* Kakao */}
            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <IcLogoKakao width={28} height={28} />
                  <span style={{ fontWeight: 600, fontSize: 18, lineHeight: '144%', color: colors.gray1000, fontFamily: font }}>카카오</span>
                </div>
                <SearchActivityIcon />
              </div>
              <span style={{ fontWeight: 700, fontSize: 18, lineHeight: '144%', color: colors.gray300, fontFamily: font }}>-</span>
            </li>

            {/* Daangn */}
            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <IcLogoDaangn width={28} height={28} />
                  <span style={{ fontWeight: 600, fontSize: 18, lineHeight: '144%', color: colors.gray1000, fontFamily: font }}>당근</span>
                </div>
                <div style={{
                  height: 30, padding: '5px 8px', display: 'flex', alignItems: 'center', gap: 4,
                  border: `1px solid ${colors.gray150}`, borderRadius: 8, boxSizing: 'border-box' as const, backgroundColor: colors.white,
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600, fontSize: 14, lineHeight: '144%', color: colors.gray700, fontFamily: font }}>
                    대기 접수 <b style={{ color: colors.gray1000 }}>사용</b>
                  </span>
                  <IcInfo width={16} height={16} fill={colors.gray400} />
                </div>
              </div>
              <span style={{ fontWeight: 700, fontSize: 18, lineHeight: '144%', color: '#2abb87', fontFamily: font }}>운영 중</span>
            </li>
          </ul>

          {/* Review info banner */}
          <div style={{
            padding: 28, display: 'flex', gap: 16,
            border: `1px solid ${colors.gray100}`, borderRadius: 16, backgroundColor: colors.white,
          }}>
            <div style={{ paddingTop: 2, flexShrink: 0 }}>
              <IcInfo width={20} height={20} fill={colors.gray700} />
            </div>
            <span style={{ fontWeight: 400, fontSize: 16, lineHeight: '148%', color: colors.gray1000, fontFamily: font }}>
              카카오 연동이 완료되면 병원 정보에 입력한 연락처 <b style={{ fontWeight: 600 }}>02-1234-5678</b>로 안내드릴게요. (영업일 기준 최대 3~5일 소요)
              <br />
              다른 연락처로 안내받길 원하는 경우 문의하기를 이용해주세요.
            </span>
          </div>
        </div>
      </section>
    </SettingsLayout>
  )
}

/* ══════════════════════════════════════════════
   3. OriginalSettingsProductListPreview
   Source: pages/settings/product/index.vue
   ══════════════════════════════════════════════ */

const ProductCard = ({ title, isVisible, days, hasTemp }: { title: string; isVisible: boolean; days: string; hasTemp?: boolean }) => (
  <li style={{
    display: 'flex', alignItems: 'center', gap: 16, padding: 20,
    borderRadius: 16, backgroundColor: colors.white, boxSizing: 'border-box' as const,
    border: `1px solid ${colors.gray100}`,
  }}>
    {/* Thumbnail */}
    <div style={{
      width: 80, height: 80, borderRadius: 12, backgroundColor: colors.gray100, flexShrink: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" fill={colors.gray300} />
      </svg>
    </div>
    {/* Content */}
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontWeight: 600, fontSize: 18, lineHeight: '22px', color: colors.gray1000, fontFamily: font }}>{title}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 14, fontWeight: 500, color: isVisible ? '#2abb87' : colors.gray400, fontFamily: font }}>
            {isVisible ? '노출 중' : '미노출'}
          </span>
          <ToggleSwitch on={isVisible} />
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' as const }}>
        {hasTemp && (
          <span style={{
            padding: '2px 8px', borderRadius: 4, fontSize: 12, fontWeight: 600,
            backgroundColor: '#FFF3E0', color: '#E65100', fontFamily: font,
          }}>
            임시 스케줄 1건
          </span>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <IcSchedule width={16} height={16} fill={colors.gray400} />
        <span style={{ fontSize: 14, fontWeight: 400, color: colors.gray700, fontFamily: font }}>{days}</span>
      </div>
    </div>
  </li>
)

export function OriginalSettingsProductListPreview() {
  return (
    <SettingsLayout>
      <section style={{ width: '100%', maxWidth: 1280, display: 'flex', flexDirection: 'column' as const, gap: 16, ...styleBase }}>
        {/* Title area */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: 12 }}>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 4 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <h2 style={{ fontWeight: 700, fontSize: 24, lineHeight: '136%', color: colors.gray1000, margin: 0, fontFamily: font }}>예약 상품</h2>
              <button style={{
                width: 32, height: 32, borderRadius: '50%', border: 'none', backgroundColor: 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
              }}>
                <IcInfo width={20} height={20} fill={colors.gray400} />
              </button>
            </div>
            <span style={{ fontSize: 14, fontWeight: 400, color: colors.gray700, fontFamily: font }}>
              <b style={{ color: '#2abb87', fontWeight: 600 }}>노출 중 3</b> / 전체 4
            </span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={{ ...styleBtnOutline, height: 48, padding: '0 20px', fontSize: 16, fontWeight: 600 }}>
              <IcAdd width={18} height={18} fill={colors.gray900} /> 예약 상품 추가
            </button>
          </div>
        </div>

        {/* Same-day reservation bar */}
        <div style={{
          padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderRadius: 16, backgroundColor: colors.white, cursor: 'pointer',
          border: `1px solid ${colors.gray100}`, boxSizing: 'border-box' as const,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontWeight: 600, fontSize: 16, lineHeight: '148%', color: colors.gray1000, fontFamily: font }}>
              당일예약 <span style={{ color: '#2abb87' }}>1시간 전</span>까지 예약을 받고 있어요
            </span>
            <IcInfo width={20} height={20} fill={colors.gray400} />
          </div>
          <ArrowForwardIcon size={20} fill={colors.gray500} />
        </div>

        {/* Product list */}
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 0 }}>
          <ul style={{ display: 'flex', flexDirection: 'column' as const, gap: 12, listStyle: 'none', margin: 0, padding: 0 }}>
            <ProductCard title="충치 치료" isVisible={true} days="월, 화, 수, 목, 금" />
            <ProductCard title="스케일링" isVisible={true} days="월, 화, 수, 목, 금, 토" hasTemp />
            <ProductCard title="임플란트 상담" isVisible={true} days="월, 수, 금" />
            <ProductCard title="교정 상담" isVisible={false} days="화, 목" />
          </ul>
        </div>
      </section>
    </SettingsLayout>
  )
}

/* ══════════════════════════════════════════════
   4. OriginalSettingsProductDetailPreview
   Source: pages/settings/product/detail/[id]/index.vue
   ══════════════════════════════════════════════ */

const TabButton = ({ label, active }: { label: string; active: boolean }) => (
  <button style={{
    padding: '12px 0', border: 'none', fontWeight: 700, fontSize: 16, lineHeight: '148%',
    color: active ? '#000' : '#37383c47', backgroundColor: 'transparent', cursor: 'pointer',
    boxShadow: active ? 'inset 0 -2px 0 0 #000' : 'none', fontFamily: font,
  }}>
    {label}
  </button>
)

/* Schedule time row */
const ScheduleRow = ({ day, time, active = true }: { day: string; time: string; active?: boolean }) => (
  <div style={{
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0',
    borderBottom: `1px solid ${colors.gray50}`,
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <span style={{
        width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: active ? '#2abb87' : colors.gray200, color: active ? colors.white : colors.gray500,
        fontSize: 13, fontWeight: 600, fontFamily: font,
      }}>
        {day}
      </span>
      <span style={{ fontSize: 16, fontWeight: 500, color: active ? colors.gray1000 : colors.gray400, fontFamily: font }}>
        {time}
      </span>
    </div>
  </div>
)

export function OriginalSettingsProductDetailPreview() {
  return (
    <SettingsLayout>
      <section style={{ width: '100%', maxWidth: 1280, display: 'flex', flexDirection: 'column' as const, gap: 24, ...styleBase }}>
        {/* Title bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button style={{
              width: 40, height: 40, borderRadius: 8, border: `1px solid ${colors.gray150}`,
              backgroundColor: colors.white, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            }}>
              <IcArrowLeft width={24} height={24} fill={colors.gray1000} />
            </button>
            <h2 style={{ fontWeight: 700, fontSize: 24, lineHeight: '136%', color: colors.gray1000, margin: 0, fontFamily: font }}>
              충치 치료
            </h2>
          </div>
          <div style={{ position: 'relative' as const }}>
            <button style={{
              width: 40, height: 40, borderRadius: 8, border: `1px solid ${colors.gray150}`,
              backgroundColor: colors.white, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            }}>
              <MoreHorizIcon />
            </button>
          </div>
        </div>

        {/* Tab nav */}
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <ul style={{ display: 'flex', alignItems: 'center', gap: 20, listStyle: 'none', margin: 0, padding: 0 }}>
              <li><TabButton label="예약 스케줄" active={true} /></li>
              <li><TabButton label="기본정보" active={false} /></li>
            </ul>
          </div>
        </nav>

        {/* Schedule content */}
        <div style={{ ...styleCard, display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
          <h3 style={{ fontWeight: 600, fontSize: 20, lineHeight: '24px', color: colors.gray1000, margin: 0, fontFamily: font }}>
            정기 스케줄
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column' as const }}>
            <ScheduleRow day="월" time="09:00 ~ 18:00" />
            <ScheduleRow day="화" time="09:00 ~ 18:00" />
            <ScheduleRow day="수" time="09:00 ~ 18:00" />
            <ScheduleRow day="목" time="09:00 ~ 18:00" />
            <ScheduleRow day="금" time="09:00 ~ 17:00" />
            <ScheduleRow day="토" time="09:00 ~ 13:00" active={true} />
            <ScheduleRow day="일" time="휴진" active={false} />
          </div>
        </div>

        {/* Lunch break */}
        <div style={{ ...styleCard, display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
          <h3 style={{ fontWeight: 600, fontSize: 20, lineHeight: '24px', color: colors.gray1000, margin: 0, fontFamily: font }}>
            점심시간
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 0' }}>
            <span style={{ fontSize: 16, fontWeight: 500, color: colors.gray1000, fontFamily: font }}>12:30 ~ 13:30</span>
          </div>
        </div>

        {/* Reservation interval */}
        <div style={{ ...styleCard, display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
          <h3 style={{ fontWeight: 600, fontSize: 20, lineHeight: '24px', color: colors.gray1000, margin: 0, fontFamily: font }}>
            예약 간격
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 0' }}>
            <span style={{ fontSize: 16, fontWeight: 500, color: colors.gray1000, fontFamily: font }}>30분</span>
          </div>
        </div>
      </section>
    </SettingsLayout>
  )
}

/* ══════════════════════════════════════════════
   5. OriginalSettingsReservationSettingPreview
   Source: pages/settings/reservation-setting/index.vue
   ══════════════════════════════════════════════ */

/* Platform icon row for cards */
const PlatformIcons = ({ showDaangnDisabled = true }: { showDaangnDisabled?: boolean }) => (
  <div style={{ display: 'flex', gap: 8 }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <IcLogoNaver width={20} height={20} />
    </div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <IcLogoKakao width={20} height={20} />
    </div>
    {showDaangnDisabled && (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', filter: 'grayscale(100%) brightness(1.5)', opacity: 0.7 }}>
        <IcLogoDaangn width={20} height={20} />
      </div>
    )}
  </div>
)

/* Pre-question item */
const PreQuestionItemRow = ({ question, type, isRequired }: { question: string; type: string; isRequired: boolean }) => (
  <div style={{ padding: '16px 20px' }}>
    <div style={{ display: 'flex', alignItems: 'center', padding: 16, borderRadius: 24, cursor: 'pointer' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1 }}>
            <span style={{ fontWeight: 500, fontSize: 16, lineHeight: '22px', color: colors.gray1000, fontFamily: font }}>{question}</span>
            <span style={{
              fontWeight: 600, fontSize: 14, lineHeight: '20px',
              color: isRequired ? '#2abb87' : colors.gray500, fontFamily: font,
            }}>
              {isRequired ? '필수' : '선택'}
            </span>
          </div>
          <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
            <button style={{
              width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: 6, border: 'none', backgroundColor: 'transparent', cursor: 'pointer',
            }}>
              <IcEdit width={20} height={20} fill={colors.gray300} />
            </button>
            <button style={{
              width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: 6, border: 'none', backgroundColor: 'transparent', cursor: 'pointer',
            }}>
              <IcDelete width={20} height={20} fill={colors.gray300} />
            </button>
          </div>
        </div>
        <div style={{ fontWeight: 400, fontSize: 14, lineHeight: '18px', color: colors.gray700, fontFamily: font }}>
          {type}
        </div>
      </div>
    </div>
  </div>
)

export function OriginalSettingsReservationSettingPreview() {
  return (
    <SettingsLayout>
      <section style={{ width: '100%', maxWidth: 1200, display: 'flex', flexDirection: 'column' as const, gap: 16, ...styleBase }}>
        {/* Title */}
        <h1 style={{ fontWeight: 700, fontSize: 24, lineHeight: '136%', color: colors.gray1000, margin: 0, fontFamily: font }}>예약설정</h1>

        {/* Tab nav */}
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <ul style={{ display: 'flex', alignItems: 'center', gap: 20, listStyle: 'none', margin: 0, padding: 0 }}>
              <li>
                <button style={{
                  padding: '12px 0', border: 'none', fontWeight: 700, fontSize: 16, lineHeight: '148%',
                  color: '#000', backgroundColor: 'transparent', cursor: 'pointer',
                  boxShadow: 'inset 0 -2px 0 0 #000', fontFamily: font,
                }}>
                  예약 시 사전질문
                </button>
              </li>
              <li>
                <button style={{
                  padding: '12px 0', border: 'none', fontWeight: 700, fontSize: 16, lineHeight: '148%',
                  color: '#37383c47', backgroundColor: 'transparent', cursor: 'pointer', fontFamily: font,
                }}>
                  당일예약
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* Info banner */}
        <div style={{
          padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 8,
          borderRadius: 12, backgroundColor: colors.gray50,
        }}>
          <IcInfo width={20} height={20} fill={colors.gray400} />
          <span style={{ fontWeight: 600, fontSize: 16, lineHeight: '144%', color: colors.gray700, fontFamily: font }}>
            환자가 예약할 때 사전 질문이 노출됩니다. (최대 10개)
          </span>
        </div>

        {/* Content: PreQuestionTab layout */}
        <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 380px', gap: 16, boxSizing: 'border-box' as const }}>
          {/* Left: PreQuestionList */}
          <div style={{ display: 'flex', flexDirection: 'column' as const }}>
            <div style={{ width: '100%', backgroundColor: colors.white, borderRadius: 16, boxSizing: 'border-box' as const }}>
              {/* Header */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' as const,
                gap: 12, padding: '28px 28px 20px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <h2 style={{ fontWeight: 600, fontSize: 20, lineHeight: '24px', color: colors.gray1000, margin: 0, fontFamily: font }}>사전질문</h2>
                  <PlatformIcons />
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button style={{
                    ...styleBtnGhost, backgroundColor: colors.gray50, border: 'none', gap: 6,
                    fontSize: 16, height: 36, padding: '0 12px', borderRadius: 8, color: colors.gray900,
                  }}>
                    <ReorderIcon /> 순서변경
                  </button>
                  <button style={{
                    ...styleBtnPrimary, height: 36, padding: '0 12px', fontSize: 16, gap: 6,
                  }}>
                    <IcAdd width={18} height={18} /> 질문추가
                  </button>
                </div>
              </div>

              {/* Question items */}
              <div style={{ display: 'flex', flexDirection: 'column' as const, padding: '0 0 28px' }}>
                <PreQuestionItemRow question="어떤 증상으로 내원하시나요?" type="단일선택" isRequired={true} />
                <PreQuestionItemRow question="알레르기가 있으신가요?" type="직접입력" isRequired={false} />
                <PreQuestionItemRow question="현재 복용 중인 약이 있으신가요?" type="직접입력" isRequired={true} />
              </div>
            </div>
          </div>

          {/* Right: PreQuestionPreview */}
          <div style={{ position: 'sticky' as const, top: 20, height: 'fit-content' }}>
            <div style={{ width: '100%', backgroundColor: colors.white, borderRadius: 16, boxSizing: 'border-box' as const }}>
              <div style={{ padding: '28px 28px 0' }}>
                <h3 style={{ fontWeight: 600, fontSize: 20, lineHeight: '24px', color: colors.gray1000, margin: 0, fontFamily: font }}>미리보기</h3>
              </div>
              <div style={{ padding: '24px 28px 28px', display: 'flex', flexDirection: 'column' as const, gap: 28 }}>
                {/* Q1 - Single select */}
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                  <label style={{ fontWeight: 500, fontSize: 14, lineHeight: '20px', color: colors.gray900, fontFamily: font }}>
                    1. 어떤 증상으로 내원하시나요? <span style={{ color: '#2abb87', marginLeft: 2 }}>*</span>
                  </label>
                  <div style={{ ...styleInput, height: 36, padding: '6px 12px', fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ color: colors.gray400 }}>선택해주세요</span>
                    <svg width={14} height={14} viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill={colors.gray600} /></svg>
                  </div>
                </div>
                {/* Q2 - Text */}
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                  <label style={{ fontWeight: 500, fontSize: 14, lineHeight: '20px', color: colors.gray900, fontFamily: font }}>
                    2. 알레르기가 있으신가요?
                  </label>
                  <textarea
                    style={{ ...styleInput, height: 80, resize: 'none' as const, fontSize: 14, padding: '8px 12px' }}
                    placeholder="내용을 입력해주세요"
                    readOnly
                  />
                </div>
                {/* Q3 - Text */}
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                  <label style={{ fontWeight: 500, fontSize: 14, lineHeight: '20px', color: colors.gray900, fontFamily: font }}>
                    3. 현재 복용 중인 약이 있으신가요? <span style={{ color: '#2abb87', marginLeft: 2 }}>*</span>
                  </label>
                  <textarea
                    style={{ ...styleInput, height: 80, resize: 'none' as const, fontSize: 14, padding: '8px 12px' }}
                    placeholder="내용을 입력해주세요"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SettingsLayout>
  )
}

/* ══════════════════════════════════════════════
   6. OriginalSettingsSameDayReservationPreview
   Source: pages/settings/same-day-reservation/index.vue
   ══════════════════════════════════════════════ */

export function OriginalSettingsSameDayReservationPreview() {
  return (
    <SettingsLayout>
      <section style={{ width: '100%', maxWidth: 1080, display: 'flex', flexDirection: 'column' as const, gap: 16, ...styleBase }}>
        {/* Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <h2 style={{ fontWeight: 700, fontSize: 24, lineHeight: '136%', color: colors.gray1000, margin: 0, fontFamily: font }}>당일예약</h2>
          <div style={{
            padding: '5px 6px', display: 'flex', alignItems: 'center', gap: 4,
            borderRadius: 12, backgroundColor: colors.gray50, boxSizing: 'border-box' as const,
          }}>
            <div style={{
              width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: 8, backgroundColor: colors.white,
            }}>
              <IcLogoNaver width={17} height={17} />
            </div>
            <div style={{
              width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: 8, backgroundColor: colors.white,
            }}>
              <IcLogoKakao width={17} height={17} />
            </div>
            <div style={{
              width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: 8, backgroundColor: 'transparent',
            }}>
              <div style={{ filter: 'grayscale(100%) brightness(1.5)', opacity: 0.5 }}>
                <IcLogoDaangn width={17} height={17} />
              </div>
            </div>
          </div>
        </div>

        {/* Content card */}
        <div style={{
          padding: 24, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
          gap: 16, borderRadius: 24, backgroundColor: colors.white, boxSizing: 'border-box' as const,
        }}>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
            <p style={{
              fontWeight: 600, fontSize: 16, lineHeight: '148%', color: colors.gray1000, margin: 0, fontFamily: font,
            }}>
              예약시간 <span style={{ color: '#2abb87' }}>1시간 전까지</span> 예약을 받을게요.
            </p>
            <p style={{
              fontWeight: 500, fontSize: 14, lineHeight: '144%', color: colors.gray700, margin: 0, fontFamily: font,
            }}>
              [예시] 오후 3시 예약 건은 오후 2시까지 예약을 신청할 수 있어요.
            </p>
          </div>
          <button style={{
            ...styleBtnOutline, height: 36, padding: '0 12px', fontSize: 14, fontWeight: 600,
            display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0,
          }}>
            <IcEdit width={16} height={16} /> 수정
          </button>
        </div>
      </section>
    </SettingsLayout>
  )
}
