/**
 * @module bonusesPerLevel.ts Управляет бонусами на уровне
 *    @var bonusesPerLevel Массив объектов для всех бонусов
 *    @function setBonuses Задает общий массив объектов
 *    @function getBonuses Возвращает общий массив объектов
 */
import { BonusesPerLevel } from "../../types/bonus";
/**
 * @var массив объектов: 'type'- тип, 'value'- параметр, 'startFood'- появление
 */
let bonusesPerLevel: BonusesPerLevel = [];
/**
 * Задает массив объектов для каждого бонуса на уровне
 * @param bonuses массив объектов для бонусов текущего уровня
 */
export function setBonuses(bonuses: BonusesPerLevel): void {
  bonusesPerLevel = [...bonuses];
}
/**
 * Возвращает массив объектов для бонусов на уровне
 * @returns bonusesPerLevel
 */
export function getBonuses(): BonusesPerLevel {
  return bonusesPerLevel;
}
