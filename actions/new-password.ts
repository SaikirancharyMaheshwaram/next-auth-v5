"use server";
import { db } from "@/lib/db";
import { getResetPasswordTokenByToken } from "@/data/verification-token";
import { getUserByEmail } from "@/data/user";
import bcrypt from "bcryptjs";
import * as z from "zod";
import { NewPasswordSchema } from "@/schemas";

export const newpassword = async (
  values: z.infer<typeof NewPasswordSchema>,
  token: string
) => {
  //validating token
  if (!token) {
    return { error: "Missing token!" };
  }
  //validating password
  const validatedFields = NewPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { password } = validatedFields.data;

  const existingToken = await getResetPasswordTokenByToken(token);
  if (!existingToken)
    return {
      error: "Invalid Token",
    };
  const hasExpired = existingToken.expires < new Date();
  console.log(hasExpired);

  if (hasExpired) return { error: "Token is expired" };

  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) return { error: "Email not existing in db" };

  //creating a hashed password

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.update({
    where: {
      id: existingUser.id,
    },
    data: {
      password: hashedPassword,
    },
  });
  await db.passwordResetToken.delete({
    where: {
      id: existingToken.id,
    },
  });

  return {
    success: "Password Updated Successfully",
  };
};
