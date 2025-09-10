"use client"; 
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section
      className={styles.heroSection}
      style={{ backgroundImage: "url('/images/bg.avif')" }}
    >
      <div className={styles.heroContent}>
        <h1>Ceramics Studio</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci massa,
          dapibus quis molestie sit amet, pharetra vitae dolor. Praesent auctor, dui id
          maximus sagittis, lectus enim pharetra quam, ut laoreet tortor metus ut ipsum.
        </p>
        <button className={styles.heroBtn}>Show More</button>
      </div>
    </section>
  );
}
