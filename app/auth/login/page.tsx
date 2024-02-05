"use client";

import { Metadata } from "next";
import TagLine from "../components/TagLine";
import Form from "../components/Form";
import { loginInputs } from "../components/AuthInputs";
import CustomMessage from "../components/CustomMessage";
import Info from "../components/Info";
import Button from "../components/Button";
import { useState } from "react";
import { loginUser } from "@/app/api/codes-snippets/auth/lib";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Login | Gerald",
//   description: "Login to add snippets",
// };

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
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

      if (res.success) {
        console.log("res", res);

        setLoading(false);
        toast.success(res.data.message);

        redirect("/code-snippets");
      } else if (res.success === false) {
        console.log("res", res);
        setErrors(res.message || "An error occurred");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      setErrors((error as Error).message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  console.log("email", email);
  console.log("Pss", password);

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

          {errors && (
            <div className="bg-error text-error animate-in rounded-lg p-2 text-center">
              <p>{errors}</p>
            </div>
          )}

          <Button
            label="Login"
            action={handleLogin}
            loading={loading}
            disabled={!!errors || !email || !password || loading}
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
