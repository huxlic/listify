// import React from 'react'
import { useContext } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { ThemeContext } from "../hooks/GlobalContext";
import FormInput from "./FormInput";

const Header = () => {
    const {theme, setTheme} = useContext(ThemeContext);

  return (
    <header
      className={`w-full border-b ${theme ? "border-[#222]" : "border-[#E7E7E9]"} p-2 flex items-center justify-between`}
    >
      <h2 className="text-[.9rem]">Workboard</h2>

      <FormInput />

      <div
        onClick={() => setTheme(!theme)}
        className="mr-4 border-2 border-gray-400/35 p-1 rounded-lg cursor-pointer "
      >
        {theme ? <IoSunny color="white" /> : <IoMoon color="black" />}
      </div>
    </header>
  );
}

export default Header