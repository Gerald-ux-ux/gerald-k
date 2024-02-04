"use client";

import Link from "@/components/ui/Link";

type ButtonProps = {
  label: string;
  action: string;
  href: string;
};

export default function Button({ label, action, href }: ButtonProps) {
  return (
    <Link
      href={href}
      className="w-full rounded-lg text-center bg-secondary p-3 text-primary  hover:bg-tertiary  hover:text-secondary"
    >
      {label}
    </Link>
  );
}
