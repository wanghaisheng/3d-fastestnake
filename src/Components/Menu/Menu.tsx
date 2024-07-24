import React from "react";
import { useMenuStore, usePauseStore } from "../../store/menuStore";
import "./Menu.css";
import { swapPause } from "../../engine/events/pauseEvent";

const Menu: React.FC = () => {
  const { toggleModal, titleMenu } = useMenuStore();
  const { togglePause } = usePauseStore();
  return (
    <div
      className="menu-game"
      onClick={() => {
        if (titleMenu.indexOf("Game over") !== -1) location.reload();
        else if (titleMenu === "Pause") {
          togglePause();
          swapPause();
          toggleModal();
        } else toggleModal();
      }}
    >
      <h2>{titleMenu}</h2>
    </div>
  );
};

export default Menu;
