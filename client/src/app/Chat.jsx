import React from 'react';
import Sidebar from './Sidebar';
import Chatbody from './Chatbody';
import { useIndex } from '../IndexContext';
import { useEffect } from 'react';
const Chat = () => {
  console.log('Reaching here');
  const { updateUsername } = useIndex();
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
  return (
    <>
      <div className='flex contain'>
        <Sidebar />
        <Chatbody />
      </div>
    </>
  );
};

export default Chat;
