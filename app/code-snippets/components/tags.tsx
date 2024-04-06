import { capsFirstLetter } from "@/lib/utils";

export default function SnippetTags({ snippet }: { snippet: any }) {


  return (
    <>
      <p className="text-primary font-semibold">Tags</p>
      <span className="flex flex-row gap-2 ">
        {snippet?.code?.map((tag: any) => (
          <span
            key={tag}
            className=" whitespace-nowrap  rounded-lg bg-secondary p-1.5 text-sm text-primary "
          >
            {capsFirstLetter(tag.language)}
          </span>
        ))}
      </span>
    </>
  );
}
