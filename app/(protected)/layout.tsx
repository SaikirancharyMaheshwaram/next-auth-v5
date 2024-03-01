// app/layout.tsx
import { auth } from "@/auth";
import React from "react";
import { SessionProvider } from "next-auth/react";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = async ({ children }) => {
  const session = await auth();

  return (
    <main>
      <SessionProvider session={session}>{children}</SessionProvider>
    </main>
  );
};

export default Layout;
