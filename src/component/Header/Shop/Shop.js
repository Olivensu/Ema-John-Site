import React, { useEffect, useState } from 'react';
import useProducts from '../../../hooks/useProducts';
import { addToDb,getStorecart } from '../../../utilities/fakedb';
import Cart from '../../Cart/Cart';
import Product from '../../Product/Product';
import { Link } from 'react-router-dom';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]= useProducts()
    const [cart, setCart]= useState([]);
    
    useEffect(()=>{
        const storedCart = getStorecart();
        const saveCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product=> product.id === id)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart);
    },[products])

    const handleAddToCart = (product)=>{
        console.log(product);
        let newCart = [];
        const exists = cart.find(data => data.id === product.id);
        if(!exists) {
            product.quantity=1;
            newCart = [...cart, product];
        }
        else{
            const rest = cart.filter(data => data.id !== product.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=> <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to={"/Order"}>
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;