/**
 *  @module snakeCoordCompare.ts Управляет контактами головы змейки
 *     @function snakeCoordCompare Сравнивает координаты препятствий и головы змейки
 */
import { SnakeHeadCoord, HeadCompare } from "../../types/snake";
/**
 * Сравнивает координаты головы змейки с заданной позицией
 * @param snakeHead Параметры головы змейки
 * @param pos Заданная позиция
 * @param contact Маркер, изменяющий значение при совпадении координат
 * @description Если координаты совпадают, голова змейки делает шаг назад
 * @returns массив с параметрами головы змейки и маркером, тип Compare
 */
function snakeCoordCompare(
  snakeHead: SnakeHeadCoord,
  pos: number[],
  contact: boolean
): HeadCompare {
  contact =
    snakeHead.snakeHeadCoordY === pos[1] && snakeHead.snakeHeadCoordX === pos[0]
      ? true
      : false;
  if (contact) {
    snakeHead.snakeHeadCoordY =
      snakeHead.snakeHeadCoordY - snakeHead.snakeHeadStepY;
    snakeHead.snakeHeadCoordX =
      snakeHead.snakeHeadCoordX - snakeHead.snakeHeadStepX;
  }

  return [snakeHead, contact];
}

export default snakeCoordCompare;
