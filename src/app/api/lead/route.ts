// POST /api/lead — 리드 수집 API (현재 Mock, 추후 Supabase 연동)
import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validation";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = leadSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "INVALID_INPUT",
            message: result.error.issues[0]?.message || "입력값이 올바르지 않습니다",
          },
        },
        { status: 400 }
      );
    }

    // Mock: log and return success
    console.log("[MOCK] Lead saved:", result.data);

    return NextResponse.json({
      success: true,
      data: { leadId: crypto.randomUUID() },
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: { code: "SERVER_ERROR", message: "서버 오류가 발생했습니다" },
      },
      { status: 500 }
    );
  }
}
