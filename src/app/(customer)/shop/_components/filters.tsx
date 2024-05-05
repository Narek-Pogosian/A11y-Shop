import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import Link from "next/link";

function Filters() {
  return (
    <div className="mb-4 flex">
      <Button>
        <Filter className="mr-2" />
        Filters
      </Button>
      <Link href="/shop?category=fruit">Clear</Link>
    </div>
  );
}

export default Filters;
