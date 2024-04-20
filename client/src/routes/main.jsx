// main.jsx in routes
import { Navigate, useRoutes } from 'react-router-dom';
import React from 'react';
import Home from '../auth/Home';
import Signup from '../auth/Signup';
import Login from '../auth/Login';
import Chat from '../app/Chat';
import Page404 from '../Page404';

// Define your routes without wrapping them in a component
console.log('Vraj');
export default function routes() {
  return useRoutes([
    { path: '/', element: <Navigate to='/auth' /> },
    {
      path: '/auth',
      children: [
        { path: '', element: <Home /> },
        { path: 'signup', element: <Signup /> },
        { path: 'login', element: <Login /> },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to='/404' replace /> },
      ],
    },
    {
      path: '/app',
      children: [
        { path: '', element: <Chat /> },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to='/404' replace /> },
      ],
    },
    { path: '/404', element: <Page404 /> },
    { path: '*', element: <Navigate to='/404' replace /> },
  ]);
}
