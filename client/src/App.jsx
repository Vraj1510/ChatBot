import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './auth/Home';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Chat from './app/Chat';
import { IndexProvider } from './IndexContext';
import { Navigate } from 'react-router-dom';
import Page404 from './Page404';
import Run from './app/Run';

function App() {
  return (
    <IndexProvider>
      <Router>
        <Routes>
          {/* Define main routes */}
          <Route path='/404' element={<Page404 />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Navigate to='/404' replace />} />
          <Route path='/auth'>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='*' element={<Navigate to='/404' replace />} />
          </Route>
          <Route path='/app/chat' element={<Chat />} />
          <Route path='/app/run' element={<Run />} />
          <Route path='*' element={<Navigate to='/404' replace />} />
        </Routes>
      </Router>
    </IndexProvider>
  );
}

export default App;
