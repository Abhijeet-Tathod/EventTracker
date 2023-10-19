import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import TaskList from "./taskList.jsx";

const Note = () => {
  const [hide, setHide] = useState(true);   
  const expand = () => {
    setHide(false);
  };

  const [info, setInfo] = useState({       // information storage
    title: "",
    task: ``,
  });

  // Handle input change function 
  const inputTask = (event) => {          
    const name = event.target.name;
    const value = event.target.value;

  
    setInfo((prev) => {       
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const [list, setList] = useState([]);

  // Add Task Function
  const addTask = (event) => {
    event.preventDefault();
    if(info.task===""){           
      return;
    }
    setHide(true);
    setList((oldInfo) => {
      return [...oldInfo, info];
    });
    setInfo({
      title: "",
      task: ``,
    });
  };


  // Add Delete Function
  const delTask = (id) => {
    setList((tasks) => {
      return tasks.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <form>
        <input
          hidden={hide}
          type="text"
          placeholder="Title"
          onChange={inputTask}
          name="title"
          value={info.title}
        />
        <textarea
          placeholder="Write a note..."
          onSelect={expand}
          name="task"
          onChange={inputTask}
          value={info.task}
        />
        <button className="add" hidden={hide} onClick={addTask}>
          <AddIcon fontSize="large" />
        </button>
      </form>

      <div className="container">
        {list.map((listval, index) => {
          return (
            <TaskList
              key={index}
              id={index}
              title={listval.title}
              task={listval.task}
              onSelect={delTask}
            />
          );
        })}
      </div>
    </>
  );
};
export default Note;
