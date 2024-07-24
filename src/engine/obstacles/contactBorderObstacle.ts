/**
 * @module contactBorderObstacle.ts Управляет контактом препятствий с краями поля
 *    @function contactBorderObstacle Изменяет направление движение препятствий
 */
import { obstacleContactProps } from "../../types/obstacle";
import { getField } from "../field/fieldPerLevel";
/**
 * При контакте с краем поля меняет направление движения препятствия
 * @param props объект с аргументами функции, проверяющей контакты препятствий
 * @description
 *  1. Если препятствие касается края поля:
 *      - определяется положение края (верхний/нижний, левый/правый)
 *      - шаг изменяется на 1 или -1 в зависимости от положения края
 * @return измененный шаг препятствия, коснувшегося края поля
 */
function contactBorderObstacle(props: obstacleContactProps): number {
  const { i, twist, coord, step } = props;
  if (coord[i][twist[0]] === 1) step[i] = 1;
  if (coord[i][twist[0]] === getField()) step[i] = -1;

  return step[i];
}

export default contactBorderObstacle;
