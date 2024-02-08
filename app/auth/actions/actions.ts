"use server";

import { LOGIN_URL } from "@/app/api/codes-snippets/auth/constants";
import axios from "axios";
import { redirect } from "next/navigation";

const errorMessage = "Unexpected response from the server";

export const loginUser = async (formData: FormData) => {
  try {
    const email = formData.get("email");
    const password = formData.get("password");
    const res = await axios.post(LOGIN_URL, {
      email,
      password,
    });
    console.log("email", res);

    if (res.data?.success) {
      return res.data.message;
      //   redirect("/code-snippets");
    } else if (res.data?.success === false) {
      return res.data?.message;
    } else {
      console.log("Unexpected response from the server");
    }
  } catch (error: any) {
    return error.message || errorMessage;
  }
};
