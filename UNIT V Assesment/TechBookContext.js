import React, { createContext, useState } from 'react';

export const TechBookContext = createContext();

export const TechBookProvider = ({ children }) => {
  const [techBooks, setTechBooks] = useState([]);

  return (
    <TechBookContext.Provider value={{ techBooks, setTechBooks }}>
      {children}
    </TechBookContext.Provider>
  );
};
