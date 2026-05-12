// import React from 'react'
import { useContext } from "react";
import { ThemeContext } from "../hooks/GlobalContext";

const Sidebar = () => {
    const {theme} = useContext(ThemeContext);

  return (
    <aside className="w-[15%] h-max flex p-3 items-center">
      <h1 className={`${theme ? "text-white" : "text-black"} font-black text-[1.3rem]`}>Listify📋</h1>
    </aside>
  );
}

export default Sidebar