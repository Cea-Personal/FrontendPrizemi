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
    //   host:`${process.env.host}`,
      auth: {
          user: sender,
          pass,
        // type: "OAuth2",
        // user: `${sender}`,
        // serviceClient:`${process.env.CLIENTID}`,
        // privateKey:`${process.env.PRIVATE}`
                             
      }
    }));

    await transporter.sendMail({
      from: `${sender}`,
      to: user && user.email ,
      subject: "Welcome to PrizeMi",
      html: body,
    });
    user.role = btoa(`${user.email}_signed-up`);
    return {statusCode: 200, body: 'Mail sent'}

  } catch (err) {
    return {statusCode: 500,
    body: `${err.toString()}`};
  }
};