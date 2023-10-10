import React from "react";

function ModalDiscription({ children, ...props }) {
  return (
    <div className="modal-discription-container">
      <label>
        <span>{children}</span> <br />
        <textarea
          value={props.discription}
          onChange={(e) => props.setDiscription(e.target.value)}
          className="modal-ta-discription"
        ></textarea>
      </label>
    </div>
  );
}

export default ModalDiscription;
