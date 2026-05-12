// import React from 'react'

import { useContext } from "react";
import { ThemeContext } from "../hooks/GlobalContext";
import { LuCalendarDays } from "react-icons/lu";

const Card = ({ title, date, creator, bg }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      draggable="true"
      style={{ backgroundColor: theme ? bg : "white" }}
      className={`cursor-grab w-full h-max font-sans rounded-lg flex flex-col p-2 gap-2 border ${theme ? "border-[#333]" : "border-[#E7E7E9]"}`}
    >
      <span className="text-[#9CA3AF] text-[.65rem] font-medium]">
        {creator}
      </span>

      <p className="text-[.7rem]">{title}</p>
      {date && (
        <div className="flex items-center gap-1 text-[.65rem]">
          <LuCalendarDays color={theme ? "#aaa" : "#9CA3AF"} />
          <time className="text-[#9CA3AF] font-medium" dateTime="">
            {date}
          </time>
        </div>
      )}
    </div>
  );
};

export default Card;
