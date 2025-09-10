import styles from './WorkshopHeader.module.css';

export default function WorkshopHeader() {
  const backgroundImage = '/images/adult.jpg'; 

  return (
    <section
      className={styles.workshopHeader}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1>Workshop</h1>
    </section>
  );
}
