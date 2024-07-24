import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { getTimerStep } from "../../engine/time/timerStepPerLevel";
import renderInfo from "../../engine/render/renderInfo";
import {
  checkTimerWorking /*,
  startTimer,
  stopTimer, */,
} from "../../engine/time/isTimer";
import { setTimer } from "../../engine/time/timer";
import gameLoop from "./gameLoop";
import GamePlay from "./GamePlay";
import { useMenuStore /*, usePauseStore */ } from "../../store/menuStore";
import keyboardEvents from "../../engine/events/keyboardEvents";
import {
  keyboardPauseEvent /*, swapPause */,
} from "../../engine/events/pauseEvent";

function Game() {
  // const { isPause, togglePause } = usePauseStore();
  const { titleMenu } = useMenuStore.getState();
  const { isVisible } = useMenuStore();
  // const spaceDown = (e: KeyboardEvent) => {
  //   if (e.code === "Space") {
  //     console.log()
  //     toggleModal();
  //     selectTitleMenu("Pause");
  //     togglePause();
  //     swapPause();
  //     // isPause ? startTimer() : stopTimer();
  //     stopTimer();
  //   }
  // };
  if (isVisible) {
    document.removeEventListener("keydown", keyboardEvents);
    if (titleMenu === "Pause")
      document.addEventListener("keydown", keyboardPauseEvent /* spaceDown */);
  } else {
    if (titleMenu === "Pause")
      document.removeEventListener(
        "keydown",
        keyboardPauseEvent /* spaceDown */
      );
    document.addEventListener("keydown", keyboardEvents);
  }
  renderInfo();
  const [previousTime, setPreviousTime] = useState(0);
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if ((elapsedTime - previousTime) * 1000 > getTimerStep()) {
      gameLoop();
      if (checkTimerWorking()) setTimer(getTimerStep());
      setPreviousTime(elapsedTime);
    }
  });

  return <GamePlay />;
}

export default Game;
