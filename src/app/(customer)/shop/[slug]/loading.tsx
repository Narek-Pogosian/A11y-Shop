import { Skeleton } from "@/components/ui/skeleton";

function loading() {
  return (
    <>
      <Skeleton className="mb-6 h-8 w-40" />

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Skeleton className="mb-3 h-7 w-24" />
          <div className="mb-8 max-w-lg space-y-2.5 ">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
          </div>

          <Skeleton className="h-11 w-52" />
        </div>

        <Skeleton className="aspect-[3/2] " />
      </div>
    </>
  );
}

export default loading;
