"use server";

import axios from "axios";
import { decrypt, encrypt, errorMessage, secretKey } from "@/lib/secrete";
import { Login, Register } from "../constants/lib";
import { cookies } from "next/headers";

export async function registerUser(formData: FormData) {
  try {
    const data = {
      email: formData.get("email"),
      username: formData.get("name"),
      password: formData.get("password"),
    };
    const res = await axios.post(Register, data);
    const { username, email, _id } = res?.data?.data;
    const { sessionToken } = res?.data?.data?.authentication;
    const user = { username, email, _id };
    const encryptedUserInfo = encrypt(JSON.stringify(user), secretKey!);
    const encryptedSession = encrypt(sessionToken, secretKey as string);

    cookies().set("user-info", encryptedUserInfo, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 2),
      httpOnly: true,
    });

    cookies().set("auth", encryptedSession, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 2),
      httpOnly: true,
    });

    return res.data;
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
    cookies().set("user-info", encryptedUserInfo, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 2),
      httpOnly: true,
    });

    cookies().set("auth", encryptedSession, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 2),
      httpOnly: true,
    });
    return res.data;
  } catch (error: any) {
    return error?.response?.data || errorMessage;
  }
};

export async function checkLogin() {
  try {
    const cookieSore = cookies();

    const isAuthenticated = cookieSore.get("auth");

    if (isAuthenticated) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

export async function getUserInfo() {
  try {
    const cookieSore = cookies();

    const userInfo = cookieSore?.get("user-info");

    console.log("authenticated", userInfo);

    if (userInfo) {
      const decryptedData = decrypt(userInfo?.value, secretKey!);
      
      return JSON.parse(decryptedData);
    } else {
      return;
    }
  } catch (error) {
    return;
  }
}
