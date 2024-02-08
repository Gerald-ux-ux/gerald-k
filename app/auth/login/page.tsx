import { Metadata } from "next";
import TagLine from "../components/TagLine";
import Form from "../components/Form";
import CustomMessage from "../components/CustomMessage";
import Info from "../components/Info";

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
    const password = formData.get("password");
    const res = await axios.post(LOGIN_URL, {
      email,
      password,
    });

    console.log("email", res.data.success);
    // redirect("/code-snippets");
  };
  return (
    <div className="flex animate-in flex-col items-center justify-center   ">
      <CustomMessage text="Snippets will be available on Tuesday" />
      <div className="flex flex-col items-center justify-center gap-6">
        <TagLine />

        <div className="flex w-full flex-col gap-8">
          <Form
            inputs={[
              {
                type: "string",
                placeholder: "Email",
                name: "email",
              },
              {
                type: "password",
                placeholder: "Password",
                name: "password",
              },
            ]}
            loginUser={loginUser}
          />

          {/* {errors ? (
            <div className="animate-in rounded-lg bg-error p-2 text-center text-base text-error">
              <p>{errors}</p>
            </div>
          ) : null} */}
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
