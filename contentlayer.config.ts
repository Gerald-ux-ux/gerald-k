import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from "contentlayer/source-files"; // eslint-disable-line
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import GithubSlugger from "github-slugger";

const getSlug = (doc: any) => doc._raw.sourceFileName.replace(/\.mdx$/, "");

/** Post definition */

const postComputeFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc),
  },
  image: {
    type: "string",
    resolve: (doc) => `/blog/${getSlug(doc)}/image.png`,
  },
  og: {
    type: "string",
    resolve: (doc) => `/blog/${getSlug(doc)}/image.png`,
  },


  /**This section is not necessary. I personally added it to make the UX(user-experience) better so people can easily jump into a heading title
   * References: ["https://delba.dev/blog/next-blog-structured-mdx-content-with-contentlayer#complete-code", "https://youtu.be/YC6LqIYVHxI?si=iyYVOlqRuAXSpjiS"]
   * Explanation: {
   * We define a type headings so that we can access the headings on our blog.
   * Install github slugger & rehype-autolink-headings
   * Just copy the regexHeader as it is.
   * }
   */
  headings: {
    type: "json",
    resolve: async (doc) => {
      const slugger = new GithubSlugger();
      const regXHeader = /\n\n(?<flag>#{1,6})\s+(?<content>.+)/g;

      // Check if doc.body.raw is defined and non-empty
      if (doc.body.raw && doc.body.raw.trim() !== "") {
        const matches = Array.from(doc.body.raw.matchAll(regXHeader));

        // Use map on the array of matches
        const headings = matches.map(({ groups }: any) => {
          const flag = groups?.flag;
          const content = groups?.content;
          return {
            heading: flag?.length,
            text: content,
            slug: content ? slugger.slug(content) : undefined,
          };
        });

        return headings;
      }

      // Return an empty array if there are no headings
      return [];
    },
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `blog/**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    updatedAt: { type: "string", required: false },
    tags: { type: "json", required: false },
    featured: { type: "boolean", required: false },
    shortTitle: { type: "string", required: false },
  },

  computedFields: postComputeFields,
}));

/** Projects definition */

const projectComputeFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc),
  },
  image: {
    type: "string",
    resolve: (doc) => `/projects/${getSlug(doc)}/image.png`,
  },
};

export const Project = defineDocumentType(() => ({
  name: "Project",
  contentType: "mdx",
  filePathPattern: `project/**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    time: { type: "string", required: true },
    url: { type: "string", required: false },
    tags: { type: "json", required: false },
  },
  computedFields: projectComputeFields,
}));

export default makeSource({
  contentDirPath: "content",

  documentTypes: [Post, Project],
  mdx: {
    // @ts-expect-error
    rehypePlugins: [rehypePrism, rehypeSlug],
  },
});
