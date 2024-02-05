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
      const encryptedData = await encrypt(userInfo);
      cookies().set("user-info", encryptedData);
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

export const loginUser = async ({ data }: AuthProps) => {
  try {
    const res = await axios.post(LOGIN_URL, { ...data });

    if (res) {
      const { userName, email, sessionToken, id } = res.data;
      const userInfo = [userName, email, sessionToken, id];
      const encryptedData = await encrypt(userInfo);
      cookies().set("user-info", encryptedData);
      console.log("Encrypted data on login", encryptedData);
      return res;
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
