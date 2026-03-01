"use client";
// 사전등록 폼 — RHF+Zod 검증, hasDog 분기, Hero 이메일 prefill 수신

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";
import { leadSchema, type LeadFormData } from "@/lib/validation";
import { Button } from "@/components/ui/Button";


export function LeadForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      wantsLaunchAlert: false,
      wantsUserTest: false,
      consentPrivacy: false as unknown as true,
    },
  });

  // Listen for prefill-email from Hero
  useEffect(() => {
    const handler = (e: Event) => {
      const email = (e as CustomEvent).detail;
      if (email) setValue("email", email);
    };
    window.addEventListener("prefill-email", handler);
    return () => window.removeEventListener("prefill-email", handler);
  }, [setValue]);

  const onSubmit = async (data: LeadFormData) => {

    setSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        router.push("/thank-you");
      }
    } catch {
      // silently handle
    } finally {
      setSubmitting(false);
    }
  };



  const inputCn =
    "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all text-sm";
  const labelCn = "block text-sm font-medium text-white/80 mb-1.5";
  const errorCn = "mt-1 text-xs text-red-400";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 space-y-5"
    >
      {/* Email */}
      <div>
        <p className="text-[13px] text-white/50 font-normal mb-2 leading-relaxed">
          서울 및 수도권 보호자를 중심으로 사전 등록을 받고 있습니다.
        </p>
        <label className={labelCn}>이메일 *</label>
        <input
          type="email"
          placeholder="email@example.com"
          {...register("email")}
          className={inputCn}
        />
        {errors.email && <p className={errorCn}>{errors.email.message}</p>}
      </div>

      {/* Checkboxes for opt-ins */}
      <div className="space-y-4">
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            {...register("wantsLaunchAlert")}
            className="w-5 h-5 rounded border-white/20 bg-white/5 text-primary focus:ring-primary/30"
          />
          <span className="text-sm text-white/80 group-hover:text-white transition-colors ko-body">
            출시 소식 가장 먼저 받아보기
          </span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            {...register("wantsUserTest")}
            className="w-5 h-5 rounded border-white/20 bg-white/5 text-primary focus:ring-primary/30"
          />
          <span className="text-sm text-white/80 group-hover:text-white transition-colors ko-body">
            유저 테스트도 참여해보고 싶어요
          </span>
        </label>
      </div>

      {/* Consents */}
      <div className="space-y-3">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            {...register("consentPrivacy")}
            className="mt-0.5 w-4 h-4 rounded border-white/20 bg-white/5 text-primary focus:ring-primary/30"
          />
          <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors ko-body">
            개인정보 수집 및 이용에 동의합니다 (필수) *
          </span>
        </label>
        {errors.consentPrivacy && (
          <p className={errorCn}>{errors.consentPrivacy.message}</p>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        className="w-full font-bold text-base"
        disabled={submitting}
      >
        {submitting ? "제출 중..." : "👉 가장 먼저 경험하기"}
      </Button>
    </form>
  );
}
