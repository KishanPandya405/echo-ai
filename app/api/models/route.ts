// src/app/api/models/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    models: [
      { id: "gpt-3.5", name: "GPT-3.5", description: "Fast, lightweight model" },
      { id: "gpt-4", name: "GPT-4", description: "More capable reasoning" },
      { id: "custom-research", name: "Custom Research", description: "Fine-tuned for docs" },
    ],
  });
}
