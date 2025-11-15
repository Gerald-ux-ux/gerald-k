import { allProjects } from "@/.contentlayer/generated";
import Link from "@/components/ui/Link";
import clsx from "clsx";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = allProjects.sort(
  (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime(),
);

type IProps = {
  isProjectPage?: boolean;
};

export default function ProjectComponent({ isProjectPage = false }: IProps) {
  return (
    <div
      className={clsx(
        "animated-list grid animate-in gap-4",
        isProjectPage
          ? "grid-cols-1 md:grid-cols-2"
          : "grid-cols-1 md:grid-cols-2",
      )}
    >
      {projects.map((project, i) => (
        <div
          className="  group flex h-full flex-col overflow-hidden rounded-xl border border-secondary transition-all  hover:cursor-pointer"
          key={i}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="relative w-full select-none overflow-hidden"
          >
            <div className="aspect-[16/9] md:aspect-[3/2] lg:aspect-[2/1]">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/20" />
            <div className="absolute right-2 top-2 rounded-full bg-tertiary p-2 opacity-0 transition-opacity group-hover:opacity-100">
              <ArrowUpRight className="text-foreground h-4 w-4" />
            </div>
          </Link>
          <div className="flex flex-grow flex-col justify-between p-4">
            <div>
              <Link
                href={`/projects/${project.slug}`}
                className="font-medium text-primary hover:underline"
              >
                {project.title}
              </Link>
              <time className="text-muted-foreground ml-2 text-sm">
                {project.time}
              </time>
            </div>
            <p className="text-muted-foreground mt-2 line-clamp-3">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
