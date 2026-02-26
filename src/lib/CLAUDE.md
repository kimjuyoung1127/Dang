# lib/ 규칙

## 순수 유틸리티/상수만 위치 (컴포넌트 import 절대 금지)

## 파일별 역할
| 파일 | 역할 | 내용 |
|------|------|------|
| `utils.ts` | 클래스 병합 유틸리티 | `cn()` = clsx + tailwind-merge |
| `constants.ts` | 전체 카피 텍스트, 섹션 ID, 네비 링크 | `COPY`, `SECTION_IDS`, `NAV_LINKS` |
| `validation.ts` | Zod 검증 스키마 | `leadSchema`, `emailSchema` |

## 카피 텍스트 관리
- 모든 UI 텍스트는 `constants.ts`의 `COPY` 객체에 집중
- 섹션/컴포넌트에서 카피 하드코딩 금지
- 카피 수정 시 `constants.ts`만 변경

## 스키마 관리
- 데이터 모델 변경 시 `validation.ts` + `types/` 동시 업데이트
