import { getUserInfo } from "@/app/auth/actions/actions";
import { notFound } from "next/navigation";
import { FaRegUser } from "react-icons/fa";

import { getCodeSnippets } from "../actions/action";
import DeleteSnippet from "../components/actions/delete-snippet";
import SnippetCodeList from "../components/SnippetCodeList";
import SnippetTags from "../components/tags";

type Props = {
  params: {
    title: string;
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props) {
  const specificSnippet = await getCodeSnippets();

  const code = specificSnippet?.find((snippet) => snippet?._id === params.slug);

  return {
    title: `${code?.title} | ${code?.author.name}`,
    description: `${code?.description}`,
  };
}

export default async function Code({ params }: { params: any }) {
  const specificSnippet = await getCodeSnippets();

  const code = specificSnippet?.find((snippet) => snippet?._id === params.slug);
  const user = await getUserInfo();
  const author = code?.author.id;


  if (!code) return notFound();
  return (
    <div className="mx-auto flex w-full max-w-[700px] flex-col  gap-4 p-5   md:w-6/12">
      <div className="my-4 flex items-center justify-between">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-primary md:text-3xl">
          {code.title}
        </h1>
        {user?._id === code.author.id && (
          <DeleteSnippet
            text="Delete the whole snippet"
            code_id={code._id}
            snippet="Object"
          />
        )}
      </div>

      <span className="flex items-center justify-between text-lg leading-tight text-secondary md:text-xl">
        {code.description}
      </span>
      <span className="flex items-center justify-between gap-2 text-secondary">
        <span className="flex items-center gap-2">
          <span className="  rounded-full bg-secondaryA p-2  md:block ">
            <FaRegUser />
          </span>
          {code.author.name}
        </span>
        <span>
          Clones <strong>{code.copy_count}</strong>
        </span>
      </span>
      <div className=" prose prose-neutral flex animate-in flex-col gap-2">
        {code.code.map((tag) => (
          <SnippetCodeList
            code={tag}
            key={tag._id}
            user={user}
            author={author!}
          />
        ))}
        <SnippetTags snippet={code} />
      </div>
    </div>
  );
}
