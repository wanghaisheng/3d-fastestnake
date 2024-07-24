/**
 * @module bonusHandlers.ts Управляет процедурами тестирования бонусов
 *    @function selectBonusToDisplay Выбор бонуса и передача его для показа
 *    @function bonusCatchingHandler Контроль использования бонуса
 *    @function selectBonusToHide Выбор бонуса и передача его для скрытия
 */
import { BonusProps } from "../../types/bonus";
import setBonusEvent from "../events/setBonusEvent";
import { getCurrentFoodNumber } from "../food/currentFoodNumber";
import { addEvent } from "../protocol/protocol";
import protocolExecutor from "../protocol/protocolExecutor";
import { setCurrentBonus } from "./bonus";
import { bonusAddLivesDeactivate, checkAddLives } from "./bonusAddLives";
import { bonusAddScoresDeactivate, checkAddScores } from "./bonusAddScores";
import { bonusAddTimeDeactivate, checkAddTime } from "./bonusAddTime";
import * as BONUS from "./bonusAvailableState";
import { catchBonus, getBonusCatchingStatus } from "./bonusCatchingState";
import { getBonusParams, setBonusParams } from "./bonusParams";
/**
 * Выбирает текущий бонус по номеру еды, доступности и типу для вывода на экран
 * @param bonus параметры текущего бонуса
 * @param index номер текщего бонуса в массиве бонусов
 */
export function selectBonusToDisplay(bonus: BonusProps, index: number): void {

  const isAdd = checkAddTime() || checkAddLives() || checkAddScores();
  if (
    getCurrentFoodNumber() === bonus.startFood &&
    !getBonusCatchingStatus().isBonusCaught &&
    !isAdd
  ) {
    setBonusParams(bonus);
    setBonusEvent();
    BONUS.giveBonus();
    setCurrentBonus(index);
  }
}
/**
 * Убирает изображение бонуса с экрана и деактивирует его
 * @param bonus параметры текущего бонуса
 */
function bonusCatchingHandler(bonus: BonusProps): void {
  bonusAddTimeDeactivate();
  bonusAddLivesDeactivate();
  bonusAddScoresDeactivate();
  if (BONUS.getBonusAvailability())
    addEvent({ name: "bonus", value: ` ${bonus.type} was not used` });
  BONUS.removeBonus();
  if (!getBonusCatchingStatus().isBonusCaught) catchBonus(false);
}
/**
 * Фиксирует момент истечения срока доступности бонуса
 * @param bonus параметры текущего бонуса
 */
export function selectBonusToHide(bonus: BonusProps): void {
  if (
    getBonusParams() &&
    getBonusCatchingStatus().isBonusCaught &&
    getBonusCatchingStatus().caughtFoodNumber + +getBonusParams().value ===
      getCurrentFoodNumber()
  )
    protocolExecutor({ name: "bonus", value: ` ${bonus.type} disabled` });
  if (getCurrentFoodNumber() === bonus.endFood) bonusCatchingHandler(bonus);
}
