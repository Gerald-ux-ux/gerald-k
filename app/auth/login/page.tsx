"use client";

import { Metadata } from "next";
import TagLine from "../components/TagLine";
import Form from "../components/Form";
import { loginInputs } from "../components/AuthInputs";
import CustomMessage from "../components/CustomMessage";
import Info from "../components/Info";
import Button from "../components/Button";
import { ReactHTMLElement, useState } from "react";
import { loginUser } from "@/app/api/codes-snippets/auth/lib";
import toast from "react-hot-toast";
import { redirect, useRouter } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Login | Gerald",
//   description: "Login to add snippets",
// };

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const handleLogin = async () => {
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
        setLoading(false);
      } else if (res?.data?.success === false) {
        setErrors(res?.data?.message);
      }
    } catch (error: any) {
      setErrors(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex animate-in flex-col items-center justify-center   ">
      <CustomMessage text="Snippets will be available on Tuesday" />
      <div className="flex flex-col items-center   justify-center gap-6">
        <TagLine />

        <div className="flex w-full flex-col gap-8">
          <Form
            inputs={[
              {
                type: "string",
                placeholder: "Email",
                name: "email",
                value: email,
              },
              {
                type: "password",
                placeholder: "Password",
                name: "password",
                value: password,
              },
            ]}
            values={{ email, password }}
            onChange={(name, value) =>
              name === "email" ? setEmail(value) : setPassword(value)
            }
          />

          {errors ? (
            <div className="animate-in rounded-lg bg-error p-2 text-center text-base text-error">
              <p>{errors}</p>
            </div>
          ) : null}

          <Button
            label="Login"
            action={handleLogin}
            loading={loading}
            disabled={!email || !password || loading}
          />

          <Info
            text="Don't have an account"
            action="Create One"
            href="/auth/signup"
          />
        </div>
      </div>
    </div>
  );
}
