"use client";

import { sortOptions, type SortOptionValue } from "@/config/sorting-options";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";

function SortingSelect() {
  const router = useRouter();
  const isMounted = useIsMounted();
  const searchParams = useSearchParams();

  const [value, setValue] = useState<string>("");

  useEffect(() => {
    const val = {
      orderBy: searchParams.get("orderBy") ?? "createdAt",
      dir: searchParams.get("dir") ?? "desc",
    };

    setValue(JSON.stringify(val));
  }, [searchParams]);

  function handleValueChange(value: string) {
    setValue(value);
    // eslint-disable-next-line
    router.push(setSortQuery(value ? JSON.parse(value) : ""));
  }

  return (
    <Select value={value} onValueChange={handleValueChange}>
      <SelectTrigger
        className="w-fit min-w-[261px] rounded-full border bg-element px-4 font-semibold shadow-md"
        aria-label="Choose sorting option"
      >
        <span className="mr-2">Sort by:</span>{" "}
        {isMounted ? (
          <SelectValue placeholder="Release Descending" />
        ) : (
          <Skeleton className="h-5 w-36" />
        )}
      </SelectTrigger>
      <SelectContent
        ref={(ref) => {
          if (!ref) return;
          ref.ontouchstart = (e) => {
            e.preventDefault();
          };
        }}
      >
        {sortOptions.map((option) => (
          <SelectItem
            value={JSON.stringify(option.value)}
            className="capitalize"
            key={option.label}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default SortingSelect;

function setSortQuery(value: SortOptionValue | null | undefined) {
  const searchParams = new URLSearchParams(window.location.search);

  if (!value) {
    searchParams.delete("dir");
    searchParams.delete("orderBy");
  } else {
    if (!value?.dir || !value.orderBy) {
      searchParams.delete("dir");
      searchParams.delete("orderBy");
    } else {
      searchParams.set("dir", value.dir);
      searchParams.set("orderBy", value.orderBy);
    }
  }

  searchParams.delete("page");

  return `${window.location.pathname}?${searchParams.toString()}`;
}
