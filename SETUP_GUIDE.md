# dtds-page-builder 구축 가이드

이 문서는 **dtds-page-builder** 프로젝트를 처음부터 구축하는 전체 과정을 상세히 설명한다. 닥톡예약 서비스의 모든 페이지를 시각적으로 프리뷰하고, 드래그 앤 드롭으로 컴포넌트를 배치할 수 있는 페이지 빌더이다.

---

## 목차

1. [프로젝트 개요](#1-프로젝트-개요)
2. [프로젝트 초기 설정](#2-프로젝트-초기-설정)
3. [디렉토리 구조](#3-디렉토리-구조)
4. [상태 관리 (Zustand Store)](#4-상태-관리-zustand-store)
5. [레이아웃 구조](#5-레이아웃-구조)
6. [드래그 앤 드롭 시스템](#6-드래그-앤-드롭-시스템)
7. [프리뷰 시스템 (핵심)](#7-프리뷰-시스템-핵심)
8. [캔버스 렌더링](#8-캔버스-렌더링)
9. [빌드 및 실행](#9-빌드-및-실행)
10. [프리뷰 컴포넌트 추가 가이드](#10-프리뷰-컴포넌트-추가-가이드)

---

## 1. 프로젝트 개요

### 목적

닥톡예약(doctalk reservation) 프론트엔드 서비스는 Nuxt 3 + Vue로 구축되어 있다. 이 페이지 빌더는 해당 서비스의 모든 페이지를 **React 인라인 스타일로 1:1 재현**하여, 디자인시스템 적용 전후를 비교하고 페이지 단위로 컴포넌트를 조합할 수 있는 도구이다.

핵심 기능은 다음과 같다:
- 닥톡예약 서비스의 모든 페이지를 실제와 동일하게 프리뷰
- 뷰포트 프리셋(Mobile 375px ~ FHD 1920px)에 따른 반응형 확인
- 디자인시스템 컴포넌트를 드래그 앤 드롭으로 캔버스에 배치
- Undo/Redo, 노드 복제/삭제 등 편집 기능
- JSX 코드 Export 기능

### 기술 스택

| 기술 | 버전 | 역할 |
|------|------|------|
| Vite | ^7.2.4 | 빌드 도구 (HMR, 번들링) |
| React | ^19.2.0 | UI 라이브러리 |
| TypeScript | ~5.9.3 | 정적 타입 시스템 |
| Zustand | ^5.0.5 | 전역 상태 관리 (+ immer 미들웨어) |
| @dnd-kit/core | ^6.3.1 | 드래그 앤 드롭 |
| @dnd-kit/sortable | ^10.0.0 | 정렬 가능한 드래그 앤 드롭 |
| TailwindCSS | ^4.0.0 | 유틸리티 CSS (UI 프레임) |
| immer | ^10.1.1 | 불변 상태 업데이트 |
| nanoid | ^5.1.5 | 고유 ID 생성 |
| lucide-react | ^0.577.0 | 아이콘 |
| doctalk-design-system | file:../design-system/apps/react | 자체 디자인시스템 |

### 프리뷰 시스템의 설계 원칙

기존 Vue 소스코드의 SCSS 변수, mixin, 템플릿 구조를 **React 인라인 스타일**로 변환한다. TailwindCSS는 빌더 자체의 UI(사이드바, 툴바 등)에만 사용하고, 프리뷰 영역에서는 원본 Vue 소스와 동일한 시각적 결과를 보장하기 위해 인라인 스타일만 사용한다.

---

## 2. 프로젝트 초기 설정

### 2.1 Vite + React + TypeScript 프로젝트 생성

```bash
npm create vite@latest dtds-page-builder -- --template react-ts
cd dtds-page-builder
```

이 명령어는 Vite 기반의 React + TypeScript 프로젝트 스캐폴딩을 생성한다. `--template react-ts`를 지정하면 `tsconfig.json`, `vite.config.ts`, `src/main.tsx` 등의 기본 파일이 자동 생성된다.

### 2.2 필요 패키지 설치

프로덕션 의존성:

```bash
npm install react@^19.2.0 react-dom@^19.2.0
npm install @dnd-kit/core@^6.3.1 @dnd-kit/sortable@^10.0.0 @dnd-kit/utilities@^3.2.2
npm install zustand@^5.0.5 immer@^10.1.1
npm install nanoid@^5.1.5
npm install clsx@^2.1.1 tailwind-merge@^3.4.0
npm install lucide-react@^0.577.0
```

개발 의존성:

```bash
npm install -D tailwindcss@^4.0.0 @tailwindcss/vite@^4.0.0
npm install -D @vitejs/plugin-react@^5.1.1
npm install -D @types/react@^19.2.5 @types/react-dom@^19.2.3
npm install -D typescript@~5.9.3
npm install -D vite@^7.2.4
```

디자인시스템 로컬 링크 (프로젝트 구조에 따라 경로 조정):

```bash
npm install doctalk-design-system@file:../design-system/apps/react
```

`doctalk-design-system`은 로컬 파일 참조(`file:` 프로토콜)로 설치한다. 디자인시스템 패키지가 `../design-system/apps/react` 경로에 위치해야 한다. 이 패키지가 자체적으로 React를 peer dependency로 가지고 있기 때문에, 뒤에서 설명할 `vite.config.ts`의 `dedupe` 설정이 필수적이다.

### 2.3 tsconfig.json 설정

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

주요 설정 설명:

- **`baseUrl` + `paths`**: `@/` 경로 alias를 설정한다. `@/store/ui-store`처럼 `src` 디렉토리를 기준으로 임포트할 수 있다. 이것은 TypeScript 컴파일러에게만 알려주는 것이므로, 실제 번들링에서 작동하려면 `vite.config.ts`에서도 동일한 alias를 설정해야 한다.
- **`moduleResolution: "bundler"`**: Vite와 같은 번들러 환경에 최적화된 모듈 해석 전략이다.
- **`noUnusedLocals: false`**: 개발 중 미사용 변수 경고를 끈다. 빠른 프로토타이핑에 유리하다.
- **`jsx: "react-jsx"`**: React 17+ 의 새로운 JSX 변환을 사용한다. `import React from 'react'`를 매번 쓰지 않아도 된다.

### 2.4 vite.config.ts 설정

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },
    dedupe: ['react', 'react-dom'],
  },
})
```

설정 설명:

- **`plugins`**: `react()` 플러그인은 Fast Refresh(HMR)를 활성화하고, `tailwindcss()` 플러그인은 TailwindCSS v4의 Vite 통합을 제공한다.
- **`alias`의 `@`**: TypeScript의 `paths` 설정과 일치시켜, 번들링 시에도 `@/` 경로가 올바르게 해석되도록 한다.
- **`alias`의 `react`/`react-dom` + `dedupe`**: `doctalk-design-system`이 로컬 패키지로 설치되어 있어, 자체 `node_modules`에 별도의 React 인스턴스를 가질 수 있다. 두 개의 React 인스턴스가 동시에 로드되면 "Invalid hook call" 에러가 발생하므로, 반드시 이 프로젝트의 React로 통일해야 한다. `dedupe`와 명시적 alias가 이 문제를 해결한다.

### 2.5 TailwindCSS 설정

TailwindCSS v4에서는 별도의 `tailwind.config.js`가 필요 없다. CSS 파일에서 직접 설정한다.

`src/index.css`:

```css
@import "../node_modules/doctalk-design-system/src/index.css";

/* Page Builder specific styles */
.builder-canvas-node {
  position: relative;
  transition: outline 0.1s ease;
}

.builder-canvas-node:hover {
  outline: 1px dashed var(--accent);
  outline-offset: 2px;
}

.builder-canvas-node.selected {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

.builder-drop-indicator {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary);
  pointer-events: none;
  z-index: 50;
}

.builder-drop-indicator.top {
  top: -1px;
}

.builder-drop-indicator.bottom {
  bottom: -1px;
}

.builder-drop-inside {
  background: color-mix(in srgb, var(--primary) 8%, transparent);
  outline: 2px dashed var(--primary);
  outline-offset: -2px;
}
```

첫 줄에서 디자인시스템의 CSS를 임포트한다. 이 CSS에는 디자인시스템의 TailwindCSS 테마 토큰(`--primary`, `--border`, `--foreground` 등)이 정의되어 있어, 빌더 UI 전체에서 일관된 디자인 토큰을 사용할 수 있다.

아래의 커스텀 CSS는 캔버스에서 노드를 선택/호버/드롭할 때의 시각적 피드백을 담당한다.

---

## 3. 디렉토리 구조

```
src/
  main.tsx                          # 엔트리 포인트 (ReactDOM.createRoot)
  app.tsx                           # 최상위 App 컴포넌트 (3패널 레이아웃, 툴바)
  index.css                         # TailwindCSS + 빌더 전용 CSS

  schema/
    node.ts                         # 핵심 타입 정의 (PageNode, Page, PlatformConfig)

  store/
    document-store.ts               # 문서(페이지/노드) 상태 + Undo/Redo
    ui-store.ts                     # UI 상태 (뷰포트 너비, 사이드바, 줌)
    platform-store.ts               # 플랫폼 설정 상태
    selection-store.ts              # 선택/호버 노드 상태

  dnd/
    DndProvider.tsx                  # dnd-kit DndContext 래퍼 + 드래그/드롭 핸들러

  panels/
    left/
      LeftPanel.tsx                  # 좌측 사이드바 컨테이너
      PlatformSelector.tsx           # 플랫폼 선택 드롭다운
      PageTree.tsx                   # 페이지 목록 (탭)
      ComponentLibrary.tsx           # 드래그 가능한 컴포넌트 팔레트
    center/
      CenterPanel.tsx                # 중앙 캔버스 컨테이너
      Canvas.tsx                     # 캔버스 (프리뷰 또는 노드 렌더링)
      CanvasNode.tsx                 # 개별 캔버스 노드 (선택/호버 UI)
      ExportModal.tsx                # JSX 코드 Export 모달
    right/
      RightPanel.tsx                 # 우측 속성 편집 패널
      PropertyEditor.tsx             # 선택된 노드의 속성 편집기
      controls/
        BooleanControl.tsx           # boolean 속성 컨트롤
        SelectControl.tsx            # select 속성 컨트롤
        TextControl.tsx              # text 속성 컨트롤
        NumberControl.tsx            # number 속성 컨트롤

  registry/
    types.ts                         # ComponentDefinition, PropDefinition 타입
    categories.ts                    # 컴포넌트 카테고리 목록
    registry.ts                      # 컴포넌트 레지스트리 (Map 기반)
    renderers.ts                     # 노드 렌더링 함수
    definitions/
      button.def.ts                  # Button 컴포넌트 정의
      input.def.ts                   # Input 컴포넌트 정의
      ...                            # (총 30+ 컴포넌트 정의 파일)

  platforms/
    index.ts                         # 플랫폼 설정 목록 (platformConfigs)
    previews/
      index.tsx                      # getPreviewForRoute() export
      original/
        index.tsx                    # 라우트 -> 프리뷰 컴포넌트 매핑
        _shared.tsx                  # 디자인 토큰, 공통 컴포넌트, SVG 아이콘
        _auth.tsx                    # 인증 관련 프리뷰 (로그인, 아이디 찾기 등)
        _settings.tsx                # 설정 관련 프리뷰 (병원정보, 상품 등)
        _onboarding.tsx              # 가입/온보딩 프리뷰
        _others.tsx                  # 기타 프리뷰 (지식iN, 카카오, 정책 등)
    templates/
      index.ts                       # 라우트 -> 템플릿 노드 매핑
      helpers.ts                     # 템플릿 헬퍼 함수
      auth-templates.ts              # 인증 페이지 템플릿
      settings-templates.ts          # 설정 페이지 템플릿
      ...                            # (카테고리별 템플릿 파일)

  codegen/
    generator.ts                     # 코드 생성기
    node-to-jsx.ts                   # 노드 -> JSX 변환
    imports-collector.ts             # import 문 수집

  hooks/
    use-keyboard-shortcuts.ts        # 키보드 단축키 훅

  lib/
    utils.ts                         # cn() 유틸리티 (clsx + tailwind-merge)
```

### 각 디렉토리의 역할

- **`schema/`**: 프로젝트 전체에서 사용하는 핵심 타입을 정의한다. `PageNode`는 트리 구조의 노드이며, `Page`는 하나의 페이지, `PlatformConfig`는 닥톡예약 같은 플랫폼의 설정을 나타낸다.
- **`store/`**: Zustand 기반의 전역 상태 관리 계층이다. 각 store가 독립적인 관심사를 담당한다.
- **`dnd/`**: dnd-kit 라이브러리의 설정과 드래그/드롭 이벤트 처리를 담당한다.
- **`panels/`**: 화면의 3패널 구조를 구성하는 React 컴포넌트들이다.
- **`registry/`**: 디자인시스템 컴포넌트의 메타데이터(타입, 속성 정의, 기본값, 렌더러)를 관리하는 레지스트리이다.
- **`platforms/`**: 플랫폼별 설정, 프리뷰 컴포넌트, 템플릿을 관리한다. 프리뷰 시스템의 핵심이다.
- **`codegen/`**: 캔버스에 배치된 노드 트리를 JSX 코드로 변환하는 코드 생성기이다.
- **`hooks/`**: 재사용 가능한 React Hook을 모아둔다.
- **`lib/`**: 범용 유틸리티 함수를 모아둔다.

---

## 4. 상태 관리 (Zustand Store)

이 프로젝트는 Zustand를 사용하여 전역 상태를 관리한다. 4개의 독립적인 store로 관심사를 분리했다.

### 4.1 document-store.ts (문서 상태)

문서의 핵심 데이터인 페이지 목록, 노드 트리, Undo/Redo 히스토리를 관리한다.

```typescript
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { nanoid } from 'nanoid'
import type { Page, PageNode, PlatformConfig } from '@/schema/node'
import { createRootNode } from '@/schema/node'
import { getTemplateForRoute } from '@/platforms/templates'
```

**상태 구조:**

```typescript
interface DocumentState {
  pages: Page[]              // 모든 페이지 목록
  activePageId: string       // 현재 활성 페이지 ID
  past: Page[][]             // Undo 스택 (최대 50개)
  future: Page[][]           // Redo 스택

  // 페이지 접근
  getActivePage: () => Page

  // 노드 조작
  addNode: (parentId: string, node: PageNode, position?: number) => void
  removeNode: (nodeId: string) => void
  updateNodeProps: (nodeId: string, props: Record<string, unknown>) => void
  updateTextContent: (nodeId: string, text: string) => void
  moveNode: (nodeId: string, targetParentId: string, position: number) => void
  duplicateNode: (nodeId: string) => void

  // 페이지 관리
  addPage: (name: string) => void
  removePage: (pageId: string) => void
  renamePage: (pageId: string, name: string) => void
  setActivePage: (pageId: string) => void
  loadPlatformPages: (platform: PlatformConfig) => void

  // Undo/Redo
  undo: () => void
  redo: () => void
}
```

**immer 미들웨어를 사용하는 이유**: `PageNode`는 중첩된 트리 구조(children, slots)를 가지고 있다. 일반적인 불변 업데이트는 매우 번거롭지만, immer를 사용하면 마치 직접 객체를 변경하는 것처럼 코드를 작성할 수 있다.

**Undo/Redo 구현**: 상태를 변경하기 전에 현재 `pages` 배열의 전체 스냅샷을 `past` 스택에 `JSON.parse(JSON.stringify(...))`로 deep clone하여 저장한다. `undo()`는 `past`에서 꺼내 복원하고, 현재 상태를 `future`에 넣는다. 히스토리는 최대 50개로 제한한다.

```typescript
addNode: (parentId, node, position) => {
  set((state) => {
    // 현재 상태를 히스토리에 저장
    state.past.push(JSON.parse(JSON.stringify(state.pages)))
    state.future = []
    if (state.past.length > 50) state.past.shift()

    // 부모 노드를 찾아서 자식에 삽입
    const page = state.pages.find((p) => p.id === state.activePageId)
    if (!page) return
    const parent = findNodeInTree(page.root, parentId)
    if (!parent) return
    const pos = position ?? parent.children.length
    parent.children.splice(pos, 0, node)
  })
},
```

**`loadPlatformPages`**: 플랫폼을 선택하면 해당 플랫폼에 정의된 모든 페이지를 한번에 로드한다. 각 페이지의 라우트에 대응하는 템플릿 노드를 가져와서 초기 트리를 구성한다.

```typescript
loadPlatformPages: (platform: PlatformConfig) => {
  set((state) => {
    let newPages: Page[]
    if (platform.pages.length > 0) {
      newPages = platform.pages.map((platformPage) => {
        const root = createRootNode(nanoid())
        const template = getTemplateForRoute(platformPage.route)
        if (template) {
          root.children = template
        }
        return {
          id: nanoid(),
          name: platformPage.name,
          root,
          settings: { gridType: 'fixed-wide' as const, viewportWidth: 375 },
        }
      })
    } else {
      const defaultP = createDefaultPage()
      newPages = [defaultP]
    }
    state.pages = newPages
    state.activePageId = newPages[0].id
    state.past = []
    state.future = []
  })
},
```

### 4.2 ui-store.ts (UI 상태)

빌더 인터페이스의 시각적 상태를 관리한다.

```typescript
interface UIState {
  leftPanelOpen: boolean           // 좌측 패널 열림 여부
  rightPanelOpen: boolean          // 우측 패널 열림 여부
  viewportWidth: number            // 캔버스 뷰포트 너비 (375, 768, 1280, 1920)
  zoom: number                     // 줌 레벨
  previewMode: 'original' | 'ds-applied'  // 프리뷰 모드
  toggleLeftPanel: () => void
  toggleRightPanel: () => void
  setViewportWidth: (w: number) => void
  setZoom: (z: number) => void
  setPreviewMode: (mode: 'original' | 'ds-applied') => void
}
```

`viewportWidth`의 기본값은 `1920`이다. 툴바의 뷰포트 프리셋 버튼을 클릭하면 이 값이 변경되고, 캔버스의 `width`가 그에 맞춰 조정된다.

`previewMode`는 원본 Vue 프리뷰(`original`)와 디자인시스템 적용 프리뷰(`ds-applied`)를 전환하는 데 사용된다.

### 4.3 platform-store.ts (플랫폼 상태)

플랫폼 목록과 현재 활성 플랫폼을 관리한다.

```typescript
interface PlatformState {
  platforms: PlatformConfig[]      // 등록된 플랫폼 목록
  activePlatformId: string | null  // 현재 선택된 플랫폼 ID
  setActivePlatform: (platformId: string) => void
  addCustomPlatform: (name: string, description?: string) => void
  getPlatformById: (id: string) => PlatformConfig | undefined
}
```

`setActivePlatform`이 호출되면, 내부에서 `useDocumentStore.getState().loadPlatformPages(platform)`을 호출하여 해당 플랫폼의 모든 페이지를 document store에 로드한다. 이것은 store 간 통신의 한 예시이다. Zustand는 `getState()`를 통해 다른 store의 상태에 접근하고 액션을 호출할 수 있다.

### 4.4 selection-store.ts (선택 상태)

캔버스에서 선택/호버 중인 노드를 추적한다.

```typescript
interface SelectionState {
  selectedNodeId: string | null    // 현재 선택된 노드 ID
  hoveredNodeId: string | null     // 현재 호버 중인 노드 ID
  selectNode: (id: string | null) => void
  hoverNode: (id: string | null) => void
}
```

이 store는 가장 단순하지만, 캔버스의 시각적 피드백(선택 아웃라인, 호버 하이라이트)과 우측 속성 패널의 표시 내용을 결정하는 핵심 역할을 한다.

---

## 5. 레이아웃 구조

### 5.1 App.tsx의 3패널 레이아웃

App 컴포넌트는 빌더의 전체 레이아웃을 구성한다. 상단 툴바 + 3패널(좌/중/우) 구조이다.

```
+---------------------------------------------------+
|                  TopToolbar                        |
|  [Logo] [Page name]  [M][T][D][FHD]  [Undo][Redo] |
+---------------------------------------------------+
|          |                          |              |
| LeftPanel|      CenterPanel         |  RightPanel  |
| (260px)  |      (flex-1)            |  (300px)     |
|          |                          |              |
| Platform |      Canvas              |  Property    |
| Pages    |      (viewport width)    |  Editor      |
| Components                          |              |
|          |                          |              |
+---------------------------------------------------+
```

```typescript
export function App() {
  const [exportOpen, setExportOpen] = useState(false)
  useKeyboardShortcuts()

  return (
    <BuilderDndProvider>
      <div className="h-screen flex flex-col bg-background text-foreground">
        <TopToolbar onExport={() => setExportOpen(true)} />
        <div className="flex-1 flex overflow-hidden">
          <LeftPanel />
          <CenterPanel />
          <RightPanel />
        </div>
      </div>
      <ExportModal open={exportOpen} onClose={() => setExportOpen(false)} />
    </BuilderDndProvider>
  )
}
```

전체 앱이 `BuilderDndProvider`로 감싸져 있어, 좌측 컴포넌트 팔레트에서 중앙 캔버스로의 드래그가 가능하다.

### 5.2 뷰포트 프리셋

상단 툴바에 4개의 뷰포트 프리셋 버튼이 있다:

```typescript
const viewportPresets = [
  { label: 'Mobile', width: 375, icon: 'phone_iphone' },
  { label: 'Tablet', width: 768, icon: 'tablet_mac' },
  { label: 'Desktop', width: 1280, icon: 'desktop_windows' },
  { label: 'FHD', width: 1920, icon: 'monitor' },
]
```

버튼을 클릭하면 `useUIStore`의 `setViewportWidth`가 호출되고, 캔버스의 `width` 스타일이 해당 값으로 변경된다. 프리뷰 컴포넌트는 이 너비 안에서 자체적인 반응형 레이아웃을 표현한다.

### 5.3 키보드 단축키

`useKeyboardShortcuts` 훅이 앱 레벨에서 등록된다:

| 단축키 | 동작 |
|--------|------|
| `Delete` / `Backspace` | 선택된 노드 삭제 |
| `Cmd+Z` | 실행 취소 (Undo) |
| `Cmd+Shift+Z` | 다시 실행 (Redo) |
| `Cmd+D` | 선택된 노드 복제 |
| `Escape` | 선택 해제 |

input, textarea, contentEditable 요소에 포커스가 있을 때는 단축키가 비활성화된다.

---

## 6. 드래그 앤 드롭 시스템

### 6.1 dnd-kit 설정

`@dnd-kit/core`를 사용하여 두 가지 드래그 시나리오를 처리한다:
1. **컴포넌트 라이브러리 -> 캔버스**: 새 컴포넌트 추가
2. **캔버스 내 노드 이동**: 기존 노드의 위치 변경

```typescript
// src/dnd/DndProvider.tsx
export function BuilderDndProvider({ children }: { children: React.ReactNode }) {
  const [activeDragType, setActiveDragType] = React.useState<string | null>(null)
  const addNode = useDocumentStore((s) => s.addNode)
  const moveNode = useDocumentStore((s) => s.moveNode)

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 5 },  // 5px 이상 이동해야 드래그 시작
  })
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 200, tolerance: 5 },  // 200ms 길게 누르기
  })
  const sensors = useSensors(mouseSensor, touchSensor)
  // ...
}
```

**센서 설정 이유**: `distance: 5`는 의도치 않은 클릭이 드래그로 인식되는 것을 방지한다. 터치 환경에서는 `delay: 200`으로 길게 누르기 제스처를 드래그로 인식한다.

### 6.2 DndContext, Draggable, Droppable 구조

dnd-kit의 세 가지 핵심 개념:

**Draggable (드래그 소스)**: 컴포넌트 라이브러리의 각 카드가 `useDraggable` 훅을 사용한다.

```typescript
// src/panels/left/ComponentLibrary.tsx
function DraggableComponentCard({ def }: { def: ComponentDefinition }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `library-${def.type}`,
    data: { source: 'library', componentType: def.type },
  })
  // ...
}
```

**Droppable (드롭 대상)**: 캔버스의 루트 영역과 각 노드가 `useDroppable` 훅을 사용한다.

```typescript
// src/panels/center/Canvas.tsx
const { setNodeRef, isOver } = useDroppable({
  id: `canvas-root-${page.root.id}`,
  data: { targetNodeId: page.root.id },
})
```

**DragOverlay**: 드래그 중인 요소의 시각적 표현이다. 실제 DOM 요소가 아닌 별도의 오버레이로 렌더링된다.

```typescript
<DragOverlay dropAnimation={null}>
  {activeDragType && (
    <div className="px-3 py-2 bg-white rounded-lg shadow-lg border ...">
      <span className="material-symbols-rounded ...">
        {registry.get(activeDragType)?.icon}
      </span>
      {registry.get(activeDragType)?.displayName}
    </div>
  )}
