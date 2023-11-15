import Link from "next/link";

const links = [
  {
    label: "Github",
    href: "https://github.com/Gerald-ux-ux",
  },
  {
    label: "Blogs",
    href: "/blog",
  },
  {
    label: "Code Snippets",
    href: "/code-snippets",
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/@geralddd.g/featured",
  },
];

type links = {
  label: string;
  href: string;
};

export default function FooterLinks() {
  return (
    <ul className="flex items-center animate-list gap-4  ">
      {links.map((link) => (
        <li key={link.href} className="transition-opacity">
          <Link href={link.href} className="">
            <span className="flex mt-2  items-center   gap-3  text-secondary hover:text-primary no-underline  justify-between">
              {link.label}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
