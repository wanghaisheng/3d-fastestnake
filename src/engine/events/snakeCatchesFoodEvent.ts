/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 *  @module snakeCatchesFoodEvent.ts Управляет контактом змейки с едой
 *     @void isFoodEaten Фиксирует момент поедания еды змейкой
 *     @function snakeCatchesFoodEvent Проверяет касание головы змейки с едой
 *     @function getFoodEaten Показывает, была ли съедена еда на текущем шаге
 */
import { getDoubleScoresFood } from "../bonuses/bonusDoubleScoresFood";
import { getCurrentFoodNumber } from "../food/currentFoodNumber";
import { getFoodCoord, getFoodScores } from "../food/food";
import { checkMistake } from "../lives/isMistake";
import { addEvent } from "../protocol/protocol";
import protocolExecutor from "../protocol/protocolExecutor";
import { getSnakeHeadParams } from "../snake/snake";
/**
 * Равно true, если на текущем шаге игры еда съедена и false, если нет
 */
let isFoodEaten: boolean;
/**
 *  При контакте змейки с едой создает событие и запускает его обработку
 */
export function snakeCatchesFoodEvent(): void {
  const snakeHead = getSnakeHeadParams();
  const foodCoord = getFoodCoord();
  isFoodEaten = false;
  if (
    snakeHead.snakeHeadCoordX === foodCoord[0] &&
    snakeHead.snakeHeadCoordY === foodCoord[1]
  ) {
    isFoodEaten = true;
    if (getDoubleScoresFood())
      addEvent({ name: "bonus doubleScoresFood", value: getFoodScores() * 2 });
    if (!checkMistake())
      protocolExecutor({
        name: "food eaten",
        value: getCurrentFoodNumber() + 1,
      });
  }
}

export function getFoodEaten(): boolean {
  return isFoodEaten;
}
