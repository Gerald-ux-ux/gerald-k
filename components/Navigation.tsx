/**
 * I have defined links at the nav bar as an array to practice DRY coding ("https://docs.getdbt.com/terms/dry")
 */

"use client";
import clsx from "clsx";
import Link from "next/link";
import NavLink from "./ui/NavLink";
import MobileNav from "./ui/MobileNav";
import ThemeSwitcher from "./ThemeSwitcher";
import { isExternal } from "util/types";

const links = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
  {
    label: "Code Snippets",
    href: "https://codesnippets-six.vercel.app/",
    isExternal: true,
  },
];

export default function Navigation() {
  return (
    <header className={clsx("relative top-0 z-20 bg-primary md:sticky")}>
      <nav className="lg mx-auto flex max-w-[700px] items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link href="/" className="mt-2 shrink-0 text-primary">
          {/* Used svg due to changing themes. Svg images can pick the {currentColor} so when ever the theme changes the image changes accordingly */}
          <svg
            width="30"
            height="30"
            viewBox="0 0 454 659"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M180 2.11503C121.736 8.76503 72.978 36.946 43.468 81.028C7.28998 135.069 4.72098 212.685 37.206 270.219C39.293 273.915 41 277.443 41 278.06C41 278.676 37.038 283.302 32.196 288.34C8.70198 312.785 0.498977 332.495 0.500977 364.5C0.505977 431.88 40.478 480.922 105.5 493.324C109.9 494.163 114.85 495.175 116.5 495.572C118.15 495.97 164.725 496.598 220 496.969C328.717 497.697 326.312 497.571 337.281 503.129C349.993 509.569 354.501 517.261 354.497 532.5C354.492 554.333 340.853 569.114 317.926 572.134C313.292 572.744 308.938 573.4 308.25 573.59C306.752 574.006 306.434 655.557 307.921 657.906C309.098 659.766 323.407 658.811 335.694 656.053C403.719 640.779 446.052 585.305 440.049 519.303C434.484 458.128 395.385 417.482 331.944 406.918C326.588 406.026 297.013 405.495 226.5 405.022C117.033 404.288 123.289 404.709 107.5 397.022C86.36 386.73 78.46 369.082 84.662 346C87.976 333.668 93.105 329.359 99.764 333.311C165.763 372.48 257.149 370.203 319.126 327.847C356.651 302.201 380.657 265.511 390.67 218.5C393.287 206.211 393.439 204.079 393.454 179.5C393.472 147.378 390.795 131.76 381.905 112.136C380.32 108.636 379.269 105.374 379.57 104.886C379.872 104.399 395.8 104 414.988 104C445.354 104 450.06 103.797 451.429 102.429C453.804 100.053 453.804 25.947 451.429 23.571C450.028 22.17 441.633 22 374.053 22H298.25L290.605 18.516C259.792 4.47404 216.099 -2.00497 180 2.11503ZM194 87.064C104.902 96.02 74.72 205.705 147.156 257.301C202.277 296.563 279.117 270.795 298.643 206.5C302.229 194.692 302.742 169.104 299.623 157.584C286.959 110.814 243.877 82.05 194 87.064Z"
              fill="currentColor"
            />
          </svg>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink isExternal={link.isExternal} href={link.href}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <MobileNav links={links} />
        <div className=" flex w-8 items-center justify-center">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
