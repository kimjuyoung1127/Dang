"use client";
// FAQ 섹션 — LandingPlan.md Q1/Q2 원문 아코디언

import { COPY, SECTION_IDS } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function FAQSection() {
  return (
    <SectionWrapper id={SECTION_IDS.FAQ}>
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center ko-heading ko-tight max-w-[14ch] md:max-w-[18ch] mx-auto">
          {COPY.faq.title}
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="mt-10 max-w-2xl mx-auto">
          <FAQAccordion
            items={COPY.faq.items.map((item) => ({
              question: item.question,
              answer: item.answer,
            }))}
          />
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
