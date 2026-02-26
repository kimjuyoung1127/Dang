// Lead 데이터 인터페이스 (LandingPlan.md §6 기준)
export interface Lead {
  id: string;
  createdAt: string;
  source?: string;
  medium?: string;
  campaign?: string;
  name?: string;
  email: string;
  phone?: string;
  hasDog: boolean;
  testPhase1: "possible" | "maybe";
  testPhase2: "possible" | "maybe";
  consentLaunchAlert: boolean;
  preRegisterIntent: "yes" | "thinking" | "no";
  comment?: string;
  consentPrivacy: boolean;
}
