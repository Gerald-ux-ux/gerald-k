import { Metadata } from "next";
import { signupInputs } from "../components/AuthInputs";
import Button from "../components/Button";
import Form from "../components/Form";
import Info from "../components/Info";
import TagLine from "../components/TagLine";

export const metadata: Metadata = {
  title: "Sign up | Gerald",
  description: "Create your snippets account",
};

export default function SignUp() {
  return (
    <div className="flex animate-in flex-col items-center justify-center md:mt-20  ">
      {/* <CustomMessage text="Log in to add a snippet" /> */}
      <div className="flex flex-col items-center   justify-center gap-6">
        <TagLine />

        <div className="flex w-full flex-col gap-8">
          <Form inputs={signupInputs} />

          <Button label="Sign up" action="" />

          <Info
            text="Already have an account"
            action="Sign up"
            href="/auth/login"
          />
        </div>
      </div>
    </div>
  );
}
