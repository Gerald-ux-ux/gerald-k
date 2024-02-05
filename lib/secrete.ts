import * as crypto from "crypto";
import { SignJWT, jwtVerify } from "jose";

export const generateSecretKey = () => {
  return crypto.randomBytes(32).toString("hex");
};

const key = new TextEncoder().encode("name");

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "ES256", typ: "JWT" })
    .sign(key);
  // .setIssuedAt()
  // .setExpirationTime(new Date(payload.issuedAt))
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["ES256"],
  });

  return payload;
}
