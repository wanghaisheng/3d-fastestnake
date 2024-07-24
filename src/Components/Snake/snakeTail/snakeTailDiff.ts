import { getSnakeBodyCoord } from "../../../engine/snake/snake";
import { setDiff } from "../snakeDiff";

function snakeTailDiff(index: number) {
  const diffX =
    getSnakeBodyCoord()[index][1] - getSnakeBodyCoord()[index - 1][1];
  const diffY =
    getSnakeBodyCoord()[index][0] - getSnakeBodyCoord()[index - 1][0];

  setDiff(diffX, diffY);
}

export default snakeTailDiff;
