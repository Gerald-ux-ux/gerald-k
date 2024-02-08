"use server";
import { LOGIN_URL } from "@/app/api/codes-snippets/auth/constants";
import axios from "axios";
import { cookies } from "next/headers";
import { encrypt } from "@/lib/secrete";

type user = {
  username: string;
  email: string;
  _id: string;
};

const errorMessage = "Unexpected response from the server";
const secretKey = process.env.SECRETE_KEY || "1Q2S3D";

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

      const user: user = { username, email, _id };
      const encryptedUserInfo = encrypt(JSON.stringify(user), secretKey);
      const encryptedSession = encrypt(sessionToken, secretKey);
      cookies().set({
        name: "user_info",
        httpOnly: true,
        value: encryptedUserInfo,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 2),
      });
      cookies().set({
        name: "auth",
        expires: new Date(Date.now() + 1000 * 60 * 60 * 2),
        httpOnly: true,
        value: encryptedSession,
      });
      return res.data;
    }
  } catch (error: any) {
    return error?.response?.data || errorMessage;
  }
};
