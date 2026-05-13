// import React from 'react'

import { useContext } from "react";
import Header from "./Header";
import Main from "./Main";
import { ThemeContext } from "../hooks/GlobalContext";

const Board = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <div
      className={`h-full w-full overflow-hidden flex-1 ${theme ? "bg-[#171717] text-white border-[#222]" : "text-black border-[#E7E7E9]"} rounded-lg border-2 flex flex-col board`}
    >
      <Header />
      <Main />
    </div>
  );
};

export default Board;
