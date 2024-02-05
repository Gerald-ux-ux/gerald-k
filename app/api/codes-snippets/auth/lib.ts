import { encrypt } from "@/lib/secrete";
import axios from "axios";
import Cookies from "js-cookie";

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
      Cookies.set("user-info", encryptedData);
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

export const loginUser = async ({ data }: AuthProps): Promise<any> => {
  try {
    const response = await axios.post(LOGIN_URL, { ...data });

    if (response.data) {
      const { username, email, _id } = response.data.data;
      const { sessionToken } = response.data.data.authentication;
      const userInfo = [username, email, sessionToken, _id];
      const userInfoString = JSON.stringify(userInfo);
      Cookies.set("user-info", userInfoString);
      return response.data;
    } else {
      return {
        success: false,
        message: { errorMessage },
      };
    }
  } catch (error: any) {
    if (error) {
      return error.response.data;
    } else {
      return errorMessage;
    }
  }
};
