import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from "contentlayer/source-files"; // eslint-disable-line
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";

const getSlug = (doc: any) => doc._raw.sourceFileName.replace(/\.mdx$/, "");

/** For the blog post */

/**Re-search on this */
const postComputedFields: ComputedFields = {
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
};

/**Posts doc type */
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  /**Fields */
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    updatedAt: { type: "string", required: false },
    tags: { type: "json", required: false },
    featured: { type: "boolean", required: false },
    shortTitle: { type: "string", required: false, default: "" },
  },
  computedFields: postComputedFields,
}));

/**Code snippets (re-search) */
// const codeSnippetsComputedFields: ComputedFields = {
//   slug: {
//     type: "string",
//     resolve: (doc) => getSlug(doc),
//   },
//   image: {
//     type: "string",
//     resolve: (doc) => `/projects/${getSlug(doc)}/image.png`,
//   },
// };

// export const CodeSnippets = defineDocumentType(() => ({
//   name: "Code snippets",
//   filePathPattern: `code-snippets/**/*.mdx`,
//   contentType: "mdx",
//   fields: {
//     title: { type: "string", required: true },
//     summary: { type: "string", required: true },
//     publishedAt: { type: "string", required: true },
//     updatedAt: { type: "string", required: false },
//     tags: { type: "json", required: false },
//     featured: { type: "boolean", required: false },
//     shortTitle: { type: "string", required: false, default: "" },
//   },
//   computedFields: codeSnippetsComputedFields,
// }));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [rehypePrism, rehypeSlug],
  },
});
