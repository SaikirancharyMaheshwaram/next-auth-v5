// app/layout.tsx
import { auth } from "@/auth";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { NavBar } from "./_components/NavBar";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = async ({ children }) => {
  const session = await auth();

  return (
    <main className="h-full w-full">
      <SessionProvider session={session}>
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-y-10
          bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800"
        >
          <NavBar />
          {children}
        </div>
      </SessionProvider>
    </main>
  );
};

export default Layout;
