import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './auth/Home';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Chat from './app/Chat';


function App() {
  return (
    <Router>
      <Routes>
        {/* Define main routes */}
        <Route path='/' element={<Home />} />
        <Route path='/auth'>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup/>} />
        </Route>
        <Route path='/app/chat' element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
