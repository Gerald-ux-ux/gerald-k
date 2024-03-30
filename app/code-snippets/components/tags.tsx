export default function SnippetTags({ snippet }: { snippet: any }) {
  return (
    <span className=" mt-2 flex flex-row gap-2 ">
      {snippet?.tags?.map((tag: string) => (
        <span
          key={tag}
          className=" whitespace-nowrap  rounded-lg bg-secondary p-1.5 text-sm text-primary "
        >
          {tag}
        </span>
      ))}
    </span>
  );
}
