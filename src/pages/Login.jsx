import React from 'react';
import "/src/assets/css/Login.css";
const Login = () => {
  return (<>
    <div className='main'>
    <img className='mainlogo' src='/src/assets/images/mainlogo.png' alt=''/>
        <h1 >WELCOME TO BRIGHTQUERY </h1> 
        <p>PLEASE LOG IN</p>
        <label>
            Email
        </label>
        <input className='email' type='text' name='text' placeholder='Enter Your Email'/>
        <label>Password</label>
        <input className='password' type='text' placeholder='Enter Your Password'/>
        <button className='btn' type='submit'>Log In</button>
        
    </div>

    </>
  )
}

export default Login;