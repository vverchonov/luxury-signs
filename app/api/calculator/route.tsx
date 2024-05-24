import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api

export async function POST(request: Request) {
  const usernameTo = process.env.EMAIL;
  const username = process.env.EMAIL1;
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
    content: image, // Assuming image is an object with a data property containing file content
    encoding: "base64", // Or use 'utf-8' if the content is plain text
  };

  const transporter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: username,
      to: usernameTo,
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
