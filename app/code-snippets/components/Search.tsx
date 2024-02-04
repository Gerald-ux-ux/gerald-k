import { CiSearch } from "react-icons/ci";

type SearchProps = {
  query?: string;
  data: string[];
};

export default function Search({ query, data }: SearchProps) {





  return (
    <form
      action=""
      className="flex w-full items-center text-secondary  gap-2 rounded-lg bg-secondary p-3"
    >
      <CiSearch className="text-xl " />

      <input
        className="bg-inherit focus:outline-none"
        placeholder="Search for a snippet..."
      />
    </form>
  );
}
