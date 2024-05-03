"use client";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function BackBtn() {
  const router = useRouter();

  return (
    <button className="hover:bg-secondaryA rounded-lg p-2" onClick={() => router.back()}>
      <IoMdArrowRoundBack className="text-2xl" />
    </button>
  );
}
