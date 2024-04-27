import { Button } from "@/components/ui/button";
import Link from "next/link";

function HomePage() {
  return (
    <div className="pt-14 text-center">
      <h1 className="mb-2 text-5xl font-bold">Welcome to A11y Shop</h1>
      <p className="mb-8 text-lg font-medium text-muted-foreground">
        Browse through our products
      </p>
      <Button asChild>
        <Link href="/shop">View Products</Link>
      </Button>
    </div>
  );
}

export default HomePage;
