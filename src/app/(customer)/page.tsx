import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function HomePage() {
  return (
    <div className="relative h-[300px] md:h-[550px]">
      <Image
        src="/desktop-hero.jpg"
        alt=""
        priority
        fill
        className="relative w-full object-cover after:absolute after:h-full after:w-full after:bg-danger-400"
      />
      <div className="absolute flex h-full w-full flex-col items-center justify-center bg-black/45 text-white">
        <h1 className="mb-8 text-2xl font-bold md:text-5xl">
          Welcome to <span className="text-brand-400 md:-mr-2.5">A11y</span>{" "}
          Shop
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
