import React, { useEffect, useState } from "react";
import Header from "./Header";
import Modal from "../../components/Modal/Modal";
import Content from "./Content";
import "./styles/MainPage.css";

function MainPage() {
  const storageTasks = JSON.parse(localStorage.getItem("ToDo"));

  const [isModal, setIsModal] = useState(false);
  const [tasks, setTasks] = useState(storageTasks || []);
  const [taskData, setTaskData] = useState();

  function getTask(task) {
    setTasks([...tasks, task]);
  }
  function delTask(task) {
    const newTasks = tasks.filter((el) => {
      return el.id !== task.id;
    });
    setTasks(newTasks);
  }

  function getTaskData(taskData) {
    setTaskData(taskData);
  }

  function changeTask(newTaskData) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === newTaskData.id) {
        return newTaskData;
      } else return task;
    });
    setTasks(updatedTasks);
    setIsModal(false);
  }

  function changeStage(task) {
    const curStage = tasks.map((item) => {
      if (item.id === task.id) {
        item.stage = task.stage;
      }
      return item;
    });
    setTasks(curStage);
  }

  useEffect(() => {
    localStorage.setItem("ToDo", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="main-page">
      <Header setIsModal={setIsModal} />
      <Content
        tasks={tasks}
        delTask={delTask}
        stateModal={{ isModal, setIsModal }}
        getTaskData={getTaskData}
        changeStage={changeStage}
      />
      <Modal
        stateModal={{ isModal, setIsModal }}
        getTask={getTask}
        taskData={{ taskData, setTaskData }}
        changeTask={changeTask}
      />
    </div>
  );
}

export default MainPage;
