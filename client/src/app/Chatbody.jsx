import React from 'react';
import {
  CircleUserRound,
  Compass,
  Lightbulb,
  MonitorPlay,
  Code,
  SendHorizontal,
} from 'lucide-react';
import Avatar from 'react-avatar';
const Chatbody = () => {
  return (
    <div className='flex-1 min-h-[100vh] pb-[15vh] relative'>
      <div className='flex items-center justify-between p-5 text-xl text-gray-500'>
        <p className='-mt-4'>QueryCraft</p>
        <Avatar name='Manav' round size='40px' />
      </div>
      <div className='max-w-[900px] m-auto'>
        <div className='my-12 text-5xl font-medium p-5'>
          <p>
            <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>
              Hello, Manav
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

        <div className='absolute bottom-0 w-full max-w-[900px] px-5 py-4 m-auto'>
          <form action={''}>
            <div className='flex bg-white items-center justify-between gap-5 shadow-md py-1 px-5 rounded-full border'>
              <input
                onChange={''}
                // value={}
                type='text'
                className='flex-1 border-none outline-none p-2 text-md placeholder-gray-400 text-gray-500'
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
