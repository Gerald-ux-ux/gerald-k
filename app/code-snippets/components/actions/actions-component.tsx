import DeleteSnippet from "./delete-snippet";

type Props = {
  code?: any;
  id?: string;
  text?: string;
  snippetType?: string;
};
export default function ActionsComponent({ code }: Props) {
  return (
    <>
      <DeleteSnippet
        text="Delete this specific code"
        code_id={code}
        snippet="Code"
      />
    </>
  );
}
