import { secretKey } from "@/app/api/codes-snippets/auth/lib";
import Cookies from "js-cookie";

export function encrypt(text: string, key: string): string {
  let encryptedText = "";

  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i) ^ key.charCodeAt(0);
    encryptedText += String.fromCharCode(charCode);
  }

  return encryptedText;
}

export function decrypt(text: string, key: string): string {
  let decryptedText = "";

  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i) ^ key.charCodeAt(0);
    decryptedText += String.fromCharCode(charCode);
  }

  return decryptedText;
}

export function userInfo() {
  const user = Cookies.get("auth");

  console.log("userInfo is", user);

  if (!user) {
    return {
      username: null,
      email: null,
      _id: null,
    };
  }

  const decryptedData = decrypt(user, secretKey);
  const { username, email, _id } = JSON.parse(decryptedData);
  return { username, email, _id };
}
