/**
 * @module contactObstacleObstacle.ts Управляет контактом препятствий между собой
 *    @function contactObstacleObstacle Изменяет направление движение препятствий
 */
import { obstacleContactProps } from "../../types/obstacle";
import { getObstaclesFixCoord } from "./obstaclesFix";
import { getObstaclesXCoord } from "./obstaclesX";
import { getObstaclesYCoord } from "./obstaclesY";
import obstacleBounce from "./obstacleBounce";
/**
 * При контакте препятствий меняет направление их движения
 * @param props объект с аргументами функции, проверяющей контакты препятствий
 * @description
 * @returns измененный шаг препятствия, коснувшегося другого препятствия
 */
function contactObstacleObstacle(props: obstacleContactProps): number {
  const { i, step } = props;
  getObstaclesFixCoord().forEach(
    (pos) => (step[i] = obstacleBounce({ ...props, cell: pos }))
  );
  getObstaclesXCoord().forEach(
    (pos) => (step[i] = obstacleBounce({ ...props, cell: pos }))
  );
  getObstaclesYCoord().forEach(
    (pos) => (step[i] = obstacleBounce({ ...props, cell: pos }))
  );

  return step[i];
}

export default contactObstacleObstacle;
