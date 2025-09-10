"use client"; 

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { useCart } from "./CartContext";
import CartModal from "./CartModal";

export default function Navbar() {
  const pathname = usePathname();
  const { cartItems } = useCart();
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <span role="img" aria-label="logo">🌿</span> ceramic
          </Link>
        </div>
        <div className={styles.navLinks}>
          <Link href="/shop" className={pathname === "/shop" ? styles.active : ""}>SHOP</Link>
          <Link href="/workshop" className={pathname === "/workshop" ? styles.active : ""}>WORKSHOP</Link>
          <Link href="/blog" className={pathname === "/blog" ? styles.active : ""}>BLOG</Link>
          <Link href="/contact" className={pathname === "/contact" ? styles.active : ""}>CONTACT</Link>
          <Link href="/login" className={pathname === "/login" ? styles.active : ""}>LOGIN</Link>
          <Link href="/signup" className={pathname === "/signup" ? styles.active : ""}>SIGNUP</Link>
          <Link href="/account" className={styles.profileLink}>
            <span role="img" aria-label="profile">👤</span>
          </Link>

          <span className={styles.cartIcon} onClick={() => setShowCart(true)}>
            <img src="/images/shopping-cart.png" alt="Cart" />
            {cartItems.length > 0 && <span className={styles.cartCount}>{cartItems.length}</span>}
          </span>
        </div>
      </nav>

      {showCart && <CartModal onClose={() => setShowCart(false)} />}
    </>
  );
}
