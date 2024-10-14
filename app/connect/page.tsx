import ConnectLinks from "@/components/ConnectLinks";
import Avatar from "@/public/geraldavatar.jpeg";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function Connect() {
  return (
    <div className="">
      {/* About section */}
      <div className="mx-auto flex max-w-[700px] flex-col gap-16 px-6 md:gap-24">
        <div className="flex animate-in flex-col gap-8">
          <Image
            src={Avatar}
            width={70}
            height={70}
            alt="A photo of Gerald"
            className="mx-auto animate-in rounded-full"
          />
          <div className="animate-in space-y-1">
            <h1 className="text-center text-2xl font-bold tracking-tight">
              Gerald Kamau
            </h1>
            <p className="mx-auto max-w-sm text-center text-secondary">
              A Software Engineer who believes in the power of consistency. In
              addition to code i also make beats and you can always reach out to
              me on{" "}
              <Link
                href="https://www.instagram.com/geralddd.g/"
                className="underline"
              >
                Instagram
              </Link>
            </p>
          </div>
        </div>

        {/* Links to connect with me */}
        <ul
          className="animated-list grid flex-grow animate-in grid-cols-1 gap-2 lg:gap-3"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          {ConnectLinks.map((link) => (
            <li key={link.label} className="col-span-1 transition-opacity">
              <Link
                href={link.href}
                className="inline-grid w-full rounded-lg bg-tertiary p-4 no-underline transition-opacity"
              >
                <div className="flex items-center gap-3  ">
                  <span className="text-xl">{link.icon}</span>
                  {link.label}
                  <MdArrowOutward className="ml-auto h-5 w-5 text-secondary" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
