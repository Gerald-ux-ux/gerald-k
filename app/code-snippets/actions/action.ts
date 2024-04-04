"use server";

import { CodeSnippets } from "@/app/types/typings";
import { errorMessage } from "@/lib/secrete";
import { Add_Snippet, GET_SNIPPETS, Give_Feedback } from "../constants/lib";
import { jsonData } from "../json/data";
import axios from "axios";
import { Snippet } from "../types/snippets";

export async function getCodeSnippets(): Promise<Snippet[]> {
  console.log("being called one");
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

export async function postSnippet(formData: FormData, editor: any, user_id: string) {
  try {
    const sanitizedSnippet = editor.map((code: any) => ({
      heading: code.heading,
      language: code.lang.label,
      content: code.code,
    }));
    const data = {
      title: formData.get("title"),
      description: formData.get("description"),
      tags: formData.get("tags"),
      code: sanitizedSnippet,
    };

    const res = await axios.post(Add_Snippet, data);
    return res?.data;
  } catch (error: any) {
    return error?.response?.data || errorMessage;
  }
}
