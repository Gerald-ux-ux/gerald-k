"use client";
import { BsThreeDots } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CiEdit, CiTrash } from "react-icons/ci";

import Modal from "./modal/modal-component";
import DeleteDialog from "@/components/custom/delete-dialog";
import { useState } from "react";

const actions = [
  {
    label: "Edit",
    icon: <CiEdit />,
    onClick: (snippet: any) => {
      console.log("clicked", snippet);
    },
  },
  {
    label: "Delete",
    icon: <CiTrash />,
    onClick: (snippet: any, setOpen: any, setSelectedSnippet: any) => {
      setOpen(true);
      setSelectedSnippet(snippet._id);
      console.log("clicked", snippet);
    },
  },
];

type Props = {
  snippet: any;
};
export default function EditSnippet({ snippet }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedSnippet, setSelectedSnippet] = useState();

  return (
    <div className=" ">
      {open && (
        <div>
          <Modal
            triggerButton="Delete"
            dialogTitle="Delete Snippet"
            open={open}
            maxHeight="max-h-[210px]"
            setOpen={setOpen}
            icon={<CiTrash />}
            formComponent={
              <DeleteDialog
                id={selectedSnippet!}
                setOpen={setOpen}
                actionItem="Snippet"
              />
            }
          />
        </div>
      )}

      <DropdownMenu>
        <DropdownMenuTrigger>
          <BsThreeDots />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="border-primary bg-primary ">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {actions.map((action) => (
            <DropdownMenuItem
              key={action.label}
              className="flex w-full gap-2 rounded-md p-2 hover:bg-secondary "
              onClick={() =>
                action.onClick(snippet, setOpen, setSelectedSnippet)
              }
            >
              {action.icon} {action.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
