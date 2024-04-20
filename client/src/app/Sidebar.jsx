import React from 'react';
import { useState, useEffect } from 'react';
import { useIndex } from '../IndexContext';
import { Menu, Plus, CircleHelp, Activity, Settings, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { updateUsername } = useIndex();
  const navigate = useNavigate();
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch('http://localhost:3001/checksession', {
          method: 'POST',
          headeres: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // This line enables sending cookies
        });
        console.log(response);
        const result = await response.json();
        console.log(result);
        if (result.valid === false) {
          navigate('/');
        } else {
          console.log(result.username);
          // setUsername1(result.username);
          updateUsername(result.username);
        }
      } catch (err) {
        console.error('Error during session check:', err.message);
      }
    };

    checkSession();
  }, []);

  const logout = async () => {
    try {
      const response = await fetch('http://localhost:3001/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const result = await response.json();
      console.log(result);
      if (result.message) {
        // socket.disconnect();
        navigate('/');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
  return (
    <div
      className={`min-h-[100vh]  ${
        isOpen ? 'w-[18%]' : 'w-[5%]'
      } inline-flex flex-col justify-between bg-bgSecondaryColor p-5 shadow-xl border-solid-black}`}
    >
      <div className='w-full'>
        <div
          className={`-mt-1 w-full justify-between inline-flex ${
            isOpen ? 'inline-flex' : 'flex flex-col py-3 items-center'
          }  items-center gap-2.5  bg-bgPrimaryColor rounded-full text-md text-gray-400 cursor-pointer`}
          //   onClick={() => {
          //     setDisplayResult(false);
          //     setInput("");
          //   }}
        >
          <Menu
            size={25}
            onClick={() => setIsOpen(!isOpen)}
            className='cursor-pointer text-gray-500'
          />
          <div className='flex space-x-2  justify-center items-center bg-stone-100 rounded-full px-4 py-2'>
            <Plus size={20} className='cursor-pointer text-gray-500' />
            {isOpen ? <p className='text-gray-500'>New chat</p> : null}
          </div>
        </div>
        {isOpen ? (
          <div className='flex flex-col'>
            <p className='mt-5 mb-5 ml-0.5'>Recent</p>
            <div className='w-[105%] -ml-1 h-[2px] -mt-4 bg-gray-200'></div>
            <div className='my-2 flex items-center gap-2.5 pr-10 rounded-full text-gray-700 cursor-pointer hover:bg-slate-200 p-2 bg-bgPrimaryColor'>
              {/* <MessageSquare
                  size={20}
                  className="cursor-pointer text-softTextColor"
                /> */}
            </div>
          </div>
        ) : null}
      </div>

      <div className={`flex flex-col gap-5 ${isOpen ? '' : 'w-full items-center'}`}>
        <div className='pr-0.5 cursor-pointer flex gap-5 text-gray-500 items-center'>
          <CircleHelp size={20} className='text-softTextColor' />
          {isOpen ? <p>Help</p> : null}
        </div>
        <div className='pr-0.5 cursor-pointer flex gap-5 text-gray-500 items-center'>
          <Activity size={20} className='text-softTextColor' />
          {isOpen ? <p>Activity</p> : null}
        </div>
        <div className='pr-0.5 cursor-pointer flex gap-5 text-gray-500 items-center'>
          <Settings size={20} className='text-softTextColor' />
          {isOpen ? <p>Setting</p> : null}
        </div>
        <div className='pr-0.5 cursor-pointer flex gap-5 text-gray-500 items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 transform hover:bg-gray-100 rotate-180 text-gray-600'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            onClick={() => {
              logout();
            }}
            // class='h-4 w-4 transform rotate-180'
          >
            <path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4'></path>
            <polyline points='16 17 21 12 16 7'></polyline>
            <line x1='21' x2='9' y1='12' y2='12'></line>
          </svg>
          {isOpen ? <p>Logout</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
