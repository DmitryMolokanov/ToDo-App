import { React, useEffect, useState } from "react";
import TaskBtn from "./TaskBtn";
import TaskTime from "./TaskTime";
import getStyle from "../../utils/utils-function/getStyle";
import TaskSubtask from "./TaskSubtask";
import { useDispatch } from "react-redux";

function ContentColumn({ children, ...props }) {
  const dispatch = useDispatch();
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

  function delTask(task) {
    dispatch({ type: "DEL_TASK", payload: task.id });
  }

  function changeTask(task) {
    dispatch({ type: "MODAL", payload: true });
    dispatch({ type: "IS_CHANGE", payload: true });
    dispatch({ type: "GET_DATA", payload: task });
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
    dispatch({ type: "CHANGE_TASK", payload: dragData });
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
                    <span className="task-inner-title">Discription:</span>
                    <span className="discription">{task.discription}</span>
                  </div>
                  <div className="task-btn">
                    <TaskBtn
                      handler={changeTask}
                      task={task}
                      img={"pencil.png"}
                      id={"task-change-btn"}
                    />
                    <TaskBtn
                      handler={delTask}
                      task={task}
                      img={"trash.png"}
                      id={"task-del-btn"}
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
