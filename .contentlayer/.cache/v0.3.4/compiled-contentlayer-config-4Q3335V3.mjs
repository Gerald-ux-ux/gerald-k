// contentlayer.config.ts
import {
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import GithubSlugger from "github-slugger";
var getSlug = (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "");
var postComputeFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc)
  },
  image: {
    type: "string",
    resolve: (doc) => `/blog/${getSlug(doc)}/image.png`
  },
  og: {
    type: "string",
    resolve: (doc) => `/blog/${getSlug(doc)}/image.png`
  },
  /**TH */
  headings: {
    type: "json",
    resolve: async (doc) => {
      const slugger = new GithubSlugger();
      const regXHeader = /\n\n(?<flag>#{1,6})\s+(?<content>.+)/g;
      if (doc.body.raw && doc.body.raw.trim() !== "") {
        const matches = Array.from(doc.body.raw.matchAll(regXHeader));
        const headings = matches.map(({ groups }) => {
          const flag = groups?.flag;
          const content = groups?.content;
          return {
            heading: flag?.length,
            text: content,
            slug: content ? slugger.slug(content) : void 0
          };
        });
        return headings;
      }
      return [];
    }
  }
};
var Post = defineDocumentType(() => ({
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
    shortTitle: { type: "string", required: false }
  },
  computedFields: postComputeFields
}));
var projectComputeFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc)
  },
  image: {
    type: "string",
    resolve: (doc) => `/blog/${getSlug(doc)}/image.png`
  }
};
var Project = defineDocumentType(() => ({
  name: "Project",
  contentType: "mdx",
  filePathPattern: `project/**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    time: { type: "string", required: true },
    url: { type: "string", required: false },
    tags: { type: "json", required: false }
  },
  computedFields: projectComputeFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Project],
  mdx: {
    // @ts-expect-error
    rehypePlugins: [rehypePrism, rehypeSlug]
  }
});
export {
  Post,
  Project,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-4Q3335V3.mjs.map
