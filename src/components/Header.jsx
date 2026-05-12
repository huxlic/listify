// import React from 'react'
import { useContext } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { ThemeContext } from "../hooks/GlobalContext";

const Header = () => {
    const {theme, setTheme} = useContext(ThemeContext);

  return (
    <header
      className={`w-full border-b ${theme ? "border-[#222]" : "border-[#E7E7E9]"} p-2 flex items-center justify-between`}
    >
      <h2 className="text-[.9rem]">Workboard</h2>

      <form action="" className="flex w-2/3 gap-2">
        <label htmlFor="text"></label>
        <input
          className="flex-1 text-[.7rem] bg-[rgba(156, 163, 175, 0.12)]  outline-none border-2 border-gray-400/35 rounded-lg px-3 py-1 placeholder:text-[#A8A29E]"
          type="text"
          name=""
          id="text"
          placeholder="What needs to be done?"
        />

        <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-[.7rem] px-3 py-1 rounded-lg text-white">
          Add Task
        </button>
      </form>

      <div onClick={() => setTheme(!theme)} className="mr-4">
        {theme ? <IoSunny color="white" /> : <IoMoon color="black" />}
      </div>
    </header>
  );
}

export default Header