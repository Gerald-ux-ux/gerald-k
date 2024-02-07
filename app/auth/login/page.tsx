import { Metadata } from "next";
import TagLine from "../components/TagLine";
import Form from "../components/Form";
import CustomMessage from "../components/CustomMessage";
import Info from "../components/Info";
import Button from "../components/Button";

import { INPUT_STYLE } from "@/app/code-snippets/styles/inputStyle";
import axios from "axios";
import { LOGIN_URL } from "@/app/api/codes-snippets/auth/constants";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login | Code-snippets",
  description: "Login to add snippets",
};

export default function Login() {
  const loginUser = async (formData: FormData) => {
    "use server";

    const email = formData.get("email");
    const pass = formData.get("password");
    await axios.post(LOGIN_URL, {
      email,
      pass,
    });
    redirect('/code-snippets')
  };
  return (
    <div className="flex animate-in flex-col items-center justify-center   ">
      <CustomMessage text="Snippets will be available on Tuesday" />
      <div className="flex flex-col items-center   justify-center gap-6">
        <TagLine />

        <div className="flex w-full flex-col gap-8">
          <form action={loginUser} className="flex  w-full flex-col  gap-4 ">
            <input
              type="text"
              name="email"
              className={INPUT_STYLE}
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              className={INPUT_STYLE}
              placeholder="Password"
              required
            />

            <button className="w-full rounded-lg bg-secondary p-3 text-center text-primary hover:bg-tertiary hover:text-secondary">
              login
            </button>
          </form>
          {/* <Form
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
          /> */}

          {/* {errors ? (
            <div className="animate-in rounded-lg bg-error p-2 text-center text-base text-error">
              <p>{errors}</p>
            </div>
          ) : null} */}

          {/* <Button
            label="Login"
            action={() => handleLogin(email, password)}
            loading={loading}
            disabled={!email || !password || loading}
          /> */}

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
