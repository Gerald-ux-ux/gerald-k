export default async function Fetcher(args: [string, RequestInit?]) {
  const res = await fetch(...args);
  return res.json();
}
