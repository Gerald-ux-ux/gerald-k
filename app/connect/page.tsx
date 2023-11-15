import Image from "next/image";
import Avatar from "@/public/geraldavatar.jpeg";
import ConnectLinks from "@/components/ConnectLinks";
import Link from "next/link";

export default function Connect() {
  return (
    <div className="">
      {/* About section */}
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col gap-8 animate-in">
          <Image
            src={Avatar}
            width={70}
            height={70}
            alt="A photo of Gerald"
            className="rounded-full mx-auto animate-in"
          />
          <div className="space-y-1 animate-in">
            <h1 className="text-center tracking-tight text-2xl font-bold">
              Gerald Kamau
            </h1>
            <p className="max-w-sm text-secondary mx-auto text-center">
              Software Engineer who believes in the power of consistency. In
              addition to code i also make beats and you can always reach out to
              me on instagram for any musical inquires{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Links to connect with me */}
      <ul>
        {ConnectLinks.map((link) => (
          <li key={link.label}>
            <Link href={link.href}>
              <div className="flex items-center">
                <span>{link.icon}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
