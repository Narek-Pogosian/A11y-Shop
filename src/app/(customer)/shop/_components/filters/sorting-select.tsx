"use client";

import {
  sortOptions,
  type SortOptionValue,
} from "@/lib/constants/sorting-options";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

interface SortingSelectProps {
  initalValue: SortOptionValue;
}

function SortingSelect({ initalValue }: SortingSelectProps) {
  const router = useRouter();

  const defaultValue =
    initalValue.dir && initalValue.orderBy ? JSON.stringify(initalValue) : "";

  function handleValueChange(value: string) {
    // TODO: Add error handling and validation
    // eslint-disable-next-line
    router.push(setSortQuery(value ? JSON.parse(value) : ""));
  }

  return (
    <Select defaultValue={defaultValue} onValueChange={handleValueChange}>
      <SelectTrigger className="w-fit min-w-[261px] rounded-full border-neutral-400 px-4 font-semibold dark:border-neutral-600">
        <span className="mr-2">Sort by:</span>{" "}
        <SelectValue placeholder="Release Descending" />
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
            // Makes sure Release Ascending has "" as value
            value={option.value ? JSON.stringify(option.value) : ""}
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
