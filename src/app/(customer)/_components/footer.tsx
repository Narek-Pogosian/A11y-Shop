import { Logo } from "./header";

function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container flex justify-between">
        <div className="flex items-center gap-8">
          <Logo />
          <p className="text-sm font-medium text-muted-foreground">
            © 2024 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
