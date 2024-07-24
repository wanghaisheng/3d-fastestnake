/**
 * @module timePerLevel.ts Управляет временем, отведенным на прохождение уровня
 *    @var timePerLevel Отведенное на уровень время
 *    @function setTimePerLevel Задает время
 *    @function getTimePerLevel Возвращает время
 */
/**
 * @var время, отведенное на прохождение уровня, в миллисекундах
 */
let timePerLevel: number;
/**
 * Задает время, отведенное на прохождение уровня, в миллисекундах
 * @param time требуемое время
 */
export function setTimePerLevel(time: number): void {
  timePerLevel = time;
}
/**
 * Возвращает время, отведенное на прохождение уровня, в миллисекундах
 * @returns timePerLevel
 */
export function getTimePerLevel(): number {
  return timePerLevel;
}
