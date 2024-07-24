/**
 *  @module bonusSnakeBreaksObstacles.ts Управляет бонусом удаления препятствий
 *     @var isBreaksObstacles Фиксирует период действие бонуса
 */
/**
 *  @var Бонус удаления препятствий действует/не действует при true/false
 */
let isBreaksObstacles = false;
/**
 *  Запускает/останавливает действие бонуса удаления препятствий
 * @param breaksObstacles при true запускает бонус, при false останавливает
 */
export function setBreaksObstacles(breaksObstacles: boolean): void {
  isBreaksObstacles = breaksObstacles;
}
/**
 *  Возвращает состояние бонуса удаления препятствий - true(действует)/false(нет)
 * @returns состояние бонуса isBreaksObstacles
 */
export function getBreaksObstacles(): boolean {
  return isBreaksObstacles;
}
