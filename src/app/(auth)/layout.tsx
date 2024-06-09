import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full lg:grid lg:grid-cols-5">
      <div className="relative flex flex-col items-center justify-center max-lg:pt-28 lg:col-span-3">
        <Button
          variant="outline"
          className="absolute left-4 top-8 text-xs sm:left-8"
          size="sm"
          asChild
        >
          <Link href="/shop">
            <MoveLeft className="mr-2 size-4" /> Back
          </Link>
        </Button>
        <div className="w-full max-w-xl px-4">{children}</div>
      </div>
      <div className="hidden bg-brand-600 lg:col-span-2 lg:block"></div>
    </div>
  );
}

export default layout;
