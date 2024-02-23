import { db } from "@/lib/db";

//getting resetpassword token by email

export const getResetPasswordTokenByMail = async (email: string) => {
  try {
    const verificationToken = db.passwordResetToken.findFirst({
      where: {
        email,
      },
    });
    return verificationToken;
  } catch (error) {
    return null;
  }
};

export const getResetPasswordTokenByToken = async (token: string) => {
  try {
    const verificationToken = db.passwordResetToken.findUnique({
      where: {
        token,
      },
    });
    return verificationToken;
  } catch (error) {
    return null;
  }
};

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = db.verificationToken.findFirst({
      where: {
        email,
      },
    });
    return verificationToken;
  } catch (error) {
    return null;
  }
};

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = db.verificationToken.findUnique({
      where: {
        token,
      },
    });
    return verificationToken;
  } catch (error) {
    return null;
  }
};
