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

type Props = {
  actions: any;
  snippet: any;
  setOpen: any;
};

export default function DropDownMenuComponent({
  actions,
  snippet,
  setOpen,
}: any) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <BsThreeDots />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-primary bg-primary ">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {actions.map((action: any) => (
          <DropdownMenuItem
            key={action.label}
            className="flex w-full gap-2 rounded-md p-2 hover:bg-secondary "
            onClick={() => action.onClick(snippet, setOpen)}
          >
            {action.icon} {action.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
