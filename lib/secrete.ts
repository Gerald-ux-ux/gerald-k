import { cookies } from "next/headers";

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

export function setCookie(name: string, value: string) {
  return cookies().set({
    name,
    value,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 2),
    httpOnly: true,
  });
}
