import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}= props
    let price = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        price = price + product.price * product.quantity;
        shipping = shipping + product.shipping *product.quantity;
    }
    let tax = (price*0.1);
    const grandTotal = price + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price:${price} </p>
            <p>Total Shipping: ${shipping} </p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
            {props.children}
        </div>
    );
};

export default Cart;