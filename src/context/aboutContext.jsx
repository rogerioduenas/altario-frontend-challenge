import React, { useState, createContext } from 'react';

export const AboutContext = createContext();

export const AboutContextProvider = ({ children }) => {
  const [aboutOpen, setAboutOpen] = useState();

  return (
    <AboutContext.Provider
      value={{
        aboutOpen,
        setAboutOpen,
      }}>
      {children}
    </AboutContext.Provider>
  );
};

export default AboutContext;