import { PlusIcon } from "lucide-react";

export default function AddEditor({ handleAdd }: { handleAdd: any }) {
  return (
    <button
      onClick={handleAdd}
      className="flex w-56 items-center  gap-2 rounded-lg p-2 text-primary hover:bg-secondaryA"
    >
      Add another snippet
      <PlusIcon width={20} height={20} />
    </button>
  );
}
