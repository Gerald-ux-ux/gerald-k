import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const values = [
  { label: "JavaScript", value: "javascript" },
  { label: "Python", value: "python" },
  { label: "React.js", value: "react" },
  { label: "Vue.js", value: "vue" },
  { label: "HTML", value: "html" },
  { label: "CSS", value: "css" },
  { label: "SASS", value: "sass" },
  { label: "TypeScript", value: "typescript" },
  { label: "Node.js", value: "nodejs" },
  { label: "PHP", value: "php" },
  { label: "Go", value: "go" },
  { label: "Java", value: "java" },
  { label: "Kotlin", value: "kotlin" },
  { label: "Swift", value: "swift" },
];
export default function LanguageSelector() {
  return (
    <div className="">
      <Select>
        <SelectTrigger className="w-[180px] border-none">
          <SelectValue placeholder={values[0].label} />
        </SelectTrigger>
        <SelectContent className="bg-secondary border-none">
          <SelectGroup className=" ">
            {values.map((value) => (
              <SelectItem
                key={value.value}
                className="hover:bg-primary rounded-md p-2"
                value={value.value}
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
