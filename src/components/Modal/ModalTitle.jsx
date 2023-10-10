import React from "react";

function ModalTitle({ children, ...props }) {
  return (
    <div className="modal-title -container">
      <label>
        <span>{children}</span>
        <br />
        <input
          value={props.title}
          onChange={(e) => props.setTitle(e.target.value)}
          className="modal-input-title"
        />
      </label>
    </div>
  );
}

export default ModalTitle;
