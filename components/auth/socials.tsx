import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";

type Props = {};

const Socials = (props: Props) => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button className="w-full" variant={"outline"} size={"lg"}>
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button className="w-full" variant={"outline"} size={"lg"}>
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Socials;
