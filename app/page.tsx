import Image from "next/image";
import Avatar from "@/public/geraldavatar.jpeg";
import Stats from "@/components/Stats";
import Connect from "@/components/home/Connect";
import PostList from "./blog/components/ui/PostList";
import Link from "next/link";
import { allPosts } from "@/.contentlayer/generated";
import { PAGE_HEADER } from "@/lib/uiConstants";

export default function Home() {
  const posts = allPosts
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    // 3 most recent  (for now)
    .filter((_, i) => i < 3);

  return (
    <div className="flex max-w-[700px] flex-col mx-auto gap-16 md:gap-24">
      <div className="flex animate-in flex-col gap-8">
        <div className="">
          <h1 className={PAGE_HEADER}>Gerald Kamau</h1>
          <p className="animate-in  text-secondary">
            I write code and I make beats.
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
          Hi, I&apos;m Gerald kamau, a software engineer who loves building cool
          things with code. In addition to coding, I also make YouTube videos,
          where I focus on tech, creative vlogs, and personal development.
        </p>

        <Connect />
      </div>

      <div className="flex animate-in flex-col gap-8  ">
        <h2 className="text-secondary">Latest posts & Code snippets</h2>
        <PostList posts={posts} />

        <div className="flex  w-full justify-between">
          <Link
            href="/blog"
            className=" text-secondary underline underline-offset-4 hover:text-primary"
          >
            See all blogs
          </Link>

          <Link
            href="/blog"
            className=" text-secondary underline underline-offset-4 hover:text-primary"
          >
            See all code snippets
          </Link>
        </div>
      </div>
    </div>
  );
}
