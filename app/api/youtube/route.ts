let cachedETag: string | undefined;

export async function GET() {
  if (process.env.YOUTUBE_API_KEY === undefined) {
    return new Response("No API key specified", { status: 500 });
  }
  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCAszclBzNqvwJpM4F1OdhXQ&key=${process.env.YOUTUBE_API_KEY}`;
  const headers = new Headers();
  if (cachedETag) {
    headers.set("If-None-Match", cachedETag);
  }
  try {
    const res = await fetch(url, { headers });

    const data = await res.json();
    const subs = data.items[0].statistics.subscriberCount;
    const views = data.items[0].statistics.viewCount;
    if (res.status === 304) {
      return Response.json({ subs, views });
    }
    cachedETag = res.headers.get("etag")!;
    return Response.json({ subs, views });
  } catch (error) {
    return new Response(`Something went wrong: ${error}`, { status: 200 });
  }
}
