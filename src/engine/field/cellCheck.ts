/**
 * @module cellCheck.ts Проверяет, является ли ячейка свободной
 *      @function cellCheck Возвращает true, если ячейка свободна
 */
import { getObstaclesFixCoord } from "../obstacles/obstaclesFix";
import { getObstaclesXCoord } from "../obstacles/obstaclesX";
import { getObstaclesYCoord } from "../obstacles/obstaclesY";
import { getFoodCoord } from "../food/food";
import { getSnakeBodyCoord } from "../snake/snake";
/**
 * Проверяет ячейку на наличие в ней объектов игрового поля
 * @param CellCheck координаты проверяемой ячейки
 * @description ищет в массиве занятых ячеек проверяемую
 * @returns возвращает true, если ячейка свободна, и false, если занята
 */
const cellCheck = (cell: number[]): boolean => {
  const [cellX, cellY] = cell;
  const bookedCells: number[][] = [];
  let isFree = false;
  bookedCells.push(
    getFoodCoord(),
    getObstaclesFixCoord().flat(),
    getObstaclesYCoord().flat(),
    getObstaclesXCoord().flat()
  );
  getSnakeBodyCoord().forEach((coord) => bookedCells.push(coord));

  isFree = bookedCells.every(
    (coord) => coord[0] !== cellX || coord[1] !== cellY
  );

  return isFree;
};

export default cellCheck;
