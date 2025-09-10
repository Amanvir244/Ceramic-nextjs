import WorkshopSection from './WorkshopSection';
import styles from './WorkshopPage.module.css';

const dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec lectus tincidunt elementum. Donec viverra a neque vel egestas. Ut quis urna orci. Nullam sollicitudin est et quam rhoncus, nec imperdiet sem efficitur. Etiam aliquam posuere hendrerit. Curabitur egestas sed nisl rhoncus finibus.`;

export default function WorkshopPage() {
  return (
    <div className={styles.workshopPage}>
      <WorkshopSection
        title="Online workshops"
        text={dummyText}
        image="/images/girl2.jpg"
      />
      <WorkshopSection
        title="Workshops for adults"
        text={dummyText}
        image="/images/adult2.jpg"
        reverse
      />
      <WorkshopSection
        title="Workshops for children"
        text={dummyText}
        image="/images/child.avif"
      />
      <WorkshopSection
        title="Workshops for companies"
        text={dummyText}
        image="/images/company.jpg"
        reverse
      />
    </div>
  );
}
