import React from 'react'
import styles from "./checkout.module.css"
//import Cartitems from '../../components/Cartitems/Cartitems'
import checkoutimg from "../../Assets/checkouthead.jpeg"
import Shipping from '../../components/Shipping/Shipping'
import Title from '../../components/Title/Title';

function Checkout() {



    return (
        <div className={styles.order__checkout}>
                 <Title headingimg={checkoutimg} />
        <div className={styles.checkout}>
            <div className={styles.card}>
                <p className={styles.cardtype}>Card Type</p>
                <section className={styles.formpayment}>
                    <form action="#" className={styles.form}>
                        <div className={styles.form__savedcards}>
                            <button className={styles.btn__left}>
                        //card icon
                                <span className={styles.form__name}>Jane Doe</span>
                                <input type="radio" className={styles.form__radioinput} />

                            </button>
                            <button className={styles.btn__right}>
                        //card icon
                                <span className={styles.form__name}>John Wick</span>
                                <input type="radio" className={styles.form__radioinput} />

                            </button>


                        </div>

                        <div className={styles.form__details}>
                            <label htmlFor="Full-name" className={styles.form__label}>Full name</label>
                            <input type="text" className={styles.form__input__fullname} placeholder='Jane Doe' />
                            <label htmlFor="Card-number" className={styles.form__label}>Card Number</label>
                            <input type="text" className={styles.form__input__password} placeholder='****************' />
                        </div>

                        <div className={styles.expiry}>
                            <div className={styles.expirydate}>
                                <label htmlFor="Expiry-date" className={styles.expirydate__text}>Expiry Date</label>
                                <input type="text" className={styles.expirydate__date} placeholder='10/24' />
                            </div>
                            <div className={styles.cvc}>
                                <label htmlFor="cvc" className={styles.cvc__text}>CVC</label>
                                <input type="text" className={styles.cvc__code} placeholder='***' />
                            </div>
                        </div>

                        <div className={styles.checkbox}>
                            <input type="checkbox" className={styles.checkbox__input} />
                            <span className={styles.checkbox__text}>Securely save card for faster checkout next time</span>
                        </div>
                        <div className={styles.makepayment}>
                            <button className={styles.makepayment__btn}>
                                <span className={styles.makepayment__text}>Make Payment</span>
                            //arrow right icon
                            </button>
                        </div>
                    </form>
                </section>
            </div>
            <div className={styles.shipping}>
                <Shipping />
            </div>

        </div>
        </div>
    )
}

export default Checkout