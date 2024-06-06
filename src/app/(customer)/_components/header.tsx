import CartDrawer from "./cart/cart-drawer";
import UserDropdown from "./user-dropdown";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Logo() {
  return (
    <Link href="/" className="font-extrabold uppercase sm:text-lg">
      A11y{" "}
      <span className="-ml-1 text-brand-500 dark:text-brand-400">Shop</span>
    </Link>
  );
}

function Header() {
  return (
    <header className="sticky inset-0 z-10 bg-background/75 py-4 backdrop-blur-md">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-10">
          <Logo />
          <nav>
            <ul className="flex">
              <li>
                <Button asChild variant="ghost" className="max-sm:px-2">
                  <Link href="/shop">Shop</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="ghost" className="max-sm:px-2">
                  <Link href="#">About</Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-1">
          <UserDropdown />
          <CartDrawer />
        </div>
      </div>
    </header>
  );
}

export default Header;
