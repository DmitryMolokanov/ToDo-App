import React from "react";
import { useDispatch } from "react-redux";

function TaskSubtask({ children, ...props }) {
  const dispatch = useDispatch();
  function crossOut(e, task) {
    const taskCross = task;
    if (taskCross.cross_out) {
      e.target.style.removeProperty("text-decoration");
      taskCross.cross_out = false;
    } else {
      e.target.style.setProperty("text-decoration", "line-through");
      taskCross.cross_out = true;
    }
    dispatch({ type: "CHANGE_TASK", payload: taskCross });
  }
  return (
    <div className="task-subtask-container">
      {props.task.subtask.length > 0 ? (
        <ol className="subtask-ol">
          {children}
          {props.task.subtask.map((subtask) => {
            return (
              <li
                key={subtask.task}
                className="subtask-li"
                style={
                  subtask.cross_out
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
                onClick={(e) => {
                  crossOut(e, subtask);
                }}
              >
                {subtask.task}
              </li>
            );
          })}
        </ol>
      ) : (
        ""
      )}
    </div>
  );
}

export default TaskSubtask;
