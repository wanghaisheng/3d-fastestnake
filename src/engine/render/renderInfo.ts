/**
 * @module renderInfo.ts Выводит на экран информационное табло
 *    @function renderInfo Выполняет рендер всех параметров игры
 */
import getSelectors from "./getSelectors";
import { getScores, setScores } from "../scores/scores";
import { howMuchIsLeftToEat } from "../food/currentFoodNumber";
import timeFormat from "../time/timeFormat";
import { getTimePerLevel } from "../time/timePerLevel";
import { getTimer } from "../time/timer";
import { getCurrentLevel } from "../levels/currentLevel";
import { getLives } from "../lives/lives";
import { getMaxScores } from "../scores/maxScoresPerLevel";
import { getStep } from "../time/timerStepPerLevel";
import checkTimerStep from "../time/checkTimerStep";
import { checkPause } from "../events/pauseEvent";
import { checkContact } from "../events/isContact";
let attention = 0;
/**
 * Рендер информации о ходе игры по ссылкам на DOM-элементы
 */
function renderInfo(): void {
  attention++;
  const attentionInterval = 4 + getStep();
  const {
    scoreElement,
    leftToEatElement,
    timeElement,
    levelElement,
    lifeElement,
    bonusElement,
    speedElement,
  } = getSelectors();
  if (howMuchIsLeftToEat() === 0) setScores(getLives());
  if (scoreElement)
    scoreElement.innerHTML = ` ${getScores()} / ${getMaxScores()}`;
  if (leftToEatElement) leftToEatElement.innerHTML = ` ${howMuchIsLeftToEat()}`;
  if (timeElement)
    timeElement.innerHTML = ` ${timeFormat(
      getTimePerLevel() - getTimer() < 0 ? 0 : getTimePerLevel() - getTimer()
    )}`;
  if (levelElement) levelElement.innerHTML = ` ${getCurrentLevel()}`;
  if (lifeElement) {
    lifeElement.style.opacity = `${
      checkContact() && attention === attentionInterval ? 0.4 : 1
    }`;
    lifeElement.innerHTML = ` ${
      getLives() < 0 || howMuchIsLeftToEat() === 0 ? 0 : getLives()
    }`;
  }

  if (bonusElement) {
    bonusElement.style.opacity = "0.5";
    bonusElement.innerHTML = " 0";
  }
  if (speedElement && !checkContact()) {
    speedElement.innerHTML = ` ${
      checkTimerStep() || checkPause() ? 0 : getStep()
    }`;
  }
  if (attention === attentionInterval) attention = 0;
}

export default renderInfo;
