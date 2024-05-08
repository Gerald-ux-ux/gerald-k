"use client";

import { useState } from "react";
import DropDownMenuComponent from "./drop-down";
import { CiTrash } from "react-icons/ci";
import DeleteDialog from "@/components/custom/delete-dialog";
import Modal from "../modal/modal-component";
import useActions from "../../hooks/useAction";

type Props = {
  id?: string;
  code_id?: any;
  snippet: string;
  text: string;
};

export default function DeleteSnippet({ id, code_id, snippet, text }: Props) {
  const { deleteAction, setOpen, open } = useActions();

  return (
    <div className="">
      <DropDownMenuComponent
        actions={deleteAction}
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