</DragOverlay>
```

### 6.3 드래그 앤 드롭 이벤트 처리

```typescript
const handleDragEnd = (event: DragEndEvent) => {
  setActiveDragType(null)
  const { active, over } = event
  if (!over) return

  const activeData = active.data.current
  const overData = over.data.current
  if (!activeData || !overData) return

  const targetNodeId = overData.targetNodeId as string

  if (activeData.source === 'library') {
    // 라이브러리에서 드래그: 새 노드 생성
    const componentType = activeData.componentType as string
    const def = registry.get(componentType)
    if (!def) return

    const defaultData = def.defaultNode()
    const newNode: PageNode = {
      id: nanoid(),
      type: defaultData.type!,
      props: defaultData.props ?? {},
      children: defaultData.children ?? [],
      textContent: defaultData.textContent,
      slots: defaultData.slots as Record<string, PageNode[]> | undefined,
    }

    addNode(targetNodeId, newNode)
  } else if (activeData.source === 'canvas') {
    // 캔버스 내 이동
    const nodeId = activeData.nodeId as string
    if (nodeId !== targetNodeId) {
      moveNode(nodeId, targetNodeId, /* position */)
    }
  }
}
```

흐름 요약:
1. 사용자가 라이브러리 카드를 드래그한다
2. `onDragStart`에서 `activeDragType`이 설정되어 DragOverlay가 표시된다
3. 캔버스의 드롭 영역 위에 놓으면 `onDragEnd`가 실행된다
4. `registry`에서 컴포넌트 정의를 가져와 기본 노드를 생성한다
5. `addNode`로 대상 부모 노드의 자식에 삽입한다

---

## 7. 프리뷰 시스템 (핵심)

프리뷰 시스템은 이 프로젝트의 가장 중요한 부분이다. 기존 Vue 소스코드를 React 인라인 스타일로 1:1 변환하여, 실제 서비스와 시각적으로 동일한 프리뷰를 제공한다.

### 7.1 설계 원칙

1. **100% 시각적 재현**: Vue 원본과 픽셀 단위로 동일해야 한다
2. **인라인 스타일 사용**: TailwindCSS가 아닌 인라인 스타일로 작성하여, 원본 SCSS의 수치를 정확히 반영한다
3. **자기 완결적**: 프리뷰 컴포넌트는 외부 CSS에 의존하지 않는다
4. **정적 렌더링**: 프리뷰는 인터랙션 없이 시각적 형태만 재현한다 (readOnly input, static state)

### 7.2 _shared.tsx: 디자인 토큰과 공통 컴포넌트

이 파일은 프리뷰 시스템의 기반이다. Vue 소스의 SCSS 변수, mixin, 공통 레이아웃, SVG 아이콘을 React로 변환하여 제공한다.

#### 디자인 토큰 (colors 객체)

Vue 소스의 `_color.scss`와 `_ds-tokens.scss`에 정의된 SCSS 변수를 JavaScript 객체로 변환한다:

```typescript
// Vue 원본 (SCSS)
// $gray-1000: #1a1a1a;
// $gray-900: #333333;
// $dg-500: #2fd096;

