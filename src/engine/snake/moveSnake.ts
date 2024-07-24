/**
 * @module moveSnake.ts Управляет движением змейки
 *    @function moveSnake Двигает змейку по игровому полю
 */
import { setSnakeOpacity } from "../../Components/Snake/setSnakeOpacity";
import allContactEvents from "../events/allContactEvents";
import { breakContact } from "../events/isContact";
import { checkMistake } from "../lives/isMistake";
import { checkTimerWorking, startTimer } from "../time/isTimer";
import * as SNAKE from "./snake";
/**
 * Изменяет координаты головы и тела змейки по осям только во время игры
 * @description
 * 1. Извлекает из модуля snake параметры головы змейки
 * 2. Если происходит перемещение змейки:
 *    - изменяет координаты ее головы по осям
 *    - останавливает голову змейки после запрещенного контакта
 *    - вносит новые параметры головы обратно в модуль snake
 *    - пересчитывает координаты тела змейки:
 *        * смещает координаты каждого элемента на одну позицию назад
 *        * на место первого элемента вводит текущие координаты головы змейки
 *    - вносит новые координаты тела змейки в модуль snake
 */
function moveSnake(): void {
  if (checkTimerWorking()) {
    let snakeHead = { ...SNAKE.getSnakeHeadParams() };
    const newBodyCoord = [...SNAKE.getSnakeBodyCoord()];
    if (snakeHead.snakeHeadStepX !== 0 || snakeHead.snakeHeadStepY !== 0) {
      snakeHead.snakeHeadCoordX += snakeHead.snakeHeadStepX;
      snakeHead.snakeHeadCoordY += snakeHead.snakeHeadStepY;
      snakeHead = allContactEvents(snakeHead);
      SNAKE.setSnakeHeadParams(snakeHead);
      if (checkTimerWorking() && !checkMistake()) {
        breakContact();
        setSnakeOpacity(1);
        for (let i = newBodyCoord.length - 1; i > 0; i--)
          newBodyCoord[i] = newBodyCoord[i - 1];
        newBodyCoord[0] = [
          snakeHead.snakeHeadCoordX,
          snakeHead.snakeHeadCoordY,
        ];
        SNAKE.setSnakeBodyCoord(newBodyCoord);
      } else startTimer();
    }
  }
}

export default moveSnake;
