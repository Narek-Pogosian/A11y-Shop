import ThemeToggle from "@/components/theme-toggle";

function Header() {
  return (
    <header className="border-b py-4">
      <div className="container flex items-center justify-between">
        <div>
          <p>Logo</p>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;
