import React from "react";
import CardWrapper from "./card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const EmailError = () => {
  return (
    <CardWrapper
      backButtonHref="/auth/login"
      headerLabel="Use already selected provide"
      backButtonLabel=""
    >
      <div className="p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive justify-center">
        <ExclamationTriangleIcon className="h-4 w-4" />
      </div>
    </CardWrapper>
  );
};

export default EmailError;
