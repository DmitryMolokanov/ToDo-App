import React, { useState } from "react";

function AddSubTask(props) {
  const [subTask, setSubTask] = useState("");

  function addSubTask(e) {
    e.preventDefault();
    props.getSubTask(subTask);
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
