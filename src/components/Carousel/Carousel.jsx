import React from "react";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
import image from "../../Assets/grains.jpg";
import styles from "./carousel.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Navbtn from "../Navbtn/Navbtn";
import {Navigate, useNavigate } from "react-router-dom";

function Carousel() {

  const navigate = useNavigate();


 function toCart() {
   navigate("/cart")
 }


  return (
    <div className={styles.carousel}>
      <Navbtn title="Best Seller" />
      <div className={styles.order__carousel}>
      <div className={styles.carousel__card}>
        <div className={styles.image__container}>
          <img src={image} alt="" className={styles.carousel__image} />
          <span className={styles.carousel__discount}>20% Off</span>
        </div>

        <div className={styles.product__title}>
          <p className={styles.product__name}>Uncle Ben's</p>
          <span className={styles.product__desc}>Original Rice (25 Kg)</span>
        </div>

        <div className={styles.rating}>
          <div className={styles.stars}>
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarHalfOutlinedIcon />
          </div>
          <span className={styles.ratingnum}>4.8</span>
        </div>
        <div className={styles.price}>
          <p className={styles.pricewas}>Was $20.56</p>
          <p className={styles.pricenow}>Now $15.59</p>
        </div>
        <div className={styles.lines}>
          <div className={styles.orange__div}> </div>
        </div>
        <p className={styles.how__many__sold}>Sold 60/100</p>

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
          <p className={styles.product__name}>Uncle Ben's</p>
          <span className={styles.product__desc}>Original Rice (25 Kg)</span>
        </div>

        <div className={styles.rating}>
          <div className={styles.stars}>
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarHalfOutlinedIcon />
          </div>
          <span className={styles.ratingnum}>4.8</span>
        </div>
        <div className={styles.price}>
          <p className={styles.pricewas}>Was $20.56</p>
          <p className={styles.pricenow}>Now $15.59</p>
        </div>
        <div className={styles.lines}>
          <div className={styles.orange__div}> </div>
        </div>
        <p className={styles.how__many__sold}>Sold 60/100</p>

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
          <p className={styles.product__name}>Uncle Ben's</p>
          <span className={styles.product__desc}>Original Rice (25 Kg)</span>
        </div>

        <div className={styles.rating}>
          <div className={styles.stars}>
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarHalfOutlinedIcon />
          </div>
          <span className={styles.ratingnum}>4.8</span>
        </div>
        <div className={styles.price}>
          <p className={styles.pricewas}>Was $20.56</p>
          <p className={styles.pricenow}>Now $15.59</p>
        </div>
        <div className={styles.lines}>
          <div className={styles.orange__div}> </div>
        </div>
        <p className={styles.how__many__sold}>Sold 60/100</p>

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
          <p className={styles.product__name}>Uncle Ben's</p>
          <span className={styles.product__desc}>Original Rice (25 Kg)</span>
        </div>

        <div className={styles.rating}>
          <div className={styles.stars}>
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarHalfOutlinedIcon />
          </div>
          <span className={styles.ratingnum}>4.8</span>
        </div>
        <div className={styles.price}>
          <p className={styles.pricewas}>Was $20.56</p>
          <p className={styles.pricenow}>Now $15.59</p>
        </div>
        <div className={styles.lines}>
          <div className={styles.orange__div}> </div>
        </div>
        <p className={styles.how__many__sold}>Sold 60/100</p>

        <button onClick={toCart} className={styles.carousel__btn}>
          <ShoppingCartOutlinedIcon />
          <span className={styles.btn__addtocart}>Add to Cart</span>
        </button>
      </div>




      </div>
    </div>

  );
}

export default Carousel;