// React 변환
export const colors = {
  gray1000: '#1a1a1a',
  gray900: '#333333',
  gray800: '#4d4d4d',
  // ...
  dg500: '#2fd096',
  dg600: '#2abb87',
  // ...
  dsPrimary: '#00c48c',
  dsBorder: '#e4e8e6',
  // ...
}

export const font = "'Pretendard Variable', system-ui, sans-serif"
```

SCSS 변수명의 하이픈(`-`)을 camelCase로 변환한다. 예: `$gray-1000` -> `gray1000`, `$dg-500` -> `dg500`.

#### 스타일 프리미티브 (SCSS mixin -> style 객체)

Vue 소스에서 반복적으로 사용되는 스타일 패턴을 `React.CSSProperties` 객체로 정의한다:

```typescript
// Vue 원본의 SCSS mixin이나 공통 클래스를 변환
export const styleInput: React.CSSProperties = {
  width: '100%',
  height: 48,
  padding: '12px 16px',
  border: `1px solid ${colors.gray150}`,
  borderRadius: 8,
  fontSize: 16,
  fontFamily: font,
  background: colors.white,
  outline: 'none',
  boxSizing: 'border-box',
  color: colors.gray1000,
}

export const styleBtnPrimary: React.CSSProperties = {
  ...styleBtnBase,
  backgroundColor: colors.dg500,
  color: colors.white,
  height: 48,
  padding: '16px',
  borderRadius: 8,
  fontSize: 16,
  fontWeight: 700,
}

