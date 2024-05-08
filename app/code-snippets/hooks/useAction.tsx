import { useState } from "react";
import { CiEdit, CiTrash } from "react-icons/ci";

export default function useActions() {
  const [open, setOpen] = useState<boolean>(false);

  const actions = [
    {
      label: "Edit",
      icon: <CiEdit />,
      onClick: () => {
        setOpen(true);
      },
    },
    {
      label: "Delete",
      icon: <CiTrash />,
      onClick: () => {
        setOpen(true);
      },
    },
  ];

  return {
    actions,
    setOpen,
    open,
  };
}
