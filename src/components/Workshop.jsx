import Image from 'next/image';
import styles from './Workshop.module.css';

export default function Workshop() {
  return (
    <section className={styles.workshopSection}>
      <div className={styles.workshopImage}>
        <Image
          src="/images/workshop.jpg"
          alt="Workshop"
          width={500}
          height={400}
          style={{ borderRadius: '10px', width: '100%', height: 'auto' }}
        />
      </div>
      <div className={styles.workshopText}>
        <h2>Workshops</h2>
        <p>
          Lorem ipsum dolor sit amet, eos eu pertinax evertitur, semper deleniti at sed. Et eos semper quaeque, per scripta tritani quaerendum ut, eam te virtute epicuri.
        </p>
        <p>
          Tollit iracundia pro an, in ius vide iracundia interesset, cu mel vidit posse expetendis. Tale offendit ex est, et modus nostro per, dicit corrumpit has eu. Mea mutat viris probatus te, no dicunt oporteat reprimique per, partem ancillae efficiantur te duo. Vero clita ad mea.
        </p>
        <button className={styles.subscribeButton}>Subscribe</button>
      </div>
    </section>
  );
}
