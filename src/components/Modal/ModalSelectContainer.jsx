import React from "react";
import ModalSelect from "./ModalSelect";

function ModalSelectContainer(props) {
  return (
    <div className="modal-select-container">
      <ModalSelect
        select={props.priority}
        handler={props.setPrioroty}
        arrValue={["high", "medium", "low"]}
      >
        Select the priority of this task:
      </ModalSelect>

      <ModalSelect
        select={props.stage}
        handler={props.setStage}
        arrValue={["queue", "development", "done"]}
      >
        Select the stage of this task:
      </ModalSelect>
    </div>
  );
}

export default ModalSelectContainer;
