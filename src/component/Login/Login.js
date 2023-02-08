import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const location = useNavigate();
    const from = location?.state?.from?.pathname || '/';
    const [signInWithEmailAndPassword,user,loading, error] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur =  (e)=>{
        setEmail(e.target.value);
    }  
    const handlePasswordBlur =  (e)=>{
        setPassword(e.target.value);
    }   
     

    if(user){
        navigate(from, {replace: true})
    }

    const handleUserSignIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(email,password)
    }

    

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserSignIn}>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="" id=""  required/>
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="" id=""  required/>
                </div>
                {
                    loading && <p>Loading....</p>
                }
                <p style={{color: 'red'}}>{error?.massage}</p>
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