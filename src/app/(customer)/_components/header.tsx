import ThemeToggle from "@/components/theme-toggle";
import Link from "next/link";

function Header() {
  return (
    <header className="border-b py-2">
      <div className="container flex items-center justify-between">
        <div>
          <Link href="/" className="text-lg font-bold uppercase">
            A11y Shop
          </Link>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;
