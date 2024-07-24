/**
 * @module obstaclesX.ts Управляет препятствиями, движущимися по горизонтали
 *    @var obstaclesX Массив строк "x" для каждого препятствия
 *    @var obstaclesXCoord Массив координат [x, y] для каждого препятствия
 *    @var obstaclesStepX Массив шагов при движении каждого препятствия
 *    @function setObstaclesX Задает массив строк
 *    @function setObstaclesXCoord Задает массивы координат и шагов
 *    @function setObstaclesStepX Задает массив шагов
 *    @function getObstaclesX Возвращает массив строк
 *    @function getObstaclesXCoord Возвращает массив координат
 *    @function getObstaclesStepX Возвращает массив шагов
 */
import { getObstacles } from "./obstaclesPerLevel";
/**
 * @var массив строк 'x' для каждого препятствия, движущегося по горизонтали
 */
let obstaclesX: string[] = [];
/**
 * @var массив координат [x, y] для препятствий, движущихся по горизонтали
 */
let obstaclesXCoord: number[][] = [];
/**
 * @var массив из 1 и -1, шагов для препятствий, движущихся по горизонтали
 */
let obstaclesStepX: number[] = [];
/**
 * Выделяет из всех препятствий те, что движутся по горизонтали и задает им шаг
 */
export function setObstaclesX(): void {
  obstaclesX = getObstacles().filter((obstacle) => obstacle === "x");
  obstaclesStepX = obstaclesX.map(() => (Math.random() < 0.5 ? 1 : -1));
}
/**
 * Заносит массив координат [x, y] препятствий в obstaclesXCoord
 * @param obstacles массив координат [x, y] препятствий
 */
export function setObstaclesXCoord(obstacles: number[][]): void {
  obstaclesXCoord = [...obstacles];
}
/**
 * Задает шаг для всех препятствий, движущихся по горизонтали
 * @param steps массив шагов для всех препятствий, движущихся по горизонтали
 */
export function setObstaclesStepX(steps: number[]): void {
  obstaclesStepX = [...steps];
}
/**
 * Возвращает массив строк 'x' для препятствий, движущихся по горизонтали
 */
export function getObstaclesX(): string[] {
  return obstaclesX;
}
/**
 * Возвращает массив координат [x, y] препятствий, движущихся по горизонтали
 */
export function getObstaclesXCoord(): number[][] {
  return obstaclesXCoord;
}
/**
 * Возвращает массив шагов препятствий, движущихся по горизонтали
 */
export function getObstaclesStepX(): number[] {
  return obstaclesStepX;
}
