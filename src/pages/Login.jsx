import React from 'react';
import "/src/assets/css/Login.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// import {useHistory} from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  // const history = useHistory(); 

  const handleLoginClick = (values) => {
    
    setTimeout(() => {
     
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'You have successfully logged in!',
        confirmButtonText: 'Continue',
      }).then((result)=>{
        if(result.isConfirmed){
          console.log('Redirecting...');
          history.push('/src/pages/Search.jsx');
         
        }
      })

      
     
    },1000 );
  };


  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .required('Required')
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
      ),
  });
  

  
    return (
      <>
      <section className='login'>
      <div className='login-wrap'>
        <div className='main'>
        <div className='login-logo-wrap'>
          <img className='mainlogo' src='/src/assets/images/mainlogo.png' alt='' /></div>
          <div className='login-logo-content'>
          
          <h1 className='heading'>WELCOME TO BRIGHTQUERY</h1>
          <p>PLEASE LOG IN</p></div>
  
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              
  console.log(values); 
  handleLoginClick(values);
 
}}>
            <Form>
            <div className='form-group2'>
              <label>Email</label>
              <Field className='email' type='text' name='email' placeholder='Enter Your Email' />
              <ErrorMessage style={{color:"red" }}  name='email' component='div' className='error' />
  
              <label>Password</label>
              <div className='input-group2'>
              <Field className='password' type='password' name='password' placeholder='Enter Your Password' /><span><i className="fa fa-eye-slash" aria-hidden="true"></i></span>
              <ErrorMessage style={{color:"red"}} name='password' component='div' className='error' /></div>
  
              <button className='btn-login' type='submit'>
                Log In
              </button>
              <div className='or'>
                <span></span>
                OR<span></span>
              </div>
              <button className='linkedin'>
              <img  className='btn-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png' alt=''/>
              Continue with LinkedIn</button>
           </div> 
           
           </Form>
          </Formik>
        </div></div></section>
      </>
    );
  };
  
  export default Login;
  