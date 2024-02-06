
import { Metadata } from "next";
import TagLine from "../components/TagLine";
import Form from "../components/Form";
import CustomMessage from "../components/CustomMessage";
import Info from "../components/Info";
import Button from "../components/Button";

import useLoginClient from "../hooks/useLoginClient";

export const metadata: Metadata = {
  title: "Login | Gerald",
  description: "Login to add snippets",
};

export default function Login() {

  const {
    loading,
    errors,
    handleLogin,
    setEmail,
    setPassword,
    email,
    password,
  } = useLoginClient();

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
            action={() => handleLogin(email, password)}
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
