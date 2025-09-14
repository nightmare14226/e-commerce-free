import React from "react";
import image from "../../Assets/grains.jpg";
import styles from "./popular.module.css";
import Navbtn from "../Navbtn/Navbtn";

function Carousel() {
  return (
    <div className={styles.carousel}>
      <Navbtn title="Popular Products" />
      <div className={styles.order__carousel}>
        <div className={styles.carousel__card}>
          <div className={styles.image__container}>
            <img src={image} alt="" className={styles.carousel__image} />
          </div>

          <div className={styles.product__title}>
            <span className={styles.product__name}>Uncle Ben's</span>
            <div className={styles.product__container}>
              <span className={styles.product__desc}>Original Rice</span>
              <span className={styles.product__desc}>25 Kg</span>
            </div>
          </div>
        </div>

        <div className={styles.carousel__card}>
          <div className={styles.image__container}>
            <img src={image} alt="" className={styles.carousel__image} />
          </div>

          <div className={styles.product__title}>
            <span className={styles.product__name}>Uncle Ben's</span>
            <div className={styles.product__container}>
              <span className={styles.product__desc}>Original Rice</span>
              <span className={styles.product__desc}>25 Kg</span>
            </div>
          </div>
        </div>

        <div className={styles.carousel__card}>
          <div className={styles.image__container}>
            <img src={image} alt="" className={styles.carousel__image} />
          </div>

          <div className={styles.product__title}>
            <span className={styles.product__name}>Uncle Ben's</span>
            <div className={styles.product__container}>
              <span className={styles.product__desc}>Original Rice</span>
              <span className={styles.product__desc}>25 Kg</span>
            </div>
          </div>
        </div>

        <div className={styles.carousel__card}>
          <div className={styles.image__container}>
            <img src={image} alt="" className={styles.carousel__image} />
          </div>

          <div className={styles.product__title}>
            <span className={styles.product__name}>Uncle Ben's</span>
            <div className={styles.product__container}>
              <span className={styles.product__desc}>Original Rice</span>
              <span className={styles.product__desc}>25 Kg</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
