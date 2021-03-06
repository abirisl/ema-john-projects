import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init'

const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate()

    const [ signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    
    const handleEmailBlur = event =>{
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value)
    }
    if(user){
        navigate('/shop')
    }
    if(loading){
        return <p style={{display: 'flex', justifyContent:'center', marginTop:'200px',fontSize:'50px'}}>Loading.....</p>
    }
    const signInEmailAndPassword = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
           <div>
              <h2 className='form-title'>Login</h2>
              <form onSubmit={signInEmailAndPassword}>
              <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
              </div>
              <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
              </div>
              <p style={{color:'red'}}>{error?.message}</p>
              <div className='form-submit'>
                  <input type="submit" value="Login" />
              </div>
              </form>
              <p>
                New to Ema-John? <Link className='form-link' to='/signup'>Create an account</Link>
            </p>

           </div>
        </div>
    );
};

export default Login;