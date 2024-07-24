/**
 * @module setFoodEvent.ts Генерирует координаты еды
 *    @function setFoodEvent Каждая еда занимает отдельную свободную ячейку
 */
import getFreeCell from "../field/getFreeCell";
import { getCurrentFoodNumber } from "../food/currentFoodNumber";
import { getAmountOfFood } from "../food/amountOfFoodPerLevel";
import * as SNAKE from "../snake/snake";
import { getObstaclesFixCoord } from "../obstacles/obstaclesFix";
import { getObstaclesXCoord } from "../obstacles/obstaclesX";
import { getObstaclesYCoord } from "../obstacles/obstaclesY";
import * as FOOD from "../food/food";
import { addEvent } from "../protocol/protocol";
// import { getField } from "../field/fieldPerLevel";
/**
 * Генерирует координаты X и Y текущей еды, заносит событие в протокол
 */
function setFoodEvent(): void {
  const booking: number[][] = [];
  if (getCurrentFoodNumber() <= getAmountOfFood()) {
    const [foodX, foodY] = getFreeCell(
      booking.concat(
        getObstaclesFixCoord(),
        getObstaclesXCoord(),
        getObstaclesYCoord(),
        SNAKE.getSnakeBodyCoord()
      )
    );
    FOOD.setFoodCoord([foodX, foodY]);
    addEvent({
      name: "set food",
      value: FOOD.getFoodCoord()[0] + ":" + FOOD.getFoodCoord()[1],
    });
  }
}

export default setFoodEvent;
