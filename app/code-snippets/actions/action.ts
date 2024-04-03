"use server";

import { CodeSnippets } from "@/app/types/typings";
import { errorMessage } from "@/lib/secrete";
import { GET_SNIPPETS, Give_Feedback } from "../constants/lib";
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

export async function handleUpload(formData: FormData, editor: any) {
  try {
    const data = {
      from: formData.get("tags"),
      text: formData.get("description"),
      title: formData.get("name"),
      newCode: editor,
    };

    console.log("data", data);
    const res = axios.post(Give_Feedback, data);
    return res;
  } catch (error: any) {
    return error?.response?.data || errorMessage;
  }
}
