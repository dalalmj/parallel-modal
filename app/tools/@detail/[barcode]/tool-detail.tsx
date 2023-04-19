"use client";
import { Dialog } from "@headlessui/react";
import { useRouter } from "next/navigation";

export function ToolDetail({
  tool,
}: {
  tool: {
    tool_name: string;
    manufacturer: string;
    model: string;
    barcode: string;
  };
}) {
  const router = useRouter();
  const handleClose = () => {
    router.replace("/tools");
  };
  return (
    <Dialog open={true} onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0  flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto w-3/5 rounded bg-background">
          <div className="m-4 flex flex-col  rounded-md border p-4">
            <div className="flex flex-row flex-nowrap p-12 gap-4">
              <div className="text-4xl font-bold border-2 rounded-md w-20 h-20 flex justify-center items-center bg-primary text-primary-foreground">
                {tool?.tool_name.substring(0, 1)}
              </div>
              <div>
                <h1 className="text-2xl ">{tool?.tool_name}</h1>
                <h2 className="text-base ">
                  {tool?.manufacturer} - {tool?.model}
                </h2>
                <div className="text-sm text-muted-foreground ">
                  {tool?.barcode}
                </div>
              </div>
            </div>
            <button className="mt-4 self-end" onClick={handleClose}>
              Close
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
