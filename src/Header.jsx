import React from "react";
import TaskIcon from "@mui/icons-material/Task";

const Header = () => {
  return (
    <>
      <div className="head">
        <h1>{<TaskIcon fontSize="large"/>}  Task List</h1>
      </div>
    </>
  );
};
export default Header;
