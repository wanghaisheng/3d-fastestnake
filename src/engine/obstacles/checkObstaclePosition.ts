/**
 * @module checkObstaclePosition.ts Проверяет доступность ячейки для препятствия
 *    @function checkObstaclePosition Если ячейка доступна возвращает true
 */
import cellCheck from "../field/cellCheck";
import { getField } from "../field/fieldPerLevel";
/**
 * Проверяет все условия, при которых ячейка доступна для препятствий
 * @param pos координаты проверяемой ячейки
 * @description если ячейка не занята и лежит внутри поля, она доступна
 * @returns true, если ячейка доступна, и false, если нет
 */
function checkObstaclePosition(pos: number[]): boolean {
  let isCorrect = true;
  if (pos[0] < 1) isCorrect = false;
  if (pos[0] > getField()) isCorrect = false;
  if (pos[1] < 1) isCorrect = false;
  if (pos[1] > getField()) isCorrect = false;
  if (!cellCheck(pos)) isCorrect = false;

  return isCorrect;
}

export default checkObstaclePosition;
