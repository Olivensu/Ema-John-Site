import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');
    const [ confirmPassword, setConfirmPassword] = useState('');
    const [ error, setError] = useState('');

    const handleEmailBlur =  (e)=>{
        setEmail(e.target.value);
    }  
    const handlePasswordBlur =  (e)=>{
        setPasword(e.target.value);
    }  
    const handleConfirmPasswordBlur =  (e)=>{
        setConfirmPassword(e.target.value);
    }  
    const handleErrorBlur =  (e)=>{
        setError(e.target.value);
    }  

    const handleCreateUser =(e)=>{
        e.preventDefault();
        if(password !== confirmPassword){
            setError('Your two passwords do not match')
            return;
        }
    }
    return (
        <div>
            <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="" id=""  required/>
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="" id=""  required/>
                </div>
                <div className='input-group'>
                    <label htmlFor="Confirm-password">Confirm Password</label>
                    <input onBlur={handleConfirmPasswordBlur} type="password" name="" id=""  required/>
                </div>
                <p style={{color: 'red'}}>{error}</p>
                <input className='form-submit' type="submit" value='Sign Up' />
                </form>
                <p>
                    ALready have an account? <Link className='form-Link' to='/SignUp'>Login</Link>
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
        </div>
    );
};

export default SignUp;