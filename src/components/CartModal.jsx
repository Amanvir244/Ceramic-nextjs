"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./CartModal.module.css"; 
import { useCart } from "./CartContext";

const CartModal = ({ onClose }) => {
  const { cartItems, removeFromCart } = useCart();
  const router = useRouter();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={styles["cart-overlay"]} role="dialog" aria-modal="true" aria-label="Shopping Cart Modal">
      <div className={styles["cart-modal"]}>
        <div className={styles["cart-header"]}>
          <h2>My Cart</h2>
          <button className={styles["close-btn"]} onClick={onClose} aria-label="Close Cart">×</button>
        </div>

        {cartItems.length === 0 ? (
          <div className={styles["cart-empty-container"]}>
            <div className={styles["cart-empty-box"]}>
              <p>The cart is empty</p>
            </div>
            <div className={`${styles["cart-footer"]} ${styles["empty"]}`}>
              <button
                className={styles["keep-shopping-btn"]}
                onClick={() => router.push("/shop")}
              >
                KEEP SHOPPING
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className={styles["cart-table-header"]}>
              <span className={styles["item-col"]}>Items</span>
              <span className={styles["qty-col"]}>Qty</span>
              <span className={styles["unit-col"]}>Unit Price</span>
              <span className={styles["total-col"]}>Total</span>
            </div>

            <div className={styles["cart-items"]}>
              {cartItems.map((item, index) => (
                <div key={index} className={styles["cart-item-row"]}>
                  <div className={styles["item-col"]}>
                    <img src={item.image} alt={item.title} className={styles["cart-item-img"]} />
                    <div className={styles["cart-item-details"]}>
                      <h4 className={styles["cart-item-title"]}>{item.title}</h4>
                      <p className={styles["cart-item-description"]}>{item.description}</p>
                    </div>
                  </div>
                  <div className={styles["qty-col"]}>{item.quantity}</div>
                  <div className={styles["unit-col"]}>${item.price.toFixed(2)}</div>
                  <div className={styles["total-col"]}>
                    ${(item.price * item.quantity).toFixed(2)}
                    <button
                      className={styles["remove-btn"]}
                      onClick={() => removeFromCart(item.title)}
                      aria-label={`Remove ${item.title} from cart`}
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles["cart-footer"]}>
              <button className={styles["keep-shopping-btn"]} onClick={onClose}>KEEP SHOPPING</button>
              <div className={styles["cart-total"]}>
                <p><strong>SUBTOTAL:</strong> ${total.toFixed(2)}</p>
                <button className={styles["checkout-btn"]}>NEXT</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
