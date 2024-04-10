"use server";

import { errorMessage } from "@/lib/secrete";
import {
  Add_Snippet,
  Copy_Snippet,
  Delete_Code,
  Delete_Snippet,
  GET_SNIPPETS,
  Give_Feedback,
} from "../constants/lib";
import axios from "axios";
import { Snippet } from "../types/snippets";
import { revalidatePath, revalidateTag } from "next/cache";
import { getHeaders } from "@/app/auth/actions/actions";

export async function getCodeSnippets(): Promise<Snippet[]> {
  console.log("being called one");
  try {
    const res = await axios.get(GET_SNIPPETS);
    return res?.data.data;
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

export async function postCodeSnippet(formData: FormData, editor: any) {
  try {
    const headers = await getHeaders();
    const sanitizedSnippet = editor.map((code: any) => ({
      heading: code.heading,
      language: code.lang.label,
      content: code.code,
    }));
    const data = {
      title: formData.get("title"),
      description: formData.get("description"),
      code: sanitizedSnippet,
    };

    const res = await axios.post(Add_Snippet, data, { headers });
    revalidatePath("code-snippets");
    return res?.data;
  } catch (error: any) {
    return error?.response?.data || errorMessage;
  }
}

export async function copySnippet(id: string) {
  try {
    const headers = await getHeaders();

    const data = {
      id: id,
    };

    const res = await axios.post(Copy_Snippet, data, { headers });
    revalidatePath("code-snippets");
    return res?.data;
  } catch (error: any) {
    return error?.response?.data || errorMessage;
  }
}

export async function deleteSnippet(id: any, objId: any) {
  try {
    const headers = await getHeaders();

    const data = {
      code_id: id._id,
      object_id: objId,
    };

    console.log("data sent", data);

    const res = await axios.delete(Delete_Snippet, {
      data: data,
      headers: headers,
    });

    console.log("data", data);

    revalidatePath("code-snippets");
    return res?.data;
  } catch (error: any) {
    return error?.response?.data || errorMessage;
  }
}

export async function deleteCode(id: string) {
  try {
    const headers = await getHeaders();

    const res = await axios.delete(Delete_Code(id), {
      headers: headers,
    });
    revalidatePath("code-snippets");
    return res?.data;
  } catch (error: any) {
    return error?.response?.data || errorMessage;
  }
}
