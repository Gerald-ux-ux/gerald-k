"use server";

import { decrypt, errorMessage, secretKey } from "@/lib/secrete";
import { Add_Snippet, GET_SNIPPETS, Give_Feedback } from "../constants/lib";
import axios from "axios";
import { Snippet } from "../types/snippets";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

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

export async function postCodeSnippet(
  formData: FormData,
  editor: any,
  user_id: string,
) {
  try {
    const authCookie = cookies().get("auth")?.value;
    const decryptedToken = decrypt(authCookie!, secretKey as string);
    const headers = {
      Authorization: `Bearer ${decryptedToken}`,
    };
    console.log("user_id", user_id);
    const sanitizedSnippet = editor.map((code: any) => ({
      heading: code.heading,
      language: code.lang.label,
      content: code.code,
    }));
    const data = {
      user_id,
      title: formData.get("title"),
      description: formData.get("description"),
      code: sanitizedSnippet,
    };

    console.log("data", data);

    const res = await axios.post(Add_Snippet, data, { headers });
    revalidateTag("code");
    return res?.data;
  } catch (error: any) {
    return error?.response?.data || errorMessage;
  }
}
