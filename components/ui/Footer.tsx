import FooterLinks from "@/hooks/FooterLinks";

export default function Footer() {
  return (
    <footer className="mx-auto mt-36 w-full max-w-[700px] px-12 animate-in  pb-36 text-base">
      <FooterLinks />

      <ul className="mt-8 animate-in text-sm md:text-sm  ">
        <li className="flex w-full items-center gap-3 ">
          <small className="text-secondary">Built with </small>

          <a
            href="https://nextjs.org"
            className="text-secondary hover:text-primary"
          >
            Next.js
          </a>
          <a
            href="https://www.prisma.io/"
            className="text-secondary hover:text-primary"
          >
            Prisma
          </a>

          <a
            href="https://mdxjs.com"
            className="text-secondary hover:text-primary"
          >
            MDX
          </a>
          <a
            href="https://tailwindcss.com"
            className="text-secondary hover:text-primary"
          >
            Tailwind
          </a>

          <a
            href="https://vercel.com"
            className="text-secondary hover:text-primary"
          >
            Vercel
          </a>
        </li>
      </ul>
    </footer>
  );
}
