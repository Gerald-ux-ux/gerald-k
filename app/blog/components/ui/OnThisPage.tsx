import { allPosts } from "@/.contentlayer/generated";
import clsx from "clsx";

// const post = allPosts.find((post) => post.slug === params.slug);

export default function OnThisPage() {
  return (
    <div className="sticky top-6 hidden h-0 xl:!col-start-4 xl:row-start-2 xl:block">
      {/* <div className="flex flex-col">
        {post?.title ? (
          <div className="flex flex-col text-sm">
            <h1 className="text-xl uppercase text-primary">On this page</h1>

            {post?.title.map((heading) => (
              <div className="" key={heading.slug}>
                <a
                  href={`#${heading.slug}`}
                  className={clsx(
                    "hove:text-secondary block text-primary underline underline-offset-2 transition-all",
                    {
                      "pl-2": heading.heading === 2,
                      "pl-4": heading.heading === 3,
                    },
                  )}
                >
                  {heading.text}
                </a>
              </div>
            ))}
          </div>
        ) : null}
      </div> */}
    </div>
  );
}
