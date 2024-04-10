"use client";

import { useState } from "react";
import DropDownMenuComponent from "./drop-down";
import { CiEdit, CiTrash } from "react-icons/ci";
import DeleteDialog from "@/components/custom/delete-dialog";
import Modal from "../modal/modal-component";
import { Snippet } from "../../types/snippets";

type Props = {
  id?: string;
  code_id?: string;
  snippet: string;
};

const actions = [
  {
    label: "Delete",
    icon: <CiTrash />,
    onClick: (snippet: any, setOpen: any, setSelectedSnippet: any) => {
      setOpen(true);
      console.log("id", snippet);
      // setSelectedSnippet(snippet._id);
    },
  },
];
export default function DeleteSnippet({ id, code_id, snippet }: Props) {
  console.log("code", code_id);
  const [open, setOpen] = useState<boolean>(false);
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
          dialogTitle="Delete Snippet"
          open={open}
          maxHeight="max-h-[210px]"
          setOpen={setOpen}
          icon={<CiTrash />}
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
