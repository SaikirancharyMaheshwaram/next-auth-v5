"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useCurrentUser } from "@/hooks/use-current-user";
const SettingPage = () => {
  const user = useCurrentUser();
  const onClick = () => {
    signOut();
  };
  return (
    <div>
      <form>
        <Button onClick={onClick} variant={"outline"} size={"lg"} type="submit">
          SignOut
        </Button>
      </form>
    </div>
  );
};

export default SettingPage;
