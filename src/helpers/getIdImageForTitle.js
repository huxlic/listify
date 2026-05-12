import { TbCircleDashed } from "react-icons/tb";
import { TbProgressBolt } from "react-icons/tb";
import { RiProgress8Line } from "react-icons/ri";
import { IoCheckmarkCircle } from "react-icons/io5";

const getIdImageForTitle = (title) => {
  if (title === "To Do") return TbCircleDashed;
  if (title === "In Progress") return TbProgressBolt;
  if (title === "Testing") return RiProgress8Line;
  if (title === "Complete") return IoCheckmarkCircle;

  return null;
};

export default getIdImageForTitle;
