"use server";
import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import * as z from "zod";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/token";
import { sendVerficationMail } from "@/lib/mail";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  console.log(values);
  const validate = LoginSchema.safeParse(values);
  if (!validate.success) {
    return {
      error: "Invalid fields",
    };
  }
  const { email, password } = validate.data;

  const existingUser = await getUserByEmail(email);
  if (!existingUser || !existingUser?.email || !existingUser.password) {
    return { error: "Invalid Credentials" };
  }

  //checking is user verified

  if (!existingUser.emailVerified) {
    const verficationToken = await generateVerificationToken(
      existingUser.email
    );
    await sendVerficationMail(verficationToken.email, verficationToken.token);
    return {
      success: "confirm mail sent to mail",
    };
  }
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    // Todo
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials" };
        default:
          return {
            error: "Something went wrong",
          };
      }
    }
    throw error;
  }

  return {
    success: "Email Success",
  };
};
