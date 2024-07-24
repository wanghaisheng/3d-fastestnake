import { Vector3 } from "three";
import { SnakeBodyCoord } from "../../types/snake";
import { getField } from "../../engine/field/fieldPerLevel";

function setSnakePosition(index: number, snake: SnakeBodyCoord): Vector3 {
  const gridSize = getField();
  let newPosition = new Vector3(0, 0, 0);
  if (snake.length !== 0 && snake[index]) {
    const i = snake[index].length !== 0 ? index : index - 1;
    newPosition = new Vector3(
      Math.round(snake[i][0] - gridSize / 2 - 1),
      Math.round(snake[i][1] - gridSize / 2 - 1),
      0
    );
  }
  return newPosition;
}

export default setSnakePosition;
