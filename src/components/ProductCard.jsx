import Image from 'next/image';
import styles from './ProductCard.module.css';
import { useCart } from './CartContext';

export default function ProductCard({ image, title, price }) {
  const { addToCart } = useCart();

  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."; 

  return (
    <div className={styles.productCard}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          width={260}
          height={180}
          className={styles.productImage}
          style={{ objectFit: 'cover', borderRadius: '12px' }}
        />
      </div>
      <h3 className={styles.productTitle}>{title}</h3>
      <p className={styles.productPrice}><strong>${price}</strong></p>
      <button
        className={styles.addToCart}
        onClick={() => addToCart({ image, title, price: Number(price), description })}
      >
        Add to Cart
      </button>
    </div>
  );
}
