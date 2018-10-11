

module.exports = function(app) {


  app.post("/send",  function (req, res)  {
    const output = `
    <p> You have a new contact request</p>
    <h3> Contact Details </h3>
    <ul>
    <li>Name: ${req.body.myname}</li>
    <li>Email address: ${req.body.email}</li>
    </ul>
    <h3> Message </h3>
    <p>${req.body.message}</p>
    `;
    // create reusable transporter object using the default SMTP transport
       var nodemailer = require("nodemailer");

      let transporter = nodemailer.createTransport({
          host:'smtp.gmail.com',
          port:587,
          secure:false, // true for 465, false for other ports
          auth:{
              user:'silverehiwario@gmail.com', // generated ethereal user
              pass:'michael01*'  // generated ethereal password
          },
          tls:{
            rejectUnauthorized:false
          }
      });

      // setup email data with unicode symbols
      let mailOptions = {
          from: '"Abbamassage therapist" <#>', // sender address
          to: '#, silverehiwario@gmail.com', // list of receivers
          subject: 'Abbamassage contact request', // Subject line
          text: 'Hello ?', // plain text body
          html: output // html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

          res.send ("/contact");


      });
  });



};
