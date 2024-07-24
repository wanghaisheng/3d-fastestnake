/**
 * @module bonusState.ts Управление состоянием бонусов
 *    @var isBonusAvailable Открывает/закрывает период доступа игрока к бонусу
 *    @function giveBonus Открывает период доступа игрока к бонусу
 *    @function removeBonus Закрывает доступ игрока к бонусу
 *    @function getBonusAvailability Возвращает статус доступа игрока к бонусу
 */
/**
 * @var Если true - период доступа игрока к бонусу открыт, false - закрыт
 */
let isBonusAvailable = false;
/**
 * Открывает доступ игрока к бонусу
 */
export function giveBonus(): void {
  isBonusAvailable = true;
}
/**
 * Закрывает доступ игрока к бонусу
 */
export function removeBonus(): void {
  isBonusAvailable = false;
}
/**
 * Возвращает статус доступа игрока к бонусу
 * @returns true - доступ открыт, false - закрыт
 */
export function getBonusAvailability(): boolean {
  return isBonusAvailable;
}
