"use server";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { generateVerificationToken } from "@/lib/token";
import { sendVerficationMail } from "@/lib/mail";
import { z } from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  // try {
  // console.log(values);
  const validate = RegisterSchema.safeParse(values);
  if (!validate.success) {
    return {
      error: "Something went wrong",
    };
  }
  const { name, email, password } = validate.data;

  const user = await getUserByEmail(email);

  if (user) {
    return {
      error: "Email Already in use",
    };
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  //generting verfication token

  const verficationToken = await generateVerificationToken(email);
  await sendVerficationMail(verficationToken.email, verficationToken.token);

  //send verification token to client

  return {
    success: "Verification Mail Sent",
    newUser,
  };
  // } catch (error) {
  //   return { error: "Try Again After sometime" };
  // }
};
