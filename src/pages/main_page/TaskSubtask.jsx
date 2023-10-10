import React from "react";

function TaskSubtask({ children, ...props }) {
  return (
    <div className="task-subtask-container">
      {props.task.subtask.length > 0 ? (
        <ol className="subtask-ol">
          {children}
          {props.task.subtask.map((subtask) => {
            return (
              <li
                key={subtask}
                className="subtask-li"
                onClick={(e) => {
                  if (!e.target.style.textDecoration) {
                    e.target.style.setProperty(
                      "text-decoration",
                      "line-through"
                    );
                  } else {
                    e.target.style.removeProperty("text-decoration");
                  }
                }}
              >
                {subtask}
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
