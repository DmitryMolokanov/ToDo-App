import React from "react";

function ModalSubtaskLi(props) {
  function delSubTask(e, subtask) {
    e.preventDefault();
    const newSubTask = props.subTask.filter((el) => {
      return el !== subtask;
    });
    props.setSubTask(newSubTask);
  }
  return (
    <div className="subtask-container">
      <ol>
        {props.subTask.map((subtask) => {
          return (
            <li key={subtask} className="subtask-li">
              {subtask}
              <button
                className="subtask-btn"
                onClick={(e) => {
                  delSubTask(e, subtask);
                }}
              >
                -
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default ModalSubtaskLi;
