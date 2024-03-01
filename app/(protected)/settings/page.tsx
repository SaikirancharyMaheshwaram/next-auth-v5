"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
const SettingPage = () => {
  const res = useSession();
  return (
    <div>
      {JSON.stringify(res)}

      <form>
        <Button variant={"outline"} size={"lg"} type="submit">
          SignOut
        </Button>
      </form>
    </div>
  );
};

export default SettingPage;
