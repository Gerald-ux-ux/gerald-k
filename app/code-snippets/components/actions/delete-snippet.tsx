import { useState } from "react";

type Props = {
    id?: string
    code_id?: string
}
export default function DeleteSnippet({ id, code_id }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedSnippet, setSelectedSnippet] = useState<any >({});
    return (

    )
}
