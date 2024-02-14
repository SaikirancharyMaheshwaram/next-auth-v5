"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  label: string;
  href: string;
};

const BackButton = ({ label, href }: Props) => {
  return (
    <Button variant={"link"} className="w-full font-normal">
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
