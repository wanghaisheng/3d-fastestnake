function snakeHeadSetPosition(diffX: number, diffY: number, gap: number) {
  const height = 0.3;
  const pos =
    diffX === 0 && diffY === -1
      ? [gap, 0, height]
      : diffX === 0 && diffY === 1
      ? [-gap, 0, height]
      : diffX === -1 && diffY === 0
      ? [gap, -gap, height]
      : diffX === 1 && diffY === 0
      ? [-gap, gap, height]
      : [gap, 0, height];

  return pos;
}

export default snakeHeadSetPosition;
