"use server";

import axios from "axios";
import { encrypt, errorMessage, secretKey, setCookie } from "@/lib/secrete";
import { Login, Register } from "../constants/lib";

export async function registerUser(formData: FormData) {
  try {
    /** Essentially gets the user inputs
     * Like an onchange event
     *
     */

    const data = {
      email: formData.get("email"),
      username: formData.get("name"),
      password: formData.get("password"),
    };
    const res = await axios.post(Register, data);

    console.log("res", res.data);

    if (res.data.success) {
      const { username, email, _id } = res?.data?.data;
      const { sessionToken } = res?.data?.data?.authentication;

      const user = { username, email, _id };
      const encryptedUserInfo = encrypt(JSON.stringify(user), secretKey!);
      const encryptedSession = encrypt(sessionToken, secretKey as string);
      setCookie("user_info", encryptedUserInfo);
      setCookie("auth", encryptedSession);
      return res.data;
    }
  } catch (error: any) {
    return error?.response?.data || errorMessage;
  }
}

export const loginUser = async (formData: FormData) => {
  try {
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const res = await axios.post(Login, data);
    const { username, email, _id } = res.data?.data;
    const { sessionToken } = res?.data.data?.authentication;
    const user = { username, email, _id };
    const encryptedUserInfo = encrypt(JSON.stringify(user), secretKey!);
    const encryptedSession = encrypt(sessionToken, secretKey!);
    setCookie("user_info", encryptedUserInfo);
    setCookie("auth", encryptedSession);
    return res.data;
  } catch (error: any) {
    return error?.response?.data || errorMessage;
  }
};
