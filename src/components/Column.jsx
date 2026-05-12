/* eslint-disable react-hooks/static-components */

import { useContext } from "react";
import getIdImageForTitle from "../helpers/getIdImageForTitle";
import {
  DragContext,
  TasksContext,
  ThemeContext,
} from "../hooks/GlobalContext";
import Card from "./Card";
import updateCount from "../helpers/updateCount";

const Column = ({ title, status, color, bg_color, card_bg_color }) => {
  const Icon = getIdImageForTitle(title);
  const { theme } = useContext(ThemeContext);
  const { tasks, setTasks } = useContext(TasksContext);
  const { draggedId } = useContext(DragContext);

  const changeStatus = (id, status) => {
    const newSet = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: status };
      } else {
        return task;
      }
    });

    return setTasks(newSet);
  };

  return (
    <div
      className={`w-full h-max border ${theme ? "border-[#333] bg-[#111111]" : "border-[#E7E7E9] bg-[#F5F7F9]"} rounded-lg p-2`}
      onDragOver={(event) => event.preventDefault()}
      onDrop={() => changeStatus(draggedId, status)}
    >
      <div className={`flex items-center gap-1 text-[${bg_color}] mb-4`}>
        {Icon && <Icon size={13} color={`${color}`} />}
        <span className={`text-[.65rem] tracking-tighter`}>{title}</span>

        <span
          style={{ backgroundColor: bg_color, color: color }}
          className="text-[.6rem] font-semibold rounded-full ml-1 px-2 border"
        >
          {updateCount(tasks, status)}
        </span>
      </div>

      <div className="">
        {tasks
          .filter((task) => task.status === status)
          .map((task) => {
            return <Card key={task.id} {...task} bg={card_bg_color} />;
          })}
      </div>
    </div>
  );
};

export default Column;
