"use client";

import { Button } from "@/components/ui/button";
import { setNextPage, setPreviousPage } from "@/lib/utils/search-params";
import { useRouter } from "next/navigation";

type PaginationProps = {
  hasNext: boolean;
  hasPrevious: boolean;
  currentPage: number | string;
};

const Pagination = ({ hasNext, hasPrevious, currentPage }: PaginationProps) => {
  const router = useRouter();

  if (!hasNext && !hasPrevious) {
    return null;
  }

  return (
    <nav
      aria-label="pagination"
      className="mt-auto flex justify-center gap-4 pt-6"
    >
      <Button
        role="link"
        variant="ghost"
        disabled={!hasPrevious}
        onClick={() => router.push(setPreviousPage())}
        className="disabled:opacity-0"
      >
        Previous <span className="sr-only">page</span>
      </Button>
      <span className="inline-flex items-center rounded border px-4">
        <span className="sr-only">Current page is</span> {currentPage}
      </span>
      <Button
        role="link"
        variant="ghost"
        disabled={!hasNext}
        onClick={() => router.push(setNextPage())}
        className="disabled:opacity-0"
      >
        Next <span className="sr-only">page</span>
      </Button>
    </nav>
  );
};

export default Pagination;
