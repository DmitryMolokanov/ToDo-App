import React from "react";

function ModalButton({ children, ...props }) {
  return (
    <button className="modal-btn" onClick={props.handler}>
      {children}
    </button>
  );
}

export default ModalButton;
