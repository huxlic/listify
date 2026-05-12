/* eslint-disable react-hooks/static-components */

import { useContext, useEffect, useState } from "react";
import getIdImageForTitle from "../helpers/getIdImageForTitle";
import { ThemeContext } from "../hooks/GlobalContext";
import Card from "./Card";

const Column = ({ title, status, color, bg_color, card_bg_color }) => {

  const Icon = getIdImageForTitle(title);
  const { theme } = useContext(ThemeContext);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Design task card",
      creator: "Daniel",
      status: "todo",
    },
    {
      id: 2,
      title: "Build drag and drop",
      creator: "Sarah",
      status: "in_progress",
    },
  ]);

  useEffect(() => {
    return () => setTasks()
  }, [])

  return (
    <div
      className={`w-full h-max border ${theme ? "border-[#333]" : "border-[#E7E7E9] bg-[#F5F7F9]"} rounded-lg p-2`}
    //   onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => event.preventDefault()}
    >
      <div className={`flex items-center gap-1 text-[${bg_color}] mb-4`}>
        {Icon && <Icon size={13} color={`${color}`} />}
        <span className={`text-[.65rem] tracking-tighter`}>{title}</span>

        <span
          style={{ backgroundColor: bg_color, color: color }}
          className="text-[.6rem] font-semibold rounded-full ml-1 px-2 border"
        >
          {1}
        </span>
      </div>

      <div className="">
        {tasks.filter(task => task.status === status).map((task)=> {
            return <Card key={task.id} {...task} bg={card_bg_color} />
        })}
      </div>

    </div>
  );
};

export default Column;
