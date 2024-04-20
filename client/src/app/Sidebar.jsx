import React from 'react';
import { useState } from 'react';
import { Menu, Plus, CircleHelp, Activity, Settings, MessageSquare } from 'lucide-react';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className='min-h-[100vh] w-[18%]  inline-flex flex-col justify-between bg-bgSecondaryColor p-5 shadow-xl border-solid-black'>
      <div className='w-full'>
        <div
          className='-mt-1 w-full justify-between inline-flex  items-center gap-2.5  bg-bgPrimaryColor rounded-full text-md text-gray-400 cursor-pointer'
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

      <div className='flex flex-col gap-5'>
        <div className='pr-2.5 cursor-pointer flex gap-3 text-gray-500 items-center'>
          <CircleHelp size={20} className='text-softTextColor' />
          {isOpen ? <p>Help</p> : null}
        </div>
        <div className='pr-2.5 cursor-pointer flex gap-3 text-gray-500 items-center'>
          <Activity size={20} className='text-softTextColor' />
          {isOpen ? <p>Activity</p> : null}
        </div>
        <div className='pr-2.5 cursor-pointer flex gap-3 text-gray-500 items-center'>
          <Settings size={20} className='text-softTextColor' />
          {isOpen ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
