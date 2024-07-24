/* eslint-disable prefer-const */
/**
 * @module moveObstacles.ts Перемещает препятствия по игровому полю
 *    @function moveObstacles Управляет движением среди других объектов на поле
 */
import { checkTimerWorking } from "../time/isTimer";
import selectObstacleDirection from "./selectObstacleDirection";
import * as X from "./obstaclesX";
import * as Y from "./obstaclesY";
import checkObstaclePosition from "./checkObstaclePosition";
import setObstacleStep from "./setObstacleStep";
import { getSnakeHeadParams } from "../snake/snake";
import { getStep } from "../time/timerStepPerLevel";
/**
 * Изменяет координаты препятствий и их шаг
 * @description
 *  Для каждого направления движения препятствий во время игры:
 *      - получает координаты препятствий и шаг каждого из них
 *      - изменяет шаг на обратный при контакте препятствий с другими объектами
 *      - останавливает препятствия при приближении головы змейки
 *      - изменяет координаты препятствий на величину шага
 */
function moveObstacles(type: string): void {
  const stopDistance = getStep() + 2;
  const isSnakeMoving =
    getSnakeHeadParams().snakeHeadStepX !== 0 ||
    getSnakeHeadParams().snakeHeadStepY !== 0;
  let step: number[], twist: number[], coord: number[][];
  let newPos: number[], newStep: number;
  coord = [...selectObstacleDirection(type).coord];
  step = [...selectObstacleDirection(type).step];
  if (checkTimerWorking()) {
    twist = type === "y" ? [0, 1] : [1, 0];
    for (let i = 0; i < coord.length; i++) {
      newPos = [...coord[i]];
      step[i] = setObstacleStep({ i, twist, coord, step });
      type === "x" ? X.setObstaclesStepX(step) : Y.setObstaclesStepY(step);
      newPos[twist[0]] += checkTimerWorking() ? step[i] : 0;
      newStep = !checkObstaclePosition(newPos) ? 0 : step[i];
      newStep =
        Math.abs(coord[i][0] - getSnakeHeadParams().snakeHeadCoordX) <
          stopDistance &&
        Math.abs(coord[i][1] - getSnakeHeadParams().snakeHeadCoordY) <
          stopDistance &&
        isSnakeMoving
          ? 0
          : newStep;
      coord[i][twist[0]] += newStep;
    }
  }
}

export default moveObstacles;
