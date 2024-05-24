import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");
import fs from "fs";

// Handles POST requests to /api

export async function POST(request: Request) {
  const username = process.env.EMAIL;
  const password = process.env.PASSWORD;
  const formData = await request.formData();

  const name = formData.get("name");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const msg = formData.get("msg");
  const imageName = formData.get("file_name") as any;
  const image = formData.get("file");

  const attachment = {
    filename: imageName,
    //@ts-ignore
    content: image, // Assuming image is an object with a data property containing file content
    encoding: "base64", // Or use 'utf-8' if the content is plain text
  };

  console.log("image name = ", imageName);
  //@ts-ignore

  console.log("image path = ", image.path);

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    secureConnection: false,
    port: 587,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: username,
      to: username,
      replyTo: email,
      subject: `FORM REQUEST LUXURY DESIGN SIGNS`,
      html: `
              <p>Name: ${name} </p>
              <p>Email: ${email} </p>
              <p>Phone: ${phone} </p>
              <p>Message: ${msg} </p>
              `,
      attachments: [attachment],
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    NextResponse.json({ status: 400, message: error });
  }
}
