import Image from 'next/image';
import styles from './WorkshopSection.module.css';

interface WorkshopSectionProps {
  title: string;
  text: string;
  image: string;
  reverse?: boolean;
}

export default function WorkshopSection({ title, text, image, reverse }: WorkshopSectionProps) {
  return (
    <div className={`${styles.workshopSection} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.workshopImage}>
        <Image
          src={image}
          alt={title}
          width={500}
          height={350}
          className={styles.image}
          style={{ objectFit: 'cover', borderRadius: '8px' }}
        />
      </div>
      <div className={styles.workshopContent}>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className={styles.workshopButtons}>
          <button className={styles.subscribe}>Subscribe</button>
          <button className={styles.showMore}>Show more</button>
        </div>
      </div>
    </div>
  );
}
