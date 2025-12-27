import React, { createContext, useState } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [title, setTitle] = useState('');

  const changeTitle = (newTitle) => setTitle(newTitle);

  return (
      <BookContext.Provider value={{ title, changeTitle }}>
        {children}
      </BookContext.Provider>
  );
};