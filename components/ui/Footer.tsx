import FooterLinks from "@/hooks/FooterLinks";

export default function Footer() {
  return (
    <footer className="mt-36   pb-36 w-full  animate-in text-base">
      <FooterLinks />

      <ul className="mt-8 text-sm md:text-sm animated-list  ">
        <li className="flex  gap-3 transition-opacity n items-center w-full">
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
