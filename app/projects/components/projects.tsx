import { allProjects } from "@/.contentlayer/generated";
import Hallo from "@/components/ui/Halo";
import Link from "@/components/ui/Link";
import clsx from "clsx";
import Image from "next/image";

const projects = allProjects.sort(
  (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime(),
);

export default function ProjectComponent() {
  return (
    <ul className="animated-list flex animate-in flex-col">
      {projects.map((project, i) => (
        <li
          className={clsx(
            "flex flex-col gap-4 py-3 transition-opacity first:pt-0 last:pb-0 md:flex-row md:gap-6",
          )}
          key={i}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="aspect-video w-full select-none overflow-clip rounded-lg border border-secondary bg-tertiary md:w-2/5"
          >
            {/* <Hallo strength={10}> */}
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={150}
            />
            {/* </Hallo> */}
          </Link>
          <div className="w-full space-y-2 md:w-3/5">
            <div>
              <Link
                href={`/projects/${project.slug}`}
                className="font-medium text-primary hover:underline"
              >
                {project.title}
              </Link>
              <time className="text-secondary"> . {project.time}</time>
            </div>
            <p className="line-clamp-3 text-tertiary">{project.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
