"use client";

import { Button } from "@/components/ui/button";

function SkipLink() {
  function handleClick() {
    const content = document.getElementById("content");

    if (content) {
      content.focus();
    }
  }
  return (
    <Button
      onClick={handleClick}
      className="fixed left-2 top-4 opacity-0 focus:opacity-100"
    >
      Skip to content
    </Button>
  );
}

export default SkipLink;
