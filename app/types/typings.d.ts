export type CodeSnippets = {
  _id: string;
  author: string;
  title: string;
  description: string;
  code: { heading: string; content: string; _id: string }[];
  tags: string[];
  createdAt: string;
};
