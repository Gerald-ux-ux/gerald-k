"use client";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, ReactNode } from "react";
import { CiMenuFries } from "react-icons/ci";

type NavLinkProps = {
  links: { label: string; href: string }[];
};

export default function MobileNav({ links }: NavLinkProps) {
  const pathname = `/${usePathname().split("/")[1]}`;

  return (
    <Popover className="relative ml-auto md:hidden">
      <Popover.Button className="flex items-center gap-1 rounded-lg p-1 text-secondary focus:ring-0 focus-visible:outline-none">
        <CiMenuFries className="h-6 w-6" />
      </Popover.Button>

      <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="translate-y-1 opacity-0"
        as={Fragment}
      >
        <Popover.Panel className="absolute right-0 z-10 mt-2 w-40 origin-top-right overflow-auto rounded-xl bg-white p-2 text-sm  shadow-lg focus:outline-none dark:bg-black sm:text-sm">
          <div className="grid">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "rounded-md px-4 py-2 transition-colors hover:text-primary",
                  pathname === link.href
                    ? "bg-tertiary font-medium"
                    : "font-normal",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
