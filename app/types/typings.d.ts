export type CodeSnippets = {
  _id: string;
  author: string;
  title: string;
  description: string;
  code: { heading: string; content: string; _id: string }[];
  tags: string[];
  createdAt: string;
};

export type UserInfo = {
  username: string;
  email: string;
  _id: string;
};

export type CodeSnippetObj = {
  content: string;
  heading: string;
  language: string;
  _id: string;
};
