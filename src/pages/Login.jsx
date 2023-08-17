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
          history.push('/search');
         
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
        <div className='main'>
          <img className='mainlogo' src='/src/assets/images/mainlogo.png' alt='' />
          <h1>WELCOME TO BRIGHTQUERY</h1>
          <p>PLEASE LOG IN</p>
  
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              
  console.log(values); 
  handleLoginClick(values);
 
}}>
            <Form>
              <label>Email</label>
              <Field className='email' type='text' name='email' placeholder='Enter Your Email' />
              <ErrorMessage style={{color:"red" }}  name='email' component='div' className='error' />
  
              <label>Password</label>
              <Field className='password' type='password' name='password' placeholder='Enter Your Password' />
              <ErrorMessage style={{color:"red"}} name='password' component='div' className='error' />
  
              <button className='btn' type='submit'>
                Log In
              </button>
              <div className='or'>
                <span>OR</span>
              </div>
              <button className='linkedin'>Continue with LinkedIn</button>
            </Form>
          </Formik>
        </div>
      </>
    );
  };
  
  export default Login;
  