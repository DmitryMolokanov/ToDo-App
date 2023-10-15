import React, { useEffect } from "react";
import Header from "./Header";
import Modal from "../../components/Modal/Modal";
import Content from "./Content";
import "./styles/MainPage.css";
import { useSelector } from "react-redux";

function MainPage() {
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    localStorage.setItem("ToDo", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="main-page">
      <Header />
      <Content tasks={tasks} />
      <Modal />
    </div>
  );
}

export default MainPage;
