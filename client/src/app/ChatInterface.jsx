import React from 'react';
import {
  CircleUserRound,
  Compass,
  Lightbulb,
  MonitorPlay,
  Code,
  SendHorizontal,
} from 'lucide-react';
import { useIndex } from '../IndexContext';
const ChatInterface = () => {
  const { username } = useIndex();
  return (
    <>
      {' '}
      <div className='my-12 text-5xl font-medium p-5'>
        <p>
          <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>
            Hello, {username}
          </span>
        </p>
        <p>How can I help you today?</p>
      </div>
      <div className='grid grid-cols-4 gap-5 p-5 '>
        <div className='h-48 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer shadow-md'>
          <p>Suggest beautiful places to see on an upcoming road trip</p>
          <Compass
            size={35}
            className='p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full'
          />
        </div>
        <div className='h-48 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer shadow-md'>
          <p>What’s the reaction to and impact of autonomous vehicles</p>
          <Lightbulb
            size={35}
            className='p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full'
          />
        </div>
        <div className='h-48 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer shadow-md'>
          <p>Come up with a recipe for an upcoming event</p>
          <MonitorPlay
            size={35}
            className='p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full'
          />
        </div>
        <div className='h-48 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer shadow-md'>
          <p>Evaluate and rank common camera categories</p>
          <Code
            size={35}
            className='p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full shadow-md'
          />
        </div>
      </div>
    </>
  );
};

export default ChatInterface;
