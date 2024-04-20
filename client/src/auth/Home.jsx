import React from 'react';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useIndex } from '../IndexContext';
const Home = () => {
  const navigate = useNavigate();
  const { updateUsername } = useIndex();
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch('http://localhost:3001/checksession', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // This line enables sending cookies
        });
        console.log(response);
        const result = await response.json();
        console.log(result);
        if (result.valid === false) {
        } else {
          navigate('/app/chat');
          console.log(result.username);
          setUsername1(result.username);
          updateUsername(result.username);
        }
      } catch (err) {
        console.error('Error during session check:', err.message);
      }
    };

    checkSession();
  }, []);

  return (
    <div className='w-screen absolute left-0 flex flex-col'>
      <div className='flex justify-between mx-6 my-3'>
        <div className='flex items-center justify-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='w-12 h-12 text-gray-700 dark:text-gray-400'
          >
            <ellipse cx='12' cy='5' rx='9' ry='3'></ellipse>
            <path d='M3 5V19A9 3 0 0 0 21 19V5'></path>
            <path d='M3 12A9 3 0 0 0 21 12'></path>
          </svg>
          <div className='text-lg font-semibold'>QueryCraft</div>
        </div>
        <div className='flex space-x-4 items-center -mr-20 justify-center'>
          <div className='text-lg hover:text-[#3b82f6] cursor-pointer'>About</div>
          <div className='text-lg hover:text-[#3b82f6] cursor-pointer'>Blog</div>
          <div className='text-lg hover:text-[#3b82f6] cursor-pointer'>Contacts</div>
        </div>
        <div className='flex space-x-3 items-center justify-center'>
          <button
            className='bg-black w-28 h-10 rounded-md shadow-2xl text-white cursor-pointer'
            onClick={() => navigate('/auth/login')}
          >
            Login
          </button>
          <button
            className='bg-black w-28 h-10 rounded-md shadow-2xl text-white cursor-pointer'
            onClick={() => navigate('/auth/signup')}
          >
            Signup
          </button>
        </div>
      </div>
      <div className='flex flex-col items-center h-screen justify-center pb-32 '>
        <div
          className='text-[3.5rem] font-medium text-
          text-[#3b82f6]'
        >
          SQL Query Builder
        </div>
        <div className='mt-4 text-2xl'>
          Unleash SQL mastery: Effortlessly craft and execute database queries.
        </div>
        <div className='mt-4 text-lg rounded-md px-4 py-2 bg-black text-white border-[2.5px] border-[#3b82f6] cursor-pointer'>
          Try Now!
        </div>
      </div>
    </div>
  );
};

export default Home;
