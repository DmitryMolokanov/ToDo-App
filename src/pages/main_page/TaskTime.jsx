import React from "react";

function TaskTime(props) {
  return (
    <div className="task-time-container">
      <div
        className="task-time"
        style={props.task.show_more ? { display: "flex" } : { display: "none" }}
      >
        <span className="task-span">
          <label className="task-inner-title">Task started:</label>
          {props.task.start_date}
        </span>
        {props.task.timeSolved ? (
          <span className="task-span">
            <label className="task-inner-title">Time of solved task:</label>
            {props.task.timeSolved}{" "}
          </span>
        ) : (
          <span className="task-span"> {props.task.task_passed}</span>
        )}

        {props.task.finishDate ? (
          <span className="task-span">
            <label className="task-inner-title">Task finished:</label>
            {props.task.finishDate}
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default TaskTime;
