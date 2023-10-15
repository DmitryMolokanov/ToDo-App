import React, { useState } from "react";
import validationForm from "../../utils/utils-function/validationForm";

function AddSubTask(props) {
  const [subTask, setSubTask] = useState("");

  const newSubtask = {
    task: subTask,
    cross_out: false,
  };
  function addSubTask(e) {
    e.preventDefault();
    if (!validationForm(newSubtask)) return;
    props.getSubTask(newSubtask);
    setSubTask("");
  }

  return (
    <div className="add-sub-task">
      <input
        value={subTask}
        className="sub-task-input"
        type="text"
        onChange={(e) => setSubTask(e.target.value)}
      />
      <button className="sub-task-btn" onClick={addSubTask}>
        +
      </button>
    </div>
  );
}

export default AddSubTask;
