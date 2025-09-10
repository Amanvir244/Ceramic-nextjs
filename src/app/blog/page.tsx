import BlogHeader from "@/components/BlogHeader";
import BlogSection from "@/components/BlogSection";
import Sidebar from "@/components/Sidebar";
import PaginatedBlog from "@/components/PaginatedBlog";

import styles from "./Blog.module.css";

export default function BlogPage() {
  return (
    <div>
    
      <BlogHeader />


      <div className={styles.mainContainer}>
        <BlogSection />
        <Sidebar />
      </div>

      <PaginatedBlog />
    </div>
  );
}
