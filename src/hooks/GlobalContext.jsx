/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

// import React from 'react'
export const ThemeContext = createContext();
export const TasksContext = createContext();
export const DragContext = createContext();

const GlobalContext = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [draggedId, setDraggedId] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <TasksContext value={{ tasks, setTasks }}>
        <DragContext value={{draggedId, setDraggedId}}>{children}</DragContext>
      </TasksContext>
    </ThemeContext.Provider>
  );
};

export default GlobalContext;
