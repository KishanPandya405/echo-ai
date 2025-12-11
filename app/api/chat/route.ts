// src/app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { prompt, model } = body;

  return NextResponse.json({
    reply: `Mock response from ${model}. Here is an echo of your prompt:\n\n${prompt}`,
  });
}
