import React from 'react';
import Cartitems from '../../components/Cartitems/Cartitems';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Title from '../../components/Title/Title';
import cartimageone from "../../Assets/title-img.jpeg"
import { useNavigate } from 'react-router-dom';
import "./cart.scss";

function Cart() {

    const navigate = useNavigate();

    function toCheckout(event){
        event.preventDefault();
        navigate("/checkout")
    }

    function toListing(event){
        event.preventDefault();
        navigate("/")
    }


    const styleArrowleft ={
        color: "white",
    }


  return (
    <div className="order__cart">
        <Title headingimg={cartimageone} />
    
    <div className="product">
        
        <div className="title">
            <p className="title__heading">Product</p>
            <p className="title__heading">Price</p>
            <p className="title__heading">Quantity</p>
            <p className="title__heading">Total</p>
        </div>

        <div className="listing">
            <Cartitems />
            <div className="listing__coupon">
                <div className="listing__heading">
                    <p className="listing__textleft">Do you have a coupon code?</p>
                    <form action="" className="listing__form">
                    <input type="text" className="listing__input" placeholder="Coupon code" /> 
                            <button className="listing__form__btn">
                                
                            <ArrowForwardIcon style={styleArrowleft}/>
                            </button>
                        
                    </form>
                    
                    
                </div>
                <div className="listing__tranx">
                <p className="listing__textright">Shipping</p>
                    <button className="listing__btn">
                        <span className='listing__btnName'>Express Delivery - $20</span>
                        <ArrowDropDownIcon />
                  </button>
                </div>
            </div>

            <section className="process">
                <div className="total">
                    <div className="total__heading">
                        <p className="total__text">
                            Total
                        </p>
                        <p className="total__cumulative">
                            $117.00
                        </p>

                    </div>

                    <div className="discount">
                        <p className="discount__text">
                            Discount
                        </p>
                        <p className="discount__price">
                            $10
                        </p>
                    </div>


                </div>
                <div className="process__btns">

                    <button onClick={toListing} className="process__continue">
                        Continue Shopping
                    </button>
                    <button onClick={toCheckout} className="process__checkout">
                    <span className='process__btnName'>Proceed To Checkout</span>
                    <ArrowForwardIcon style={styleArrowleft}/>
                    </button>
                </div>
            </section>
        </div>

        
    </div>
    </div>
  )
}

export default Cart