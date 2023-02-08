import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [ phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();

    const handleNameBlur =  (e)=>{
        setName(e.target.value);
    }  
    const handleEmailBlur =  (e)=>{
        setEmail(e.target.value);
    }  
    const handleAddressBlur =  (e)=>{
        setAddress(e.target.value);
    }  
    const handlePhoneNumberBlur =  (e)=>{
        setPhoneNumber(e.target.value);
    }   

    

    const handleCreateUser =(e)=>{
        e.preventDefault();
        const shipping = {name, email, address, phoneNumber }
        console.log(shipping);
       
    }
    return (
        <div>
            <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping information</h2>
                <form onSubmit={handleCreateUser}>
                <div className='input-group'>
                    <label htmlFor="Name">Name</label>
                    <input onBlur={handleNameBlur} type="text" name="" id=""  required/>
                </div>
                <div className='input-group'>
                    <label htmlFor="Email">Email</label>
                    <input value={user?.email} readOnly type="email" name="" id=""  required/>
                </div>
                <div className='input-group'>
                    <label htmlFor="Address">Address</label>
                    <input onBlur={handleAddressBlur} type="text" name="" id=""  required/>
                </div>
                <div className='input-group'>
                    <label htmlFor="Phone-Number">Phone Number</label>
                    <input onBlur={handlePhoneNumberBlur} type="text" name="" id=""  required/>
                </div>
                <input  className='form-submit' type="submit" value='Add Shipping' />
                </form>
                
            </div>
        </div>
        </div>
    );
};

export default Shipment;