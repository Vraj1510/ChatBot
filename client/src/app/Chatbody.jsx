import React, { useState } from 'react';
import Avatar from 'react-avatar';
import ChatInterface from './ChatInterface';
import { SendHorizontal } from 'lucide-react';
import UserAiInteraction from './UserAiInteraction';
import { useIndex } from '../IndexContext';
const Chatbody = () => {
  const [userMessages, setUserMessages] = useState([]);
  const { username } = useIndex();
  const handleSubmit = (e, message) => {
    e.preventDefault();
    if (message.trim() !== '') {
      setUserMessages([...userMessages, { text: message, type: 'user' }]);
    }
  };

  return (
    <div className='flex-1 min-h-[100vh] pb-[15vh] relative'>
      <div className='flex items-center justify-between p-5 text-xl text-gray-400'>
        <p>Hack-AI</p>
        <Avatar name={username} round size='50px' />
      </div>
      <div className='max-w-[900px] m-auto max-h-[530px] overflow-y-scroll text-wrap'>
        {userMessages.length > 0 ? (
          <UserAiInteraction messages={userMessages} />
        ) : (
          <ChatInterface />
        )}
        <div className='absolute bottom-0 w-full max-w-[900px] px-5 m-auto'>
          <form
            onSubmit={(e) => {
              handleSubmit(e, e.target.elements.message.value);
              e.target.elements.message.value = '';
            }}
          >
            <div className='flex items-center justify-between gap-5 bg-bgSecondaryColor mb-4 py-1  px-5 rounded-full border'>
              <input
                type='text'
                name='message'
                className='flex-1 bg-white border-none outline-none p-2 text-lg text-gray-700'
                placeholder='Enter a prompt here'
              />
              <div className='flex cursor-pointer'>
                <SendHorizontal type='submit' size={20} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbody;
