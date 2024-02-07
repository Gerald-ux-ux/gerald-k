type SnippetCodeListProps = {
  code: any;
  key: string;
};

export default function SnippetCodeList({ code, key }: SnippetCodeListProps) {
  return (
    <div className="w-full rounded-lg bg-secondaryA flex gap-2   p-2" key={key}>
      <span className="w-full flex gap-2">
        <code className="w-full text-sm md:text-base">{code.heading}</code>
      </span>
    </div>
  );
}
