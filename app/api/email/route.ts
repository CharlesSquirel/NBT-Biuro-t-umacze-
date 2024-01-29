import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { validateCaptcha } from "utils/validateCaptcha";

export async function POST(request: NextRequest) {
  const { email, name, message, title, captcha } = await request.json();
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Wiadomość od ${name} (${email}). Tytuł: ${title}`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    const validatedCaptcha = await validateCaptcha(captcha);

    if (!validatedCaptcha.success) {
      return NextResponse.json({ error: "Nieprawidłowa captcha" }, { status: 400 });
    }

    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
