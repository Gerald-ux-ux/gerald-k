"use client";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function BackBtn() {
  const router = useRouter();

  return (
    <button
      className="flex w-32 items-center  gap-2 rounded-lg p-2 hover:bg-secondaryA"
      onClick={() => router.back()}
    >
      <IoMdArrowRoundBack className="text-2xl" />
      Go back
    </button>
  );
}
