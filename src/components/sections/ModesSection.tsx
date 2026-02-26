"use client";
// Modes 섹션 — 친구/돌봄/가족 3카드 (돌봄 강조 다크 카드)

import { COPY, SECTION_IDS } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/StaggerChildren";
import { cn } from "@/lib/utils";

export function ModesSection() {
  return (
    <SectionWrapper id={SECTION_IDS.MODES} className="bg-card">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center ko-heading ko-tight max-w-[14ch] md:max-w-[18ch] mx-auto">
          {COPY.modes.title}
        </h2>
      </ScrollReveal>

      <StaggerChildren className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
        {COPY.modes.items.map((mode) => (
          <StaggerItem key={mode.name}>
            <div
              className={cn(
                "relative rounded-3xl p-6 border transition-all text-center",
                mode.accent
                  ? "bg-foreground text-white border-foreground shadow-2xl shadow-foreground/20 md:-translate-y-4"
                  : "bg-card border-border hover:border-primary-light hover:shadow-lg"
              )}
            >
              {/* Mode accent badge */}
              {mode.accent && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                  인기
                </span>
              )}

              <h3
                className={cn(
                  "font-display text-xl font-bold",
                  mode.accent ? "text-white" : "text-foreground"
                )}
              >
                {mode.name}
              </h3>
              <p
                className={cn(
                  "mt-1 text-base font-medium ko-body",
                  mode.accent ? "text-primary-light" : "text-primary"
                )}
              >
                {mode.tagline}
              </p>

              {/* App screen placeholder */}
              <div className="mt-4">
                <ImagePlaceholder
                  aspectRatio="9/16"
                  icon="phone"
                  label={`${mode.name} 화면`}
                  className={cn(
                    "rounded-xl",
                    mode.accent
                      ? "border-white/10 bg-white/5"
                      : ""
                  )}
                />
              </div>

              <p
                className={cn(
                  "mt-4 text-sm ko-body ko-relaxed",
                  mode.accent ? "text-white/70" : "text-foreground-muted"
                )}
              >
                {mode.description}
              </p>

              {/* Features list */}
              <ul className="mt-4 flex flex-wrap justify-center gap-2">
                {mode.features.map((f) => (
                  <li
                    key={f}
                    className={cn(
                      "text-xs px-3 py-1 rounded-full ko-body",
                      mode.accent
                        ? "bg-white/10 text-white/80"
                        : "bg-background text-foreground-muted"
                    )}
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}
