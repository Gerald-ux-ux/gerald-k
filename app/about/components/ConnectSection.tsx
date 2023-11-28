import ConnectLinks from "@/components/ConnectLinks";
import Section from "@/components/Section";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function ConnectSection() {
  return (
    <Section heading="Connect" headingAlignment="left">
      <div className="flex w-full flex-col gap-8">
        <p>
          For a quick chat or any question, feel free to{" "}
          <Link href="mailto:kamaugerald36@gmail.com" className="underline">
            email me
          </Link>
          . Also you can reach out to me on{"  "}
          <Link
            href="https://www.instagram.com/geralddd.g/"
            className="underline"
          >
            instagram
          </Link>
        </p>
        <ul className="animated-list grid flex-grow grid-cols-1 gap-2 md:grid-cols-2">
          {ConnectLinks.map((link) => (
            <li className=" col-span-1 transition-opacity" key={link.label}>
              <Link
                href={link.href}
                className="inline-grid w-full rounded-lg border border-primary p-4 no-underline"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{link.icon}</span>
                  {link.label}
                  <GoArrowUpRight className="ml-auto h-5 w-5" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
