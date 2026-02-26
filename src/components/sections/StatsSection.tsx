"use client";
// Stats 섹션 — AnimatedCounter 3개, 다크 배경 + 그라디언트 블러

import { COPY, SECTION_IDS } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function StatsSection() {
  return (
    <SectionWrapper id={SECTION_IDS.STATS} dark>
      {/* Decorative gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-primary-light/15 blur-[80px]" />
      </div>

      <ScrollReveal>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center">
          {COPY.stats.items.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-5xl md:text-6xl font-bold text-white">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </p>
              <p className="mt-2 text-white/60 text-base font-medium tracking-wide uppercase ko-body">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
