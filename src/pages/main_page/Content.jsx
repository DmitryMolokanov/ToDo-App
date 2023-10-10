import React, { useEffect, useState } from "react";
import timePassed from "../../utils/utils-function/timePassed";
import ContentColumn from "./ContentColumn";
import getDate from "../../utils/utils-function/getData";
import timeRequiredSolve from "../../utils/utils-function/timeRequiredSolve";
import "./styles/MainPage.css";

function Content(props) {
  let tasks = props.tasks;

  const [isTasks, setIsTasks] = useState(false);
  const [queueTasks, setQueueTasks] = useState([]);
  const [develTasks, setDevelTasks] = useState([]);
  const [doneTask, setDoneTasks] = useState([]);

  useEffect(() => {
    if (tasks.length > 0) {
      tasks.forEach((el) => {
        let passed = timePassed(el.date);
        el.task_passed = passed;
      });
      setIsTasks(true);
      const queueTasks = tasks.filter((task) => {
        return task.stage === "queue";
      });
      setQueueTasks(queueTasks);

      const develTasks = tasks.filter((task) => {
        return task.stage === "development";
      });
      setDevelTasks(develTasks);

      const doneTasks = tasks.filter((task) => {
        return task.stage === "done";
      });
      setDoneTasks(doneTasks);

      tasks.forEach((task) => {
        if (task.stage === "done") {
          task.finishDate = getDate();
          task.timeSolved = timeRequiredSolve(task.task_passed);
        } else {
          task.finishDate = false;
          task.timeSolved = false;
        }
      });
    } else setIsTasks(false);
  }, [tasks]);

  return isTasks ? (
    <div className="content-container">
      <ContentColumn
        id={"queue"}
        tasks={queueTasks}
        delTask={props.delTask}
        stateModal={props.stateModal}
        getTaskData={props.getTaskData}
        changeStage={props.changeStage}
      >
        Queue
      </ContentColumn>

      <ContentColumn
        id={"development"}
        tasks={develTasks}
        delTask={props.delTask}
        stateModal={props.stateModal}
        getTaskData={props.getTaskData}
        changeStage={props.changeStage}
        color={"lightskyblue"}
      >
        Development
      </ContentColumn>
      <ContentColumn
        id={"done"}
        tasks={doneTask}
        delTask={props.delTask}
        stateModal={props.stateModal}
        getTaskData={props.getTaskData}
        changeStage={props.changeStage}
        color={"lightgreen"}
      >
        Done
      </ContentColumn>
    </div>
  ) : (
    <h1>No tasks have been created yet</h1>
  );
}

export default Content;
