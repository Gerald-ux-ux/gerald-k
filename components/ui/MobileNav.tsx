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
      <Popover.Button className="flex items-center gap-1 text-secondary p-1 rounded-lg focus-visible:outline-none focus:ring-0">
        <CiMenuFries className="h-6 w-6 text-black" />
      </Popover.Button>

      <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="translate-y-1 opacity-0"
        as={Fragment}
      >
        <Popover.Panel className="absolute z-10 right-0 p-1 mt-2 overflow-auto text-base origin-top-right shadow-xl w-40 rounded-xl">
          <div className="grid">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "px-4 py-2 rounded-md hover:text-primary transition-colors",
                  pathname === link.href
                    ? "bg-tertiary font-medium"
                    : "font-normal"
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
