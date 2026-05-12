// import React from 'react'

import { useContext } from "react";
import { DragContext, ThemeContext } from "../hooks/GlobalContext";
import { LuCalendarDays } from "react-icons/lu";
import capitalizeFirstLetter from "../helpers/capitalizeFirstLetter ";
import formatDateTime from "../helpers/formatDateTime";

const Card = ({ title, date, creator, id, bg }) => {
  const { theme } = useContext(ThemeContext);
  const { setDraggedId } = useContext(DragContext);

  return (
    <div
      draggable="true"
      onDragStart={() => setDraggedId(id)}
      style={{ backgroundColor: theme ? bg : "white" }}
      className={`cursor-grab w-full h-max mb-2 font-sans rounded-lg flex flex-col p-2 gap-2 border ${theme ? "border-[#333]" : "border-[#E7E7E9]"}`}
    >
      {creator && (
        <span className="text-[#9CA3AF] text-[.65rem] font-medium capitalize">
          {creator}
        </span>
      )}

      <p className="text-[.75rem] normal-case">
        {capitalizeFirstLetter(title)}
      </p>
      {date && (
        <div className="flex items-center gap-1 text-[.6rem] bg-[#A8A29E24] w-max px-1.5 rounded-lg">
          <LuCalendarDays color={theme ? "#aaa" : "#9CA3AF"} />
          <time className="text-[#9CA3AF] font-medium" dateTime={date}>
            {formatDateTime(date)}
          </time>
        </div>
      )}
    </div>
  );
};

export default Card;
