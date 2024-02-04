import { Metadata } from "next";
import TagLine from "../components/TagLine";
import Form from "../components/Form";
import { loginInputs } from "../components/AuthInputs";
import CustomMessage from "../components/CustomMessage";
import Info from "../components/Info";
import Button from "../components/Button";

export const metadata: Metadata = {
  title: "Login | Gerald",
  description: "Login to add snippets",
};

export default function Login() {
  return (
    <div className="flex items-center flex-col animate-in justify-center   ">
      {/* <CustomMessage text="Log in to add a snippet" /> */}
      <div className="flex flex-col items-center   justify-center gap-6">
        <TagLine />

        <div className="flex w-full flex-col gap-8">
          <Form inputs={loginInputs} />

          <Button href='/code-snippets' label="Login" action="" />

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
