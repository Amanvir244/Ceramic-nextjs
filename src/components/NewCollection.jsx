"use client";

import styles from "./NewCollection.module.css";

export default function NewCollection() {
  return (
    <section className={styles.collectionSection}>
      <div className={styles.collectionText}>
        <h2>New Collection</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien
          ac sapien vestibulum posuere. Praesent congue dui nec lectus tincidunt elementum.
          Donec viverra a neque vel egestas. Ut quis urna orci. Nullam sollicitudin est et
          quam rhoncus, nec imperdiet sem efficitur. Etiam aliquam posuere hendrerit.
          Curabitur egestas sed nisl rhoncus finibus.
        </p>
        <button className={styles.collectionBtn}>More</button>
      </div>
      <div className={styles.collectionImages}>
        <div className={styles.leftBlock}>
          <img src="/images/img1.jpg" alt="ceramic 1" className={styles.halfHeight} />
          <img src="/images/img2.jpg" alt="ceramic 2" className={styles.halfHeight} />
        </div>
        <div className={styles.rightBlock}>
          <img src="/images/img3.jpeg" alt="ceramic 3" />
        </div>
      </div>
    </section>
  );
}
