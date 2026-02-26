# forms/ 규칙

## 폼 패턴: React Hook Form + Zod
- 스키마는 `@/lib/validation.ts`에서 import (폼 파일 내 직접 정의 금지)
- `zodResolver`로 연결: `useForm({ resolver: zodResolver(schema) })`

## LeadForm 핵심 로직
- `hasDog === false` → 감사 화면 표시 (폼 제출 없이 종료)
- `consentPrivacy !== true` → 제출 불가 (Zod에서 `z.literal(true)` 검증)
- Hero 이메일 prefill: `window.addEventListener("prefill-email", ...)` 수신
- 제출 성공 → `/thank-you` 이동
- 로딩 중 중복 제출 방지 (`submitting` state)

## 스타일
- Join 섹션 (다크 배경) 위에 위치 → 입력 필드는 `bg-white/5 border-white/10` 스타일
