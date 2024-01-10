import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const total = await prisma.blogpost.aggregate({
      _sum: {
        views: true,
      },
    });

    // DATABASE_URL='mysql://3j4febv5o8cvyvq0cdo3:pscale_pw_NE7eyBkjUSYrHBgirycK6s1l5MsEUJG1sFlnzOORW3W@aws.connect.psdb.cloud/blogpost?sslaccept=strict'

    return Response.json({ total: total._sum.views });
  } catch (error) {
    console.log("Error from totalSUm:", error);
    return Response.json({ error: "Something went wrong", status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
