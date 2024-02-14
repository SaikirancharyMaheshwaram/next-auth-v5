"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardFooter } from "../ui/card";
import Header from "./header";
import Socials from "./socials";
import BackButton from "./back-button";

type Props = {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocials?: boolean;
};

const CardWrapper = ({
  children,
  headerLabel,
  showSocials,
  backButtonHref,
  backButtonLabel,
}: Props) => {
  return (
    <Card className="w-[400px] shadow-md ">
      <Header label={headerLabel} />
      <CardContent>{children}</CardContent>
      {showSocials && (
        <CardFooter>
          <Socials />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
