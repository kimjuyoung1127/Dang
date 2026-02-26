# components/ 규칙

## 하위 폴더 역할
| 폴더 | 역할 | 예시 |
|------|------|------|
| `ui/` | 재사용 기본 UI (CVA 패턴) | Button, SectionWrapper, PhoneMockup |
| `sections/` | 랜딩 페이지 섹션 (순서 고정) | HeroSection, AboutSection |
| `layout/` | 페이지 프레임 | Navbar, Footer |
| `forms/` | 폼 컴포넌트 (RHF + Zod) | LeadForm |
| `motion/` | Framer Motion 애니메이션 래퍼 | ScrollReveal, StaggerChildren |

## 컨벤션
- 파일명: **PascalCase** (`Button.tsx`, `HeroSection.tsx`)
- 컴포넌트당 1파일 원칙
- props는 컴포넌트 파일 내 interface로 정의

## 의존성 방향
- `sections/` → `ui/`, `motion/`, `forms/`, `@/lib/*` 사용 가능
- `ui/` → `@/lib/utils` 만 사용 (다른 컴포넌트 import 금지)
- `motion/` → `@/lib/utils` 만 사용
- `forms/` → `ui/`, `@/lib/*` 사용 가능
