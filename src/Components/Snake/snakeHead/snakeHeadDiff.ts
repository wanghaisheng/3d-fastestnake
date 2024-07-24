import findLastMoveDirection from "../../../engine/protocol/findLastMoveDirection";

function snakeHeadDiff(diffX: number, diffY: number) {
  if (!isNaN(+findLastMoveDirection().value)) {
    diffX =
      findLastMoveDirection().name === "X"
        ? 0
        : +findLastMoveDirection().value * -1;
    diffY =
      findLastMoveDirection().name === "Y"
        ? 0
        : +findLastMoveDirection().value * -1;
  }

  return [diffX, diffY];
}

export default snakeHeadDiff;
