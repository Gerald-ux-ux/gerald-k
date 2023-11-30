import Image from "next/image";
import Avatar from "@/public/geraldavatar.jpeg";
import Stats from "@/components/Stats";
import Connect from "@/components/home/Connect";
import PostList from "./blog/components/ui/PostList";
import Link from "next/link";
import { allPosts, allProjects } from "@/.contentlayer/generated";
import { PAGE_HEADER } from "@/lib/uiConstants";
import Projects from "./projects/page";
import clsx from "clsx";

export default function Home() {
  const posts = allPosts
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    // 3 most recent  (for now)
    .filter((_, i) => i < 3);
  const projects = allProjects;

  return (
    <div className="mx-auto flex max-w-[700px] flex-col gap-16 px-6 md:gap-24">
      <div className="flex animate-in flex-col gap-8">
        <div className="">
          <h1 className={PAGE_HEADER}>Gerald Kamau</h1>
          <p className="animate-in  text-secondary">
            I write code and make beats.
          </p>
        </div>

        <div className="flex animate-in flex-col gap-6 text-secondary md:flex-row md:items-center">
          <Image
            src={Avatar}
            width={70}
            height={70}
            alt="A photo of Gerald"
            className="rounded-full"
          />
          <Stats />
        </div>

        <p className="max-w-lg animate-in text-primary">
          Hi, I&apos;m Gerald kamau, a software engineer who loves and enjoys
          writing code. In addition to coding, I also do music production and
          occasionally upload some beats on{" "}
          <Link
            href="https://www.youtube.com/channel/UCAszclBzNqvwJpM4F1OdhXQ"
            className="underline"
          >
            YouTube
          </Link>
        </p>

        <Connect />
      </div>

      <div className="flex animate-in flex-col gap-12  ">
        {/* <Projects /> */}
        <h2 className="text-secondary">
          Projects & solutions i have been a part of{" "}
        </h2>

        <ul className="animated-list flex animate-in flex-col">
          {projects.slice(0, 3).map((project, i) => (
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
                <p className="line-clamp-3 text-tertiary">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex flex-col py-4">
          <h2 className="text-secondary">Latest posts </h2>
          <PostList posts={posts} />
        </div>

        <div className="flex  w-full justify-between">
          <Link
            href="/blog"
            className=" text-secondary underline underline-offset-4 hover:text-primary"
          >
            See all blogs
          </Link>

          <Link
            href="/code-snippets"
            className=" text-secondary underline underline-offset-4 hover:text-primary"
          >
            See all code snippets
          </Link>
        </div>
      </div>
    </div>
  );
}
