"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  isExternal?: boolean;
  children: ReactNode;
};

export default function NavLink({ href, children, isExternal }: NavLinkProps) {
  const pathname = `/${usePathname().split("/")[1]}`;
  const active = href === pathname;

  return (
    <Link
      target={isExternal ? "_blank" : undefined}
      className={clsx(
        "rounded-lg px-4 py-2 text-sm transition-colors hover:text-primary",
        active ? "bg-secondaryA text-primary" : "text-secondary",
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
