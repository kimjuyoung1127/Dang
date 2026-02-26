# app/ 규칙

## Next.js 14 App Router
- `layout.tsx`: 공통 레이아웃 (폰트, 메타데이터, html/body 구조)
- `page.tsx`: 해당 라우트의 메인 페이지 컴포넌트
- `loading.tsx`: 로딩 UI (필요 시)

## 페이지 구성
- 메인 페이지(`page.tsx`)는 섹션 컴포넌트를 import하여 조립만 담당
- 비즈니스 로직은 components/ 또는 lib/에 위치

## API Routes (`api/`)
- 표준 응답 형식: `{ success: boolean, data?: T, error?: { code: string, message: string } }`
- Zod 검증은 `@/lib/validation.ts` 스키마 재사용
- 현재 Mock 응답 → 추후 Supabase 연동
