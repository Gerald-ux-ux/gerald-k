import { Schema, Document, model } from "mongoose";

interface ICodeSnippet extends Document {
  title: string;
  author: string;
  code: { heading: string; content: string }[];
  createdAt: Date;
  img: string;
  tags: string[];
}

const codeSnippetSchema = new Schema<ICodeSnippet>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  code: [
    {
      heading: { type: String, required: true },
      content: { type: String, required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },
  img: { type: String, required: false },
  tags: [{ type: String, required: false }],
});

const CodeSnippetModel = model<ICodeSnippet>("CodeSnippet", codeSnippetSchema);

export default CodeSnippetModel;
