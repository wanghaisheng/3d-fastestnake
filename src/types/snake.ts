export type SnakeHeadCoord = {
  snakeHeadCoordX: number;
  snakeHeadCoordY: number;
  snakeHeadStepX: number;
  snakeHeadStepY: number;
};
export type SnakeBodyCoord = number[][];
/**
 * @type тип возвращаемого функцией snakeCoordCompare результата сравнения
 */
export type HeadCompare = [snakeHead: SnakeHeadCoord, obstacleContact: boolean];
