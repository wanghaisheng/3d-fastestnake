import { getDiff } from "../snakeDiff";
import snakeTailDiff from "./snakeTailDiff";
import snakeTailSetPosition from "./snakeTailSetPosition";
import snakeTailSetRotation from "./snakeTailSetRotation";
import snakeTailSetScale from "./snakeTailSetScale";

function snakeTailTransform(index: number) {
  snakeTailDiff(index);
  const [diffX, diffY] = getDiff();
  const pos = snakeTailSetPosition(diffX, diffY, 0);
  const rot = snakeTailSetRotation(diffX, diffY, 22);
  const scl = snakeTailSetScale(0.6);

  return [pos, rot, scl];
}

export default snakeTailTransform;
