// IndexContext.js
import React, { createContext, useContext, useState } from 'react';

const IndexContext = createContext();

export const IndexProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const updateUsername = (value) => {
    setUsername(value);
  };
  return (
    <IndexContext.Provider
      value={{
        username,
        updateUsername,
      }}
    >
      {children}
    </IndexContext.Provider>
  );
};

export const useIndex = () => useContext(IndexContext);
