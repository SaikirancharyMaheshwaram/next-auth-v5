"use server";

import { LoginSchema } from "@/schemas";

export const login = async (values: any) => {
  console.log(values);
  const validate = LoginSchema.safeParse(values);
  if (!validate.success) {
    return {
      error: "Invalid fields",
    };
  }

  return {
    success: "Email Success",
  };
};
