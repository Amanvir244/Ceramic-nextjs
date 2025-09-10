"use client";

import styles from "./OurEmployees.module.css";

export default function OurEmployees() {
  const employees = [
    {
      name: 'Mary Smith',
      img: '/images/girl.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere.',
    },
    {
      name: 'James Jones',
      img: '/images/main1.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere.',
    },
    {
      name: 'Emily Murphy',
      img: '/images/girl2.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere.',
    },
  ];

  return (
    <section className={styles.employeesSection}>
      <h2>Our employees</h2>
      <div className={styles.employeeGrid}>
        {employees.map((e, i) => (
          <div key={i} className={styles.employeeCard}>
            <img src={e.img} alt={e.name} />
            <h3>{e.name}</h3>
            <p>{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
