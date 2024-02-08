"use server";
import {
  LOGIN_URL,
  REGISTER_URL,
} from "@/app/api/codes-snippets/auth/constants";
import axios from "axios";
import { cookies } from "next/headers";
import { encrypt, setCookie } from "@/lib/secrete";

type User = {
  username: string;
  email: string;
  _id: string;
};

const errorMessage = "Unexpected response from the server";
const secretKey = process.env.SECRETE_KEY || "1Q2S3D";

export async function registerUser(formData: FormData) {
  try {
    /** Essentially gets the user inputs
     * Like an onchange event
     */
    const email = formData.get("email");
    const username = formData.get("name");
    const password = formData.get("password");

    const res = await axios.post(REGISTER_URL, {
      email,
      username,
      password,
    });

    if (res.data.success) {
      const { username, email, _id } = res?.data?.data;
      const { sessionToken } = res?.data?.data?.authentication;

      const user: User = { username, email, _id };
      const encryptedUserInfo = encrypt(JSON.stringify(user), secretKey);
      const encryptedSession = encrypt(sessionToken, secretKey);
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
    const email = formData.get("email");
    const password = formData.get("password");
    const res = await axios.post(LOGIN_URL, {
      email,
      password,
    });

    if (res.data.success) {
      const { username, email, _id } = res.data?.data;
      const { sessionToken } = res?.data.data?.authentication;

      const user: User = { username, email, _id };
      const encryptedUserInfo = encrypt(JSON.stringify(user), secretKey);
      const encryptedSession = encrypt(sessionToken, secretKey);
      setCookie("user_info", encryptedUserInfo);
      setCookie("auth", encryptedSession);
      return res.data;
    }
  } catch (error: any) {
    return error?.response?.data || errorMessage;
  }
};
