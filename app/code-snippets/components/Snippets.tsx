type SnippetProps = {
  data?: string[];
  setSearchQuery?: string;
};

export default function Snippets({ data, setSearchQuery }: SnippetProps) {
  return (
    <ul className="">
      {data?.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
