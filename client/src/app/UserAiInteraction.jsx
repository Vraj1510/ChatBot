import React, { useEffect, useRef } from 'react';
import Avatar from 'react-avatar';
import '../../public/scroll.css';
import { useIndex } from '../IndexContext';
import { useNavigate } from 'react-router';
const UserAiInteraction = ({ messages }) => {
  const bottomRef = useRef(null);
  const { username } = useIndex();
  const navigate=useNavigate();
  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className='w-full flex-1 p-4 max-w-96 '>
      {messages.map((message, index) => (
        <>
          <div key={index} className='flex items-center space-x-4 mb-4'>
            <Avatar name={username} round size='50px' />
            <div className='items-center'>
              <div className='text-2xl font-medium'>
                {message.type === 'user' ? username : 'AI'}
              </div>
              <div className='text-md rounded-md px-1'>{message.text}</div>
            </div>
          </div>

          <div className='flex  items-start space-x-4 mb-4'>
            {/* <Avatar name='AI' round color='blue' size='50px' /> */}
            <div className='flex w-[10rem] h-[3rem] px-[18px] items-center justify-center rounded-full bg-green-700 text-white'>
              AI
            </div>
            <div>
              {/* <div className="text-sm"
              
            </div> */}
              <div className='text-md rounded-md p-3 max-w-[800px] border'>
                <p className='break-words w-full'> Hello this is response from AI,</p>
                <p className='break-words w-full mt-5'>
                  dfjghdfhjdfjfjdgkjdfgkdfgbdkfbgdfkjbgdfkjbgdkfjbgdkfjbgdfjkbgdkfjbgdjkfbgdfjkbgdkfjgbprfkspoofsiokvjndfjkvndfjkvndfjkvndfjkvndfjkvndfjknvdfjknvdkfjvnvkjdfnvkjdnvjkfnvkjdfnvjknvkjvniojvpsngsngjdvbduortbsonfbdmfjbnfgkjbngfjkbnfgjkbnfjkgbnfgjkbnfgjkbnfgkjbngjkngfjknbjknbjkgnbjkgfnbjknbjkngjkbgnjkbgnjkfbgnbjkg
                </p>

                <button onClick={()=>{
                  navigate('/app/run')
                }} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-6 ml-auto'>
                  Execute
                </button>
              </div>
            </div>
          </div>
        </>
      ))}

      <div ref={bottomRef}></div>
    </div>
  );
};

export default UserAiInteraction;
