import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
export const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

type Props = {
  label: string;
};

const Header = ({ label }: Props) => {
  return (
    <div className="w-full flex-col flex gap-y-4 items-center justify-center mt-4">
      <h1 className={cn("text-3xl font-semibold", poppinsFont.className)}>
       🔐 Auth
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export default Header;
