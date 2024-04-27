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
      className="fixed left-2 top-2 opacity-0 focus:opacity-100"
    >
      Skip to content
    </Button>
  );
}

export default SkipLink;
