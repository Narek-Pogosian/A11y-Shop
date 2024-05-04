import ThemeToggle from "@/components/theme-toggle";
import CartDrawer from "./cart/cart-drawer";
import Link from "next/link";

function Header() {
  return (
    <header className="border-b py-2">
      <div className="container flex items-center justify-between">
        <div>
          <Link href="/" className="text-lg font-bold uppercase">
            Logo
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <CartDrawer />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;
