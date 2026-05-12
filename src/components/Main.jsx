// import React from 'react'

import Column from "./Column";

const Main = () => {
  return (
    <main className="w-full flex gap-2 p-3">
      <Column title={"To Do"} color={"#6B7280"} bg_color={"#F3F4F6"} />
      <Column title={"In Progress"} color={"#2563EB"} bg_color={"#DBEAFE"} />
      <Column title={"Testing"} color={"#F59E0B"} bg_color={"#FEF3C7"} />
      <Column title={"Complete"} color={"#16A34A"} bg_color={"#DCFCE7"} />
    </main>
  );
}

export default Main