import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import React from 'react';
import Home from '../auth/Home';
import Signup from '../auth/Signup';
import Login from '../auth/Login';
import Chat from '../app/Chat';
import Page404 from '../Page404';
export default function Router() {
  return useRoutes([
    // Define the default route as '/auth'
    { path: '/', element: <Navigate to='/app' /> },
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
