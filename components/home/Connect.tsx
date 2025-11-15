"use client";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ConnectLinks from "@/components/ConnectLinks";

export default function Connect() {
  return (
    <div className="flex animate-in items-center gap-3">
      {ConnectLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="transition-transform hover:scale-110"
        >
          <Avatar className="h-10 w-10 border border-secondary bg-secondary hover:bg-tertiary">
            <AvatarFallback className="text-primary">
              {link.icon}
            </AvatarFallback>
          </Avatar>
        </Link>
      ))}
    </div>
  );
}
