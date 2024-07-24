import { SnakeHeadCoord } from "../../types/snake";
import { getField } from "../field/fieldPerLevel";
import { getObstaclesFixCoord } from "../obstacles/obstaclesFix";
import { getObstaclesXCoord } from "../obstacles/obstaclesX";
import { getObstaclesYCoord } from "../obstacles/obstaclesY";
import { getSnakeBodyCoord } from "../snake/snake";
import snakeCoordCompare from "./snakeCoordCompare";

function noMoves(snakeHeadPos: SnakeHeadCoord): boolean {
  const obstacles = [
    ...getObstaclesFixCoord(),
    ...getObstaclesXCoord(),
    ...getObstaclesYCoord(),
  ];
  let prohibitedCells: number[][] = [];
  prohibitedCells = obstacles.concat(getSnakeBodyCoord().slice(5));
  let checkSnakePos: SnakeHeadCoord = { ...snakeHeadPos };
  let contact: boolean;
  const contacts: (number[] | undefined)[] = [];
  let checkMoves = false;
  [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ].forEach((coord) => {
    checkSnakePos = {
      ...snakeHeadPos,
      snakeHeadCoordX: snakeHeadPos.snakeHeadCoordX + coord[0],
      snakeHeadCoordY: snakeHeadPos.snakeHeadCoordY + coord[1],
    };
    prohibitedCells.forEach((pos) => {
      [checkSnakePos, contact] = snakeCoordCompare(checkSnakePos, pos, contact);
      if (contact) contacts.push(pos);
    });
    if (
      checkSnakePos.snakeHeadCoordX < 0 ||
      checkSnakePos.snakeHeadCoordX > getField() + 1 ||
      checkSnakePos.snakeHeadCoordY < 0 ||
      checkSnakePos.snakeHeadCoordY > getField() + 1
    )
      contacts.push([
        checkSnakePos.snakeHeadCoordX,
        checkSnakePos.snakeHeadCoordY,
      ]);
  });
  if (contacts.length > 2) checkMoves = true;

  return checkMoves;
}

export default noMoves;
