import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";



export const errorMessage = "Unexpected response from the server";
export const secretKey = process.env.SECRETE_KEY

export function encrypt(text: string, key: string): string {
  let encryptedText = "";

  for (let i = 0; i < text?.length; i++) {
    const charCode = text?.charCodeAt(i) ^ key?.charCodeAt(0);
    encryptedText += String?.fromCharCode(charCode);
  }

  return encryptedText;
}

export function decrypt(text: string, key: string): string {
  let decryptedText = "";

  for (let i = 0; i < text?.length; i++) {
    const charCode = text?.charCodeAt(i) ^ key?.charCodeAt(0);
    decryptedText += String?.fromCharCode(charCode);
  }

  return decryptedText;
}



export default function getCookie() {
  const cookieStore = cookies();
  const cookie = cookieStore.get("auth")?.valueOf();
  return cookie;
}
