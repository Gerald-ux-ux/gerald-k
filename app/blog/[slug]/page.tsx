/** This file is used to generate dynamic routes
 * See more (https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
 */

import { Metadata, ResolvingMetadata } from "next";
import { allPosts, Post as PostType } from "../../../.contentlayer/generated";
import { notFound } from "next/navigation";
import Image from "next/image";
import Avatar from "@/public/geraldavatar.jpeg";
import { formatDate } from "@/lib/formatdate";
import ViewCounter from "../components/ui/ViewCounter";
import MdxWrapper from "../components/ui/MdxWrapper";
import Link from "next/link";
import OnThisPage from "../components/ui/OnThisPage";
import Tags from "@/components/Tags";
import { getSpecificBlogViews } from "../actions/actions";

type PostProps = {
  post: PostType;
  related: PostType[];
};

/** Generating dynamic metadata
 * See more (https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
 */

type Props = {
  params: {
    slug: string;
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route parameters
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    throw new Error("Post not found");
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
  } = post;

  // Missing the image field
  const metadata: Metadata = {
    title: `${title} | Gerald`,
    description,
    openGraph: {
      title: `${title} | Gerald`,
      description,
      type: "article",
      publishedTime,
      url: `https://gerald-k.vercel.app/${title}`,
      images: [
        {
          url: `https://gerald-k.vercel.app?title=${title}`,
          alt: title,
        },
      ],
    },
  };

  return metadata;
}

export default async function Post({ params }: { params: any }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const views = await getSpecificBlogViews(post.slug);

  return (
    <>
      <OnThisPage headings={post.headings} />
      <div className="mx-auto flex max-w-[700px] flex-col gap-20">
        <div className="flex flex-col gap-20">
          <article>
            <div
              className="flex animate-in flex-col gap-8"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              <div className="max-w-xl space-y-2">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-primary md:text-3xl">
                  {post.title}
                </h1>
                <p className="text-lg leading-tight text-secondary md:text-xl">
                  {post.summary}
                </p>
              </div>

              <div className="flex max-w-none items-center gap-4">
                {/* Might change the sizing of the img */}
                <Image
                  src={Avatar}
                  alt="avatar-img"
                  width={40}
                  height={40}
                  className="rounded-full bg-secondary"
                />

                <div className="leading-light">
                  <p className="font-medium text-primary">Gerald Kamau</p>
                  <div className="flex gap-2">
                    <time dateTime={post.publishedAt}>
                      {formatDate(post.publishedAt)}
                    </time>

                    {post.updatedAt
                      ? `(updated ${formatDate(post.publishedAt)})`
                      : ""}

                    <ViewCounter views={views} />
                  </div>
                </div>
              </div>
            </div>

            {post.image && (
              <>
                <div className="h-8" />
                <Image
                  src={post.image}
                  alt={`${post.title} post image`}
                  width={700}
                  height={350}
                  className="-ml-6 w-[calc(100%+48px)] max-w-none animate-in md:rounded-lg lg:-ml-16 lg:w-[calc(100%+128px)]"
                  style={{ "--index": 2 } as React.CSSProperties}
                  priority
                  quality={100}
                />
              </>
            )}

            {/* Height between name and blog body */}
            <div className="h-16" />
            <div
              className="prose prose-neutral animate-in"
              style={{ "--index": 3 } as React.CSSProperties}
            >
              <MdxWrapper code={post.body.code} />
            </div>
          </article>

          <Tags tags={post.tags} />

          <Link href="/blog">← All Blogs</Link>
        </div>
      </div>
    </>
  );
}
