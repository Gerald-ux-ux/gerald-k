import Image from "next/image";
import Avatar from "@/public/geraldavatar.jpeg";
import Stats from "@/components/Stats";
import Connect from "@/components/home/Connect";
import PostList from "./blog/components/ui/PostList";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex animate-in flex-col gap-8">
        <div className="">
          <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
            Gerald Kamau
          </h1>
          <p className="animate-in  text-secondary">
            I write code and I make beats.
          </p>
        </div>

        <div className="animate-in flex-col text-secondary md:flex-row md:items-center flex">
          <Image
            src={Avatar}
            width={70}
            height={70}
            alt="A photo of Gerald"
            className="rounded-full"
          />
          <Stats />
        </div>

        <p className="animate-in text-primary max-w-lg">
          Hi, I&apos;m Gerald kamau, a software engineer who loves building cool
          things with code. In addition to coding, I also make YouTube videos,
          where I focus on tech, creative vlogs, and personal development.
        </p>

        <Connect />

        <div className="flex animate-in flex-col gap-8">
          <h2 className="text-secondary">Latest posts & Code snippets</h2>
          <PostList />

          <div className="flex  justify-between w-full">
            <Link
              href="/blog"
              className=" underline underline-offset-4 hover:text-primary text-secondary"
            >
              See all blogs
            </Link>

            <Link
              href="/blog"
              className=" underline underline-offset-4 hover:text-primary text-secondary"
            >
              See all code snippets
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
