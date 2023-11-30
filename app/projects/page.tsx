import { allProjects, Project } from "@/.contentlayer/generated";
import Hallo from "@/components/ui/Halo";
import { PAGE_HEADER } from "@/lib/uiConstants";
import clsx from "clsx";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Gerald",
  description: "This are my projects",
};
export default function Projects() {
  const projects = allProjects;

  return (
    <main className="mx-auto w-full  max-w-[700px] px-6 ">
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="flex-col gap-8">
          <div>
            <h1 className={PAGE_HEADER}>Projects</h1>
            <p className="animate-in">
              Here are some of the project I&apos;ve worked on ranging from code
              to design
            </p>
          </div>
        </div>
        <ul className="animated-list flex animate-in flex-col">
          {projects.map((project, i) => (
            <li
              className={clsx(
                "flex flex-col gap-4 py-6 transition-opacity first:pt-0 last:pb-0 md:flex-row md:gap-6",
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
                <p className="line-clamp-3 text-tertiary">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
