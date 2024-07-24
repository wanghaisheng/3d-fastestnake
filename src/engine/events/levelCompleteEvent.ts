/**
 *  @module levelCompleteEvent.ts Фиксирует успешное завершение уровня
 *     @function levelCompleteEvent Если уровень пройден, создает событие
 */
import { howMuchIsLeftToEat } from "../food/currentFoodNumber";
import { getCurrentLevel } from "../levels/currentLevel";
import protocolExecutor from "../protocol/protocolExecutor";
/**
 * Создает событие успешного завершения уровня, если вся еда съедена вовремя
 * @returns true, если уровень пройден, и false, если нет
 */
function levelCompleteEvent(): boolean {
  let levelComplete = false;
  if (howMuchIsLeftToEat() === 0) {
    levelComplete = true;
    protocolExecutor({ name: "level is complete", value: getCurrentLevel() });
  }

  return levelComplete;
}

export default levelCompleteEvent;
