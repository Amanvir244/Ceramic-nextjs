"use client";

import styles from "./ContactSection.module.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className={styles.contactSection}>
      {/* Contact Info */}
      <div className={styles.contactInfo}>
        <h2>Contact us</h2>
        <p>
          02–233 Warszawa
          <br />
          Al. Jerozolimskie 12
        </p>
        <p>email@contact.com</p>
        <p>+48 500 500 500</p>

        {/* Social Icons */}
        <div className={styles.socialIconsContact}>
          <FaFacebookF className={styles.icon} />
          <FaTwitter className={styles.icon} />
          <FaInstagram className={styles.icon} />
        </div>

        <h3>Collaboration</h3>
        <p>m.kowalski@contact.com</p>
      </div>

      {/* Contact Form */}
      <form className={styles.contactForm}>
        <label htmlFor="firstName">First name:</label>
        <input id="firstName" type="text" placeholder="Anna" />

        <label htmlFor="email">Your e–mail:</label>
        <input id="email" type="email" placeholder="your@email.pl" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" placeholder="Type the message content here" />

        <button type="submit">Send</button>
      </form>
    </section>
  );
}
