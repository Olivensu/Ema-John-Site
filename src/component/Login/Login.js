import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form >
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="" id=""  required/>
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="" id=""  required/>
                </div>
                <input className='form-submit' type="submit" value='Submit' />
                </form>
                <p>
                    New to Ema-John? <Link className='form-Link' to='/SignUp'>Create an account</Link>
                </p>
                <div className='or-div'>
                    <hr />
                    <span>
                        or
                    </span>
                    <hr />
                </div>
                <button className=' form-submit'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;