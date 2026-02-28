"use client";
// Join 섹션 — 사전등록 CTA + LeadForm 포함, 다크 배경

import { SECTION_IDS } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { LeadForm } from "@/components/forms/LeadForm";

export function JoinSection() {
  return (
    <SectionWrapper id={SECTION_IDS.JOIN} dark>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left: Copy */}
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white whitespace-pre-line ko-heading ko-tight max-w-[14ch] md:max-w-full">
            🐶 댕개팅을 가장 먼저 경험해보세요
          </h2>
          <p className="mt-4 text-white/80 ko-body ko-relaxed max-w-[34ch] md:max-w-full leading-[1.8]">
            출시 전,<br />
            댕개팅을 가장 먼저 만나보고<br />
            함께 만들어갈 반려견 보호자를 기다립니다.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {[
              "출시 소식을 가장 먼저 받아보세요",
              "원하시면 유저 테스트에도 참여할 수 있어요",
              "여러분의 의견은 실제 서비스에 반영됩니다",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✔</span>
                </span>
                <span className="text-base font-medium text-white/90 ko-body">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-white/10">
            <h3 className="text-xl font-bold text-white ko-heading mb-3">유저 테스트는 이렇게 진행돼요</h3>
            <p className="text-sm text-white/70 ko-body leading-[1.8] max-w-[34ch]">
              테스트 신청 시<br />
              이메일로 참여 방법을 안내해드립니다.<br />
              부담 없이 약 10분 내외로 참여하실 수 있어요.
            </p>
          </div>
        </ScrollReveal>

        {/* Right: Form */}
        <ScrollReveal delay={0.15}>
          <LeadForm />
        </ScrollReveal>
      </div >
    </SectionWrapper >
  );
}
