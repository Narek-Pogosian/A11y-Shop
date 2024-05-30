import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function HomePage() {
  return (
    <div className="relative h-[300px] lg:h-[500px]">
      <Image
        src="/desktop-hero.jpg"
        alt=""
        fill
        className="relative w-full object-cover after:absolute after:h-full after:w-full after:bg-danger-400"
      />
      <div className="absolute flex h-full w-full flex-col items-center justify-center bg-black/40 text-white">
        <h1 className="mb-8 text-5xl font-bold">
          Welcome to <span className="-mr-2.5 text-brand-400">A11y</span> Shop
        </h1>
        <Button
          asChild
          className="rounded-full shadow-bezel"
          variant="secondary"
        >
          <Link href="/shop">View Products</Link>
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
