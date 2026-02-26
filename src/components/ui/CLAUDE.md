# ui/ 규칙

## CVA(Class Variance Authority) 패턴 필수
모든 UI 컴포넌트는 CVA로 variants를 정의한다:
```tsx
const buttonVariants = cva("기본 클래스", {
  variants: { variant: {...}, size: {...} },
  defaultVariants: { variant: "primary", size: "default" },
});
```

## 스타일 규칙
- `cn()` 유틸리티로 클래스 병합 (`import { cn } from "@/lib/utils"`)
- 색상은 **시맨틱 토큰** 사용: `bg-primary` ○ / `bg-[#1E88E5]` ✕
- Tailwind 토큰: background, card, primary, primary-light, foreground, foreground-muted, border

## 컴포넌트 목록
- `Button.tsx` — primary/secondary/ghost × sm/default/lg
- `SectionWrapper.tsx` — 섹션 공통 래퍼 (id, padding, dark)
- `ImagePlaceholder.tsx` — 이미지 미등록 시 플레이스홀더, src prop으로 교체
- `PhoneMockup.tsx` — iPhone 프레임 목업
- `Marquee.tsx` — 무한 수평 스크롤
- `FAQAccordion.tsx` — 아코디언 (AnimatePresence)
