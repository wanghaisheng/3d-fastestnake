/**
 *  @module bonusDoubleScoresFood.ts Управляет бонусом удвоения очков еды
 *     @var isDoubleScoresFood Фиксирует период действия бонуса
 */
/**
 *  @var Бонус удвоения очков еды действует/не действует при true/false
 */
let isDoubleScoresFood = false;
/**
 *  Запускает/останавливает действие бонуса удвоения очков еды
 * @param isDouble при true запускает бонус, при false останавливает
 */
export function setDoubleScoresFood(isDouble: boolean): void {
  isDoubleScoresFood = isDouble;
}
/**
 *  Возвращает состояние бонуса удвоения очков еды - true(действует)/false(нет)
 * @returns состояние бонуса isDoubleScoresFood
 */
export function getDoubleScoresFood(): boolean {
  return isDoubleScoresFood;
}
