import ThemeToggle from "@/components/theme-toggle";
import CartDrawer from "./cart/cart-drawer";
import Link from "next/link";

function Header() {
  return (
    <header className="py-2">
      <div className="container flex items-center justify-between">
        <div className="flex items-center md:gap-10">
          <Link href="/" className="text-2xl font-extrabold uppercase">
            A11y
          </Link>
          <nav>
            <ul className="flex items-center gap-4">
              <li>
                <Link href="/shop" className="font-semibold hover:underline">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#" className="font-semibold hover:underline">
                  About
                </Link>
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
