import React from "react";

function ValidMessage(props) {
  return (
    <span
      className="modal-valid-message"
      style={props.valid ? { display: "none" } : { display: "block" }}
    >
      Fill in all fields and select priority
    </span>
  );
}

export default ValidMessage;
