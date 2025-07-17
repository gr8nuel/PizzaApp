import React from "react";
import "../Styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="leftSide"></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter full name"
            required
          />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter email" required />
          <label htmlFor="message">Message</label>
          <textarea name="mesaage">Enter message...</textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
