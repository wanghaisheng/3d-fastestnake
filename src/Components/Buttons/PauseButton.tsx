import "./PauseButton.css";
import { useMenuStore, usePauseStore } from "../../store/menuStore";
import { swapPause } from "../../engine/events/pauseEvent";
import { stopTimer } from "../../engine/time/isTimer";
import handleKeyDown from "./handleKeyDown";

function PauseButton() {
  const { isPause, togglePause } = usePauseStore();
  const { titleMenu, toggleModal, selectTitleMenu } = useMenuStore.getState();
  const { isVisible } = useMenuStore();

  const togglePlayPause = () => {
    if (!isVisible || (isVisible && titleMenu === "Pause")) {
      toggleModal();
      selectTitleMenu("Pause");
      togglePause();
      swapPause();
      stopTimer();
    }
  };
  return (
    <button
      className="play-button"
      onClick={togglePlayPause}
      onKeyDown={handleKeyDown}
    >
      <i className={`fas fa-duotone  ${isPause ? "fa-pause" : "fa-play"}`}></i>
    </button>
  );
}

export default PauseButton;
