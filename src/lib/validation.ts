// Zod 스키마: leadSchema (사전등록 폼), emailSchema (Hero 이메일)
import { z } from "zod";

export const leadSchema = z.object({
  email: z.string().email("올바른 이메일을 입력해주세요"),
  wantsLaunchAlert: z.boolean().optional(),
  wantsUserTest: z.boolean().optional(),
  consentPrivacy: z.literal(true, {
    message: "개인정보 수집에 동의해주세요",
  }),
});

export type LeadFormData = z.infer<typeof leadSchema>;

export const emailSchema = z.object({
  email: z.string().email("올바른 이메일을 입력해주세요"),
});

export type EmailFormData = z.infer<typeof emailSchema>;
