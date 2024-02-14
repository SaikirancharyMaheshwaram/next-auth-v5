import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: "Password is Required!",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "password should be 6+ char",
  }),
  name: z.string().min(3, {
    message: "name should be 3+ char",
  }),
});
