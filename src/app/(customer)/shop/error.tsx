"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="pt-20 text-center">
      <h2 className="mb-8 text-4xl font-bold">Something went wrong</h2>
      <Button onClick={() => window.location.reload()}>Try again</Button>
    </div>
  );
}
