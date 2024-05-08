import DeleteSnippet from "./delete-snippet";

type Props = {
  code?: any;
  id?: string;
  text: string;
  snippetType: string;
};
export default function ActionsComponent({
  code,
  id,
  snippetType,
  text,
}: Props) {
  return (
    <>
      <DeleteSnippet text={text} code_id={code || id} snippet={snippetType} />
    </>
  );
}
