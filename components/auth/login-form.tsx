import React from "react";
import CardWrapper from "./card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonHref="/auth/register"
      backButtonLabel="don't have account"
      showSocials
    >
      Login form!
    </CardWrapper>
  );
};
