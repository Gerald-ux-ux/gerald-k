import { AiOutlineGithub } from "react-icons/ai";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { FaCodeBranch, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const links = [
  {
    label: "Github",
    href: "https://github.com/Gerald-ux-ux",
    icon: <AiOutlineGithub />,
  },
  {
    label: "Blogs",
    href: "/blog",
    icon: <BsFillChatQuoteFill />,
  },
  {
    label: "Code Snippets",
    href: "/code-snippets",
    icon: <FaCodeBranch />,
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/@geralddd.g/featured",
    icon: <FaYoutube />,
  },
];

type links = {
  label: string;
  href: string;
  icon: JSX.Element;
};

export default function FooterLinks() {
  return (
    <ul className="flex items-center justify-between  border-t border-t-primary  ">
      {links.map((link) => (
        <div key={link.href} className="">
          <Link href={link.href} className="">
            <span className="flex mt-2  items-center underline-offset-4 gap-3 hover:text-primary text-secondary underline  justify-between">
              {link.icon}
              {link.label}
            </span>
          </Link>
        </div>
      ))}
    </ul>
  );
}
