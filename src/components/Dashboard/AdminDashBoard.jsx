import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";
const AdminDashBoard = (props) => {
  return (
    <div className="min-h-screen w-full p-4 sm:p-6 lg:p-10 bg-[#1c1c1c] overflow-x-hidden">
      <Header changeuser={props.changeuser} />
<CreateTask/>
<AllTask/>
     
    </div>
  );
};

export default AdminDashBoard;