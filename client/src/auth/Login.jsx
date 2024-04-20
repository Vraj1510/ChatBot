import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { loginSchema } from '../Schema';
import { useFormik } from 'formik';
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleImageClick = () => {
    setShowPassword(!showPassword);
  };
  var bool1 = false;
  const navigate = useNavigate();

  const initialValues = {
    username: '',
    password: '',
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    // validationSchema: loginSchema,

    onSubmit: (values, e) => {
      e.preventDefault();
      const { username, password } = values;
    },
  });
  console.log(values);

  return (
    <div class='flex justify-center items-center h-screen bg-[#f3f4f6]'>
      <div class='bg-white p-10 rounded-lg shadow-2xl h-[550px] w-[460px]'>
        <div class='flex flex-col items-center mb-4'>
          <div class='bg-[#3b82f6] text-white p-2 rounded-full'>
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
              class='h-16 w-16'
            >
              <path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'></path>
              <path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'></path>
            </svg>
          </div>
          <h2 class='text-3xl font-semibold mt-1 mb-5'>Connecta</h2>
        </div>
        <form class='flex flex-col space-y-4' onSubmit={handleSubmit}>
          <input
            class='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-md ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
            placeholder='Username'
            type='text'
            name='username'
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.username && touched.username ? (
            <p className='font-semibold text-red-600'>{errors.username}</p>
          ) : null}
          <div class='relative'>
            <input
              class='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-md ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
              placeholder='Password'
              type={showPassword ? 'text' : 'password'}
              name={'password'}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className='font-semibold text-red-600'>{errors.password}</p>
            ) : null}
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
                class='absolute inset-y-0 right-0 mr-3 my-auto h-5 w-5 text-gray-500'
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
          </div>
          <button
            onClick={async (e) => {
              e.preventDefault(); // Prevent default form submission behavior
              await handleLogin();
            }}
            class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full bg-black text-white'
          >
            Login
          </button>
          <div class='flex items-center justify-center'>
            <span class='bg-white px-2 -mt-1 text-md text-gray-500'>OR</span>
          </div>
          <div class='flex items-center justify-center'>
            <a
              class='text-md text-center -mt-3 text-blue-600 hover:underline'
              href='/auth/forgotpassword'
            >
              Forgot Your Password?
            </a>
          </div>
        </form>

        <div class='mt-7 text-center'>
          <span class='text-md text-gray-500'>Create An Account?</span>
          <Link to={'/auth/signup'} className='text-md text-blue-600 hover:underline'>
            {' '}
            Register{' '}
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
