import styles from "./BlogHeader.module.css";

export default function BlogHeader() {
  const backgroundImage = "/images/bg1.jpg";

  return (
    <section
      className={styles.blogHeader}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1>Blog</h1>
    </section>
  );
}
