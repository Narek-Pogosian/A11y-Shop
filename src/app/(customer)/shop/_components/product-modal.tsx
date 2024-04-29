"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { useRef } from "react";

function ProductModal() {
  const router = useRouter();
  const refElement = useRef(document.activeElement);

  function handleClose() {
    router.back();

    setTimeout(() => {
      if (refElement.current && refElement.current.tagName === "A") {
        const anchorElement = refElement.current as HTMLAnchorElement;

        // Focus on the anchor element that opened the modal.
        anchorElement.focus();
      }
    }, 50);
  }

  return (
    <Dialog open={true} onOpenChange={handleClose}>
      <DialogContent>Hello</DialogContent>
    </Dialog>
  );
}

export default ProductModal;
