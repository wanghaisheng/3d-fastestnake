/**
 *  @module isCross.ts Управляет пересечением границ змейкой
 *     @function isCross Создает событие пересечения границы
 */
import { SnakeHeadCoord } from "../../types/snake";
import { addEvent } from "../protocol/protocol";
/**
 *  Создает событие пересечения границы
 * @param snakeHead положение головы змейки при пересечении границы
 * @returns измененные после пересечения границы координаты головы змейки
 */
function isCross(snakeHead: SnakeHeadCoord): SnakeHeadCoord {
  const coordX = snakeHead.snakeHeadCoordX;
  const coordY = snakeHead.snakeHeadCoordY;
  const value = ` ${coordX}:${coordY} crossed border`;
  addEvent({ name: "bonus snakeCrossesBorders", value: value });
  snakeHead = {
    ...snakeHead,
    snakeHeadCoordX: coordX,
    snakeHeadCoordY: coordY,
  };
  return snakeHead;
}

export default isCross;
