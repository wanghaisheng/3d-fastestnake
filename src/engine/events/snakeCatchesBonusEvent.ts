/**
 *  @module snakeCatchesBonusEvent.ts Управляет контактом змейки с бонусом
 *     @function snakeCatchesBonusEvent Проверяет касание головы змейки с бонусом
 */
import { getBonusCoord } from "../bonuses/bonus";
import { getBonusAvailability } from "../bonuses/bonusAvailableState";
import { getBonusParams } from "../bonuses/bonusParams";
import protocolExecutor from "../protocol/protocolExecutor";
import { getSnakeHeadParams } from "../snake/snake";
/**
 *  При контакте змейки с бонусом создает событие и запускает его обработку
 */
function snakeCatchesBonusEvent() {
  if (getBonusAvailability()) {
    const snakeHead = getSnakeHeadParams();
    const bonusCoord = getBonusCoord();
    if (
      snakeHead.snakeHeadCoordX === bonusCoord[0] &&
      snakeHead.snakeHeadCoordY === bonusCoord[1]
    )
      protocolExecutor({
        name: "bonus",
        value: `${getBonusParams().type} is activate`,
      });
  }
}

export default snakeCatchesBonusEvent;
