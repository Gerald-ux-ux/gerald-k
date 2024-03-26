import fs from "fs";
import path from "path";
import matter from "gray-matter";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import GithubSlugger from "github-slugger";

const getSlug = (filePath: string) => path.basename(filePath, ".mdx");

const postComputeFields = {
  slug: {
    type: "string",
    resolve: (doc: any) => getSlug(doc._raw.sourceFileName),
  },
  image: {
    type: "string",
    resolve: (doc: any) =>
      `/blog/${getSlug(doc._raw.sourceFileName)}/image.png`,
  },
  og: {
    type: "string",
    resolve: (doc: any) =>
      `/blog/${getSlug(doc._raw.sourceFileName)}/image.png`,
  },

  headings: {
    type: "json",
    resolve: async (doc: any) => {
      const slugger = new GithubSlugger();
      const regXHeader = /\n\n(?<flag>#{1,6})\s+(?<content>.+)/g;

      if (doc.body.raw && doc.body.raw.trim() !== "") {
        const matches = Array.from(doc.body.raw.matchAll(regXHeader));

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

      return [];
    },
  },
};

const projectComputeFields = {
  slug: {
    type: "string",
    resolve: (doc: any) => getSlug(doc._raw.sourceFileName),
  },
  image: {
    type: "string",
    resolve: (doc: any) =>
      `/projects/${getSlug(doc._raw.sourceFileName)}/image.png`,
  },
};

const getDocumentType = (filePath: string) => {
  if (filePath.includes("blog")) {
    return {
      name: "Post",
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
    };
  } else if (filePath.includes("project")) {
    return {
      name: "Project",
      fields: {
        title: { type: "string", required: true },
        description: { type: "string", required: true },
        time: { type: "string", required: true },
        url: { type: "string", required: false },
        tags: { type: "json", required: false },
      },
      computedFields: projectComputeFields,
    };
  }
};

const parseFile = (filePath: string) => {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  return { ...data, body: content };
};

type DocumentType = {
  name: string;
  fields: Record<string, any>;
  computedFields: Record<string, any>;
};

export const makeSource = ({ contentDirPath }: { contentDirPath: string }) => {
  const documentTypes: DocumentType[] = [];

  const walkSync = (dir: string) => {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        walkSync(filePath);
      } else if (stat.isFile()) {
        const documentType = getDocumentType(filePath);
        if (documentType) {
          const document = parseFile(filePath);
          documentTypes.push({ ...documentType, ...document });
        }
      }
    });
  };

  walkSync(contentDirPath);

  return {
    documentTypes,
    mdx: {
      rehypePlugins: [rehypePrism, rehypeSlug],
    },
  };
};

export default makeSource({
  contentDirPath: "content",
});
