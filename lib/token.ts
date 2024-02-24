import {
  getResetPasswordTokenByMail,
  getVerificationTokenByEmail,
} from "@/data/verification-token";
import { v4 as uuidv4 } from "uuid";
import { db } from "./db";
import crypto from "crypto";
import { getTwoFactorTokenByEmail } from "@/data/twofactor-token";

//generating 2fa code

export const generateTwoFactorToken = async (email: string) => {
  const token = crypto.randomInt(100_000, 1_000_000).toString();

  const expires = new Date(new Date().getTime() + 5 * 60 * 1000);

  const existingToken = await getTwoFactorTokenByEmail(email);

  if (existingToken) {
    await db.twoFactorToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const newToken = await db.twoFactorToken.create({
    data: {
      token,
      email,
      expires,
    },
  });
  //console.log(newToken);
  return newToken;
};

//generating reset password token
export const generateResetPassswordToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getResetPasswordTokenByMail(email);
  if (existingToken) {
    await db.passwordResetToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }
  const resetToken = await db.passwordResetToken.create({
    data: {
      expires,
      email,
      token: token,
    },
  });

  return resetToken;
};

//generating verification token

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);
  const existingToken = await getVerificationTokenByEmail(email);
  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }
  const verificationToken = await db.verificationToken.create({
    data: {
      token,
      expires,
      email,
    },
  });
  return verificationToken;
};
