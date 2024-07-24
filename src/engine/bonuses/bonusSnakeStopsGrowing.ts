/**
 *  @module bonusSnakeStopsGrowing.ts Управляет бонусом остановки роста
 *     @var isStopsGrowing Фиксирует период действие бонуса
 */
/**
 *  @var Бонус остановки роста действует/не действует при true/false
 */
let isStopsGrowing = false;
/**
 *  Запускает/останавливает действие бонуса остановки роста
 * @param stopsGrowing
 */
export function setStopsGrowing(stopsGrowing: boolean): void {
  isStopsGrowing = stopsGrowing;
}
/**
 Возвращает состояние бонуса остановки роста - true(действует)/false(нет)
 * @returns состояние бонуса isStopsGrowing
 */
export function getStopsGrowing(): boolean {
  return isStopsGrowing;
}
