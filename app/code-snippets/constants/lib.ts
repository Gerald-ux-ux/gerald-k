import { baseUrl } from "@/app/api/baseUrl";

export const GET_SNIPPETS = `http://localhost:8008/api/code-snippets/get`;
export const Give_Feedback = `${baseUrl}/api/code-snippets/feedback`;
export const Add_Snippet = `${baseUrl}/api/code-snippets/add`;
export const Copy_Snippet = `http://localhost:8008/api/code-snippets/copy`;
export const Delete_Snippet = `http://localhost:8008
/api/code-snippets/delete`;
export const Delete_Code = (id: string) =>
  `http://localhost:8008/api/code-snippets/delete/${id}`;
