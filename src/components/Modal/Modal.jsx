import React from "react";
import ModalForm from "./ModalForm";
import "../Modal/modal.css";
import { useDispatch, useSelector } from "react-redux";

function Modal() {
  const isModal = useSelector((state) => state.isModal);
  const dispatch = useDispatch();

  function closeModal() {
    dispatch({ type: "MODAL", payload: false });
    dispatch({ type: "GET_DATA", payload: false });
  }

  return (
    <div
      className="modal"
      style={isModal ? { display: "block" } : { display: "none" }}
      onClick={() => {
        dispatch({ type: "MODAL", payload: false });
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className="close-modal-btn" onClick={closeModal}>
          X
        </button>
        <ModalForm />
      </div>
    </div>
  );
}

export default Modal;
