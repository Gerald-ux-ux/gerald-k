import { PAGE_HEADER } from "@/lib/uiConstants";
import Preview from "@/public/images/preview.png";
import { Metadata } from "next";
import Link from "next/link";
import AddSnippet from "./components/AddSnippet";
import Search from "./components/Search";
import BetaTag from "./components/BetaTag";
import Cookies from "js-cookie";
import { secretKey } from "../api/codes-snippets/auth/lib";
import { userInfo } from "@/lib/secrete";

export const metadata: Metadata = {
  title: "Code-snippets | Gerald",
  description: "Coming soon ",
};

export default function CodeSnippets() {
  // const encryptedData =
  //   "J\u0013DBTC_P\\T\u0013\u000b\u0013zP\\PD\u0011vTCP]U\u0013\u001d\u0013T\\PX]\u0013\u000b\u0013\u0000\u0000VTCP]U\\^_THqV\\PX]\u001fR^\\\u0013\u001d\u0013nXU\u0013\u000b\u0013\u0007\u0004P\tS\bWPW\u0000\u0005PS\u0005\t\u0003U\u0003\u0002\u0007S\u0007W\u0007\u0013L";
  // const decryptedData = decrypt(encryptedData, secretKey);
  // console.log("Decrypted Data:", decryptedData);

  const user = userInfo();

  const { username, email, _id } = user;

  console.log("email", user);
  return (
    <main className="mx-auto flex w-full max-w-[700px] animate-in flex-col gap-8 px-6">
      <div className="flex  w-full items-center justify-between">
        <span className="flex items-center  gap-2">
          <h1 className={PAGE_HEADER}>Code snippets</h1>
          <div className="mt-1 flex animate-pulse items-center gap-1 rounded-md p-1.5 text-sm font-medium text-[#0070f3] hover:cursor-pointer  hover:bg-secondary">
            <span className="h-2 w-2 rounded-full   bg-[#0070f3] p-0.5" />
            Beta
          </div>
        </span>

        <AddSnippet message="Log in, snippets will be available on Tuesday" />
      </div>

      <div>
        <h2 className="mb-2 flex animate-in items-center gap-4 text-lg font-semibold text-primary md:text-xl">
          Beta version releases on Tuesday
        </h2>
        <Link
          href="/"
          className="text-sm text-secondary underline underline-offset-2 hover:text-primary  md:text-base"
        >
          Go Home{" "}
        </Link>
      </div>

      <Search query="" />
    </main>
  );
}
