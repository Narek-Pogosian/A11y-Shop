"use client";

import { Button } from "@/components/ui/button";

function SkipLink() {
  function handleClick() {
    const main = document.querySelector("main");

    if (main) {
      main.focus();
    }
  }

  return (
    <Button
      onClick={handleClick}
      size="sm"
      className="fixed -left-60 top-2 z-[999] px-1 text-sm focus:left-2"
    >
      Skip to content
    </Button>
  );
}

export default SkipLink;
