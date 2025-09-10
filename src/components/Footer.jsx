"use client"; 

import styles from "./Footer.module.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footerBar}>
      <div className={styles.footerGrid}>
        <div>
          <p>02–233 Warszawa</p>
          <p>Al. Jerozolimskie 12</p>
        </div>
        <div>
          <p>email@contact.com</p>
          <p>+48 500 500 500</p>
        </div>
        <div>
          <p>Store Regulations</p>
          <p>Privacy policy</p>
        </div>
        <div>
          <p>Delivery</p>
          <p>Returns & exchanges</p>
        </div>
        <div className={styles.socials}>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
}
