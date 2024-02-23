"use server";

import { CodeSnippets } from "@/app/types/typings";
import { errorMessage } from "@/lib/secrete";
import { GET_SNIPPETS } from "../constants/lib";
import { jsonData } from "../json/data";

export async function getCodeSnippets(): Promise<CodeSnippets[]> {
  try {
    const fakeRes = jsonData;
    const res = await fetch(GET_SNIPPETS, { next: { tags: ["code"] } });
    const data = await res.json();
    if (data.success) {
      return data.data;
    }
    return [];
  } catch (error: any) {
    return error?.response?.data || errorMessage;
  }
}