export const styleCard: React.CSSProperties = {
  borderRadius: 16,
  padding: 28,
  backgroundColor: colors.white,
}
```

이 스타일 객체들은 스프레드 연산자(`...`)로 조합하여 사용한다: `style={{ ...styleCard, display: 'flex' }}`.

#### 공통 레이아웃 컴포넌트

Vue 소스의 Nuxt 레이아웃과 공통 헤더를 React 컴포넌트로 변환한다:

```typescript
// 닥톡 헤더 (모든 페이지 공통)
export function DoctalkHeader() {
  return (
    <header style={{
      height: 72, minHeight: 72,
      backgroundColor: colors.white,
      borderBottom: `1px solid ${colors.gray150}`,
      padding: '16px 36px',
      display: 'flex', alignItems: 'center',
      fontFamily: font, boxSizing: 'border-box',
    }}>
      <DoctalkReservationLogo width={193} height={40} />
    </header>
  )
}

// 기본 레이아웃 (가운데 정렬)
export function DoctalkLayout({ children, center = true }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%', backgroundColor: '#f9f9f9' }}>
      <DoctalkHeader />
      <main style={{
        display: 'flex',
        alignItems: center ? 'center' : 'flex-start',
        justifyContent: 'center',
        flex: 1,
      }}>
        {children}
      </main>
    </div>
  )
}

