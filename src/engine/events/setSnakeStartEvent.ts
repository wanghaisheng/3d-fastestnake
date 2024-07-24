/**
 * @module setSnakeStartEvent.ts Задает исходное положение змейки на старте
 *    @function setSnakeStartEvent Вносит координаты головы змейки в массивы
 */
import { addEvent } from "../protocol/protocol";
import * as SNAKE from "../snake/snake";
/**
 * Принимает координаты головы и помещает их в массивы координат головы и тела
 * @param position массив координат [x, y] стартовой позиции головы змейки
 */
function setSnakeStartEvent(position: number[]): void {
  SNAKE.setSnakeHeadParams({
    snakeHeadCoordX: position[0],
    snakeHeadCoordY: position[1],
    snakeHeadStepX: 0,
    snakeHeadStepY: 0,
  });
  const snakeHead = [
    SNAKE.getSnakeHeadParams().snakeHeadCoordX,
    SNAKE.getSnakeHeadParams().snakeHeadCoordY,
  ];
  const snakeTail = [
    SNAKE.getSnakeHeadParams().snakeHeadCoordX,
    SNAKE.getSnakeHeadParams().snakeHeadCoordY - 1,
  ];
  SNAKE.setSnakeBodyCoord([snakeHead]);
  SNAKE.addSnakeBodyCoord(snakeTail);
  SNAKE.addSnakeBodyCoord([]);
  addEvent({
    name: "set snake to start",
    value: snakeHead[0] + ":" + snakeHead[1],
  });
}

export default setSnakeStartEvent;
