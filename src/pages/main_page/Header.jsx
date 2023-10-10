import React from "react";
import Button from "../../components/UI/Button";

function Header(props) {
  return (
    <div className="header">
      <a href="/" className="to-do-button">
        ToDo
      </a>
      <Button setIsModal={props.setIsModal}>Create task</Button>
    </div>
  );
}

export default Header;