// 설정 페이지 레이아웃 (상단 정렬, 넓은 패딩)
export function SettingsLayout({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%', backgroundColor: '#f9f9f9' }}>
      <DoctalkHeader />
      <div style={{ width: '100%', padding: '40px 36px', display: 'flex', justifyContent: 'center' }}>
        {children}
      </div>
    </div>
  )
}
```

#### SVG 아이콘 컴포넌트

Vue 소스에서 SVG 파일로 존재하던 아이콘들을 React 컴포넌트로 변환한다:

```typescript
interface IconProps {
  width?: number
  height?: number
  fill?: string
}

export function IcLogoGreen({ width = 139, height = 24, fill = '#2FD096' }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 139 24" fill="none">
      {/* SVG path data */}
    </svg>
  )
}

export function IcLogoNaver({ width = 21, height = 20, fill = '#00C73C' }: IconProps) { /* ... */ }
export function IcLogoKakao({ width = 28, height = 28, fill = '#FFCD00' }: IconProps) { /* ... */ }
export function IcInfo({ width = 24, height = 24, fill = '#CCCCCC' }: IconProps) { /* ... */ }
// ... 약 15개의 SVG 아이콘 컴포넌트
```

로고 이미지는 base64 인코딩하여 `<img>` 태그의 `src`로 직접 삽입한다. 이렇게 하면 별도의 이미지 파일 없이 프리뷰가 완전히 자기 완결적이 된다.

### 7.3 그룹 파일 구조

프리뷰 컴포넌트는 카테고리별로 파일을 분리한다:

| 파일 | 카테고리 | 프리뷰 컴포넌트 |
|------|---------|----------------|
| `_auth.tsx` | 인증/홈 | 로그인, 아이디 찾기, EMR 로그인 오류, 홈 대시보드, 로딩 |
| `_settings.tsx` | 설정 | 병원정보, 플랫폼, 예약상품 목록/상세, 예약설정, 당일예약 |
| `_onboarding.tsx` | 가입/온보딩 | 약관동의, 예약가입, 플랫폼연동, 네이버상품 |
| `_others.tsx` | 기타 | 지식iN, 카카오, 상품생성, 정책 |

각 그룹 파일은 `_shared.tsx`에서 필요한 토큰, 스타일, 아이콘을 임포트한다:

```typescript
import {
  font, colors,
  styleInput, styleBtnPrimary, styleBtnOutline, styleBtnGhost,
  styleLabel, styleCard, styleSectionTitle, styleField, styleBase,
  DoctalkHeader, SettingsLayout,
  IcLogoNaver, IcLogoKakao, IcInfo, IcEdit, IcAdd,
} from './_shared'
```

### 7.4 index.tsx: 라우트 매핑

모든 프리뷰 컴포넌트를 라우트 경로에 매핑하는 중앙 레지스트리이다:

```typescript
const originalPreviewMap: Record<string, React.ComponentType> = {
  '/login': OriginalLoginPreview,
  '/find-id': OriginalFindIdPreview,
  '/emr-login-error': OriginalEmrLoginErrorPreview,
  '/service/reservation/login': () => <OriginalLoadingPreview text="로그인 중" />,
  '/': OriginalHomePreview,
  '/settings/hospital-info': OriginalSettingsHospitalPreview,
  '/settings/platform-sync': OriginalSettingsPlatformPreview,
  // ... 30+ 라우트
  '/policy/privacy': () => <OriginalPolicyPreview title="개인정보취급방침" />,
}

