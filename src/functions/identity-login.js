/* eslint-disable no-unused-expressions */
import nodemailer from "nodemailer";

const sender = process.env.EMAIL;
const pass = process.env.PASSWORD;

exports.handler = async (event, context) => {
  try {
    const { user } = context.clientContext;
    const { data } = JSON.parse(event.body);
    const transporter = nodemailer.createTransport({
      host: "mail.privateemail.com",
      port: 587,
      secure: false,
      auth: {
        user,
        pass
      }
    });

    await transporter.sendMail({
      from: sender,
      to: user.email,
      subject: "Welcome to PrizeMi",
      text: data.details
    });

    user.role = "interested";
  } catch (err) {
    return err.toString();
  }
};
