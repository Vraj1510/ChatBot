import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import { useIndex } from './IndexContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useFormik } from 'formik';
// import validationSchema from '../Schema';
function Signup() {
  // const [username, setUsername1] = useState('');
  // const [password, setPassword] = useState('');
  // const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate();
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    // validationSchema: validationSchema,

    onSubmit: (values, e) => {
      e.preventDefault();
      const { username, email, password } = values;
    },
  });
  const handleSignUp=()=>{
    navigate('/app/chat');
  }
  // console.log(values)

  return (
    <div className='select-none flex justify-center items-center h-screen bg-[#f3f4f6]'>
      <div className='bg-white p-10 rounded-lg shadow-2xl h-[550px] w-[460px]'>
        <div className='flex flex-col items-center mb-4'>
          <div className='bg-[#3b82f6] text-white p-2 rounded-full'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='h-16 w-16'
            >
              <path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'></path>
              <path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'></path>
            </svg>
          </div>
          <h2 className='text-3xl font-semibold mt-1 mb-5'>Connecta</h2>
        </div>
        <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
          <input
            className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-md ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
            placeholder='Username'
            type='text'
            name={'username'}
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {touched.username && errors.username ? (
            <p className='font-semibold text-red-600'>{errors.username}</p>
          ) : null}
          <div className='relative'>
            <input
              className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-md ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
              placeholder='Password'
              type={showPassword ? 'text' : 'password'}
              name={'password'}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {showPassword ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='sticky inset-y-0 right-0 mr-3 my-auto h-5 w-5 text-gray-500'
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <path d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z'></path>
                <circle cx='12' cy='12' r='3'></circle>
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                class='absolute inset-y-0 right-0 mr-3 my-auto h-5 w-5 text-gray-500'
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <path d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z'></path>
                <circle cx='12' cy='12' r='3'></circle>
                <path d='M6 6l12 12' stroke='currentColor' stroke-width='2'></path>
              </svg>
            )}

            {touched.password && errors.password ? (
              <p className='font-semibold text-red-600'>{errors.password}</p>
            ) : null}
          </div>
          <input
            className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-md ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
            placeholder='Email'
            type='email'
            name={'email'}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email ? (
            <p className='font-semibold text-red-600'>{errors.email}</p>
          ) : null}

          <button
            onClick={() => {
              handleSignUp();
            }}
            className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full bg-black text-white'
          >
            Register
          </button>
        </form>
        <div className='mt-8 text-center'>
          <span className='text-md text-gray-500'>Already Have An Account?</span>

          <Link to={'/auth/login'} className='text-md text-blue-600 hover:underline'>
            {' '}
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
