/**
 * @module obstaclesX.ts Управляет препятствиями, движущимися по вертикали
 *    @var obstaclesY Массив строк "y" для каждого препятствия
 *    @var obstaclesYCoord Массив координат [x, y] для каждого препятствия
 *    @var obstaclesStepY Массив шагов при движении каждого препятствия
 *    @function setObstaclesY Задает массив строк
 *    @function setObstaclesYCoord Задает массивы координат и шагов
 *    @function setObstaclesStepY Задает массив шагов
 *    @function getObstaclesY Возвращает массив строк
 *    @function getObstaclesYCoord Возвращает массив координат
 *    @function getObstaclesStepY Возвращает массив шагов
 */
import { getObstacles } from "./obstaclesPerLevel";
/**
 * @var массив строк 'y' для каждого препятствия, движущегося по вертикали
 */
let obstaclesY: string[] = [];
/**
 * @var массив координат [x, y] для препятствий, движущихся по вертикали
 */
let obstaclesYCoord: number[][] = [];
/**
 * @var массив из 1 и -1, шагов для препятствий, движущихся по вертикали
 */
let obstaclesStepY: number[] = [];
/**
 * Выделяет из всех препятствий те, что движутся по вертикали и задает им шаг
 */
export function setObstaclesY(): void {
  obstaclesY = getObstacles().filter((obstacle) => obstacle === "y");
  obstaclesStepY = obstaclesY.map(() => (Math.random() < 0.5 ? 1 : -1));
}
/**
 * Заносит массив координат [x, y] препятствий в obstaclesYCoord
 * @param obstacles массив координат [x, y] препятствий
 */
export function setObstaclesYCoord(obstacles: number[][]): void {
  obstaclesYCoord = [...obstacles];
}
/**
 * Задает шаг для всех препятствий, движущихся по вертикали
 * @param steps массив шагов для всех препятствий, движущихся по вертикали
 */
export function setObstaclesStepY(steps: number[]): void {
  obstaclesStepY = [...steps];
}
/**
 * Возвращает массив строк 'y' для препятствий, движущихся по вертикали
 */
export function getObstaclesY(): string[] {
  return obstaclesY;
}
/**
 * Возвращает массив координат [x, y] препятствий, движущихся по вертикали
 */
export function getObstaclesYCoord(): number[][] {
  return obstaclesYCoord;
}
/**
 * Возвращает массив шагов препятствий, движущихся по вертикали
 */
export function getObstaclesStepY(): number[] {
  return obstaclesStepY;
}
