import { React, useEffect, useState } from "react";
import TaskBtn from "./TaskBtn";
import TaskTime from "./TaskTime";
import getStyle from "../../utils/utils-function/getStyle";
import TaskSubtask from "./TaskSubtask";

function ContentColumn({ children, ...props }) {
  const [showMore, setShowMore] = useState(true);
  const [isTasks, setIsTasks] = useState(false);

  function show(task) {
    if (task.show_more === showMore) {
      task.show_more = !task.show_more;
      setShowMore(!showMore);
    } else {
      task.show_more = showMore;
      setShowMore((show) => !show);
    }
  }

  function dragStartHandler(e, task) {
    const taskStr = JSON.stringify(task);
    e.dataTransfer.setData("text/plain", taskStr);
  }

  function dragOvertHandler(e) {
    e.preventDefault();
  }

  function dropHandler(e) {
    e.preventDefault();
    const dragData = JSON.parse(e.dataTransfer.getData("text/plain"));
    if (e.target.id === "") return;
    dragData.stage = e.target.id;
    props.changeStage(dragData);
  }

  useEffect(() => {
    if (props.tasks) setIsTasks(true);
  }, [props.tasks]);

  return (
    <div
      id={props.id}
      className="column"
      style={{ backgroundColor: props.color }}
      onDragOver={(e) => {
        dragOvertHandler(e);
      }}
      onDrop={(e) => dropHandler(e)}
    >
      <div className="title">{children}</div>

      {isTasks
        ? props.tasks.map((task, index) => {
            return (
              <div
                key={task.id}
                className="task-container"
                draggable
                onDragStart={(e) => {
                  dragStartHandler(e, task);
                }}
                style={{ backgroundColor: getStyle(task) }}
              >
                <div className="task-title-container">
                  <span className="task-title">
                    {index + 1}.{task.title}
                  </span>
                </div>
                <div className="task-discription-conteiner">
                  <div className="task-discription">
                    <label className="task-inner-title">Discription:</label>
                    <span className="discription">{task.discription}</span>
                  </div>
                  <div className="task-btn">
                    <TaskBtn
                      handler={props.getTaskData}
                      task={task}
                      img={"pencil.png"}
                    />
                    <TaskBtn
                      handler={props.delTask}
                      task={task}
                      img={"trash.png"}
                    />
                  </div>
                </div>
                <TaskSubtask task={task}>Subtask:</TaskSubtask>
                <TaskTime task={task} />
                <div className="show-more-container">
                  <button className="show-more" onClick={() => show(task)}>
                    {task.show_more ? "Hide" : "Show more..."}
                  </button>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default ContentColumn;
