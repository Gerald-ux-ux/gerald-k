// import { allPosts } from "@/.contentlayer/generated";
// import clsx from "clsx";

// // const post = allPosts.find((post) => post.slug === params.slug);

// export default function OnThisPage() {
//   return (

//     <div className="sticky top-6 hidden h-0 xl:!col-start-4 xl:row-start-2 xl:block">
//       {/* <div className="flex flex-col">
//         {post?.title ? (
//           <div className="flex flex-col text-sm">
//             <h1 className="text-xl uppercase text-primary">On this page</h1>

//             {post?.title.map((heading) => (
//               <div className="" key={heading.slug}>
//                 <a
//                   href={`#${heading.slug}`}
//                   className={clsx(
//                     "hove:text-secondary block text-primary underline underline-offset-2 transition-all",
//                     {
//                       "pl-2": heading.heading === 2,
//                       "pl-4": heading.heading === 3,
//                     },
//                   )}
//                 >
//                   {heading.text}
//                 </a>
//               </div>
//             ))}
//           </div>
//         ) : null}
//       </div> */}
//     </div>
//   );
// }

import clsx from "clsx";
import React from "react";

interface Heading {
  heading: number;
  text: string;
  slug: string;
}

type HeadingProps = {
  headings: Heading[];
};

const OnThisPage = ({ headings }: HeadingProps) => {
  return (
    <>
      <div className="sticky right-0 top-6"></div>
      <div className="sticky  right-0 top-6 h-0 xl:!col-start-4 xl:row-start-2 xl:block">
        <div className="flex flex-col">
          <div className="sticky right-0 top-6 flex  h-0 flex-col text-sm  ">
            <h2>On this page</h2>
            {headings ? (
              <ul>
                {headings.map((heading) => (
                  <li key={heading.slug}>
                    <a
                      href={`#${heading.slug}`}
                      className={clsx(
                        "hove:text-secondary block cursor-pointer text-primary underline underline-offset-2 transition-all",
                        {
                          "pl-2": heading.heading === 2,
                          "pl-4": heading.heading === 3,
                        },
                      )}
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default OnThisPage;
