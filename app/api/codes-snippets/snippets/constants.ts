import axios from "axios";
import { GET_SNIPPETS } from "./lib";
import { errorMessage } from "../auth/lib";

export default async function getSnippets() {
  try {
    const res = await axios.get(GET_SNIPPETS);

    if (res) {
      return res.data;
    } else {
      return {
        success: false,
        message: { errorMessage },
      };
    }
  } catch (error: any) {
    if (error) {
      return error.message;
    } else {
      return {
        success: false,
        message: { errorMessage },
      };
    }
  }
}
