import { Button } from "@/components/ui/button";
import Link from "next/link";

function NotFound() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center pt-14">
      <h1 className="mb-4 text-7xl font-bold">404</h1>
      <p className="mb-8 text-2xl font-semibold">Page not found</p>
      <Button asChild>
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}

export default NotFound;
