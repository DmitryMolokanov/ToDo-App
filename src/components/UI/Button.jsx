import React from "react";

function Button(props) {
  return (
    <button className="button" onClick={() => props.setIsModal(true)}>
      {props.children}
    </button>
  );
}

export default Button;