export function getOriginalPreviewForRoute(route: string): React.ComponentType | null {
  return originalPreviewMap[route] || null
}
```

동일한 컴포넌트를 다른 props로 재사용하는 경우 인라인 화살표 함수를 사용한다 (예: 여러 정책 페이지가 `OriginalPolicyPreview`를 `title` prop만 바꿔서 사용).

### 7.5 Vue -> React 변환 방법론

이것이 프리뷰 시스템의 핵심 노하우이다. 기존 Vue(Nuxt) 소스를 React 인라인 스타일로 변환하는 구체적인 절차를 설명한다.

#### (1) SCSS 변수 -> colors 객체

```scss
// Vue 원본: assets/scss/base/_color.scss
$gray-1000: #1a1a1a;
$gray-900: #333333;
$dg-500: #2fd096;
$dg-600: #2abb87;
```

```typescript
// React 변환: _shared.tsx
export const colors = {
  gray1000: '#1a1a1a',
  gray900: '#333333',
  dg500: '#2fd096',
  dg600: '#2abb87',
}
```

변환 규칙: SCSS 변수명에서 `$` 접두사를 제거하고, 하이픈을 camelCase로 변환한다.

#### (2) SCSS mixin / 클래스 -> inline style 객체

```scss
// Vue 원본
.input-style {
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  border: 1px solid $gray-150;
  border-radius: 8px;
  font-size: 16px;
}
```

```typescript
// React 변환
export const styleInput: React.CSSProperties = {
  width: '100%',
  height: 48,            // px 단위는 숫자로
  padding: '12px 16px',  // 복합 값은 문자열로
  border: `1px solid ${colors.gray150}`,
  borderRadius: 8,       // kebab-case -> camelCase
  fontSize: 16,
}
```

변환 규칙:
- CSS 속성명: kebab-case -> camelCase (`border-radius` -> `borderRadius`)
- 단위: 순수 px 값은 숫자로, 복합 값이나 % 등은 문자열로
- SCSS 변수 참조: `$변수` -> `` `${colors.변수}` `` (템플릿 리터럴)
- CSS 값에 `as const`가 필요한 경우: `flexDirection: 'column' as const`

#### (3) Vue template -> JSX

```html
<!-- Vue 원본 -->
<template>
  <div class="login-wrap">
    <header class="header">
      <DoctalkLogo />
    </header>
    <section class="sec">
      <div class="login-top-wrap">
        <h2 class="title">로그인</h2>
      </div>
      <div class="form-group" v-for="field in fields" :key="field.id">
        <label>{{ field.label }}</label>
        <input :type="field.type" :placeholder="field.placeholder" />
      </div>
      <button class="btn-primary" @click="handleLogin">로그인</button>
    </section>
  </div>
</template>
```

```tsx
// React 변환
export function OriginalLoginPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%', backgroundColor: '#f9f9f9', ...styleBase }}>
      <DoctalkHeader />
      <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <section style={{ width: '100%', maxWidth: 580, padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40, boxSizing: 'border-box' as const }}>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
            <h2 style={styleSectionTitle}>로그인</h2>
          </div>
          <div style={styleField}>
            <label style={styleLabel}>아이디</label>
            <input style={styleInput} placeholder="아이디를 입력해주세요" readOnly />
          </div>
          <div style={styleField}>
            <label style={styleLabel}>비밀번호</label>
            <input style={styleInput} type="password" placeholder="비밀번호를 입력해주세요" readOnly />
          </div>
          <button style={{ ...styleBtnPrimary, width: '100%' }}>로그인</button>
        </section>
      </main>
    </div>
  )
}
```

변환 규칙:
- `class="..."` -> `style={{...}}` (인라인 스타일 객체)
- `v-for` 디렉티브 -> `.map()` + `key` prop
- `v-if` / `v-show` -> `{condition && (...)}`
- `@click` 등 이벤트 -> 제거 (프리뷰는 정적)
- `{{ }}` 보간 -> `{}` JSX 표현식
- `<input>` -> `<input readOnly />` (편집 방지)
- `:속성="값"` 동적 바인딩 -> 정적 값으로 고정
- `<template>` 래퍼 -> `<>` Fragment 또는 단일 div

#### (4) Nuxt 레이아웃 -> React wrapper 컴포넌트

Nuxt의 `layouts/default.vue`에 정의된 헤더 + 콘텐츠 영역 구조를 `DoctalkLayout`, `SettingsLayout` 등의 React 컴포넌트로 변환했다.

```html
<!-- Nuxt 레이아웃 (layouts/default.vue) -->
<template>
  <div class="layout">
    <AppHeader />
    <main>
      <Nuxt />
    </main>
  </div>
</template>
```

```tsx
// React 변환
export function DoctalkLayout({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%', backgroundColor: '#f9f9f9' }}>
      <DoctalkHeader />
      <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        {children}  {/* Nuxt 슬롯 -> React children */}
      </main>
    </div>
  )
}
```

#### (5) SVG Vue 컴포넌트 -> React SVG 컴포넌트

Vue 프로젝트에서는 SVG를 `.vue` 단일 파일 컴포넌트로 감싸거나 `nuxt-icon` 등을 사용하는 경우가 있다. 이를 React 함수형 컴포넌트로 변환한다:

```html
<!-- Vue 원본: components/icons/IcInfo.vue -->
<template>
  <svg :width="width" :height="height" viewBox="0 0 24 24">
    <path d="M12 17C12.2833 17..." :fill="fill"/>
  </svg>
