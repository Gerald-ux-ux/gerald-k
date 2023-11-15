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
    <ul className="animated-list flex w-full items-center gap-2  ">
      {links.map((link) => (
        <li key={link.href} className="transition-opacity  ">
          <Link href={link.href} className="transition-opacity">
            <span className="mt-2 flex  items-center justify-between text-secondary no-underline ">
              {link.label}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
