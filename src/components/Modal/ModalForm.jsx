import React, { useEffect, useState } from "react";
import validationForm from "../../utils/utils-function/validationForm";
import getDate from "../../utils/utils-function/getData";
import getUniqId from "../../utils/utils-function/getUniqId";
import ValidMessage from "./ValidMessage";
import ModalTitle from "./ModalTitle";
import ModalDiscription from "./ModalDiscription";
import ModalSelectContainer from "./ModalSelectContainer";
import ModalButton from "./ModalButton";
import AddSubTask from "./AddSubTask";
import ModalSubtaskLi from "./ModalSubtaskLi";
import { useDispatch, useSelector } from "react-redux";

function ModalForm() {
  const [valid, setValid] = useState(true);
  const [addSubTask, setAddSubTask] = useState(false);
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [subTask, setSubTask] = useState([]);
  const [priority, setPrioroty] = useState("high");
  const [stage, setStage] = useState("queue");

  const dispatch = useDispatch();
  const isChange = useSelector((state) => state.isChange);
  const taskData = useSelector((state) => state.taskData);

  const newTask = {
    id: getUniqId(),
    title: title,
    discription: discription,
    date: Date.now(),
    start_date: getDate(),
    subtask: subTask,
    priority: priority,
    stage: stage,
  };

  function createTask(e) {
    e.preventDefault();
    if (!validationForm(newTask)) {
      setValid(false);
      return;
    }
    dispatch({ type: "ADD_TASK", payload: newTask });
    setValid(true);
    setTitle("");
    setDiscription("");
    setSubTask([]);
    setAddSubTask(false);
    dispatch({ type: "MODAL", payload: false });
  }

  function openSubTaskInput(e) {
    e.preventDefault();
    setAddSubTask((current) => !current);
  }

  function getSubTask(subtask) {
    setSubTask([...subTask, subtask]);
  }

  function changeTask(e) {
    e.preventDefault();
    const newTaskData = taskData;
    newTaskData.title = title;
    newTaskData.discription = discription;
    newTaskData.priority = priority;
    newTaskData.stage = stage;
    newTaskData.subtask = subTask;
    setAddSubTask(false);
    dispatch({ type: "CHANGE_TASK", payload: newTaskData });
    dispatch({ type: "GET_DATA", payload: false });
    dispatch({ type: "MODAL", payload: false });
  }

  useEffect(() => {
    if (taskData) {
      setTitle(taskData.title);
      setDiscription(taskData.discription);
      setSubTask(taskData.subtask);
      setPrioroty(taskData.priority);
      setStage(taskData.stage);
      setAddSubTask(false);
    } else {
      setTitle("");
      setDiscription("");
      setSubTask([]);
      setPrioroty("high");
      setStage("queue");
      setAddSubTask(false);
    }
  }, [taskData]);

  return (
    <form className="modal-form">
      <ValidMessage valid={valid} />
      <ModalTitle title={title} setTitle={setTitle}>
        Title task:
      </ModalTitle>
      <ModalDiscription
        discription={discription}
        setDiscription={setDiscription}
      >
        Discription task:
      </ModalDiscription>
      <ModalSubtaskLi subTask={subTask} setSubTask={setSubTask} />

      <ModalButton handler={openSubTaskInput}>Add subtask</ModalButton>
      {addSubTask ? <AddSubTask getSubTask={getSubTask} /> : ""}
      <ModalSelectContainer
        priority={priority}
        setPrioroty={setPrioroty}
        stage={stage}
        setStage={setStage}
      />

      {isChange ? (
        <ModalButton handler={changeTask}> Change task</ModalButton>
      ) : (
        <ModalButton handler={createTask}> Create task</ModalButton>
      )}
    </form>
  );
}

export default ModalForm;
