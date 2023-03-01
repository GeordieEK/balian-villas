export default function contact(req, res) {
  require('dotenv').config();
  let nodemailer = require('nodemailer');

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'balianbeachvillas@gmail.com',
      pass: process.env.password,
    },
    secure: true,
  });

  const mailData = {
    from: 'balianbeachvillas@gmail.com',
    to: 'geordieek@gmail.com',
    subject: `Villa enquiry from ${req.body.name}`,
    text:
      'Name: ' +
      req.body.name +
      'Email: ' +
      req.body.email +
      'Dates:' +
      req.body.checkIn +
      ' to ' +
      req.body.checkOut +
      'Message: ' +
      req.body.message,
    html: `<>
        <p>Name: ${req.body.name}</p>
        <p>Email: ${req.body.email}</p>
        <p>
          Dates: ${req.body.checkIn} to ${req.body.checkIn}
        </p>
        <p>${req.body.message}</p>
      </>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
  res.send();
}
