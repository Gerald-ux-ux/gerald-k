"use server";

import { CodeSnippets } from "@/app/types/typings";
import { errorMessage } from "@/lib/secrete";
import { GET_SNIPPETS, Give_Feedback } from "../constants/lib";
import { jsonData } from "../json/data";
import axios from "axios";

export async function getCodeSnippets(): Promise<CodeSnippets[]> {
  try {
    const res = await fetch(GET_SNIPPETS, { next: { tags: ["code"] } });
    const data = await res.json();
    return data?.data;
  } catch (error: any) {
    return error?.response?.data || errorMessage;
  }
}

export async function submitFeedBack(formData: FormData) {
  try {
    const data = {
      from: formData.get("from"),
      text: formData.get("text"),
    };
    const res = await axios.post(Give_Feedback, data);
    return res?.data;
  } catch (error: any) {
    return error?.response?.data || errorMessage;
  }
}
