import Image from "next/image";
import Avatar from "@/public/geraldavatar.jpeg";
import Stats from "@/components/Stats";
import Connect from "@/components/home/Connect";
import PostList from "./blog/components/ui/PostList";
import Link from "next/link";
import { allPosts } from "@/.contentlayer/generated";
import { PAGE_HEADER } from "@/lib/uiConstants";
import ProjectComponent from "./projects/components/projects";
import { getTotalBlogViews } from "./blog/actions/actions";

export default async function Home() {
  const posts = allPosts
    ? allPosts
        ?.sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime(),
        )
        // 3 most recent  (for now)
        ?.filter((_, i) => i < 3)
    : [];

  const views = await getTotalBlogViews();

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
          <Stats views={views} />
        </div>

        <p className="max-w-lg animate-in text-primary">
          Hi, I&apos;m Gerald kamau, a software engineer who loves and enjoys
          writing code. In addition to coding, I&apos;m a big watching formula
          one fan, I create music and occasionally upload some beats on{" "}
          <a
            href="https://www.youtube.com/@geralddd.g/featured"
            className="underline"
          >
            YouTube
          </a>
        </p>

        <Connect />
      </div>

      <div className="flex animate-in flex-col gap-12  ">
        {/* <Projects /> */}
        <span className="mx-auto flex w-full  items-center justify-between ">
          <h2 className="animate-in text-xl  font-semibold tracking-tight">
            My innovative ventures
          </h2>

          <Link
            href="/projects"
            className="hover:text-primar text-secondary underline underline-offset-4"
          >
            View All
          </Link>
        </span>

        <ProjectComponent />

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
