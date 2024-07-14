import React from "react";
import CartIcon from '../Cart/CartIcon'
import clasess from './CardHeaderButton.module.css'

const CartHeaderButton = () => {
    return (
        <button className={clasess.button}>
            <span className={clasess.icon}>
                <CartIcon></CartIcon>
            </span>
            <span className="title">Your Cart</span>
            <span className={clasess.badge}>3</span>
        </button>
    )
}

export default CartHeaderButton;