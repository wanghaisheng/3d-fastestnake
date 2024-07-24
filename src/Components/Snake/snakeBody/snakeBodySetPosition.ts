function snakeBodySetPosition(
  index: number,
  diffX: number,
  diffY: number,
  gap: number
) {
  const height = 0.3;
  const pos =
    diffX === 0 && diffY === -1
      ? {
          right: index % 2 === 0 ? [gap, 0, height] : [-gap, 0, height],
          left: index % 2 === 0 ? [-gap, 0, height] : [gap, 0, height],
        }
      : diffX === 0 && diffY === 1
      ? {
          right: index % 2 === 0 ? [-gap, 0, height] : [gap, 0, height],
          left: index % 2 === 0 ? [gap, 0, height] : [-gap, 0, height],
        }
      : diffX === -1 && diffY === 0
      ? {
          right: index % 2 === 0 ? [gap, 0, height] : [gap, 0, height],
          left: index % 2 === 0 ? [-gap, 0, height] : [-gap, 0, height],
        }
      : diffX === 1 && diffY === 0
      ? {
          right: index % 2 === 0 ? [-gap, 0, height] : [-gap, 0, height],
          left: index % 2 === 0 ? [gap, 0, height] : [gap, 0, height],
        }
      : {
          right: [gap, 0, height],
          left: [-gap, 0, height],
        };

  return pos;
}

export default snakeBodySetPosition;
