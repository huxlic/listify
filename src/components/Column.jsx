/* eslint-disable react-hooks/static-components */

import { useContext } from "react";
import getIdImageForTitle from "../helpers/getIdImageForTitle";
import { ThemeContext } from "../hooks/GlobalContext";

const Column = ({title, color, bg_color}) => {
    const Icon = getIdImageForTitle(title);
    const {theme} = useContext(ThemeContext)
  return (
    <div
      className={`w-full min-h-24 border ${theme ? "border-[#333]" : "border-[#E7E7E9] bg-[#F5F7F9]"} rounded-lg p-2`}
    >
      <div className={`flex items-center gap-1 text-[${bg_color}]`}>
        {Icon && <Icon size={13} color={`${color}`} />}
        <span className={`text-[.8rem] tracking-tighter`}>{title}</span>
      </div>
    </div>
  );
}

export default Column