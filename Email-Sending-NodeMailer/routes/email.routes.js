const express = require("express");
const nodemailer = require("nodemailer");

const emailRoutes =  express.Router();

const transporter = nodemailer.createTransport({
//  host: "smtp.ethereal.email",
//  port: 587,
//  secure: false,
  service:"gmail",
  auth: {
    user: "kirankasana514@gmail.com",
    pass: "pdllilzrafgrgphw",
  },
});



emailRoutes.get("/sendEmail" , async (req,res) => {
     const info = await transporter.sendMail({
         from: '"hello kiran kasana" <kirankasana514@gmail.com>',
         to: "kkasanacoder@gmail.com",
         subject: "Hello , please check your email",
         html: "<b>Hello kiran , this is your first email sender  work</b>", // HTML body
       });

     res.status(201).json({message : "email sent successfully"})
})


module.exports = emailRoutes;