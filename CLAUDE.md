@AGENTS.md

# bbjun 포트폴리오 프로젝트

## 기술 스택

- **Framework**: Next.js 16.2.2 (App Router, Turbopack)
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS v4 + tw-animate-css
- **UI Components**: shadcn/ui (Radix UI 기반)
- **Icons**: lucide-react
- **Runtime**: Node.js 22 + PM2
- **Server**: Oracle Cloud Free Tier (Ubuntu) + Nginx
- **CI/CD**: GitHub Actions → 자동 배포 (`main` push 시)
- **Domain**: bbjun.com (HTTPS, Let's Encrypt)

## 파일 구조

```
app/
  globals.css       # 테마 색상 변수 (CSS custom properties)
  layout.tsx        # 전역 레이아웃, 메타데이터
  page.tsx          # 섹션 조합 및 순서

components/
  *-section.tsx     # 포트폴리오 각 섹션 (hero, about, skills, projects, experience, contact)
  theme-provider.tsx
  ui/               # shadcn/ui 기본 컴포넌트 — 직접 수정 지양

hooks/
  use-mobile.ts
  use-toast.ts

lib/
  utils.ts          # cn() 유틸

public/             # 정적 이미지/아이콘
```

## UI 수정 위치

| 목적 | 파일 |
|---|---|
| 섹션 내용/레이아웃 변경 | `components/*-section.tsx` |
| 색상/테마 변경 | `app/globals.css` |
| 섹션 순서 변경 또는 섹션 추가 | `app/page.tsx` |
| 메타데이터(타이틀, description) | `app/layout.tsx` |
| 이미지 교체 | `public/` |

## 컴포넌트 컨벤션

- 파일명: `kebab-case.tsx`
- 컴포넌트명: `PascalCase`
- Named export 사용 (`export default` 지양, `app/` 디렉토리 제외)
- 경로 alias: `@/` → 프로젝트 루트

```tsx
// 올바른 예
export function HeroSection() { ... }

// import
import { HeroSection } from "@/components/hero-section"
```

## 스타일 컨벤션

- Tailwind 유틸리티 클래스 우선 사용
- 동적 클래스 조합은 `cn()` 사용

```tsx
import { cn } from "@/lib/utils"

<div className={cn("base-class", condition && "conditional-class")} />
```

- 색상은 CSS 변수 토큰 사용 (`bg-background`, `text-foreground`, `text-muted-foreground` 등)
- 하드코딩된 색상값 (`#fff`, `gray-500` 등) 지양

## 배포

```bash
# 코드 수정 후
git add .
git commit -m "커밋 메시지"
git push origin main
# → GitHub Actions가 자동으로 서버에 배포
```

### 서버 수동 접속

```bash
ssh -i "C:/Users/bbk03/Desktop/bbjun_pofol/ssh-key-2026-03-24.key" ubuntu@168.107.41.243
```

### 서버 배포 스크립트 (수동)

```bash
cd /var/www/bbjun
git pull origin main
npm install
npm run build
pm2 restart bbjun
```

## 새 섹션 추가 방법

1. `components/새섹션-section.tsx` 생성
2. `app/page.tsx`에 import 및 `<div className="snap-start snap-always">` 로 감싸서 추가

