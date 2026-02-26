"use client";
// Safety 섹션 — 신뢰 텍스트 + 2x2 SafetyBadge 그리드

import { COPY, SECTION_IDS } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/StaggerChildren";

const safetyIcons: Record<string, React.ReactNode> = {
  "user-check": (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75l2.25 2.25 4.5-4.5" />
    </svg>
  ),
  paw: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3.25a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
    </svg>
  ),
  map: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
    </svg>
  ),
  eye: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

export function SafetySection() {
  return (
    <SectionWrapper id={SECTION_IDS.SAFETY}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Text */}
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold ko-heading ko-tight max-w-[15ch] md:max-w-[20ch]">
            {COPY.safety.title}
          </h2>
          <p className="mt-4 text-foreground-muted ko-body ko-relaxed max-w-[34ch] md:max-w-[44ch]">
            댕개팅은 구조적으로 안전을 설계합니다. 모든 보호자는 다층 인증을
            거치며, 활동 기록과 후기가 투명하게 공유됩니다.
          </p>
        </ScrollReveal>

        {/* Right: 2x2 badge grid */}
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {COPY.safety.badges.map((badge) => (
            <StaggerItem key={badge.title}>
              <div className="rounded-2xl border border-border bg-card p-5 hover:border-primary-light hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {safetyIcons[badge.icon]}
                </div>
                <h3 className="font-display font-semibold text-foreground ko-heading">
                  {badge.title}
                </h3>
                <p className="mt-1 text-sm text-foreground-muted ko-body ko-relaxed">
                  {badge.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </SectionWrapper>
  );
}
