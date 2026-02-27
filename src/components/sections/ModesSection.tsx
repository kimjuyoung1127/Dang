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
                  ? "bg-foreground text-white border-foreground shadow-2xl shadow-foreground/20"
                  : "bg-card border-border hover:border-primary-light hover:shadow-lg"
              )}
            >
              <h3
                className={cn(
                  "font-display text-2xl font-bold",
                  mode.accent ? "text-white" : "text-foreground"
                )}
              >
                {mode.name}
              </h3>
              <p
                className={cn(
                  "mt-2 text-base font-medium ko-body",
                  mode.accent ? "text-primary-light" : "text-primary"
                )}
              >
                {mode.tagline}
              </p>

              {/* App screen placeholder */}
              <div className="mt-5">
                <ImagePlaceholder
                  aspectRatio="9/16"
                  icon="phone"
                  label={`${mode.name.substring(mode.name.indexOf(" ") + 1)} 화면`}
                  className={cn(
                    "rounded-xl",
                    mode.accent ? "border-white/10 bg-white/5" : ""
                  )}
                />
              </div>

              <div
                className={cn(
                  "mt-5 p-4 rounded-xl border",
                  mode.accent
                    ? "bg-white/10 border-white/20"
                    : "bg-primary/5 border-primary/10"
                )}
              >
                <p
                  className={cn(
                    "text-sm font-bold text-center ko-body",
                    mode.accent ? "text-white" : "text-primary"
                  )}
                >
                  &quot;{mode.features[0]}&quot;
                </p>
              </div>

              <p
                className={cn(
                  "mt-6 text-sm ko-body text-left whitespace-pre-line leading-[1.8]",
                  mode.accent ? "text-white/80" : "text-foreground-muted"
                )}
              >
                {mode.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}
