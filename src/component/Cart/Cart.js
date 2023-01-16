import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}= props
    let price = 0;
    let shipping = 0;
    for(const product of cart){
        price = price + product.price;
        shipping = shipping + product.shipping;
    }
    let tax = (price*0.1);
    const grandTotal = price + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price:${price} </p>
            <p>Total Shipping: ${shipping} </p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;