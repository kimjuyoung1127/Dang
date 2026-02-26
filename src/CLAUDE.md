# src/ 규칙

## 레이어 의존성 (엄격)
- `app/` → components, lib, types 의존 가능
- `components/` → lib, types 의존 가능
- `lib/` → types만 의존 (컴포넌트 import **절대 금지**)
- `types/` → 외부 의존 없음 (순수 인터페이스)

## Import 규칙
- 절대 경로 alias `@/*` 사용 (`import { cn } from "@/lib/utils"`)
- 상대 경로는 같은 폴더 내에서만 허용

## "use client" 기준
- 브라우저 API, React 훅, 이벤트 핸들러 사용 시에만 선언
- 서버 컴포넌트가 가능하면 "use client" 생략
