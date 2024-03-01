"use server";
import { db } from "@/lib/db";
import { getVerificationTokenByToken } from "@/data/verification-token";
import { getUserByEmail } from "@/data/user";

export const newverification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken)
    return {
      error: "Token is missing in db",
    };
  const hasExpired = existingToken.expires < new Date();
  console.log(hasExpired);

  if (hasExpired) return { error: "Token is expired" };

  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) return { error: "Email not existing in db" };

  await db.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  await db.verificationToken.delete({
    where: { id: existingToken.id },
  });

  return { success: "Email verified Successfully" };
};
