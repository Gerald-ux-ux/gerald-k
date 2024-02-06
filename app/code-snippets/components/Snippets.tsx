type SnippetProps = {
  data?: string[];
};

export default function Snippets({ data }: SnippetProps) {
  return (
    <ul className="">
      {data?.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
