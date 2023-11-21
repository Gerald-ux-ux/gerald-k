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

    if (process.env.NODE_ENV !== "production") {
      // Increment view count in production

      const post = await prisma.blogpost.findUnique({
        where: {
          slug: slug as string,
        },
      });

      if (!post) {
        const newPost = await prisma.blogpost.create({
          data: {
            slug: slug as string,
            views: 1,
          },
        });

        viewCount = newPost.views;
      } else {
        const updatePost = await prisma.blogpost.update({
          where: {
            id: post.id,
          },
          data: {
            views: post.views + 1,
          },
        });

        viewCount = updatePost.views;
      }
    } else {
      const post = await prisma.blogpost.findUnique({
        where: {
          slug: slug as string,
        },
      });

      if (post) {
        viewCount = post.views;
      }
    }

    return new Response(JSON.stringify({ Views: viewCount }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log("Error found here", error);
    return new Response("Internal Server Error", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
