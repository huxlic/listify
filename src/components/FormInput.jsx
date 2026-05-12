import { useContext, useState } from "react";
import { TasksContext } from "../hooks/GlobalContext";


const FormInput = () => {
    const [task, setTask] = useState("");
    const [creator, setCreator] = useState("");
    const {tasks, setTasks} = useContext(TasksContext)

    const addTodo = () => {
        if (!task.trim()) return;

        const newTask = {
          id: Date.now(),
          title: task.trim(),
          creator: creator.trim(),
          status: "todo",
          date: new Date().toISOString(),
        };

        return setTasks([...tasks, newTask]);
    }

  return (
    <form action="" className="flex w-2/3 gap-1">
      <label htmlFor="text"></label>
      <input
        className="flex-1 text-[.7rem] bg-[rgba(156, 163, 175, 0.12)]  outline-none border-2 border-gray-400/35 rounded-lg px-3 py-1 placeholder:text-[#A8A29E]"
        type="text"
        name="text"
        id="text"
        placeholder="What needs to be done?"
        onChange={(event) => setTask(event.target.value)}
      />

      <label htmlFor="creator"></label>
      <input
        className=" text-[.7rem] bg-[rgba(156, 163, 175, 0.12)]  outline-none border-2 border-gray-400/35 rounded-lg px-3 py-1 placeholder:text-[#A8A29E]"
        type="text"
        name="creator"
        id="creator"
        placeholder="Created by..."
        onChange={(event) => setCreator(event.target.value)}
      />

      <button
        className="bg-[#2563EB] hover:bg-[#1D4ED8] text-[.7rem] px-3 py-1 rounded-lg text-white"
        onClick={(e) => {
            e.preventDefault();
            addTodo();
        }}
      >
        Add Task
      </button>
    </form>
  );
}

export default FormInput