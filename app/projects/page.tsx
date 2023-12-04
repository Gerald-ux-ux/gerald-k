import { allProjects, Project } from "@/.contentlayer/generated";
import Hallo from "@/components/ui/Halo";
import { PAGE_HEADER } from "@/lib/uiConstants";
import clsx from "clsx";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProjectComponent from "./components/projects";

export const metadata: Metadata = {
  title: "Projects | Gerald",
  description: "Projects i have worked on",
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
        <ProjectComponent />
      </div>
    </main>
  );
}
