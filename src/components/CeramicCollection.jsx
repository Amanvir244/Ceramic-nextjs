"use client";
import Image from "next/image";
import styles from "./CeramicCollection.module.css";

export default function CeramicCollection() {
  return (
    <section className={styles.ceramicSection}>
      <div className={styles.ceramicGrid}>
        <div className={`${styles.gridItem} ${styles.large}`}>
          <Image
            src="/images/img4.jpg"
            alt="Ceramic 1"
            width={600}
            height={600}
            className={styles.img}
          />
        </div>
        <div className={`${styles.gridItem} ${styles.small}`}>
          <Image
            src="/images/img5.jpg"
            alt="Ceramic 2"
            width={300}
            height={455}
            className={styles.img}
          />
        </div>
        <div className={`${styles.gridItem} ${styles.small}`}>
          <Image
            src="/images/img6.jpg"
            alt="Ceramic 3"
            width={300}
            height={455}
            className={styles.img}
          />
        </div>
      </div>
    </section>
  );
}
