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

interface LoginProps {
  data: {
    email: string;
    password: string;
  };
}

interface LoginResponse {
  success: boolean;
  message?: string;
  data?: any;
}

export const loginUser = async ({
  data,
}: LoginProps): Promise<LoginResponse> => {
  try {
    const response = await axios.post(LOGIN_URL, { ...data });

    if (response.data && response.data.success) {
      const { userName, email, sessionToken, id } = response.data;
      const userInfo = [userName, email, sessionToken, id];
      const encryptedData = await encrypt(userInfo);
      Cookies.set("user-info", encryptedData);

      return {
        success: true,
        message: response.data.message,
        data: response.data,
      };
    } else {
      return {
        success: false,
        message: response.data.message,
      };
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message || { errorMessage },
    };
  }
};
