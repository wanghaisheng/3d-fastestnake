/**
 *  @module bonus.ts Управляет бонусами
 *     @function bonus Для каждого вида действующего бонуса меняет настройки игры
 */
import { getBonusParams } from "../bonuses/bonusParams";
import { removeBonus } from "../bonuses/bonusAvailableState";
import { catchBonus } from "../bonuses/bonusCatchingState";
import * as STOP from "../bonuses/bonusSnakeStopsGrowing";
import * as BREAK from "../bonuses/bonusSnakeBreaksObstacles";
import * as CROSS from "../bonuses/bonusSnakeCrossesBorders";
import * as DOUBLE from "../bonuses/bonusDoubleScoresFood";
import * as TIME from "../time/timePerLevel";
import { setLives } from "../lives/lives";
import { setScores } from "../scores/scores";
import { bonusAddTime } from "../bonuses/bonusAddTime";
import { bonusAddLives } from "../bonuses/bonusAddLives";
import { bonusAddScores } from "../bonuses/bonusAddScores";
/**
 * Фиксирует касание бонуса головой змейки, убирает бонус и меняет настройки игры
 */
function bonus(): void {
  catchBonus(true);
  removeBonus();
  switch (getBonusParams().type) {
    case "snakeStopsGrowing":
      STOP.setStopsGrowing(STOP.getStopsGrowing() ? false : true);
      if (!STOP.getStopsGrowing()) catchBonus(false);
      break;
    case "snakeBreaksObstacles":
      BREAK.setBreaksObstacles(BREAK.getBreaksObstacles() ? false : true);
      if (!BREAK.getBreaksObstacles()) catchBonus(false);
      break;
    case "snakeCrossesBorders":
      CROSS.setCrossesBorders(CROSS.getCrossesBorders() ? false : true);
      if (!CROSS.getCrossesBorders()) catchBonus(false);
      break;
    case "doubleScoresFood":
      DOUBLE.setDoubleScoresFood(DOUBLE.getDoubleScoresFood() ? false : true);
      if (!DOUBLE.getDoubleScoresFood()) catchBonus(false);
      break;
    case "addExtraTime":
      TIME.setTimePerLevel(TIME.getTimePerLevel() + +getBonusParams().value);
      bonusAddTime();
      catchBonus(false);
      break;
    case "addExtraLives":
      setLives(+getBonusParams().value);
      bonusAddLives();
      catchBonus(false);
      break;
    case "addExtraScores":
      setScores(+getBonusParams().value);
      bonusAddScores();
      catchBonus(false);
      break;
  }
}

export default bonus;
