import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <p className="font-semibold p-4">
      <Button size={"lg"} variant={"outline"}> Hello Auth!</Button>
    </p>
  );
}
