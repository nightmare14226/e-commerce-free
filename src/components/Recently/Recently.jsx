import React from "react";
import image from "../../Assets/grains.jpg";
import styles from "./recently.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Navbtn from "../Navbtn/Navbtn";
import {Navigate, useNavigate } from "react-router-dom";

function Recently() {


  
  const navigate = useNavigate();

  function toCart() {
      navigate("/cart")
    }
   




  return (
    <div className={styles.carousel}>
      <Navbtn title="Recently Added" />
      <div className={styles.order__recently}>
        <div className={styles.carousel__card}>
          <div className={styles.image__container}>
            <img src={image} alt="" className={styles.carousel__image} />
            <span className={styles.carousel__discount}>20% Off</span>
          </div>

          <div className={styles.product__title}>
            <p className={styles.product__name}>Artisan Hearth Bread & Rolls</p>
            <span className={styles.product__desc}>
              Soft and fresh French rolls, perfect for sandwiches and toasts.
            </span>
          </div>

          <div className={styles.price}>
            <p className={styles.pricenow}>$2.99</p>
          </div>

          <button onClick={toCart} className={styles.carousel__btn}>
            <ShoppingCartOutlinedIcon />
            <span className={styles.btn__addtocart}>Add to Cart</span>
          </button>
        </div>
        {/* THESE ARE DUPLICATES THAT WOULD BE PROPED */}
        <div className={styles.carousel__card}>
          <div className={styles.image__container}>
            <img src={image} alt="" className={styles.carousel__image} />
            <span className={styles.carousel__discount}>20% Off</span>
          </div>

          <div className={styles.product__title}>
            <p className={styles.product__name}>Artisan Hearth Bread & Rolls</p>
            <span className={styles.product__desc}>
              Soft and fresh French rolls, perfect for sandwiches and toasts.
            </span>
          </div>

          <div className={styles.price}>
            <p className={styles.pricenow}>$2.99</p>
          </div>

          <button onClick={toCart} className={styles.carousel__btn}>
            <ShoppingCartOutlinedIcon />
            <span className={styles.btn__addtocart}>Add to Cart</span>
          </button>
        </div>

        <div className={styles.carousel__card}>
          <div className={styles.image__container}>
            <img src={image} alt="" className={styles.carousel__image} />
            <span className={styles.carousel__discount}>20% Off</span>
          </div>

          <div className={styles.product__title}>
            <p className={styles.product__name}>Artisan Hearth Bread & Rolls</p>
            <span className={styles.product__desc}>
              Soft and fresh French rolls, perfect for sandwiches and toasts.
            </span>
          </div>

          <div className={styles.price}>
            <p className={styles.pricenow}>$2.99</p>
          </div>

          <button onClick={toCart} className={styles.carousel__btn}>
            <ShoppingCartOutlinedIcon />
            <span className={styles.btn__addtocart}>Add to Cart</span>
          </button>
        </div>

        <div className={styles.carousel__card}>
          <div className={styles.image__container}>
            <img src={image} alt="" className={styles.carousel__image} />
            <span className={styles.carousel__discount}>20% Off</span>
          </div>

          <div className={styles.product__title}>
            <p className={styles.product__name}>Artisan Hearth Bread & Rolls</p>
            <span className={styles.product__desc}>
              Soft and fresh French rolls, perfect for sandwiches and toasts.
            </span>
          </div>

          <div className={styles.price}>
            <p className={styles.pricenow}>$2.99</p>
          </div>

          <button onClick={toCart} className={styles.carousel__btn}>
            <ShoppingCartOutlinedIcon />
            <span className={styles.btn__addtocart}>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Recently;
