/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

// import React from 'react'
export const ThemeContext = createContext();
export const TasksContext = createContext();
export const DragContext = createContext();

const GlobalContext = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [draggedId, setDraggedId] = useState(null);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <TasksContext value={{ tasks, setTasks }}>
        <DragContext value={{draggedId, setDraggedId}}>{children}</DragContext>
      </TasksContext>
    </ThemeContext.Provider>
  );
};

export default GlobalContext;
