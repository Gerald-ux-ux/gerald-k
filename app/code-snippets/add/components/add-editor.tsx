import { PlusIcon } from "lucide-react";

export default function AddEditor({ handleAdd }: { handleAdd: any }) {
  return (
    <button
      onClick={handleAdd}
      className="flex items-center gap-2  text-primary"
    >
      Add another snippet
      <PlusIcon width={20} height={20} />
    </button>
  );
}
