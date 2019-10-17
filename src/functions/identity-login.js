/* eslint-disable no-unused-expressions */
import nodemailer from "nodemailer";
import dotenv from 'dot-env';
dotenv.config()
const sender = process.env.EMAIL;
const pass = process.env.PASSWORD;
const host = process.env.host;
const port = process.env.port

exports.handler = async (event, context) => {
  try {
    const { user } = context.clientContext;
    const { data } = JSON.parse(event.body);
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: true,
      auth: {
        user,
        pass
      }
    });

    await transporter.sendMail({
      from: sender,
      to: user.email,
      subject: "Welcome to PrizeMi",
      text: 'Thank you for your interest in PrizeMi. We will get back to you as soon as we launch. Kindly reach out to us on https://admin@prizemi.com';
    });

    user.role = "interested";
  } catch (err) {
    return err.toString();
  }
};
