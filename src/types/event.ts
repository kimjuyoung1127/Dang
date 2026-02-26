// LandingEvent 데이터 인터페이스 — 랜딩 이벤트 트래킹용
export interface LandingEvent {
  id: string;
  createdAt: string;
  sessionId: string;
  eventName:
    | "page_view"
    | "cta_click"
    | "lead_submit"
    | "scroll_depth"
    | "faq_open";
  props?: Record<string, unknown>;
}
