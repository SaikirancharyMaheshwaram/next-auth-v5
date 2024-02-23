import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendResetPasswordMail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/reset-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "abc6265003@gmail.com",
    subject: "Verify your email",
    html: `<p> Click <a href="${confirmLink}"> here</a> for Reset Password</p>`,
  });
};

export const sendVerficationMail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "abc6265003@gmail.com",
    subject: "Verify your email",
    html: `<p> Click <a href="${confirmLink}"> here</a> for verify your email</p>`,
  });
};
