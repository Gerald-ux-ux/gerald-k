import FooterLinks from "@/hooks/FooterLinks";

export default function Footer() {
  return (
    <footer className="mt-36  pb-36 w-full animate-in text-base">
      <FooterLinks />

      <div className="mt-8 text-sm  ">
        <div className="flex justify-between items-center w-full">
          <span className="text-secondary">Built with </span>

          <a
            href="https://nextjs.org"
            className="text-secondary hover:text-primary"
          >
            Next.js.14.0.1
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
            Tailwind Css
          </a>

          <a
            href="https://vercel.com"
            className="text-secondary hover:text-primary"
          >
            Vercel
          </a>
        </div>
      </div>
    </footer>
  );
}
