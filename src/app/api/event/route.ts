// POST /api/event — 랜딩 이벤트 트래킹 API (현재 Mock)
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("[MOCK] Event:", body);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: { code: "SERVER_ERROR", message: "서버 오류" } },
      { status: 500 }
    );
  }
}
