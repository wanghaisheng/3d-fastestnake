/**
 * @module obstacleBounce.ts Отрабатывает отскок препятствия от другого объекта
 *    @function obstacleBounce Изменяет шаг отскочившего препятствия на обратный
 */
import { newObstacleStep } from "../../types/obstacle";
/**
 * При касании препятствия с другим объектом изменяет его шаг на обратный
 * @param props аргументы, необходимые для вычисления отскока препятствия
 * @description для переданного функции препятствия:
 *      - определяет направление его движения (вверх/вниз, влево/вправо)
 *      - изменяет шаг на 1 или -1 в зависимости от направления движения
 * @returns измененный шаг отскочившего препятствия
 */
function obstacleBounce(props: newObstacleStep): number {
  const { i, twist, coord, step, cell } = props;
  if (cell) {
    const [posX, posY] = cell;
    if (
      coord[i][twist[0]] + step[i] === [posX, posY][twist[0]] &&
      coord[i][twist[1]] === [posX, posY][twist[1]]
    )
      step[i] = step[i] * -1;
  }
  return step[i];
}

export default obstacleBounce;
