export async function GET() {
  if (!process.env.YOUTUBE_API_KEY) {
    return new Response("No API key specified", { status: 500 });
  }

  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCAszclBzNqvwJpM4F1OdhXQ&key=AIzaSyAbnOPGlnSvPq7DLN5hJaWBjcuJyTBMtR0`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const subs = data.items[0].statistics.subscriberCount;
    const views = data.items[0].statistics.viewCount;
    return Response.json({ subs, views });
  } catch (error) {
    return new Response(`Something went wrong: ${error}`, { status: 200 });
  }
}
