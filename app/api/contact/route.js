import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const user = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: user,
    pass: pass,
  },
});

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    const mail = await transporter.sendMail({
      from: user,
      to: "eduardobarbosa@outlook.com",
      replyTo: email,
      subject: `Contact form submission from ${name}`,
      html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
      `,
    });

    console.log("Message sent.");

    return NextResponse.json({ mail });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error sending message" });
  }
}
