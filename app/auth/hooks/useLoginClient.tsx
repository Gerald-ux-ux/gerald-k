"use client";

import { loginUser } from "@/app/api/codes-snippets/auth/lib";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useLoginClient() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    try {
      const data = {
        email,
        password,
      };

      const res = await loginUser({
        data,
      });

      if (res?.data?.success) {
        router.push("/code-snippets");
      } else if (res?.data?.success === false) {
        setErrors(res?.data?.message);
      }
    } catch (error: any) {
      setErrors(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  return { loading, errors, handleLogin, setEmail, setPassword, email, password };
}
