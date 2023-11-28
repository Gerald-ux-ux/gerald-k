import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type WorkPlaceProps = {
  title: string;
  company: string;
  imageSrc: string | StaticImageData;
  time?: string;
  link?: string;
};

function WorkPlace({ title, company, imageSrc, time, link }: WorkPlaceProps) {
  const content = (
    <>
      <div className="flex items-center gap-4">
        <Image
          src={imageSrc}
          alt={company}
          width={48}
          height={48}
          className="rounded-full"
        />

        <div className="flex flex-col gap-px">
          <p className={link ? "external-arrow" : ""}>{title}</p>
          <p className="text-secondary">{company}</p>
        </div>
      </div>
      {time && <time className="text-secondary">{time}</time>}
    </>
  );

  return (
    <div className="">
      <li className="transition-opacity">
        {link ? (
          <Link
            href={link}
            className="-mx-3 -my-2 flex w-full justify-between px-3 py-2 no-underline"
          >
            {content}
          </Link>
        ) : (
          <div className="flex justify-between ">{content}</div>
        )}
      </li>
    </div>
  );
}

export default function WorkPlaces({ items }: { items: WorkPlaceProps[] }) {
  return (
    <ul className="animated-list flex flex-col gap-8">
      {items.map((item) => (
        <WorkPlace key={item.company} {...item} />
      ))}
    </ul>
  );
}
