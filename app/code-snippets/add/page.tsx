import { IoMdClose } from "react-icons/io";
import { Snippet } from "../types/snippets";
import Link from "next/link";
import Form from "./components/add-snippet-form";
import { getUserInfo } from "@/app/auth/actions/actions";
export default async function Add() {
    const user = await getUserInfo();

    console.log("user: ",  user)

  return (


    <main className="mx-auto flex w-full max-w-[700px] animate-in flex-col gap-8 px-6">
      <div className="flex  w-full items-center justify-between">
        Add a code Snippet
        <Link href="/code-snippets">
          <IoMdClose />
        </Link>
      </div>
      <Form user={user} />
    </main>
  );
}
