# motion/ 규칙

## Framer Motion 사용 규칙
- 모든 모션 컴포넌트는 `"use client"` 선언 필수
- ease 배열은 **tuple 캐스팅** 필수: `as [number, number, number, number]`

## 타이밍 가이드
| 요소 | duration | ease |
|------|----------|------|
| 마이크로 (hover/tap) | 100-150ms | ease-out |
| 소형 (fade, slide) | 200-300ms | ease-out |
| 중형 (섹션 등장) | 300-500ms | [0.25, 0.1, 0.25, 1] |
| 대형 (페이지 로드) | 500-700ms | [0.25, 0.1, 0.25, 1] |

## 컴포넌트
- `ScrollReveal` — 스크롤 진입 시 fade+slide (direction: up/down/left/right)
- `StaggerChildren` + `StaggerItem` — 자식 순차 등장 (staggerDelay 조절)
- `AnimatedCounter` — 숫자 카운트업 (useInView 트리거, ease-out cubic)

## 접근성
- `prefers-reduced-motion` 미디어 쿼리 고려 (향후 적용)
- `viewport: { once: true }` 사용하여 한 번만 재생
