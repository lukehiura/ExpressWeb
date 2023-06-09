'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const nodemailer = require("nodemailer");

// Define the email sending function
async function sendEmail(data, response) {
    try {
      let testAccount = await nodemailer.createTestAccount();
  
      let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
  
      let info = await transporter.sendMail({
        from: testAccount.user,
        to: "lhiur001@gmail.com",
        subject: "Hello ✔",
        text: JSON.stringify(data),
        html: response,
      });
  
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
  



app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}));

app.post('/contact', async function(req, res) {
    
    const firstName = req.body.first;
    const lastName = req.body.last;
    const email = req.body.email;
    const phone = req.body.phone;
    const LinkedIn = req.body.LinkedIn;
    const message = req.body.comments;
    const contactMethod = req.body.contactMethod;
    const gender = req.body.gender;
    const notifications = req.body.notification;
    

    let notificationString = ''; //Generate a notification String to append all Checked Notifications.
    if (notifications) {
    notificationString = notifications.join(', ');
    }

    let htmlTop = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title>Luke Hiura</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link rel='stylesheet' type='text/css' media='screen' href='/main.css'>
        <script src='main.js'></script>
    </head>
    <body>
        <header>
            <h1>Luke Hiura</h1>
        </header>
        <nav>
            <a href="index.html">Home</a>
            <a href="contact.html">Contact</a>
            <a href="gallery.html">Gallery</a>
        </nav>
        <main>
          <section>  
            <article>
    `

    let htmlBot = `
            </article>
          </section>
        </main>
        <footer>
            <p>&copy; 2023 Luke Webdev. All rights reserved.</p>
        </footer>
    </body>
    </html>

    `

    let response = `
    <h1>Thank You!</h1>
    <p>Dear ${firstName} ${lastName},</p>
    <p>Thank you for contacting us! We appreciate that you took the time to provide us with your information. We have received your email address (<strong>${email}</strong>), 
    phone number (<strong>${phone}</strong>), LinkedIn URL (<strong>${LinkedIn}</strong>),
     preferred contact method (<strong>${contactMethod}</strong>), gender (<strong>${gender}</strong>), 
     notification preference (<strong>${notificationString}</strong>), and your message 
     (<strong>${message}</strong>). Rest assured that we will carefully review your message 
     and get back to you as soon as possible. Once again, thank you for reaching out to us and we 
     look forward to speaking with you soon.</p>
    `
    
    try {
        // call the sendEmail function and pass in the necessary parameters
        const result = await sendEmail(req.body, response);

        if (result) {
            res.send(`${htmlTop}${response}${htmlBot}`);
        } else {
            res.send('Error sending email');
        }
    } catch (err) {
        console.error(err);
        res.send('Error sending email');
    }

});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
