"use client"; 
import { createContext, useState } from 'react';

export const DataContext = createContext({
  data: [],
  setData: () => {},
});

export default function DataProvider({ children }) {
  const [data, setData] = useState([]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}