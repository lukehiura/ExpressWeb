'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}));



app.post('/contact', function(req, res) {
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
    `

    let htmlBot = `
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
    <p>Thank you for contacting us! We have received your message and will get back to you shortly. Here's what we received from you:</p>
    <ul>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Phone:</strong> ${phone}</li>
      <li><strong>LinkedIn URL:</strong> ${LinkedIn}</li>
      <li><strong>Contact Method:</strong> ${contactMethod}</li>
      <li><strong>Gender:</strong> ${gender}</li>
      <li><strong>Notifications:</strong> ${notificationString}</li>
      <li><strong>Message:</strong> ${message}</li>
    </ul>

    `
    res.send(`${htmlTop}${response}${htmlBot}`);
});

app.use(express.static('public'));


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});









// Add the async function to your app.post() route
app.post('/contact', (req, res) => {
  
});