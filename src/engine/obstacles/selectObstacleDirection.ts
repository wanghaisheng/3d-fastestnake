/**
 * @module selectObstacleDirection.ts Выбирает данные препятствий заданного типа
 *    @function selectObstacleDirection Возвращает шаг и координаты препятствий
 */
import { obstacleData } from "../../types/obstacle";
import * as X from "./obstaclesX";
import * as Y from "./obstaclesY";
/**
 * По заданному типу находит и возвращает данные препятствий
 * @param type тип выбираемых препятствий
 * @returns шаг и координаты препятствий заданного типа
 */
function selectObstacleDirection(type: string): obstacleData {
  let coord: number[][] = [];
  let step: number[] = [];
  coord =
    type === "x" ? [...X.getObstaclesXCoord()] : [...Y.getObstaclesYCoord()];
  step = type === "x" ? [...X.getObstaclesStepX()] : [...Y.getObstaclesStepY()];

  return { coord, step };
}

export default selectObstacleDirection;
