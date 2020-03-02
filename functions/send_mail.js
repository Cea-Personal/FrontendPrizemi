const nodemailer= require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport")
const dotenv=require('dotenv');
dotenv.config()
const sender = process.env.EMAIL;
const pass = process.env.PASSWORD;



exports.handler = async (event, context) => {
  try {
    const body = JSON.parse(event.body)
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
      to: user && user.email ,
      subject: "Welcome to PrizeMi",
      html: `<p>Hi ${body.name}</p> ${body.message}`,
    });
    user.role = Buffer.from(`${user.email}_true`).toString('base64')
    return {statusCode: 200, body: 'Mail sent'}

  } catch (err) {
    return {statusCode: 500,
    body: `${err.toString()}`};
  }
};