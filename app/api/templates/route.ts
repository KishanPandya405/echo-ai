// src/app/api/templates/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    templates: [
      { id: "blog-outline", title: "Blog Outline", prompt: "Create an outline about ..." },
      { id: "bug-report", title: "Bug Report", prompt: "You are a QA engineer..." },
    ],
  });
}
