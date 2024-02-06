import * as Dialog from "@radix-ui/react-dialog";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { INPUT_STYLE } from "../styles/inputStyle";
import clsx from "clsx";
export default function FeedBack() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="rounded-lg bg-secondary p-1">Feedback</button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <div className="animate- fixed inset-0 z-50  flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm backdrop-filter">
          <Dialog.Overlay className="relative flex md:w-[450px] mx-6  md:mx-auto flex-col items-center justify-center gap-2 rounded-lg bg-tertiary p-4 text-sm w-[300px] md:text-base">
            <div className="flex w-full items-center justify-between">
              <Dialog.Title className="font-medium">
                Leave some feedback
              </Dialog.Title>
              <Dialog.Close asChild>
                <button
                  className="rounded p-0.5 text-lg hover:bg-secondary"
                  aria-label="Close"
                >
                  <MdClose />
                </button>
              </Dialog.Close>
            </div>

            <fieldset className="w-full pt-1 ">
              <textarea
                className={clsx(INPUT_STYLE, "w-full ")}
                placeholder="Leave some feedback on the code-snippet feature to help improve the  experience"
                rows={4}
              />
            </fieldset>
            <div className="i my-2 flex w-full justify-center">
              <Dialog.Close className="flex w-full  flex-col items-center gap-3 text-center">
                <button className=" border-secondaryA w-full rounded-lg border p-2 hover:text-secondary ">
                  Skip
                </button>
                <button className="w-full rounded-lg bg-secondaryA p-2 hover:bg-secondary">
                  Submit
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Overlay>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
