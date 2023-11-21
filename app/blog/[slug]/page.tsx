import { Metadata, ResolvingMetadata } from "next";
import { allPosts, Post as PostType } from "../../../.contentlayer/generated";
import { notFound } from "next/navigation";

export const getStaticPaths = () => {};

export const getStaticProps = () => {};

type PostProps = {
  post: PostType;
  related: PostType[];
};

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
    <div className="">
      <article>
        <div className="">
          <div className="space-y 2 max-w-lg">
            <h1>{post.title}</h1>
          </div>
        </div>
      </article>
    </div>
  );
}
