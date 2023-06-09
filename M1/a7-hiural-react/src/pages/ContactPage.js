import React from 'react';

function ContactPage() {
  return (
    <>
      <h2>Contact</h2>
      <p>Welcome to our online registration form! This form is designed to collect important information from you, such as your name, email address, and other details that will help us serve you better. By filling out this form, you'll be able to register for our services, sign up for our Notifications, or simply get in touch with us. Please fill out all the required fields marked with a red border to ensure a smooth registration process. Thank you for choosing to connect with us!</p>
      <article>
        <form action="/contact" method="POST">
          <fieldset>
            <legend>Please Fill Out The Form Below if Interested</legend>
            <p>
              <label htmlFor="first" className="required">First Name:</label>
              <input type="text" name="first" id="first" size="30" maxLength="50" required placeholder="First Name" autoFocus />
            </p>
            <p>
              <label htmlFor="last" className="required">Last Name:</label>
              <input type="text" name="last" id="last" size="30" maxLength="50" required placeholder="Last Name" />
            </p>
            <p>
              <label htmlFor="LinkedIn">LinkedIn (Optional):</label>
              <input type="text" name="LinkedIn" id="LinkedIn" size="30" maxLength="50" placeholder="LinkedIn URL" />
            </p>
            <p>
              <label htmlFor="email" className="required">Email:</label>
              <input type="email" name="email" id="email" size="30" maxLength="100" required pattern="[^\s@]+@[^\s@]+\.[^\s@]+" placeholder="Email Address" />
            </p>
            <p>
              <label htmlFor="phone" className="required">Phone Number:</label>
              <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="xxx-xxx-xxxx" required />
            </p>
            <p>
              <label htmlFor="comments" className="required">Include a Message:<br /></label>
              <textarea name="comments" id="comments" minLength="3" maxLength="250" required placeholder="Write 250 characters or less."></textarea>
            </p>
            <p>
              <label htmlFor="contactMethod" className="required">How would you like to be contacted?</label>
              <select name="contactMethod" id="how" required>
                <option value="" disabled selected>Contact Method</option>
                <option value="Email">Email</option>
                <option value="PhoneNumber">Phone Number</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Other">Other (Specify in the Message)</option>
              </select>
            </p>
            <p>
              <label htmlFor="gender" className="required">Please Specify Gender:</label>
              <br />
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" id="male" value="male" required />
              <label htmlFor="female">Female</label>
              <input type="radio" name="gender" id="female" value="female" required />
              <label htmlFor="nonbinary">Non-binary</label>
              <input type="radio" name="gender" id="nonbinary" value="non-binary" required />
            </p>
            <p>
              <label>Select Event Notifications You Would Like to Receive:</label>
              <br />
              <input type="checkbox" name="notification[]" value="upcoming-events" />Upcoming Events<br />
              <input type="checkbox" name="notification[]" value="workshops" />Workshops<br />
              <input type="checkbox" name="notification[]" value="conferences" />Conferences<br />
              <input type="checkbox" name="notification[]" value="webinars" />Webinars<br />
            </p>
            <button type="submit">Submit review</button>
          </fieldset>
        </form>
      </article>
    </>
  );
}

export default ContactPage;
