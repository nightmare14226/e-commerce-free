import React from 'react';
import styles from "./minicart.module.css";
import image from "../../Assets/potato.jpg";
import basmaticImage from "../../Assets/basmatic.jpg"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

function Minicart() {

    const cancelbtn = {
        color: "#E4420F"
    }


    return (
        <div className={styles.cartitems}>

             <div className={styles.cartitems__product}>
                <div className={styles.cartitems__image}>
                    <img src={basmaticImage} alt="" className={styles.cartitems__img} />
                </div>
                <div className={styles.cartitems__product__desc}>
                    <span className={styles.product__name}>Basmati Rice</span>
                    <p className={styles.product__category}>Grains and Stable</p>
                    <p className={styles.product__weigh}>5 kg</p>
                </div>
                <section className={styles.buydesc}>
                    <p className={styles.buydesc__price}>$49.99</p>
                    <div className={styles.buydesc__quantity}>
                        <span className={styles.buydesc__quantity__num}>1</span>
                        <div className={styles.buydesc__btns}>
                            <button className={styles.bydesc__btnup}>
                                <ArrowDropUpIcon />
                            </button>
                            <button className={styles.bydesc__btndown}>
                                <ArrowDropDownIcon />
                            </button>

                        </div>
                    </div>
                    <p className={styles.buydesc__total}>$49.99</p>
                </section>
               
            {/* DUPLICATE FOR NOW */}


            </div>
            <div className={styles.cartitems__product}>
                <div className={styles.cartitems__image}>
                    <img src={image} alt="" className={styles.cartitems__img} />
                </div>
                <div className={styles.cartitems__product__desc}>
                    <span className={styles.product__name}>Irish Potato</span>
                    <p className={styles.product__category}>Vegetables</p>
                    <p className={styles.product__weigh}>2 kg</p>
                </div>
                <section className={styles.buydesc}>
                    <p className={styles.buydesc__price}>$4.00</p>
                    <div className={styles.buydesc__quantity}>
                        <span className={styles.buydesc__quantity__num}>2</span>
                        <div className={styles.buydesc__btns}>
                            <button className={styles.bydesc__btnup}>
                                <ArrowDropUpIcon />
                            </button>
                            <button className={styles.bydesc__btndown}>
                                <ArrowDropDownIcon />
                            </button>

                        </div>
                    </div>
                    <p className={styles.buydesc__total}>$8.00</p>
                </section>
                



            </div>

            

           
            


        </div>
    )
}

export default Minicart