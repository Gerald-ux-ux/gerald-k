import { INPUT_STYLE } from "@/app/code-snippets/styles/inputStyle";
import { AUTH_BTN } from "../../styles/authStyles";

function Button() {
  return <button className={AUTH_BTN}>Sign Up</button>;
}
export default function Form() {
  return (
    <form className="flex w-full flex-col gap-4">
      <input
        type="text"
        className={INPUT_STYLE}
        name="name"
        placeholder="Username"
        required
      />
      <input
        type="text"
        className={INPUT_STYLE}
        name="email"
        placeholder="Email"
        required
      />
      <input
        type="password"
        className={INPUT_STYLE}
        name="password"
        placeholder="Password"
        required
      />
      <Button />
    </form>
  );
}
