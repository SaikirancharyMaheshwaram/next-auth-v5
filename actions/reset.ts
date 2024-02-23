"use server";
import * as z from "zod";
import { ResetSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { generateResetPassswordToken } from "@/lib/token";
import { sendResetPasswordMail } from "@/lib/mail";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validate = ResetSchema.safeParse(values);
  if (!validate.success) {
    return {
      error: "Invalid fields",
    };
  }
  
  const { email } = validate.data;
  const existingUser = await getUserByEmail(email);
  if (!existingUser) {
    return { error: "Invalid Credentials" };
  }
  //generating password reset token
  const verficationToken = await generateResetPassswordToken(email);

  await sendResetPasswordMail(email, verficationToken.token);
  return {
    success: "confirm mail sent to mail",
  };
};
