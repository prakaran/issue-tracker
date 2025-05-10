import { prisma } from "@/prisma/client";
import { NextRequest } from "next/server";
import { z } from "zod";

const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createIssueSchema.safeParse(body);
  if (!validation.success) {
    return new Response(JSON.stringify(validation.error.errors), {
      status: 400,
    });
  }

  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });

  return new Response(JSON.stringify(newIssue), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
