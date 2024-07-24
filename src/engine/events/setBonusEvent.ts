/**
 * @module setBonusEvent.ts Генерирует координаты бонуса
 *    @function setBonusEvent Каждый бонус занимает отдельную свободную ячейку
 */
import getFreeCell from "../field/getFreeCell";
import * as SNAKE from "../snake/snake";
import { getObstaclesFixCoord } from "../obstacles/obstaclesFix";
import { getObstaclesXCoord } from "../obstacles/obstaclesX";
import { getObstaclesYCoord } from "../obstacles/obstaclesY";
import { getFoodCoord } from "../food/food";
import * as BONUS from "../bonuses/bonus";
import { getBonusParams } from "../bonuses/bonusParams";
import { getBonusAvailability } from "../bonuses/bonusAvailableState";
import { addEvent } from "../protocol/protocol";
import { catchBonus } from "../bonuses/bonusCatchingState";
/**
 * Генерирует координаты X и Y текущего бонуса, заносит событие в протокол
 */
function setBonusEvent(): void {
  const booking: number[][] = [];
  if (!getBonusAvailability()) {
    BONUS.setBonusCoord(
      getFreeCell(
        booking.concat(
          getObstaclesFixCoord(),
          getObstaclesXCoord(),
          getObstaclesYCoord(),
          SNAKE.getSnakeBodyCoord(),
          [getFoodCoord()]
        )
      )
    );
    if (getBonusParams()) {
      addEvent({
        name: `set ${getBonusParams().type} bonus`,
        value: BONUS.getBonusCoord()[0] + ":" + BONUS.getBonusCoord()[1],
      });
      catchBonus(false);
    }
  }
}

export default setBonusEvent;
