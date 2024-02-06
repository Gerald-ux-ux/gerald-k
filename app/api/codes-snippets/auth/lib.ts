import { encrypt } from "@/lib/secrete";
import axios from "axios";
import { cookies } from "next/headers";

import { LOGIN_URL, REGISTER_URL } from "./constants";

export const errorMessage = "Unexpected response from the server";

export const frontendError = () => {
  return {
    success: false,
    message: { errorMessage },
  };
};

interface AuthProps {
  data: any;
}

export const registerUser = async ({ data }: AuthProps) => {
  try {
    const res = await axios.post(REGISTER_URL, { ...data });
    if (res.data) {
      const { userName, email, sessionToken, id } = res.data;
      const userInfo = [userName, email, sessionToken, id];
      // const encryptedData = await encrypt(userInfo);
      // Cookies.set("user-info", encryptedData);
      return res.data;
    } else {
      return frontendError();
    }
  } catch (error) {
    if (error) {
      return error;
    } else {
      return frontendError();
    }
  }
};

export const secretKey = process.env.SECRETE_KEY || "1Q2S3D";

export const loginUser = async ({ data }: AuthProps): Promise<any> => {
  try {
    const response = await axios.post(LOGIN_URL, { ...data });

    if (response.data) {
      const { username, email, _id } = response?.data?.data;
      const { sessionToken } = response?.data?.data?.authentication;

      const user = { username, email, _id };
      const userInfo = JSON.stringify(user);

      const encryptedInfo = encrypt(userInfo, secretKey);
      const encryptedToken = encrypt(sessionToken, secretKey);

      cookies().set("user-info", JSON.stringify(encryptedInfo));
      console.log("User info set:", cookies().get("user-info"));

      cookies().set("auth", JSON.stringify(encryptedToken));

      return response;
    } else {
      return {
        success: false,
        message: { errorMessage },
      };
    }
  } catch (error: any) {
    if (error) {
      return error.response;
    } else {
      return errorMessage;
    }
  }
};
