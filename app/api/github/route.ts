import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const username = searchParams.get("userName");

  if (!username) {
    return new Response("Please provide a username", { status: 200 });
  }

  try {
    const url = `https://api.github.com/users/${username}/repos?per_page=100`;
    const res = await fetch(url);
    const data = await res.json();
    const stars = data.reduce(
      (acc: number, item: { stargazers_count: number }) =>
        acc + item.stargazers_count,
      0,
    );
    console.log("Stars is: " + stars);
    return Response.json({ stars });
  } catch (error) {
    console.error(error);
    return new Response(`Something went wrong ${error}`, { status: 500 });
  }
}
