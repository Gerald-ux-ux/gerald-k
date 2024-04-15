import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import Form from "./components/add-snippet-form";
export default async function Add() {
  return (
    <main className="mx-auto flex w-full max-w-[700px] animate-in flex-col gap-8 px-6">
      <div className="flex  w-full items-center justify-between">
        Add a code Snippet
        <Link href="/code-snippets">
          <IoMdClose />
        </Link>
      </div>
      <Form />
    </main>
  );
}
