import Image from "next/image";
import Link from "next/link";
import styles from "./BlogCard.module.css";

export default function BlogCard({ image, title, date, description }) {
  return (
    <div className={styles.blogCard}>
      <Image
        src={image}
        alt={title}
        width={320}
        height={220}
        className={styles.blogImage}
      />
      <div className={styles.blogContent}>
        <h3>{title}</h3>
        <p className={styles.blogDate}>{date}</p>
        <p className={styles.blogDescription}>{description}</p>
        <Link href="#" className={styles.readMore}>
          Czytaj więcej
        </Link>
      </div>
    </div>
  );
}
