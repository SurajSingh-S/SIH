import React, { createContext, useContext, useState } from 'react';

// Create the AlumniContext
const AlumniContext = createContext();

// Create a provider component
export const AlumniProvider = ({ children }) => {
  const [alumni, setAlumni] = useState([]);

  const addAlumni = (newAlumni) => {
    setAlumni((prevAlumni) => [...prevAlumni, newAlumni]);
  };

  return (
    <AlumniContext.Provider value={{ alumni, addAlumni }}>
      {children}
    </AlumniContext.Provider>
  );
};

// Custom hook to use the AlumniContext
export const useAlumni = () => {
  return useContext(AlumniContext);
};