import { allPosts } from "@/.contentlayer/generated";
import Categories from "@/components/home/categories";
import Connect from "@/components/home/Connect";
import Stats from "@/components/Stats";
import { PAGE_HEADER } from "@/lib/uiConstants";
import Image from "next/image";
import Link from "next/link";
import Avatar from "public/geraldavatar.jpeg";

import PostList from "./blog/components/ui/PostList";
import ProjectComponent from "./projects/components/projects";

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

  const views = {
    total: 85,
  };

  return (
    <div className="mx-auto flex max-w-[700px]  flex-col gap-16 px-6 md:gap-24">
      <div className="flex animate-in flex-col gap-8">
        <div className="flex animate-in flex-col gap-6 text-secondary md:flex-row md:items-center">
          <Image
            src={Avatar}
            width={70}
            height={70}
            alt="A photo of Gerald"
            className="rounded-full"
          />
          <div className="">
            <h1 className={PAGE_HEADER}>Hey I&apos;m Gerald 👋</h1>
            <p className="animate-in  text-secondary">
              Have a look at some of the things i have done
            </p>
          </div>
          {/* <Stats views={views} /> */}
        </div>

        <p className="max-w-lg animate-in text-primary">
          I&apos;m a fullstack developer and community builder. I launched a
          beta version of an app to boost productivity amongst developers. Check
          <Link
            target="blank"
            href="https://codesnippets-six.vercel.app/"
            className="text-link "
          >
            {" "}
            It{" "}
          </Link>
          out
        </p>

        <Connect />
      </div>

      <div className="flex animate-in flex-col gap-12  ">
        <span className="mx-auto flex w-full items-center  justify-between text-base ">
          <h2 className="animate-in text-base  font-semibold tracking-tight">
            Innovative ventures
          </h2>
          <Link
            href="/projects"
            className="text-sm text-secondary underline underline-offset-4 hover:text-primary"
          >
            View All
          </Link>
        </span>
        <Categories />
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
            target="_blank"
            href="https://codesnippets-six.vercel.app/"
            className=" text-secondary underline underline-offset-4 hover:text-primary"
          >
            See all code snippets
          </Link>
        </div>
      </div>
    </div>
  );
}
