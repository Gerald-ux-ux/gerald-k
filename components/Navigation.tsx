
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/Glogo.png";
import NavLink from "./ui/NavLink";
import MobileNav from "./ui/MobileNav";
import ThemeSwitcher from "./ThemeSwitcher";

const links = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
  { label: "Code Snippets", href: "/code-snippets" },
];

export default function Navigation() {
  return (
    <header className={clsx("relative md:sticky top-0 z-20 bg-primary")}>
      <nav className="px-4 md:px-6 py-3 lg max-w-[700px] mx-auto flex justify-between items-center gap-3">
        <Link href="/" className="shrink-0 text-primary">
          <Image alt="logo" src={Logo} className="" width={25} height={25} />
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>

        <MobileNav links={links} />

        <div className=" flex justify-center items-center w-8">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
