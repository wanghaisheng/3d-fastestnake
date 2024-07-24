/**
 * @module bonusParams.ts Управляет параметрами текущего бонуса
 *    @var bonusParams Хранит тип, значение и момент появление бонуса на поле
 *    @function setBonusParams Устанавливает параметры текущего бонуса
 *    @function getBonusParams Возвращает параметры текущего бонуса
 */
import { BonusProps } from "../../types/bonus";
/**
 * @var bonusParams Параметры текущего бонуса: тип, значение и момент появления
 */
let bonusParams: BonusProps;
/**
 * Задает данные текущего бонуса
 */
export function setBonusParams(bonus: BonusProps): void {
  bonusParams = { ...bonus };
}
/**
 * Возвращает параметры текущего бонуса: тип, значение и момент появления
 * @returns bonusParams
 */
export function getBonusParams(): BonusProps {
  return bonusParams;
}
