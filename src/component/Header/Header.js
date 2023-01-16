import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className=''>
                <a className='link' href="/Order">Order</a>
                <a className='link' href="/Order_Review">Order Review</a>
                <a className='link' href="/Manage_Inventor">Manage Inventory</a>
                <a className='link' href="/Login">Login</a>
            </div>
        </nav>
    );
};

export default Header;