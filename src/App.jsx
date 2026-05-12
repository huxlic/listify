// import { useState } from 'react'
import { useContext } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { ThemeContext } from "./hooks/GlobalContext";
import Board from "./components/Board";

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <>
      <div className={`w-screen ${theme ? "bg-[#111111]" : "text-black"} h-screen box-border flex p-1 app`}>
        <Sidebar/>

        <Board/>
      </div>
    </>
  );
}

export default App;
