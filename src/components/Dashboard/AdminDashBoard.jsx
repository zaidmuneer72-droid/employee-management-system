import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";
const AdminDashBoard = (props) => {
  return (
    <div className="h-screen w-full p-10 bg-[#1c1c1c]">
      <Header changeuser={props.changeuser} />
<CreateTask/>
<AllTask/>
     
    </div>
  );
};

export default AdminDashBoard;