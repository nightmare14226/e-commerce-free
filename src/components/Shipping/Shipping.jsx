import React from "react";
import Minicart from "../Minicart/Minicart";
import styles from "./shipping.module.css";
function Shipping() {
  return (
    <div>
      <div className={styles.shipping__container}>
        <div className={styles.shipping__details}>
          <span className={styles.shippingto}>Shipping To</span>
          <p className={styles.shipping__name}>Jane Doe</p>
          <div className={styles.address}>
            <span className={styles.address__title}>Address -</span>
            <p className={styles.address__user}>
              123 Maple Street, off Springfield,
            </p>
          </div>
          <p className={styles.address__useradd}>LA, USA, ZIP Code - 27930</p>
          <div className={styles.phone}>
            <span className={styles.phone__title}>Phone Number-</span>
            <p className={styles.phone__number}>+2459404489044</p>
          </div>
        </div>
        <Minicart />
        {/* THE CART ITEMS WILL GO HERE */}
        <div className={styles.cartcheckout}></div>

        <div className={styles.item__total}>
          <div className={styles.item__total__container}>
            <span className={styles.item__total__title}>Item Total</span>
            <p className={styles.item__total__value}>$57.99</p>
          </div>
          <div className={styles.item__total__container}>
            <span className={styles.item__total__title}>Taxes and Changes</span>
            <p className={styles.item__total__value}>$5.00</p>
          </div>
          <div className={styles.item__total__container}>
            <span className={styles.item__total__title}>Delivery Fee</span>
            <p className={styles.item__total__value}>$15.00</p>
          </div>
          <div className={styles.item__total__container}>
            <span className={styles.item__total__title}>Discount</span>
            <p className={styles.item__total__value}>Not Available</p>
          </div>
          <div className={styles.item__total__container}>
            <span className={styles.item__total__total}>Total</span>
            <p className={styles.item__total__value}>$77.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
