import React from "react";
import styles from "./gridimage.module.css";
import image1 from "../../Assets/gorcerywoman.jpeg";
import image2 from "../../Assets/manpoint.jpeg";
import image3 from "../../Assets/offergrocery.jpeg";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

function Gridimage() {
  return (
    <div className={styles.gridimage}>
      <div className={styles.gridimage__card}>
        <section className={styles.main__image}>
          <img src={image1} alt="" className={styles.main__image__image} />

          <div className={styles.main__image__desc}>

            <h1 className={styles.main__heading}>
              Fresh fruits for a <br />Vibrant Summer
            </h1>
            <p className={styles.main__text}>
              Experience the best selection of seasonal fruits
            </p>
            <div className={styles.main__image__btn}>
              <button className={styles.main__btn}>Shop now</button>
            </div>

          </div>

        </section>

        <section className={styles.top__image}>

          <img src={image2} alt="" className={styles.main__image__top} />

          <div className={styles.top__image__desc}>
            <p className={styles.top__heading}>20%SAVE OFF</p>
            <p className={styles.top__text}>on All Groceries</p>

            <button className={styles.top__btn}>
              <span className={styles.top__btn__items}>Shop now </span>
              <ArrowForwardOutlinedIcon />
            </button>
          </div>

        </section>

        <section className={styles.bottom__image}>

          <img src={image3} alt="" className={styles.main__image__bottom} />
          
          <div className={styles.bottom__image__desc}>
            <p className={styles.bottom__heading}>Fresh Vegetables</p>
            <p className={styles.bottom__text}>20%SALE OFF</p>

            <button className={styles.bottom__btn}>
              <span className={styles.bottom__btn__items}>Shop now </span>
              <ArrowForwardOutlinedIcon />
            </button>
          </div>

        </section>
      </div>

      <section className={styles.gridimage__best}></section>
      <section className={styles.gridimage__recently}></section>
    </div>
  );
}

export default Gridimage;