</template>
<script>
export default {
  props: {
    width: { type: Number, default: 24 },
    height: { type: Number, default: 24 },
    fill: { type: String, default: '#CCCCCC' },
  }
}
</script>
```

```typescript
// React 변환
export function IcInfo({ width = 24, height = 24, fill = '#CCCCCC' }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 17C12.2833 17..." fill={fill}/>
    </svg>
  )
}
```

변환 규칙:
- Vue props -> TypeScript 함수 매개변수 (기본값 포함)
- `:width="width"` -> `width={width}`
- `xmlns` 속성 추가 (React에서 필요)

### 7.6 프리뷰 컴포넌트 작성 패턴

실제 프리뷰 컴포넌트를 작성할 때의 일관된 패턴이다:

```typescript
// 파일 상단: _shared.tsx 임포트
import { font, colors, styleInput, styleBtnPrimary, styleCard, styleLabel, styleField, DoctalkHeader, SettingsLayout } from './_shared'

// 페이지 전용 헬퍼 컴포넌트 (파일 내부에서만 사용)
const TagChip = ({ label }: { label: string }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: 4,
    padding: '4px 12px', borderRadius: 20, backgroundColor: colors.gray50,
    fontSize: 14, fontWeight: 500, color: colors.gray900, fontFamily: font,
  }}>
    {label}
  </span>
)

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

// export 되는 프리뷰 컴포넌트
export function OriginalSettingsHospitalPreview() {
  return (
    <SettingsLayout>
      <div style={{ width: '100%', maxWidth: 1080, display: 'flex', flexDirection: 'column' as const, gap: 16, ...styleBase }}>
        <h2 style={{ fontWeight: 700, fontSize: 24, lineHeight: '136%', color: colors.gray1000, margin: 0, fontFamily: font }}>
          <strong>병원정보</strong>
        </h2>
        <article style={{ ...styleCard, display: 'flex', flexDirection: 'column' as const, gap: 24 }}>
          {/* 폼 필드들 */}
          <div style={styleField}>
            <label style={styleLabel}>병원 이름 <strong style={{ color: colors.red500 }}>*</strong></label>
            <input style={styleInput} defaultValue="서울미소치과의원" readOnly />
          </div>
        </article>
      </div>
    </SettingsLayout>
  )
}
```

패턴 요약:
1. 레이아웃 래퍼로 감싸기 (`DoctalkLayout`, `SettingsLayout`)
2. `maxWidth`로 콘텐츠 최대 너비 제한
3. `flexDirection: 'column'`과 `gap`으로 수직 간격 관리
4. `_shared.tsx`의 스타일 객체를 스프레드로 확장
5. 페이지 전용 소형 컴포넌트는 같은 파일 안에 정의
6. 모든 input, textarea에 `readOnly` 적용
7. `fontFamily: font`를 텍스트 요소에 명시적으로 적용

---

## 8. 캔버스 렌더링

### 8.1 Canvas.tsx의 역할

Canvas 컴포넌트는 두 가지 모드로 동작한다:

1. **프리뷰 모드**: 플랫폼이 선택되어 있고 현재 페이지에 대응하는 프리뷰 컴포넌트가 있으면, 해당 프리뷰를 그대로 렌더링한다.
2. **편집 모드**: 프리뷰가 없으면 노드 트리를 렌더링하고, 드래그 앤 드롭과 노드 선택이 가능하다.

```typescript
export function Canvas() {
  const page = useDocumentStore((s) => s.getActivePage())
  const viewportWidth = useUIStore((s) => s.viewportWidth)

  // 플랫폼에서 현재 페이지의 라우트에 해당하는 프리뷰 가져오기
  const activePlatformId = usePlatformStore((s) => s.activePlatformId)
  const platforms = usePlatformStore((s) => s.platforms)
  const activePlatform = platforms.find((p) => p.id === activePlatformId)
  const platformPage = activePlatform?.pages.find((pp) => pp.name === page.name)
  const PreviewComponent = platformPage
    ? getPreviewForRoute(platformPage.route)
    : null

  // 드롭 영역 설정
  const { setNodeRef, isOver } = useDroppable({
    id: `canvas-root-${page.root.id}`,
    data: { targetNodeId: page.root.id },
  })

  // ...
}
```

### 8.2 getOriginalPreviewForRoute() 동작

캔버스 렌더링의 핵심 흐름:

```
1. 사용자가 좌측 패널에서 플랫폼 선택 (예: "닥톡 예약")
   -> platform-store.setActivePlatform('doctalk-reservation')
   -> document-store.loadPlatformPages(platform)
   -> 30+ 페이지가 로드됨

2. 사용자가 페이지 탭 클릭 (예: "로그인")
   -> document-store.setActivePage(pageId)

3. Canvas에서 프리뷰 조회
   -> platformPage = activePlatform.pages.find(pp => pp.name === page.name)
   -> platformPage.route === '/login'
   -> getPreviewForRoute('/login')
   -> OriginalLoginPreview 컴포넌트 반환

4. 캔버스에 프리뷰 렌더링
   -> <PreviewComponent /> 렌더링
```

### 8.3 뷰포트 크기에 따른 minHeight 계산

캔버스의 최소 높이는 16:9 비율을 기준으로 계산한다:

```typescript
const minCanvasHeight = Math.round(viewportWidth * 9 / 16)
```

| 뷰포트 | 너비 | 최소 높이 (16:9) |
|--------|------|----------------|
| Mobile | 375px | 211px |
| Tablet | 768px | 432px |
| Desktop | 1280px | 720px |
| FHD | 1920px | 1080px |

이 최소 높이는 프리뷰 콘텐츠가 적을 때 캔버스가 너무 작아 보이는 것을 방지한다. 프리뷰 콘텐츠가 이보다 길면 자연스럽게 스크롤된다.

```tsx
<div
  ref={setNodeRef}
  style={{ minHeight: minCanvasHeight }}
  className={cn(
    !PreviewComponent && 'p-4 space-y-3',
    isOver && isEmpty && !PreviewComponent && 'bg-primary/5',
  )}
>
  {PreviewComponent ? (
    <PreviewComponent />
  ) : (
    <>
      {page.root.children.map((child) => (
        <CanvasNode key={child.id} node={child} />
      ))}
      {isEmpty && (
        <div className="flex flex-col items-center justify-center py-20 border-2 border-dashed rounded-xl">
          <p>컴포넌트를 드래그하세요</p>
        </div>
      )}
    </>
  )}
</div>
```

프리뷰 모드에서는 `p-4 space-y-3` 클래스가 적용되지 않는다 (`!PreviewComponent && 'p-4 space-y-3'`). 프리뷰 컴포넌트가 자체적으로 패딩과 레이아웃을 관리하기 때문이다.

---

## 9. 빌드 및 실행

### 개발 서버

```bash
npm run dev
```

Vite 개발 서버가 시작된다. 기본적으로 `http://localhost:5173`에서 접근할 수 있다. HMR(Hot Module Replacement)이 활성화되어 있어 파일을 수정하면 즉시 반영된다.

### 프로덕션 빌드

```bash
npm run build
```

이 명령어는 두 단계로 실행된다:
1. `tsc -b`: TypeScript 타입 체크
2. `vite build`: 프로덕션 번들 생성

