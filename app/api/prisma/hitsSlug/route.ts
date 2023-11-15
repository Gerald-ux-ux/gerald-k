/**
 * Instantiate the
 */

// Define and instantiate our prisma client
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
const prisma = new PrismaClient();

/**
 * Define a get method that will send a get request to the server.
 * Essentially a "read"
 */

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const slug = searchParams.get("slug");

    if (!slug) {
      return new Response("Please provide a slug", { status: 200 });
    }

    let viewCount = 0;

    
  } catch (error) {}
}
