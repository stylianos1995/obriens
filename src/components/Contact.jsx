import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2>Visit O&apos;briens</h2>
        <p>
          Join us for draft flights, cocktail nights, and live sessions every
          week.
        </p>
        <ul className="contact-list">
          <li>
            <strong>Phone:</strong> +30 210 000 0000
          </li>
          <li>
            <strong>Email:</strong> hello@obriensbar.com
          </li>
          <li>
            <strong>Address:</strong> 12 River Street, Downtown
          </li>
          <li>
            <strong>Hours:</strong> Mon-Sun, 17:00 - 02:00
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
