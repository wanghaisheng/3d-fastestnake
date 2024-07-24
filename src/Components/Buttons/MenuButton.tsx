import React, { useState } from "react";
import "./MenuButton.css";
import handleKeyDown from "./handleKeyDown";

const MenuButton: React.FC = () => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      className="burger-button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <i className={`fas fa-solid  ${isActive ? "fa-bars" : "fa-xmark"}`}></i>
    </button>
  );
};

export default MenuButton;
