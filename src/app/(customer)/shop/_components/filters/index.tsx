import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

function Filters() {
  return (
    <div className="mb-4 flex">
      <Button size="sm" variant="outline">
        <Filter className="mr-2" />
        Filters
      </Button>
    </div>
  );
}

export default Filters;
