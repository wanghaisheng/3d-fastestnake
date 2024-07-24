/**
 * @module isLevelComplete.ts Контролирует успешное завершение уровня
 *    @var isLevelComplete Сигнал об успешном завершении уровня
 *    @function levelComplete Устанавливает успешное завершение уровня
 *    @function levelNotCompleted Устанавливает продолжение игры на уровне
 *    @function checkLevelCompletion Проверяет завершение уровня
 */
/**
 * @var 'true', если текущий уровень игры завершен, 'false', если нет
 */
let isLevelComplete = false;
/**
 * Устанавливает isLevelComplete в 'true'
 */
export function levelCompleted(): void {
  isLevelComplete = true;
}
/**
 * Устанавливает isLevelComplete в 'false'
 */
export function levelNotCompleted(): void {
  isLevelComplete = false;
}
/**
 * Возвращает значение isLevelComplete
 * @returns isLevelComplete
 */
export function checkLevelCompletion(): boolean {
  return isLevelComplete;
}
