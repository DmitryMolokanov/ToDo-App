import React from "react";
import { useDispatch } from "react-redux";

function Button(props) {
  const dispatch = useDispatch();
  return (
    <button
      className="button"
      onClick={() => {
        dispatch({ type: "IS_CHANGE", payload: false });
        dispatch({ type: "MODAL", payload: true });
      }}
    >
      {props.children}
    </button>
  );
}

export default Button;
