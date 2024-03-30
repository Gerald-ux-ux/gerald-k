import { Snippet } from "../types/snippets";
import Tags from "@/components/Tags";
import { notFound } from "next/navigation";
import { FaRegUser } from "react-icons/fa";

import { getCodeSnippets } from "../actions/action";
import SnippetTags from "../components/tags";
import SnippetCodeList from "../components/SnippetCodeList";

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
  console.log("code", code);
  if (!code) return notFound();
  return (
    <div className="mx-auto flex w-6/12 max-w-[700px]  flex-col gap-4   p-5">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-primary md:text-3xl">
        {code.title} ({code.code.length})
      </h1>
      <span className="flex items-center justify-between text-lg leading-tight text-secondary md:text-xl">
        {code.description}{" "}
        <span>
          Clones <strong>{code.copy_count}</strong>
        </span>
      </span>
      <h6 className="text-secondary">{code.author}</h6>
      <div className=" prose prose-neutral flex animate-in flex-col gap-4">
        {code.code.map((tag) => (
          <SnippetCodeList code={tag} key={tag._id} />
        ))}
        <SnippetTags snippet={code} />
      </div>
    </div>
  );
}
