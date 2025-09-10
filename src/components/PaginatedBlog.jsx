"use client";
import { useState } from 'react';
import PageCard from './PageCard';
import styles from './PaginatedBlog.module.css';

const blogs = [
  {
    image: '/images/soup.jpg',
    title: 'Ceramic soup bowls',
    date: '17 August 2022',
    description: 'Nullam maximus vestibulum lectus tempus aliquet. Aliquam erat volutpat. Duis ultrices neque at libero lacinia...',
  },
  {
    image: '/images/shop2.jpeg',
    title: 'What affects the quality of ceramic products?',
    date: '17 August 2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum nisi nec massa rhoncus venenatis...',
  },
  {
    image: '/images/shop1.jpeg',
    title: 'How ceramics are made',
    date: '17 August 2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum nisi nec massa rhoncus venenatis...',
  },
  {
    image: '/images/img7.jpg',
    title: 'Firing techniques for pottery',
    date: '18 August 2022',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Sed vulputate sem nec...',
  },
  {
    image: '/images/img8.jpg',
    title: 'Glazing for beginners',
    date: '19 August 2022',
    description: 'Sed tristique, risus sed luctus suscipit, ligula lorem hendrerit est, at volutpat nulla sem et risus...',
  }
];

export default function PaginatedBlog() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedBlogs = blogs.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className={styles.paginatedBlogWrapper}>
      <div className={styles.blogGrid}>
        {selectedBlogs.map((blog, index) => (
          <PageCard key={index} {...blog} />
        ))}
      </div>

      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? styles.active : ''}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
