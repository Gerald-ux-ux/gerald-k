import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const total = await prisma.blogpost.aggregate({
      _sum: {
        views: true,
      },
    });

    return Response.json({ total: total._sum.views });
  } catch (error) {
    console.log("Error from totalSUm:", error);
    return Response.json({ error: "Something went wrong", status: 200 });
  } finally {
    await prisma.$disconnect();
  }
}
