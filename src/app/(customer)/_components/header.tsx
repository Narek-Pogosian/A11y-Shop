import ThemeToggle from "@/components/theme-toggle";
import CartDrawer from "./cart/cart-drawer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Logo() {
  return (
    <Link href="/" className="text-lg font-extrabold uppercase">
      A11y <span className="text-secondary -ml-1">Shop</span>
    </Link>
  );
}

function Header() {
  return (
    <header className="border-b py-2">
      <div className="container flex items-center justify-between">
        <div className="flex items-center md:gap-10">
          <Logo />
          <nav>
            <ul className="flex">
              <li>
                <Button asChild variant="ghost">
                  <Link href="/shop">Shop</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="ghost">
                  <Link href="#">About</Link>
                </Button>
              </li>
            </ul>
          </nav>
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
