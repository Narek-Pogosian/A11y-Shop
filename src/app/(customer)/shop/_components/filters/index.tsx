import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { type ProductsSearchParams } from "@/lib/validations/products-searchparams";
import SortingSelect from "./sorting-select";

interface FiltersProps {
  searchParams: ProductsSearchParams;
}

function Filters({ searchParams }: FiltersProps) {
  return (
    <div className="mb-4 flex flex-col gap-4 xs:flex-row">
      <Button className="w-fit rounded-full">
        <Filter className="mr-2 size-5" />
        All Filters
      </Button>
      <SortingSelect
        initalValue={{ orderBy: searchParams.orderBy, dir: searchParams.dir }}
      />
    </div>
  );
}

export default Filters;
