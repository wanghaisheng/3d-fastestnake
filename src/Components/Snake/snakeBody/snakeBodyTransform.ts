import { getSnakeBodyCoord } from "../../../engine/snake/snake";
import { getDiff } from "../snakeDiff";
import snakeBodyDiff from "./snakeBodyDiff";
import snakeBodySetPosition from "./snakeBodySetPosition";
import snakeBodySetRotation from "./snakeBodySetRotation";
import snakeBodySetScale from "./snakeBodySetScale";

function snakeBodyTransform(index: number) {
  snakeBodyDiff(index);
  const [diffX, diffY] = getDiff();
  const pos = snakeBodySetPosition(index, diffX, diffY, 0);
  const rot = snakeBodySetRotation(index, diffX, diffY, 22);
  const scl = snakeBodySetScale(
    0.6 +
      (0.35 * (getSnakeBodyCoord().length - index)) / getSnakeBodyCoord().length
  );

  return [pos, rot, scl];
}

export default snakeBodyTransform;
