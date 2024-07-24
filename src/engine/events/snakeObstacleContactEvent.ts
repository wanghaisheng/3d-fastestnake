/**
 * @module snakeObstacleContactEvent.ts Управляет контактом змейки с препятствиями
 *    @function snakeObstacleContactEvent Останавливает змейку у края препятствий
 */
import { SnakeHeadCoord } from "../../types/snake";
import { getObstaclesFixCoord } from "../obstacles/obstaclesFix";
import { getObstaclesXCoord } from "../obstacles/obstaclesX";
import { getObstaclesYCoord } from "../obstacles/obstaclesY";
import snakeCoordCompare from "./snakeCoordCompare";
import { isContact } from "./isContact";
import { getBreaksObstacles } from "../bonuses/bonusSnakeBreaksObstacles";
import isBroken from "./isBroken";
/**
 * Срабатывает при контакте головы змейки с препятствиями
 * @param snakeHead параметры головы змейки
 * @description
 *  1. сравнивает положение головы змейки с препятствиями
 *  2. при контакте запускает обрабатывающую функцию
 * @returns скорректированные при контакте с препятствием параметры головы змейки
 */
function snakeObstacleContactEvent(snakeHead: SnakeHeadCoord): SnakeHeadCoord {
  let contact = false;
  const obstacles = [
    ...getObstaclesFixCoord(),
    ...getObstaclesXCoord(),
    ...getObstaclesYCoord(),
  ];
  obstacles.forEach((pos) => {
    [snakeHead, contact] = snakeCoordCompare(snakeHead, pos, contact);
    if (contact)
      snakeHead = getBreaksObstacles()
        ? isBroken(snakeHead)
        : isContact(snakeHead, "obstacle");
  });

  return snakeHead;
}

export default snakeObstacleContactEvent;
