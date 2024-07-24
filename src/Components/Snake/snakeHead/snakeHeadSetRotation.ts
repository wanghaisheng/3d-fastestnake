import findLastMoveDirection from "../../../engine/protocol/findLastMoveDirection";
import { getSnakeHeadParams } from "../../../engine/snake/snake";
const turn = 22;
let rot: number[] = [turn, 0, turn];

function snakeHeadSetRotation() {
  const directionName = findLastMoveDirection().name;
  const directions = getSnakeHeadParams();
  if (directionName === "X" && directions.snakeHeadStepX === 1)
    rot = [turn, 0, turn * 2.5];
  if (directionName === "X" && directions.snakeHeadStepX === -1)
    rot = [0, turn, turn * 2.5];
  if (
    (directionName === "Y" && directions.snakeHeadStepY === 1) ||
    directionName === ""
  )
    rot = [turn, 0, turn];
  if (directionName === "Y" && directions.snakeHeadStepY === -1)
    rot = [0, turn, turn];

  return rot;
}

export default snakeHeadSetRotation;
