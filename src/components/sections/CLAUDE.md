# sections/ 규칙

## 섹션 순서 (고정 — LandingPlan.md §5 기준)
1. HeroSection (Home)
2. AboutSection
3. ModesSection
4. FeaturesSection
5. HowItWorksSection
6. SafetySection
7. StatsSection
8. JoinSection (LeadForm 포함)
9. FAQSection

**순서 변경 시 반드시 LandingPlan.md 먼저 확인.**

## 규칙
- 카피 텍스트는 `@/lib/constants.ts`의 `COPY` 객체에서 import (하드코딩 금지)
- 섹션 ID는 `@/lib/constants.ts`의 `SECTION_IDS` 사용
- 모든 섹션은 `SectionWrapper`로 감싸기
- 스크롤 등장 애니메이션은 `ScrollReveal` 적용
