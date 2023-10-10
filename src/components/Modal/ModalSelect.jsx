import React from "react";

function ModalSelect({ children, ...props }) {
  return (
    <label>
      {children}
      <select
        value={props.select}
        className="modal-select-priority"
        onChange={(e) => props.handler(e.target.value)}
      >
        {props.arrValue.map((value) => {
          return (
            <option value={value} key={value}>
              {value}
            </option>
          );
        })}
      </select>
    </label>
  );
}

export default ModalSelect;
