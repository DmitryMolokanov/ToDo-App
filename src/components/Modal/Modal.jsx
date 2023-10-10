import React from "react";
import ModalForm from "./ModalForm";
import "../Modal/modal.css";

function Modal(props) {
  function closeModal() {
    props.stateModal.setIsModal(false);
    props.taskData.setTaskData(false);
  }

  return (
    <div
      className="modal"
      style={
        props.stateModal.isModal ? { display: "block" } : { display: "none" }
      }
    >
      <div className="modal-content">
        <button className="close-modal-btn" onClick={closeModal}>
          X
        </button>
        <ModalForm
          stateModal={props.stateModal}
          getTask={props.getTask}
          taskData={props.taskData}
          changeTask={props.changeTask}
        />
      </div>
    </div>
  );
}

export default Modal;
