import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const Signup = () => {
    const [email, setEmail] = useState('');
    const  [password, setPassword] = useState('');
    const [confirmPassword, setComfirmPassword] = useState('');
    const [error, setError] = useState();
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);



    const handleEmailBlur = event =>{
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event =>{
        setComfirmPassword(event.target.value)
    }
    if(user){
        navigate('/shop')
    }

    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Your two password did not same')
            return;
        }
        if(password.length <6){
            setError('Your passwword is not long')
        }
        createUserWithEmailAndPassword(email,password)
    }
    return (
        <div className='form-container'>
           <div>
              <h2 className='form-title'>Sign up</h2>
              <form onSubmit={handleCreateUser}>
              <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
              </div>
              <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
              </div>
              <div className="input-group">
                  <label htmlFor="comfirm-password">Comfirm password</label>
                  <input onBlur={handleConfirmPasswordBlur} type="password" name="comfirm-password" id="" required/>
              </div>
              <p style={{color:'red'}}>{error}</p>
              <div className='form-submit'>
                  <input type="submit" value="Sign up" />
              </div>
              </form>
              <p>
                Already Haven an account? <Link className='form-link' to='/login'>Login</Link>
            </p>

           </div>
        </div>
    );
};

export default Signup;