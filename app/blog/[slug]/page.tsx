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
    },
  };

  return metadata;
}

export default async function Post({ params }: { params: any }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-20">
      {/* <article>
        <div className="flex animate-in flex-col gap-8">
          <div className="max-w-xl space-y-2">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary">
              {post.title}
            </h1>
            <p className="text-lg leading-tight text-secondary md:text-xl">
              {post.summary}
            </p>
          </div>

          <div className="flex max-w-none items-center gap-4">
            <Image
              src={Avatar}
              alt="avatar-img"
              width={40}
              height={40}
              className="rounded-full bg-secondary"
            />

            <div className="leading-light">
              <p className="font-medium text-primary">Gerald Kamau</p>
              <p>
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>

                {post.updatedAt
                  ? `(updated ${formatDate(post.publishedAt)})`
                  : ""}

                {" . "}
                <ViewCounter post={post} />
              </p>
            </div>
          </div>
        </div>
      </article> */}
    </div>
  );
}
