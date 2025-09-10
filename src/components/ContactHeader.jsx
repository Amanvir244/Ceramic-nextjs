"use client"; 
import React from "react";
import styles from "./ContactHeader.module.css"; 

const ContactHeader = () => {
  const backgroundImage = "/images/bg.avif"; 
  return (
    <section
      className={styles.contactHeader}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1>Contact</h1>
    </section>
  );
};

export default ContactHeader;
