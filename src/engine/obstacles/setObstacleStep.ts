/**
 * @module setObstacleStep.ts Управляет шагом препятствий
 *    @function setObstacleStep Задает шаг препятствиям с учетом столкновений
 */
import { obstacleContactProps } from "../../types/obstacle";
import contactBonusObstacle from "./contactBonusObstacle";
import contactBorderObstacle from "./contactBorderObstacle";
import contactFoodObstacle from "./contactFoodObstacle";
import contactObstacleObstacle from "./contactObstacleObstacle";
import contactSnakeBodyObstacle from "./contactSnakeBodyObstacle";
/**
 * Проверяет все возможные случаи столкновений препятствия и меняет его шаг
 * @param props параметры препятствия, для которого производится расчет шага
 * @returns шаг препятствия
 */
function setObstacleStep(props: obstacleContactProps): number {
  const { step, i } = props;
  step[i] = contactBorderObstacle(props);
  step[i] = contactFoodObstacle(props);
  step[i] = contactObstacleObstacle(props);
  step[i] = contactBonusObstacle(props);
  step[i] = contactSnakeBodyObstacle(props);

  return step[i];
}

export default setObstacleStep;
