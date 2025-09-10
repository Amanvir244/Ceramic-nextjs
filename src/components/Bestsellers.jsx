import Image from "next/image";
import styles from "./Bestsellers.module.css";

const products = [
  {
    title: "Panda Mug",
    price: "20 USD",
    image: "/images/mug.jpg",
  },
  {
    title: "Printed Plate",
    price: "30 USD",
    image: "/images/plate.jpg",
  },
  {
    title: "Silver Set",
    price: "40 USD",
    image: "/images/silver.jpg",
  },
  {
    title: "Workshops for adults",
    price: "210 USD",
    image: "/images/adult.jpg",
  },
];

export default function Bestsellers() {
  return (
    <section className={styles.bestsellersSection}>
      <h2 className={styles.bestsellersHeading}>Bestsellers</h2>
      <div className={styles.bestsellersGrid}>
        {products.map((item, index) => (
          <div key={index} className={styles.bestsellerCard}>
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={250}
              className={styles.bestsellerImage}
            />
            <div className={styles.bestsellerInfo}>
              <p className={styles.bestsellerTitle}>{item.title}</p>
              <p className={styles.bestsellerPrice}>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
