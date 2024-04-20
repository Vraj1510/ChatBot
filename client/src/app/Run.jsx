import React from 'react';
import Sidebar from './Sidebar';
import Chatbody from './Chatbody';
import { useIndex } from '../IndexContext';
import { useEffect } from 'react';
import Avatar from 'react-avatar';
const Run = () => {
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
        <div className='flex-1 min-h-[100vh] -mb-20 relative'>
          <div className='flex items-center justify-between p-5 text-xl text-gray-500'>
            <p className='-mt-4'>QueryCraft</p>
            <Avatar name='Manav' round size='40px' />
          </div>
          <div className='flex flex-col h-screen'>
            <style>
              {`
          h1, h2, h3, h4, h5, h6 {
            font-family: 'Inter', sans-serif;
            --font-sans: 'Inter';
          }
          body {
            font-family: 'Inter', sans-serif;
            --font-sans: 'Inter';
          }
        `}
            </style>
            <header className=' text-white py-4 px-6'>
              <h1 className='text-5xl text-[#3b82f6] font-medium'>SQL Query Runner</h1>
            </header>
            <div className='flex-1 p-3 space-y-4'>
              <div className='flex items-center space-x-4'>
                <input
                  className='flex  w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1'
                  placeholder='Enter your SQL query'
                  type='text'
                />
                <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2'>
                  Run
                </button>
              </div>
              <div
                className='rounded-lg border bg-card text-card-foreground shadow-sm'
                data-v0-t='card'
              >
                <div className='relative w-full overflow-auto'>
                  <table className='w-full caption-bottom text-sm'>
                    <thead className='[&amp;_tr]:border-b'>
                      <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                        <th className='h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0'>
                          Column 1
                        </th>
                        <th className='h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0'>
                          Column 2
                        </th>
                        <th className='h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0'>
                          Column 3
                        </th>
                      </tr>
                    </thead>
                    <tbody className='[&amp;_tr:last-child]:border-0'>
                      <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                        <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                          Value 1
                        </td>
                        <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                          Value 2
                        </td>
                        <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                          Value 3
                        </td>
                      </tr>
                      <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                        <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                          Value 4
                        </td>
                        <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                          Value 5
                        </td>
                        <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                          Value 6
                        </td>
                      </tr>
                      <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                        <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                          Value 7
                        </td>
                        <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                          Value 8
                        </td>
                        <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                          Value 9
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Run;
