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

function ModalForm(props) {
  const [valid, setValid] = useState(true);
  const [isChange, setIsChange] = useState(false);
  const [addSubTask, setAddSubTask] = useState(false);
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [subTask, setSubTask] = useState([]);
  const [priority, setPrioroty] = useState("high");
  const [stage, setStage] = useState("queue");

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
    props.getTask(newTask);
    setValid(true);
    props.stateModal.setIsModal(false);
    setTitle("");
    setDiscription("");
    setSubTask(subTask);
    setAddSubTask(false);
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
    const propsTaskData = props.taskData.taskData;
    propsTaskData.title = title;
    propsTaskData.discription = discription;
    propsTaskData.priority = priority;
    propsTaskData.stage = stage;
    propsTaskData.subtask = subTask;
    props.changeTask(propsTaskData);
    props.taskData.setTaskData(false);
  }

  useEffect(() => {
    if (props.taskData.taskData) {
      props.stateModal.setIsModal(true);
      setIsChange(true);
      setTitle(props.taskData.taskData.title);
      setDiscription(props.taskData.taskData.discription);
      setSubTask(props.taskData.taskData.subtask);
      setPrioroty(props.taskData.taskData.priority);
      setStage(props.taskData.taskData.stage);
    } else {
      setTitle("");
      setDiscription("");
      setSubTask([]);
      setPrioroty("high");
      setStage("queue");
      setIsChange(false);
    }
  }, [props.taskData.taskData, props.stateModal]);

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
