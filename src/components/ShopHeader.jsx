import styles from './ShopHeader.module.css';

export default function ShopHeader() {
  const backgroundImage = '/images/shop1.jpeg'; 

  return (
    <section
      className={styles.shopHeader}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <h1>Shop</h1>
    </section>
  );
}
