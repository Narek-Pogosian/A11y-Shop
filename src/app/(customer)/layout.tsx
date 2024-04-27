import Header from "./_components/header";
import Footer from "./_components/footer";
import SkipLink from "./_components/skip-link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-col">
      <SkipLink />
      <Header />
      <main className="container flex-1 py-8" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
