"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = `/${usePathname().split("/")[1]}`;
  const active = href === pathname;

  return (
    <Link
      className={clsx(
        "px-4 py-2 rounded-lg text-sm hover:text-primary transition-colors",
        active ? "bg-secondaryA text-primary" : "text-secondary"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
