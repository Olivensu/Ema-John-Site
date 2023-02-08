import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className=''>
                <Link className='link' to="/shop">Shop</Link>
                <Link className='link' to="/Order">Order</Link>
                
                <Link className='link' to="/Inventor">Inventory</Link>
                <Link className='link' to="/About">About</Link>
                {
                    user ?
                    <button onClick={handleSignOut} className='signOut'>Sign Out</button>
                    :
                    <Link className='link' to="/Login">Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;