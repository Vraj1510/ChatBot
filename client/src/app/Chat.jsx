import React from 'react';
import Sidebar from './Sidebar';
import Chatbody from './Chatbody';
const Chat = () => {
  console.log("Reaching here")
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
