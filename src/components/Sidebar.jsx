"use client"; 

import React from "react";
import styles from "./Sidebar.module.css";
import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Image
        src="/images/blog.png"
        alt="Social"
        width={200}
        height={150}
        className={styles.sidebarImg}
      />

      <div className={styles.socialLabel}>Our social media</div>

      <div className={styles.socialIcons}>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
      </div>

      <div className={styles.newsletter}>
        <h3>Subscribe to our newsletter</h3>
        <form>
          <label>First name:</label>
          <input type="text" placeholder="Emily" />

          <label>Your e-mail:</label>
          <input type="email" placeholder="your@email.pl" />

          <label>Message:</label>
          <textarea placeholder="Tu wpisz treść wiadomości" />

          <button type="submit">Send</button>
        </form>
      </div>
    </aside>
  );
};

export default Sidebar;
