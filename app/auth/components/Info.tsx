import Link from "next/link";

type InfoProps = {
  text: string;
  href: string;
  action: string;
};

export default function Info({ text, href, action }: InfoProps) {
  return (
    <div className="flex w-full gap-2 text-sm text-secondary md:text-base">
      <p>
        {text} {""} ?
      </p>
      <Link
        href={href}
        className="underline underline-offset-1 hover:text-primary"
      >
        {action}
      </Link>
    </div>
  );
}
