type Props = {
  params: {
    title: string;
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

import { getCodeSnippets } from "../actions/action";

// This could be a separate module that you import where needed
let cachedSnippets: any = null;

async function fetchAndCacheSnippets() {
  if (!cachedSnippets) {
    cachedSnippets = await getCodeSnippets();
  }
  return cachedSnippets;
}

export async function generateMetadata({ params }: Props) {
  const snippets = await fetchAndCacheSnippets();
  const code = snippets.find((snippet: any) => snippet._id === params.slug);

  return {
    title: `${code?.title} | ${code?.author}`,
    description: `${code?.description}`,
  };
}

export default async function Code({ params}: Props) {
  const snippets = await fetchAndCacheSnippets();
  const code = snippets.find((snippet: any) => snippet._id === params.slug);

  return <div className="">Yes</div>;
}
