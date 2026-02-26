// 섹션 공통 래퍼 — id anchor, 반응형 패딩, dark mode 지원
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export function SectionWrapper({
  id,
  className,
  children,
  dark,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 md:py-28 overflow-hidden",
        dark ? "bg-foreground text-white" : "bg-background",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12 xl:px-16">{children}</div>
    </section>
  );
}
