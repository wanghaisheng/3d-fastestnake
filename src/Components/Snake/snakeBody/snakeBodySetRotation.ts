function snakeBodySetRotation(
  index: number,
  diffX: number,
  diffY: number,
  turn: number
) {
  const rot =
    diffX === 0 && diffY === -1
      ? {
          right: index % 2 === 0 ? [turn, 0, turn] : [0, 0, turn],
          left: index % 2 === 0 ? [turn, 0, 0] : [0, 0, 0],
        }
      : diffX === 0 && diffY === 1
      ? {
          right: index % 2 === 0 ? [turn, 0, 0] : [0, turn, turn / 2],
          left: index % 2 === 0 ? [turn, 0, turn] : [turn, turn, 0],
        }
      : diffX === -1 && diffY === 0
      ? {
          right: index % 2 === 0 ? [0, turn, 11] : [turn, 0, turn],
          left: index % 2 === 0 ? [turn, 0, 11] : [turn, 0, 0],
        }
      : diffX === 1 && diffY === 0
      ? {
          right: index % 2 === 0 ? [turn, 0, 11] : [turn, 0, 0],
          left: index % 2 === 0 ? [0, turn, 11] : [0, turn, 0],
        }
      : {
          right: [turn, 0, turn],
          left: [turn, 0, 0],
        };

  return rot;
}

export default snakeBodySetRotation;
