import Image from "next/image";
import styles from "./OurStory.module.css";

export default function OurStory() {
  return (
    <section className={styles.ourStorySection}>
      
      <div className={styles.background}>
        <Image
          src="/images/bgstory.avif" 
          alt="Our Story Background"
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
        />
      </div>

      <div className={styles.storyContent}>
        <h2>Our story</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien 
          vestibulum posuere. Praesent congue dui nec lectus tincidunt elementum. Donec viverra a neque 
          vel egestas. Ut quis urna orci. Nullam sollicitudin est et quam rhoncus, nec imperdiet sem 
          efficitur. Etiam aliquam posuere hendrerit.
        </p>
      </div>
    </section>
  );
}
