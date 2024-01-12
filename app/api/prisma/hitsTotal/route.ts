import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const total = await prisma.blogpost.aggregate({
      _sum: {
        views: true,
      },
    });

    if (total?._sum?.views) {
      return new Response(JSON.stringify({ total: total?._sum?.views }), {
        status: 200,
      });
    } else {
      return new Response(JSON.stringify(0), {
        status: 500,
      });
    }
  } catch (error) {
    console.log("Error found here", error);
    return new Response("Internal Server Error", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
