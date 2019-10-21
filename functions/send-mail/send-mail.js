
const nodemailer= require("nodemailer");
const dotenv=require('dotenv');
dotenv.config()
const sender = process.env.EMAIL;
const host = process.env.host;


exports.handler = async (event, context) => {
  try {
    const { user } = context.clientContext;
    const transporter = nodemailer.createTransport({
      host:`${host}`,
      auth: {
        type: "OAuth2",
        user: `${sender}`,
        serviceClient:`${process.env.CLIENTID}`,
        privateKey:`${process.env.PRIVATE}`
                             
      }
    });

    await transporter.sendMail({
      from: `${sender}`,
      to: 'ogbonnabasil3@gmail.com' ,
      subject: "Welcome to PrizeMi",
      text: 'Thank you for your interest in PrizeMi' ,
    });
    user.role = "interested";
    return {statusCode: 200, body: 'Mail sent'}

  } catch (err) {
    return {statusCode: 500,
    body: `${err}`};
  }
};
