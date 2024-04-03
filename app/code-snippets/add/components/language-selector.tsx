"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { values } from "./languages";
import useEditor from "./hooks/useEditor";

export default function LanguageSelector() {
  const { language, onSelect } = useEditor();

  return (
    <div className="">
      <Select>
        <SelectTrigger className="w-[180px] border-none">
          <SelectValue placeholder={language.label} />
        </SelectTrigger>
        <SelectContent className="border-none bg-secondary">
          <SelectGroup className=" ">
            {values.map((value) => (
              <SelectItem
                key={value.value}
                className="w-full rounded-md p-2 hover:bg-primary"
                value={value.value}
                onClick={() => {
                  console.log("yes");
                  onSelect(language);
                }}
              >
                {value.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
