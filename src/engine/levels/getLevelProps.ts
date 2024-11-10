/**
 * @module getLevelProps.ts Передает настройки текущего уровня в игру
 *    @function getLevelProps Создает уровень
 */
import levels from "./levels.json";
import { getTimer, setTimer } from "../time/timer";
import { stopTimer } from "../time/isTimer";
import { setField } from "../field/fieldPerLevel";
import { setAmountOfFood } from "../food/amountOfFoodPerLevel";
import { getTimePerLevel, setTimePerLevel } from "../time/timePerLevel";
import { setTimerStep } from "../time/timerStepPerLevel";
import { setMaxScores } from "../scores/maxScoresPerLevel";
import * as LIVES from "../lives/amountOfLivesPerLevel";
import { setLives, getLives } from "../lives/lives";
import { setObstacles } from "../obstacles/obstaclesPerLevel";
import { setBonuses } from "../bonuses/bonusesPerLevel";
import { setNewGame } from "../events/interruptGameEvent";
import { setFogStep } from "../../assets/assets";
import { fogGradient } from "../../types/three";
/**
 * Передает в настройки параметры текущего уровня из файла .json
 * @param currentLevel текущий уровень игры
 * @description Задает настройки. Ставит игру на паузу.
 */
function getLevelProps(currentLevel: number) {
  setField(+levels[currentLevel - 1].field);
  setAmountOfFood(+levels[currentLevel - 1].food);
  let extraTime = getTimePerLevel() ? getTimePerLevel() - getTimer() : 0;
  setTimer(-getTimer());
  extraTime = extraTime + +levels[currentLevel - 1].time;
  setTimePerLevel(extraTime);
  setTimerStep(+levels[currentLevel - 1].timerStep);
  setMaxScores(+levels[currentLevel - 1].maxScores);
  LIVES.setAmountOfLives(+levels[currentLevel - 1].lives);
  setLives(LIVES.getAmountOfLives() - getLives());
  setObstacles(levels[currentLevel - 1].obstacles);
  if (levels[currentLevel - 1].bonuses.length !== 0)
    setBonuses(
      levels[currentLevel - 1].bonuses.map((bonus) => ({
        type: bonus["type"],
        value: +bonus["value"],
        startFood: +bonus["startFood"],
        endFood: +bonus["endFood"],
      }))
    );
  setFogStep(levels[currentLevel - 1].fog as fogGradient);
  setNewGame();
  stopTimer();
}

export default getLevelProps;
