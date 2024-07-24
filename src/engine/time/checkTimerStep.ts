/**
 *  @module checkTimerStep.ts Проверяет скорость змейки на равенство нулю
 *     @function checkTimerStep Возвращает true, если задана нулевая скорость
 */
import { checkContact } from "../events/isContact";
import { checkPause } from "../events/pauseEvent";
import { getSnakeHeadParams } from "../snake/snake";
import { checkTimerWorking } from "./isTimer";
import { getStep } from "./timerStepPerLevel";
/**
 * Фиксирует уменьшение скорости змейки до нуля
 * @returns true, если задана нулевая скорость
 */
function checkTimerStep(): boolean {
  let timerStepIsNull = false;
  if (!checkTimerWorking()) return timerStepIsNull;
  const { snakeHeadStepX, snakeHeadStepY } = getSnakeHeadParams();
  if (
    getStep() === 1 &&
    snakeHeadStepX === 0 &&
    snakeHeadStepY === 0 &&
    !checkPause() &&
    !checkContact()
  )
    timerStepIsNull = true;

  return timerStepIsNull;
}

export default checkTimerStep;
