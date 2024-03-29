import { notFound } from "next/navigation";
import { getCodeSnippets } from "../actions/action";
import { Snippet } from "../types/snippets";

// Module-level variable to store the snippets.
let specificSnippet: Snippet[] | null = null;
type Props = {
  params: {
    title: string;
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

async function getCodeSnippetsHere() {
  if (specificSnippet === null) {
    specificSnippet = await getCodeSnippets();
  }
  return specificSnippet;
}

export async function generateMetadata({ params }: Props) {
  if (!specificSnippet) {
    await getCodeSnippetsHere();
  }
  const code = specificSnippet?.find((snippet) => snippet?._id === params.slug);

  // Assuming code is not undefined, but you might want to handle that case as well.
  return {
    title: `${code?.title} | ${code?.author}`,
    description: `${code?.description}`,
  };
}

export default async function Code({ params }: { params: any }) {
  if (!specificSnippet) {
    await getCodeSnippetsHere();
  }
  const code = specificSnippet?.find((snippet) => snippet?._id === params.slug);

  if (!code) return notFound();
  return (
    <div className="">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-primary md:text-3xl">
        {code.title}
      </h1>
    </div>
  );
}
