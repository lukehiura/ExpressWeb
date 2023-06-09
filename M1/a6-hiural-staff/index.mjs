// Import modules
import express from 'express';
import dotenv from 'dotenv';
import asyncHandler from 'express-async-handler';
import fetch from 'node-fetch';
import { products } from './products.js';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';

dotenv.config(); 

// Setup express app
const app = express();
const PORT = process.env.PORT || 3000;

let apiCallCount = 0;


// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function getProduct(choice) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].company == choice) {
      return products[i];
    }
  }
}


app.post('/order', function(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const address = req.body.address;
  const product = req.body.product;
  const quantity = parseInt(req.body.quantity);
  const deliveryInstructions = req.body.instructions;
  const selectedProduct = getProduct(product);
  const totalPrice = selectedProduct.price * quantity;
  const formattedTotalPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalPrice);

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
            <a href="order.html">Order Now</a>
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
    <h2 id="thank-you-message">Thank You!</h2>
    <p>Dear ${name},</p>
    <p id="order-details">Thank you for placing an order with us! We have received your order for <strong>${quantity} ${selectedProduct.product}(s)</strong>, 
    and we will deliver them to the following address: <strong>${address}</strong>. Your total cost is <strong>${formattedTotalPrice}</strong>. We will contact you
     shortly with your delivery details at your email address: <strong>${email}</strong></p>
    <p id="delivery-instructions">Delivery Instructions: <strong>${deliveryInstructions}</strong></p>

    `

    res.send(htmlTop + response + htmlBot);
});




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


app.get('/from-server', asyncHandler(async (req, res, next) => {
  try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();

      // Respond with data
      res.send(data);
  } catch (error) {
      // Pass the error to the error handler
      next(error);
  }
}));


// Define a new route that responds with status(500) if the API server is not available.
app.use((err, req, res, next) => {
  // Respond with an error message in HTML
  res.status(500).send(`
      <h1>Error</h1>
      <p>Sorry, there was an error accessing the API. Please try again later.</p>
  `);
});

app.use('/click', (req, res, next) => {
  apiCallCount++;
  if (apiCallCount % 10 === 0) {
    console.log(`The server has been called ${apiCallCount} times.`);
  }
  next();
});

app.get('/click', (req, res) => {
  // here is your logic for handling the 'from Express' button click
  res.send(`Button clicked ${apiCallCount} times.`);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});



