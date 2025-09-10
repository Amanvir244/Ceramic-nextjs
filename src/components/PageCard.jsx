import Image from 'next/image';
import styles from './PageCard.module.css';

const PageCard = ({ image, title, date, description }) => {
  return (
    <div className={styles.pageCard}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          width={250}
          height={180}
          className={styles.pageImage}
          style={{ objectFit: 'cover', borderRadius: '8px' }}
        />
      </div>
      <div className={styles.pageInfo}>
        <h3>{title}</h3>
        <p className={styles.pageDate}>{date}</p>
        <p className={styles.pageDesc}>{description}</p>
        <a href="#" className={styles.pageLink}>Czytaj więcej</a>
      </div>
    </div>
  );
};

export default PageCard;
