import { Metadata } from "next";
import TagLine from "../components/TagLine";
import Form from "./components/Form";
import CustomMessage from "../components/CustomMessage";
import Info from "../components/Info";

export const metadata: Metadata = {
  title: "Login | Code-Snippets",
  description: "Login in to your snippet account",
};

export default function Login() {
  return (
    <div className="flex animate-in flex-col items-center justify-center   ">
      <CustomMessage/>
      <div className="flex flex-col items-center justify-center gap-6">
        <TagLine />

        <div className="flex w-full flex-col gap-8">
          <Form />
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
