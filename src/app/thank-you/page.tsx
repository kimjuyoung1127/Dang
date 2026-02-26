"use client";
// 사전 등록 완료 감사 페이지

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-5">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center max-w-md"
      >
        {/* Icon */}
        <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <svg
            className="w-10 h-10 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="font-display text-3xl font-bold text-foreground">
          사전 등록이 완료되었습니다!
        </h1>
        <p className="mt-4 text-foreground-muted leading-relaxed">
          댕개팅에 관심을 가져주셔서 감사합니다.
          <br />
          출시 소식과 테스트 참여 안내를 보내드리겠습니다.
        </p>

        <Link href="/">
          <Button variant="secondary" className="mt-8">
            홈으로 돌아가기
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
