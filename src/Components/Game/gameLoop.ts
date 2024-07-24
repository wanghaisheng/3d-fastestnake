import bonusSelect from "../../engine/bonuses/bonusSelect";
import snakeCatchesBonusEvent from "../../engine/events/snakeCatchesBonusEvent";
import { snakeCatchesFoodEvent } from "../../engine/events/snakeCatchesFoodEvent";
import setObstacleParams from "../../engine/obstacles/setObstacleParams";
import moveSnake from "../../engine/snake/moveSnake";
import * as INTERRUPT from "../../engine/events/interruptGameEvent";

function gameLoop() {
  INTERRUPT.interruptGameEvent();
  if (!INTERRUPT.getInterruptGame()) {
    bonusSelect();
    setObstacleParams(600);
    moveSnake();
    snakeCatchesFoodEvent();
    snakeCatchesBonusEvent();
  }
}

export default gameLoop;
