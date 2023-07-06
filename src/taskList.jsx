import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskList = (props) => {
  return (
    <>
      <div className="box">
        <h2>{props.title} </h2>
        <p>{props.task}</p>
        <button
          className="delete"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          <DeleteIcon fontSize="medium" />
        </button>
      </div>
    </>
  );
};

export default TaskList;
