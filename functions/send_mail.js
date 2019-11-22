const nodemailer= require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport")
const dotenv=require('dotenv');
dotenv.config()
const sender = process.env.EMAIL;
const pass = process.env.PASSWORD;



exports.handler = async (event, context) => {
  try {
    const body = JSON.parse(event.body).name
    const { user } = context.clientContext;
    const transporter = nodemailer.createTransport(smtpTransport({
      service:"gmail",
      auth: {
          user: sender,
          pass,
      }
    }));

    await transporter.sendMail({
      from: `${sender}`,
      to: user && user.email || 'ogbonnabasil3@gmail.com' ,
      subject: "Welcome to PrizeMi",
      html: body,
    });
    user.role = Buffer.from(`${user.email}_true`).toString('base64')
    return {statusCode: 200, body: 'Mail sent'}

  } catch (err) {
    return {statusCode: 500,
    body: `${err.toString()}`};
  }
};