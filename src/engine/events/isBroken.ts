/**
 *  @module isBroken.ts Управляет удалением препятствий змейкой
 *     @function isBroken Создает событие удаления препятствия и изменяет игру
 */
import { SnakeHeadCoord } from "../../types/snake";
import breakObstacles from "../obstacles/breakObstacles";
import { addEvent } from "../protocol/protocol";
/**
 *  Перемещает голову змейки, удаляет препятствие, вносит событие в протокол
 * @param snakeHead Положение головы змейки при контакте с препятствием
 * @returns Новое положение головы змейки
 */
function isBroken(snakeHead: SnakeHeadCoord): SnakeHeadCoord {
  const coordX = snakeHead.snakeHeadCoordX + snakeHead.snakeHeadStepX;
  const coordY = snakeHead.snakeHeadCoordY + snakeHead.snakeHeadStepY;
  const value = `obstacle ${coordX}:${coordY} is broken`;
  breakObstacles([coordX, coordY]);
  addEvent({ name: "bonus snakeBreaksObstacles", value: value });
  snakeHead = {
    ...snakeHead,
    snakeHeadCoordX: coordX,
    snakeHeadCoordY: coordY,
  };

  return snakeHead;
}

export default isBroken;
