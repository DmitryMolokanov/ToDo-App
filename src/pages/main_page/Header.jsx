import React from "react";
import Button from "./Button";

function Header(props) {
  return (
    <div className="header">
      <a href="/" className="to-do-button">
        ToDo
      </a>
      <Button>Create task</Button>
    </div>
  );
}

export default Header;
