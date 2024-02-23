"use client";
import React, { useCallback, useEffect, useState } from "react";
import CardWrapper from "./card-wrapper";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { newverification } from "@/actions/new-verification";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  let [loading, setLoading] = useState(true);
  const onSubmit = useCallback(() => {
    console.log(token);
    if (!token) {
      setError("Missing Token");
      return;
    }
    newverification(token).then((data) => {
      setError(data.error);
      setSuccess(data.success);
    });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);
  return (
    <CardWrapper
      backButtonHref="/auth/login"
      backButtonLabel="go back to login"
      headerLabel="Confirm verification"
    >
      <div className="flex items-center flex-col justify-center w-full pt-4">
        {!success && !error && <BeatLoader loading={loading} />}
        <FormError message={error} />
        <FormSuccess message={success} />
      </div>
    </CardWrapper>
  );
};
