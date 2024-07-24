import { getSnakeBodyCoord } from "../../../engine/snake/snake";
import snakeHeadDiff from "./snakeHeadDiff";
import snakeHeadSetPosition from "./snakeHeadSetPosition";
import snakeHeadSetRotation from "./snakeHeadSetRotation";
import snakeHeadSetScale from "./snakeHeadSetScale";

let diffX = 0;
let diffY = 0;

function snakeHeadTransform() {
  [diffX, diffY] = snakeHeadDiff(diffX, diffY);
  const pos = snakeHeadSetPosition(diffX, diffY, 0.05);
  const rot = snakeHeadSetRotation();
  const scl = snakeHeadSetScale(
    0.6 + (0.35 * getSnakeBodyCoord().length) / getSnakeBodyCoord().length
  );

  return [pos, rot, scl];
}

export default snakeHeadTransform;
