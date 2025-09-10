"use client"; 

import { useState } from "react";
import ProductCard from "./ProductCard";
import styles from "./ShopProducts.module.css";

const products = [
  { id: 1, title: "Ceramic Mug", price: "499", image: "/images/img1.jpg", category: "New" },
  { id: 2, title: "Ceramic Vase", price: "799", image: "/images/img2.jpg", category: "New" },
  { id: 3, title: "Terracotta Tea Pot", price: "299", image: "/images/img8.jpg", category: "Other" },
  { id: 4, title: "Glazed Pot", price: "399", image: "/images/img6.jpg", category: "New" },
  { id: 5, title: "Clay Pot", price: "499", image: "/images/img5.jpg", category: "New" },
  { id: 6, title: "Ceramic Cup", price: "799", image: "/images/img4.jpg", category: "New" },
  { id: 7, title: "Terracotta Vase", price: "299", image: "/images/img3.jpeg", category: "Other" },
  { id: 8, title: "Glazed Mug", price: "399", image: "/images/img7.jpg", category: "Other" },
];

const categories = ["All", "New", "Other"];

export default function ShopProducts() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className={styles.shopContainer}>
      <aside className={styles.sidebar}>
        <h2>Categories</h2>
        <ul>
          {categories.map((cat) => (
            <li
              key={cat}
              className={selectedCategory === cat ? styles.active : ""}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      <main className={styles.shopPage}>
        <h1 className={styles.shopTitle}>{selectedCategory} Products</h1>
        <div className={styles.productGrid}>
          {filteredProducts.map((item) => (
            <ProductCard
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
