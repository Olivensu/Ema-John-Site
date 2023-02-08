import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className=''>
                <Link className='link' to="/shop">Shop</Link>
                <Link className='link' to="/Order">Order</Link>
                <Link className='link' to="/Order_Review">Order Review</Link>
                <Link className='link' to="/Manage_Inventor">Manage Inventory</Link>
                <Link className='link' to="/Login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;