// cn() 유틸리티 — clsx + tailwind-merge 기반 클래스 병합
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
