/**
 * @module bonusCatchingState.ts Управление контактом бонусов со змейкой
 *    @var bonusCatchingState Фиксирует факт контакта и номер текщей еды
 *    @function catchBonus Вызывается при контакте головы змейки с бонусом
 *    @function getBonusCatchingStatus Статус контакта змейки с бонусом
 */
import { BonusCatchingState } from "../../types/bonus";
import { getCurrentFoodNumber } from "../food/currentFoodNumber";
/**
 * @var Касание змейки с бонусом (true/false) и номер еды при этом
 */
const bonusCatchingState: BonusCatchingState = {
  isBonusCaught: false,
  caughtFoodNumber: -1,
};
/**
 * Фиксирует касание бонуса со змейкой в bonusCatchingState
 * @param isCatch Фиксация касания бонуса головой змейки
 */
export function catchBonus(isCatch: boolean): void {
  bonusCatchingState.isBonusCaught = isCatch;
  if (isCatch) bonusCatchingState.caughtFoodNumber = getCurrentFoodNumber();
}
/**
 * Возвращает параметры касания головой змейки бонуса из bonusCatchingState
 * @returns статус касания бонуса со змейкой
 */
export function getBonusCatchingStatus(): BonusCatchingState {
  return bonusCatchingState;
}
