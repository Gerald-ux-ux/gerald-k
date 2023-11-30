import { allProjects, Post as PostType } from "@/.contentlayer/generated";
import MdxWrapper from "@/app/blog/components/ui/MdxWrapper";
import Link from "next/link";
import { notFound } from "next/navigation";

// type ProjectProps = {
//   post: PostType;
//   related: PostType[];
// };

export default function Project({ params }: { params: any }) {
  const project = allProjects.find((project) => project.slug === params.slug);

  if (!project) return notFound();
  return (
    <div className="mx-auto flex max-w-[700px] flex-col gap-20 px-6">
      <article>
        <div className="flex animate-in flex-col gap-3">
          <div className="flex gap-3 text-secondary">
            <p>{project.time}</p>

            {project.url && (
              <>
                <span>&middot;</span>
                <Link
                  href={project.url}
                  className="underline underline-offset-2 hover:text-primary"
                >
                  Visit Project
                </Link>
              </>
            )}
          </div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary">
            {project.title}
          </h1>
          <p className="animate-in text-lg leading-tight text-secondary md:text-xl">
            {project.description}
          </p>
        </div>

        <div className="h-16" />

        <div className="project prose animate-in">
          <MdxWrapper code={project.body.code} />
        </div>
      </article>

      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-6">
          <h2>Tags</h2>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag: string) => (
              <div
                key={tag}
                className=" whitespace-nowrap rounded-lg bg-secondary px-4 py-1.5 text-sm text-secondary"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2>Contact</h2>
          <p className="max-w-lg text-secondary">
            Need more project details, or interested in working? Reach out to me{" "}
            <a
              href="mailto:kamaugerald36@gmail.com"
              className="text-primary underline underline-offset-2"
            >
              kamaugerald36@gmail.com
            </a>
            . I&apos;d be happy to connect!{" "}
          </p>{" "}
        </div>

        <Link
          href="/projects"
          className="text-primary underline underline-offset-4"
        >
          ← All Projects
        </Link>
      </div>
    </div>
  );
}
