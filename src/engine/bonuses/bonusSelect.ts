/**
 * @module bonusSelect.ts Управляет выбором текущего бонуса
 *    @function bonusSelect Выбирает текущий бонус из всех доступных
 */
import { BonusProps } from "../../types/bonus";
import { getBonuses } from "./bonusesPerLevel";
import { selectBonusToDisplay, selectBonusToHide } from "./bonusHandlers";
/**
 * Выбирает текущий бонус и устанавливает его статус
 * @param bonus параметры бонуса
 * @param index порядковый номер бонуса в массиве всех бонусов
 */
function bonusSelect(): void {
  if (getBonuses().length !== 0) {
    getBonuses().forEach((bonus: BonusProps, index: number) => {
      selectBonusToDisplay(bonus, index);
      selectBonusToHide(bonus);
    });
  }
}

export default bonusSelect;
