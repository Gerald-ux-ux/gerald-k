import { defineDocumentType, makeSource } from "contentlayer/source-files";

// Should be a ts
export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `blog/**/*.mdx`,
  fields: {},
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
});
