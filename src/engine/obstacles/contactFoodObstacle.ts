/**
 * @module contactFoodObstacle.ts Управляет контактом препятствий с едой
 *    @function contactFoodObstacle Изменяет направление движение препятствий
 */
import { obstacleContactProps } from "../../types/obstacle";
import { getFoodCoord } from "../food/food";
import obstacleBounce from "./obstacleBounce";
/**
 * При контакте препятствий с едой меняет направление их движения
 * @param props объект с аргументами функции, проверяющей контакты препятствий
 * @returns измененный шаг отскочившего препятствия
 */
function contactFoodObstacle(props: obstacleContactProps): number {
  const { i, step } = props;
  step[i] = obstacleBounce({
    ...props,
    cell: [getFoodCoord()[1], getFoodCoord()[0]],
  });

  return step[i];
}

export default contactFoodObstacle;
