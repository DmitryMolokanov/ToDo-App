import React from "react";

function TaskBtn(props) {
  return (
    <button
      className="task-button"
      id={props.id}
      onClick={() => props.handler(props.task)}
    >
      <img src={props.img} alt="" className="task-button-img" />
    </button>
  );
}

export default TaskBtn;
