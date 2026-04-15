import { useState, useContext } from "react";
import React from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setuserData] = useContext(AuthContext);

  const [TaskTitle, setTaskTitle] = useState("");
  const [TaskDescription, setTaskDescription] = useState("");
  const [TaskDate, setTaskDate] = useState("");
  const [assignto, setassignto] = useState("");
  const [Category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userData) {
      alert("Data not loaded");
      return;
    }

    const taskObj = {
      id: Date.now() + Math.random(), // Unique ID for each task
      taskTitle: TaskTitle,
      taskDescription: TaskDescription,
      taskDate: TaskDate,
      category: Category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    // 1. Ensure we are spreading the correct array
    const data = [...userData];

    let success = false;
    data.forEach((elem) => {
      // 2. Case-insensitive check
      if (elem.firstName.toLowerCase() === assignto.toLowerCase()) {
        elem.tasks.push(taskObj);
        elem.taskCounts.newTask = (elem.taskCounts.newTask || 0) + 1;
        success = true;
      }
    });

    if (success) {
      setuserData(data);
      // 3. Match the exact key used in your AuthProvider (use "employees")
      localStorage.setItem("Employees", JSON.stringify(data));
      alert("Task Created!");
    } else {
      alert("Employee name not found!");
    }

    // Clear inputs
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setassignto("");
    setCategory("");
  };

  return (
    <div className="p-5 bg-[#111111] mt-7 rounded">
      <form onSubmit={handleSubmit} className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input value={TaskTitle} onChange={(e) => setTaskTitle(e.target.value)} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Make a UI design" />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input value={TaskDate} onChange={(e) => setTaskDate(e.target.value)} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 [color-scheme:dark]" type="date" />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input value={assignto} onChange={(e) => setassignto(e.target.value)} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="employee name" />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input value={Category} onChange={(e) => setCategory(e.target.value)} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="design, dev, etc" />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea value={TaskDescription} onChange={(e) => setTaskDescription(e.target.value)} className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" cols="30" rows="10"></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create Task</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;