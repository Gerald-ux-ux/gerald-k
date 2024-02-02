import { Metadata } from "next";
import Toast from "../components/Toast";
import TagLine from "../components/TagLine";
import Form from "../components/Form";
import { loginInputs } from "../components/AuthInputs";

export const metadata: Metadata = {
  title: "Login | Gerald",
  description: "Login to add snippets",
};

export default function Login() {
  return (
    <div className="flex  w-full items-center justify-center ">
      {/* <Toast message="Log in to add a snippets" /> */}

      <div className="flex flex-col items-start justify-center gap-4">
        <TagLine />
        <Form inputs={loginInputs} />
      </div>
    </div>
  );
}