빌드 결과물은 `dist/` 디렉토리에 생성된다.

### 프리뷰 (빌드 결과 확인)

```bash
npm run preview
```

`dist/` 디렉토리의 빌드 결과물을 로컬 서버로 제공한다. 프로덕션 빌드의 동작을 배포 전에 확인할 수 있다.

### 주의 사항

- `doctalk-design-system`이 `file:../design-system/apps/react` 경로에 있어야 한다. 이 패키지가 없으면 `npm install`이 실패한다.
- 디자인시스템 패키지를 수정한 후에는 `npm install`을 다시 실행하여 심볼릭 링크를 갱신해야 할 수 있다.

---

## 10. 프리뷰 컴포넌트 추가 가이드

새로운 페이지 프리뷰를 추가하는 단계별 방법이다.

### 단계 1: Vue 소스 분석

변환 대상 Vue 파일을 열고 다음을 파악한다:
- 사용하는 레이아웃 (default/settings/blank)
- SCSS 파일에서 참조하는 색상 변수
- 컴포넌트의 전체 DOM 구조
- 사용하는 SVG 아이콘
- 동적 데이터 (v-for 목록, 조건부 렌더링)

### 단계 2: 디자인 토큰 확인

`_shared.tsx`의 `colors` 객체에 필요한 색상이 이미 정의되어 있는지 확인한다. 없으면 추가한다.

```typescript
// 새 색상이 필요한 경우 colors 객체에 추가
export const colors = {
  // ... 기존 색상
  newColor: '#새로운값',
}
```

### 단계 3: SVG 아이콘 준비

Vue 소스에서 사용하는 SVG 아이콘이 `_shared.tsx`에 이미 있는지 확인한다. 없으면 새 아이콘 컴포넌트를 추가한다:

```typescript
// _shared.tsx에 추가
export function IcNewIcon({ width = 24, height = 24, fill = '#000000' }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Vue 소스의 SVG path를 그대로 복사 */}
      <path d="..." fill={fill}/>
    </svg>
  )
}
```

### 단계 4: 프리뷰 컴포넌트 작성

적절한 그룹 파일에 프리뷰 컴포넌트를 작성한다. 카테고리에 따라:
- 인증/홈 관련: `_auth.tsx`
- 설정 관련: `_settings.tsx`
- 가입/온보딩 관련: `_onboarding.tsx`
- 그 외: `_others.tsx`
- 새 카테고리: 새 파일 `_카테고리명.tsx` 생성

```typescript
// 예: _others.tsx에 새 프리뷰 추가
export function OriginalNewFeaturePreview() {
  return (
    <DoctalkLayout>
      <section style={{
        width: '100%', maxWidth: 800,
        padding: '40px 20px',
        display: 'flex', flexDirection: 'column' as const,
        gap: 24, boxSizing: 'border-box' as const,
      }}>
        <h2 style={styleSectionTitle}>새 기능 페이지</h2>
        {/* Vue 소스 구조를 JSX + 인라인 스타일로 변환 */}
      </section>
    </DoctalkLayout>
  )
}
```

### 단계 5: 라우트 매핑 등록

`src/platforms/previews/original/index.tsx`에 라우트 매핑을 추가한다:

```typescript
// 임포트 추가
import { OriginalNewFeaturePreview } from './_others'

// 매핑 추가
const originalPreviewMap: Record<string, React.ComponentType> = {
  // ... 기존 매핑
  '/new-feature': OriginalNewFeaturePreview,
}
```

### 단계 6: 플랫폼 설정에 페이지 추가

`src/platforms/index.ts`의 `platformConfigs`에 새 페이지를 추가한다:

```typescript
{
  id: 'doctalk-reservation',
  name: '닥톡 예약',
  // ...
  pages: [
    // ... 기존 페이지
    { name: '새 기능', route: '/new-feature', category: '카테고리명', description: '새 기능 설명' },
  ],
}
```

### 단계 7: 템플릿 작성 (선택 사항)

편집 모드에서도 초기 노드 트리를 제공하려면 템플릿을 작성한다:

```typescript
// src/platforms/templates/new-feature-templates.ts
import type { PageNode } from '../../schema/node'
import { h } from './helpers'

export function newFeatureTemplate(): PageNode[] {
  return [
    h('Header', { size: 'large' }, 'text:새 기능 페이지'),
    h('Surface', { padding: 'lg' }, [
      h('Input', { placeholder: '입력하세요' }),
      h('Button', { variant: 'primary' }, 'text:확인'),
    ]),
  ]
}
```

`src/platforms/templates/index.ts`에 매핑 추가:

```typescript
import { newFeatureTemplate } from './new-feature-templates'

const templateMap: Record<string, () => PageNode[]> = {
  // ... 기존 매핑
  '/new-feature': newFeatureTemplate,
}
```

### 단계 8: 확인

개발 서버에서 다음을 확인한다:
1. 좌측 패널에서 "닥톡 예약" 플랫폼을 선택한다
2. 페이지 목록에 "새 기능"이 나타나는지 확인한다
3. 해당 페이지를 클릭하면 캔버스에 프리뷰가 렌더링되는지 확인한다
4. 뷰포트 프리셋(Mobile/Tablet/Desktop/FHD)을 전환하며 레이아웃이 적절한지 확인한다

### Vue -> React 변환 체크리스트

새 프리뷰를 작성할 때 빠짐없이 확인해야 할 항목:

- [ ] SCSS 변수가 `colors` 객체에 모두 정의되어 있는가
- [ ] `fontFamily: font`가 모든 텍스트 요소에 적용되어 있는가
- [ ] `boxSizing: 'border-box' as const`가 패딩이 있는 컨테이너에 적용되어 있는가
- [ ] `flexDirection: 'column' as const` 등 리터럴 타입이 필요한 곳에 `as const`가 붙어 있는가
- [ ] 모든 `<input>`, `<textarea>`에 `readOnly` 속성이 있는가
- [ ] SVG의 `xmlns` 속성이 포함되어 있는가
- [ ] `class`가 아닌 `style` 객체로 모든 스타일이 적용되어 있는가
- [ ] 리스트 렌더링에 `key` prop이 있는가
- [ ] `v-if`/`v-show` 조건이 적절한 정적 값으로 대체되었는가
- [ ] 이미지 placeholder나 아이콘이 인라인 SVG 또는 base64로 처리되었는가

---

이 가이드를 따라 각 단계를 순서대로 진행하면 dtds-page-builder와 동일한 프로젝트를 처음부터 구축할 수 있다. 프리뷰 시스템의 Vue -> React 변환이 가장 많은 작업량을 차지하며, `_shared.tsx`의 토큰과 공통 컴포넌트를 잘 정의해두면 이후 페이지 추가가 훨씬 수월해진다.
