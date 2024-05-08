import { CiEdit } from "react-icons/ci";
import useActions from "../../hooks/useAction";
import Modal from "../modal/modal-component";
import DropDownMenuComponent from "./drop-down";

type Props = {
  id?: string;
  code_id?: string;
  snippet: string;
  text: string;
};
export default function EditSnippet({ id, code_id, snippet, text }: Props) {
  const { setOpen, open, actions } = useActions();
  return (
    <div className="">
      <DropDownMenuComponent
        actions={actions}
        snippet={code_id}
        setOpen={setOpen}
      />
      {open && (
        <Modal
          triggerButton="Delete"
          dialogTitle={text}
          open={open}
          maxHeight="max-h-[210px]"
          setOpen={setOpen}
          icon={<CiEdit />}
          formComponent={
            <DeleteDialog
              snippet={snippet}
              id={code_id}
              setOpen={setOpen}
              actionItem="Snippet"
            />
          }
        />
      )}
    </div>
  );
}
