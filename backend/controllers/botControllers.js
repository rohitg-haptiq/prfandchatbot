const nodemailer = require("nodemailer");

exports.sendmail = async (req, res) => {
  const modemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rohitghate05@gmail.com",
      pass: "Rohit@123",
    },
  });

  await transporter.sendMail({
    from: "rohitghate05@gmail.com",
    to: "rohitghate29@gmail.com",
    subject: "hi how are you",
    text: "i am fine",
  }); 

  res.staus(200).jason({ message: "mail sent" });
};
