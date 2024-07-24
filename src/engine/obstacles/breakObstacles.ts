/**
 *  @module breakObstacles.ts Удаляет препятствия
 *     @function breakObstacles По заданным координатам удаляет препятствия
 */
import * as FIX from "../obstacles/obstaclesFix";
import * as X from "../obstacles/obstaclesX";
import * as Y from "../obstacles/obstaclesY";
/**
 *  Находит среди всех препятствий заданное и удаляет его
 * @param coord Координаты препятствия, которое удаляется
 */
function breakObstacles(coord: number[]): void {
  const [coordX, coordY] = coord;
  FIX.setObstaclesFixCoord(
    FIX.getObstaclesFixCoord().filter(
      (coord) => coord[0] !== coordX || coord[1] !== coordY
    )
  );
  X.setObstaclesXCoord(
    X.getObstaclesXCoord().filter((coord) => {
      if (coord[0] !== coordX || coord[1] !== coordY) {
        return true;
      }
    })
  );
  Y.setObstaclesYCoord(
    Y.getObstaclesYCoord().filter((coord) => {
      if (coord[0] !== coordX || coord[1] !== coordY) {
        return true;
      }
    })
  );
}

export default breakObstacles;
