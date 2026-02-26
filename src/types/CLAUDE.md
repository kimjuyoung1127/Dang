# types/ 규칙

## LandingPlan.md §6 데이터 모델과 1:1 동기화
- `lead.ts` — `Lead` 인터페이스
- `event.ts` — `LandingEvent` 인터페이스

## 컨벤션
- `interface` 사용 (type alias보다 우선)
- 도메인별 파일 분리 (하나의 파일에 여러 도메인 금지)
- export는 named export만 사용
- 변경 시 `lib/validation.ts` Zod 스키마도 함께 업데이트
