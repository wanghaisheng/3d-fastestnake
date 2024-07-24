function snakeTailSetRotation(diffX: number, diffY: number, turn: number) {
  const rot =
    diffX === 0 && diffY === -1
      ? [turn, 0, turn * 2.5]
      : diffX === 0 && diffY === 1
      ? [0, turn, turn * 2.5]
      : diffX === -1 && diffY === 0
      ? [turn, 0, turn]
      : diffX === 1 && diffY === 0
      ? [0, turn, turn]
      : [turn, 0, turn];

  return rot;
}

export default snakeTailSetRotation;
