let diffX = 0;
let diffY = 0;

export function setDiff(newDiffX: number, newDiffY: number) {
  diffX = newDiffX;
  diffY = newDiffY;
}

export function getDiff() {
  return [diffX, diffY];
}
