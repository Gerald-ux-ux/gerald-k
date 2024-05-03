"use client";

type RelevanceProps = {
  data: any;
  searchItem: string | null;
};

export default function useShowMostRelevant({
  data,
  searchItem,
}: RelevanceProps) {
  const allSnippets = data.map((code: any) => code.title);
  const item = searchItem?.replace(/\+/g, " ");

  const filteredSnippets = allSnippets.filter((snippet: any) =>
    snippet.toLowerCase().includes(item?.toLowerCase()),
  );

  const relevantSnippet = data.filter((code: any) =>
    filteredSnippets.includes(code.title),
  );

  return {
    relevantSnippet,
  };
}
