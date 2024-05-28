import { Button } from "@/components/ui/button";
import Link from "next/link";

function HomePage() {
  return (
    <div className="pt-24 text-center">
      <h1 className="mb-2 text-5xl font-bold">
        Welcome to{" "}
        <span className="-mr-2.5 text-brand-500 dark:text-brand-400">A11y</span>{" "}
        Shop
      </h1>
      <p className="mb-8 text-lg font-medium text-muted-foreground">
        Browse through our products
      </p>
      <Button asChild className="rounded-full">
        <Link href="/shop">View Products</Link>
      </Button>
    </div>
  );
}

export default HomePage;
