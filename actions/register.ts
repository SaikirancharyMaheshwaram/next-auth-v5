"use server";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";

export const register = async (values: any) => {
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

  //

  return {
    success: "Created Successfully",
    newUser,
  };
  // } catch (error) {
  //   return { error: "Try Again After sometime" };
  // }
};
