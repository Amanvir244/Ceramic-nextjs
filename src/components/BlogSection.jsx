import BlogCard from "./BlogCard";
import styles from "./BlogSection.module.css";

export default function BlogSection() {
  return (
    <div className={styles.blogSection}>
      <BlogCard
        image="/images/company.jpg"
        title="What affects the quality of ceramic products?"
        date="17 August 2022"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum nisi nec massa rhoncus venenatis. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla."
      />

      <hr className={styles.divider} />

      <BlogCard
        image="/images/adult2.jpg"
        title="How ceramics are made"
        date="17 August 2022"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum nisi nec massa rhoncus venenatis. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla."
      />
    </div>
  );
}
