/**
 * @module setObstacleParams.ts Управляет препятствиями
 *    @function setObstacleParams Управляет движением и настройками препятствий
 */
import * as SPEED from "./obstacleSpeed";
import moveObstacles from "./moveObstacles";
import { getTimerStep } from "../time/timerStepPerLevel";
/**
 * Устанавливает скорость и направление движения препятствий
 */
function setObstacleParams(speed: number): void {
  SPEED.obstacleSpeedCounter();
  if (SPEED.getObstacleSpeed() === speed / getTimerStep()) {
    ["x", "y"].forEach((type) => moveObstacles(type));
    SPEED.obstacleSpeedReset();
  }
}

export default setObstacleParams;
