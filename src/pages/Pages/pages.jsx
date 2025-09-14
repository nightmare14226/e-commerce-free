import React from "react";
import Listing from "../Listing/Listing";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";
import { Route, Routes } from "react-router-dom";

function Pages() {
    return(
        <Routes>
            <Route path="/" element={<Listing />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
        
        </Routes>
    )
}

export default Pages