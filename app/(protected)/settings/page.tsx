import React from "react";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
const SettingPage = async () => {
  const handleSignOut = async () => {
    "use server";
    await signOut();
  };
  const res = await auth();

  return (
    <div>
      {JSON.stringify(res)}
      

      <form action={handleSignOut}>
        <Button variant={"outline"} size={"lg"} type="submit">
          SignOut
        </Button>
      </form>
    </div>
  );
};

export default SettingPage;
