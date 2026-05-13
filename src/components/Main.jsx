// import React from 'react'

import Column from "./Column";

const Main = () => {
    const boardColumns = [
      {
        title: "To Do",
        status: "todo",
        color: "#6B7280",
        bg_color: "#F3F4F6",
        card_bg_color: "#302824",
      },
      {
        title: "In Progress",
        status: "in_progress",
        color: "#2563EB",
        bg_color: "#DBEAFE",
        card_bg_color: "#252B35",
      },
      {
        title: "Testing",
        status: "testing",
        color: "#F59E0B",
        bg_color: "#FEF3C7",
        card_bg_color: "#312D25",
      },
      {
        title: "Complete",
        status: "complete",
        color: "#16A34A",
        bg_color: "#DCFCE7",
        card_bg_color: "#253027",
      },
    ];


  return (
    <main className="w-full h-full box-border flex gap-2 p-3">
        {boardColumns.map(column => {
            return <Column key={column.status} {...column} />
        })}
    </main>
  );
}

export default Main