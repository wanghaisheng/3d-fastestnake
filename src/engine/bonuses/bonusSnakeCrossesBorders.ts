/**
 *  @module bonusSnakeCrossesBorders.ts  Управляет бонусом пересечения границ
 *     @var isCrossesBorders Фиксирует период действие бонуса
 */
/**
 *  @var Бонус пересечения границ действует/не действует при true/false
 */
let isCrossesBorders = false;
/**
 *  Запускает/останавливает действие бонуса пересечения границ
 * @param crossesBorders при true запускает бонус, при false останавливает
 */
export function setCrossesBorders(crossesBorders: boolean): void {
  isCrossesBorders = crossesBorders;
}
/**
 Возвращает состояние бонуса пересечения границ - true(действует)/false(нет)
 * @returns состояние бонуса isCrossesBorders
 */
export function getCrossesBorders(): boolean {
  return isCrossesBorders;
}
