"use client";
// 무한 수평 스크롤 마키 — 각 복사본이 화면 전체를 채우고 자연스럽게 순환

import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: readonly string[];
  className?: string;
}

export function Marquee({ items, className }: MarqueeProps) {
  return (
    <div className={cn("border-y border-border/50 py-4", className)}>
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12 xl:px-16 overflow-hidden">
        <div className="flex animate-marquee">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="flex shrink-0 min-w-full items-center justify-around gap-8"
            >
              {items.map((item, idx) => (
                <span
                  key={idx}
                  className="whitespace-nowrap text-sm md:text-base font-medium text-foreground-muted tracking-wide"
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
