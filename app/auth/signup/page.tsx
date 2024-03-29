import { Metadata } from "next";
import Info from "../components/Info";
import TagLine from "../components/TagLine";
import Form from "./components/Form";

export const metadata: Metadata = {
  title: "Sign up | Code-Snippets",
  description: "Create your snippets account",
};

export default function SignUp() {
  return (
    <div className="flex animate-in flex-col items-center justify-center  ">
      <div className="flex flex-col items-center   justify-center gap-6">
        <TagLine />

        <div className="flex w-full flex-col gap-8">
          <Form />
          <Info
            text="Already have an account"
            action="Login"
            href="/auth/login"
          />
        </div>
      </div>
    </div>
  );
}
