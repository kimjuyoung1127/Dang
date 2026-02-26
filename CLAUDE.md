이 문서는 댕개팅 작업의 최우선 로컬 규칙이다. 에이전트는 모든 작업 전에 반드시 읽고 따른다.

# 댕개팅(Dang-Dating) — Claude Code 프로젝트 가이드

반려견 보호자를 위한 신뢰 기반 매칭 서비스. 현재 범위: 랜딩 페이지(사전등록 퍼널).

## 핵심 개발 원칙

1. **파일 수정 전 필수 정독**: 어떤 파일이든 수정하기 전 현재 내용을 직접 읽고 작업한다.
2. **폴더별 지침 우선**: 작업 시작 전 해당 폴더의 `CLAUDE.md`를 반드시 먼저 확인하고 준수한다.
3. **파일 상단 기능 주석**: 모든 파일 상단에는 1~2줄의 기능 요약 주석을 유지한다.
4. **기존 코드 재사용**: 타입, 유틸, 컴포넌트 등 기존 구현을 우선 재사용하여 중복을 피한다.
5. **LandingPlan.md 단일 기준**: 카피 텍스트, 섹션 순서, 데이터 모델, API 계약은 `docs/LandingPlan.md`가 유일한 기준이다.

## 빠른 시작

```bash
npm run dev      # 개발 서버 (Port 3000)
npm run build    # 프로덕션 빌드
npm run lint     # ESLint 검사
```

## 프로젝트 구조

```
src/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx          # 루트 레이아웃 (폰트, 메타데이터)
│   ├── page.tsx            # 메인 랜딩 (9개 섹션 조립)
│   ├── thank-you/          # 등록 완료 페이지
│   └── api/lead|event/     # Mock API routes
├── components/
│   ├── ui/                 # 기본 UI (Button CVA, SectionWrapper 등)
│   ├── sections/           # 9개 랜딩 섹션 컴포넌트
│   ├── layout/             # Navbar, Footer
│   ├── forms/              # LeadForm (RHF + Zod)
│   └── motion/             # 애니메이션 래퍼 (ScrollReveal 등)
├── lib/                    # 유틸리티, 상수, 검증 스키마
└── types/                  # TypeScript 인터페이스
```

## 디자인 시스템

### 브랜드 컬러 (고정)
| 용도 | 값 | Tailwind |
|------|-----|----------|
| Background | `#F5F7FA` | `bg-background` |
| Card | `#FFFFFF` | `bg-card` |
| Main (Sky Blue) | `#9EC6E8` | `text-primary-light` |
| CTA (Bright Blue) | `#1E88E5` | `bg-primary` |

### 폰트
- **Display**: Sora (`font-display`)
- **Body**: Noto Sans KR (`font-body`)
- Inter, Roboto 등 제네릭 폰트 사용 금지

### 컴포넌트 패턴
- UI 컴포넌트는 **CVA(Class Variance Authority)** 패턴 사용
- 스타일 병합은 **cn()** 유틸리티 (`src/lib/utils.ts`)
- 색상은 시맨틱 토큰 사용 (`bg-primary` ○ / `bg-blue-500` ✕)

## 주요 문서

| 문서 | 역할 |
|------|------|
| `docs/LandingPlan.md` | 단일 기준 문서 (카피, 데이터 모델, API, KPI) |
| `docs/FutureAppRoadmap.md` | 랜딩 이후 앱 확장 로드맵 |
| `interaction-design/SKILL.md` | Framer Motion 패턴 가이드 |

## 커밋 전 체크리스트

1. `npm run build` — 빌드 성공 확인
2. 새 파일/수정 파일 상단에 기능 요약 주석 확인
3. 카피 텍스트 변경 시 `constants.ts` 에서만 수정했는지 확인
4. 타입 변경 시 `types/` 파일 동기화 여부 확인
