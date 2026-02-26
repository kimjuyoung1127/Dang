"use client";
// Join 섹션 — 사전등록 CTA + LeadForm 포함, 다크 배경

import { COPY, SECTION_IDS } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { LeadForm } from "@/components/forms/LeadForm";

export function JoinSection() {
  return (
    <SectionWrapper id={SECTION_IDS.JOIN} dark>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left: Copy */}
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white whitespace-pre-line ko-heading ko-tight max-w-[14ch] md:max-w-[18ch]">
            {COPY.join.title}
          </h2>
          <p className="mt-4 text-white/60 ko-body ko-relaxed max-w-[34ch] md:max-w-[42ch]">
            댕개팅의 첫 번째 사용자가 되어주세요. 사전 등록을 통해 출시 알림과
            유저 테스트 참여 기회를 받아보실 수 있습니다.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {[
              "출시 알림을 가장 먼저 받아보세요",
              "유저 테스트에 참여할 수 있어요",
              "의견을 반영해 함께 만들어가요",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span className="text-base text-white/70 ko-body">{item}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Right: Form */}
        <ScrollReveal delay={0.15}>
          <LeadForm />
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
