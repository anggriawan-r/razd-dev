"use server";

import nodemailer from "nodemailer";
import { z } from "zod";
import { render } from "@react-email/render";
import { formSchema } from "@/lib/validateForm";
import { Email } from "@/email/Email";

export const sendEmail = async (values: z.infer<typeof formSchema>) => {
  const { email, body } = values;

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: 587,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const reactHtml = render(Email({ message: body, email }));

  let data;

  try {
    data = await transport.sendMail({
      from: `Contact Form - Portfolio Site`,
      to: "anggriawan.net@gmail.com",
      subject: "Message From Your Site.",
      html: reactHtml,
      sender: email,
    });
  } catch (error) {
    if (error) {
      return { error };
    }
  }

  return { data };
};
