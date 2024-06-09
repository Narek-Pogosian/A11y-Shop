import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

async function layout({ children }: { children: React.ReactNode }) {
  const session = await getServerAuthSession();

  if (session?.user.role !== "admin") throw redirect("/");

  return (
    <div className="flex">
      <aside className="sticky top-0 h-screen min-w-[280px] bg-card p-6 shadow">
        nav
      </aside>
      <main className="w-full p-6">{children}</main>
    </div>
  );
}

export default layout;
