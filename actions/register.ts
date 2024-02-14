"use server";

import { RegisterSchema } from "@/schemas";

export const register = async (values: any) => {
  console.log(values);
  const validate = RegisterSchema.safeParse(values);
  if (!validate.success) {
    return {
      error: "Something went wrong",
    };
  }

  return {
    success: "Created Successfully",
  };
};
