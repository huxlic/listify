/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react"

// import React from 'react'
export const ThemeContext = createContext()

const GlobalContext = ({ children }) => {
    const [theme, setTheme] = useState(true)
    
  return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>;
};

export default GlobalContext