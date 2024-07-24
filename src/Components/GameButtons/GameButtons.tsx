import "../GameButtons/GameButtons.css";
import PauseButton from "../Buttons/PauseButton";
import ReloadButton from "../Buttons/ReloadButton";
import MenuButton from "../Buttons/MenuButton";

function GameButtons() {
  return (
    <div className="game-button">
      <PauseButton />
      <ReloadButton />
      <MenuButton />
    </div>
  );
}

export default GameButtons;
